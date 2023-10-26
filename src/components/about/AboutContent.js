import React from "react";
import { Parallax } from "react-scroll-parallax";
import aboutImg from "../../assests/images/about-img.jpeg";

const AboutContent = () => {
  // data for displaying in the about section.
  const datas = [
    { title: "Mail", content: "mandro01@bluebase.com" },
    { title: "Role", content: "Product Designer" },
    { title: "Phone", content: "+1 504-749-5456" },
  ];
  return (
    <div className="about-content">
      <div className="about-left">
        <Parallax translateX={[-10, 20]} className="overlay-shape"></Parallax>
        <img src={aboutImg} alt="About" />
      </div>

      <div className="about-right">
        <Parallax translateX={[-10, 20]} className="about-contact-info">
          <ul>
            {datas.map((data, i) => {
              return (
                <li key={i}>
                  <strong>{data.title}</strong>
                  <span>{data.content}</span>
                </li>
              );
            })}
          </ul>
        </Parallax>
      </div>
    </div>
  );
};

export default AboutContent;

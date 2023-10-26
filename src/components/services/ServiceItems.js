import React from "react";
import service1 from "../../assests/images/service-1.svg";
import service2 from "../../assests/images/service-2.svg";
import service3 from "../../assests/images/service-3.svg";
import { Parallax } from "react-scroll-parallax";
//this component shows the services that you provide.
const ServiceItems = () => {
  const datas = [
    { img: service1, title: "Design" },
    { img: service2, title: "Develop" },
    { img: service3, title: "Branding" },
  ];
  return (
    <div className="service-items-wrap">
      <Parallax className="overlay-shape" translateX={[-10, 20]}></Parallax>
      <div className="services-items">
        {datas.map((data, i) => {
          return (
            <div className="service-item" key={i}>
              <img src={data.img} alt="Service" />
              <h5>{data.title}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceItems;

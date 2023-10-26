import React from "react";
import { Parallax } from "react-scroll-parallax";
const AwardsCard = () => {
  // this is the data for the awards you have received.
  const data = [
    { title: "POTY 2023", content: "SPA Brand Redesign" },
    { title: "WEBSITE OF THE YEAR", content: "Raven Studio" },
    { title: "1ST WINNER PORTFOLIO", content: "GridX" },
    { title: "WINNER PORTFOLIO", content: "UNIQ" },
    { title: "AWWWARDS", content: "Mandro Portfolio" },
  ];
  // this is the data of years corresponding to the awards data.
  const years = [2024, 2023, 2022, 2021, 2020];
  return (
    <Parallax className="awards-wrap" translateX={[-5, 5]}>
      <div className="awards-inner">
        <ul className="awards-lists">
          {data.map((d, i) => {
            return (
              <li key={i}>
                <span>{d.title}</span>
                <h4>{d.content}</h4>
              </li>
            );
          })}
        </ul>

        <div className="awards-years">
          {years.map((year, i) => {
            return <h4 key={i}>{year}</h4>;
          })}
        </div>
      </div>
    </Parallax>
  );
};

export default AwardsCard;

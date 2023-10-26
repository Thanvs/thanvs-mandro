import React from "react";
import blog1 from "../../assests/images/blog-1.jpeg";
import p1 from "../../assests/images/portfolio-1.jpeg";
import p2 from "../../assests/images/portfolio-2.jpeg";
import p3 from "../../assests/images/portfolio-3.jpeg";
import PortfolioItem from "./PortfolioItem";
//this is the wrapper comp of the portfolio items.
const PortfolioItems = ({ onItemClick }) => {
  //this is the data of each portfolio item.
  const data = [
    {
      image: p1,
      title: "Design",
      content: "Tristique",
      body: "Cras pretium metus pulvinar ultricies auctor. In varius purus blandit sem mollis tristique. Curabitur sed lorem vel ligula pulvinar porttitor. Proin sit amet mauris eleifend amet, ullamcorper lacus.Vangelis rich in heavy atoms descended from astronomers dream of the mind's sed lorem vel ligula pulvinar it amet mauris atscras pretium metus.Cras pretium metus pulvinar ultricies auctor. In varius purus blandit sem mollis tristique. Curabitur sed lorem vel ligula pulvinar porttitor. Proin sit amet mauris eleifend amet, ullamcorper lacus. Vangelis rich in heavy atoms descended from astronomers dream of the mind's cras pretium metus.",
    },
    {
      image: p2,
      title: "Develop",
      content: "Tristique",
      body: "Cras pretium metus pulvinar ultricies auctor. In varius purus blandit sem mollis tristique. Curabitur sed lorem vel ligula pulvinar porttitor. Proin sit amet mauris eleifend amet, ullamcorper lacus.Vangelis rich in heavy atoms descended from astronomers dream of the mind's sed lorem vel ligula pulvinar it amet mauris atscras pretium metus.Cras pretium metus pulvinar ultricies auctor. In varius purus blandit sem mollis tristique. Curabitur sed lorem vel ligula pulvinar porttitor. Proin sit amet mauris eleifend amet, ullamcorper lacus. Vangelis rich in heavy atoms descended from astronomers dream of the mind's cras pretium metus.",
    },
    {
      image: p3,
      title: "Branding",
      content: "Tristique",
      body: "Cras pretium metus pulvinar ultricies auctor. In varius purus blandit sem mollis tristique. Curabitur sed lorem vel ligula pulvinar porttitor. Proin sit amet mauris eleifend amet, ullamcorper lacus.Vangelis rich in heavy atoms descended from astronomers dream of the mind's sed lorem vel ligula pulvinar it amet mauris atscras pretium metus.Cras pretium metus pulvinar ultricies auctor. In varius purus blandit sem mollis tristique. Curabitur sed lorem vel ligula pulvinar porttitor. Proin sit amet mauris eleifend amet, ullamcorper lacus. Vangelis rich in heavy atoms descended from astronomers dream of the mind's cras pretium metus.",
    },
    {
      image: blog1,
      title: "Branding",
      content: "Tristique",
      body: "Cras pretium metus pulvinar ultricies auctor. In varius purus blandit sem mollis tristique. Curabitur sed lorem vel ligula pulvinar porttitor. Proin sit amet mauris eleifend amet, ullamcorper lacus.Vangelis rich in heavy atoms descended from astronomers dream of the mind's sed lorem vel ligula pulvinar it amet mauris atscras pretium metus.Cras pretium metus pulvinar ultricies auctor. In varius purus blandit sem mollis tristique. Curabitur sed lorem vel ligula pulvinar porttitor. Proin sit amet mauris eleifend amet, ullamcorper lacus. Vangelis rich in heavy atoms descended from astronomers dream of the mind's cras pretium metus.",
    },
    {
      image: p1,
      title: "Design",
      content: "Tristique",
      body: "Cras pretium metus pulvinar ultricies auctor. In varius purus blandit sem mollis tristique. Curabitur sed lorem vel ligula pulvinar porttitor. Proin sit amet mauris eleifend amet, ullamcorper lacus.Vangelis rich in heavy atoms descended from astronomers dream of the mind's sed lorem vel ligula pulvinar it amet mauris atscras pretium metus.Cras pretium metus pulvinar ultricies auctor. In varius purus blandit sem mollis tristique. Curabitur sed lorem vel ligula pulvinar porttitor. Proin sit amet mauris eleifend amet, ullamcorper lacus. Vangelis rich in heavy atoms descended from astronomers dream of the mind's cras pretium metus.",
    },
    {
      image: p2,
      title: "Develop",
      content: "Tristique",
      body: "Cras pretium metus pulvinar ultricies auctor. In varius purus blandit sem mollis tristique. Curabitur sed lorem vel ligula pulvinar porttitor. Proin sit amet mauris eleifend amet, ullamcorper lacus.Vangelis rich in heavy atoms descended from astronomers dream of the mind's sed lorem vel ligula pulvinar it amet mauris atscras pretium metus.Cras pretium metus pulvinar ultricies auctor. In varius purus blandit sem mollis tristique. Curabitur sed lorem vel ligula pulvinar porttitor. Proin sit amet mauris eleifend amet, ullamcorper lacus. Vangelis rich in heavy atoms descended from astronomers dream of the mind's cras pretium metus.",
    },
  ];

  return (
    <div className="portfolio-items">
      <div className="portfolio-item-col">
        <PortfolioItem data={data[0]} onItemClick={onItemClick} />
        <PortfolioItem data={data[1]} onItemClick={onItemClick} />
      </div>
      <div className="portfolio-item-col">
        <PortfolioItem data={data[2]} onItemClick={onItemClick} />
      </div>
      <div className="portfolio-item-row">
        <PortfolioItem data={data[3]} onItemClick={onItemClick} />
      </div>
      <div className="portfolio-item-col">
        <PortfolioItem data={data[4]} onItemClick={onItemClick} />
      </div>
      <div className="portfolio-item-col">
        <PortfolioItem data={data[5]} onItemClick={onItemClick} />
      </div>
    </div>
  );
};

export default PortfolioItems;

import React, { Fragment, useState, useRef } from "react";
import SectionHead from "../sectionHead/SectionHead";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import PortfolioResume from "./PortfolioResume";
import PortfolioItems from "./PortfolioItems";
//this is the main comp of the portfolio section
const Portfolio = () => {
  //data for the section head.
  const data = [
    {
      title: "Portfolio",
      content0: (
        <Fragment>
          Neque porro quisquam est qui dolorem ipsum quia <br />
          dolor sit amet, consectetur,adipisci velit...
        </Fragment>
      ),
      content: (
        <Fragment>
          A full stack all-around designer that tristique est placerat in massa
          consectetur <br /> quisque lobortis vitae{" "}
          <strong>faucibus diam</strong> ac quam est lorem ipsum. Lorem ipsum
          dolor sit <br /> amet, consectetur adipiscing elit. Viverra tristique
          placerat in massa consectetur <br /> quisque. Nunc ac fames lectus in
          libero aliquet.
        </Fragment>
      ),
    },
  ];

  const [currentItems, setCurrentItems] = useState(2);
  const portfolioItemsRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleLoadMore = () => {
    const boxes = Array.from(
      document.querySelectorAll(".portfolio-items .portfolio-item-col")
    );
    const loadMoreBtn = document.getElementById("load-more-btn");

    loadMoreBtn.innerHTML = "NO MORE";

    for (let i = currentItems; i < currentItems + 2; i++) {
      if (boxes[i]) {
        boxes[i].style.display = "block";
      }
    }

    setCurrentItems(currentItems + 2);
  };

  const handleItemClick = (data) => {
    setSelectedItem(data);
  };

  return (
    <ParallaxProvider>
      <section id="portfolio" className="section" data-num="04">
        <SectionHead data={data} />

        <div className="portfolio-items-wrap" ref={portfolioItemsRef}>
          <Parallax
            className="overlay-shape"
            translateX={[-10, 20]}
            id="portfolio-resume"
          ></Parallax>

          <PortfolioResume selectedItem={selectedItem} />

          <PortfolioItems onItemClick={handleItemClick} />
          <span
            className="load-more-btn loading"
            id="load-more-btn"
            onClick={handleLoadMore}
          >
            Load More
          </span>
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default Portfolio;

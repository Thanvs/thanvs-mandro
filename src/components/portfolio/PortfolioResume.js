import React, { useEffect, useRef } from "react";
import left1 from "../../assests/images/left1.svg";
import blog2 from "../../assests/images/blog-2.jpeg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import blog1 from "../../assests/images/blog-1.jpeg";
//this is the portfolio resume comp that displays info about each portfolio item.
const PortfolioResume = ({ selectedItem }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.sync();
    }
  }, []);

  const undo = () => {
    const portfolioImages = document.getElementsByClassName("portfolio-img");
    for (let i = 0; i <= 5; i++) {
      if (portfolioImages[i]) {
        portfolioImages[i].style.display = "block";
      }
    }
    const loadingElement = document.getElementsByClassName("loading")[0];
    if (loadingElement) {
      loadingElement.style.display = "block";
    }
    const portfolioResumeElement = document.querySelector(".portfolio-resume");
    if (portfolioResumeElement) {
      portfolioResumeElement.style.display = "none";
    }
  };

  const images = [selectedItem?.image, blog1, blog2]; // Add more images if needed

  return (
    <div className="portfolio-resume">
      <nav>
        <button onClick={undo}>
          <img src={left1} alt="" />
        </button>
      </nav>
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 2500,
          pauseOnHover: false,
          perPage: 1,
          perMove: 1,
          arrows: false,
          pagination: false,
          delay: 2500,
          autoRefresh: true,
        }}
        onMoved={() => {
          if (sliderRef.current) {
            sliderRef.current.sync();
          }
        }}
      >
        {images.map((image, index) => (
          <SplideSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={image}
              alt=""
              style={{ width: "500px", height: "300px" }}
            />
          </SplideSlide>
        ))}
      </Splide>
      <div className="resume-content">
        <h2>{selectedItem?.title}</h2>
        <h4>{selectedItem?.content}</h4>
        <p>{selectedItem?.body}</p>
      </div>
    </div>
  );
};

export default PortfolioResume;

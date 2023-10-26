import React from "react";
//this comp is used for displaying the portfolio items in a wrapper.
const PortfolioItem = ({ data, onItemClick }) => {
  const handleItemClick = () => {
    onItemClick(data);
    const portfolioImages = document.getElementsByClassName("portfolio-img");
    for (let i = 0; i <= 5; i++) {
      if (portfolioImages[i]) {
        portfolioImages[i].style.display = "none";
      }
    }
    const loadingElement = document.getElementsByClassName("loading")[0];
    if (loadingElement) {
      loadingElement.style.display = "none";
    }
    const portfolioResumeElement = document.querySelector(".portfolio-resume");
    if (portfolioResumeElement) {
      portfolioResumeElement.style.display = "block";
    }
    const portfolioItemsWrap = document.querySelector(".portfolio-items-wrap");

    if (portfolioItemsWrap) {
      portfolioItemsWrap.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="portfolio-item">
      <div className="portfolio-img" onClick={handleItemClick}>
        <img src={data.image} alt="Portfolio" />
        <div className="portfolio-info">
          <h2>{data.title}</h2>
          <span>{data.content}</span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;

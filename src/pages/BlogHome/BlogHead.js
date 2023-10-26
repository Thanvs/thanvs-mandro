import React from "react";
import { Parallax } from "react-scroll-parallax";
import { useLocation } from "react-router-dom";
//this is the header part of the blog
const BlogHead = () => {
  const location = useLocation();
  const data = location.state?.data;
  return (
    <div>
      <div className="section-head">
        <h2 id="blog-home-con0">{data.title}</h2>
        <div className="category">
          <span className="span1">{data.author}</span>
          <span className="span2">{data.date}</span>
        </div>
      </div>
      <div className="container-wrap">
        <Parallax translateX={[-15, 5]} tag="figure">
          <img className="main-photo block-left" src={data.img} alt="hero" />
        </Parallax>
      </div>
    </div>
  );
};

export default BlogHead;

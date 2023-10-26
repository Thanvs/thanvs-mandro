import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
// import { Link } from "react-router-dom";
import BlogHead from "./BlogHead";
import BlogBody from "./BlogBody";
import BlogContent from "./BlogContent";
import BlogFooter from "./BlogFooter";
// import left from "../../assests/images/left1.svg";
import Menu from "../../components/menu/Menu";
const BlogHome = () => {
  return (
    <ParallaxProvider>
      <div className="container">
        <Menu />
        <div className="blog-home-page-wrapper">
          <section id="blog-home" className="blog-home" data-num="07">
            {/*blog head*/}
            <BlogHead />
            {/*blog body*/}
            <BlogBody />
            {/*blog content*/}
            <BlogContent />
            {/*blog footer*/} {/*OPTIONAL*/}
            <BlogFooter />
          </section>
          {/*Go back to home from blog page*/}
          {/*OPTIONAL*/}
          {/*<Link to="/" className="back-button">
            <img src={left} alt="" />
          </Link> */}
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default BlogHome;

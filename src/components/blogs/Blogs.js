import React, { Fragment, useEffect } from "react";
import SectionHead from "../sectionHead/SectionHead";
import { ParallaxProvider } from "react-scroll-parallax";
import BlogWrap from "./BlogWraps";
// this is the main component of the blog section.
const Blogs = () => {
  useEffect(() => {
    const handleMouseEnter = (index, h4Elements) => {
      h4Elements[index].style.transform = "translateX(-20px)";
    };

    const handleMouseLeave = (index, h4Elements) => {
      h4Elements[index].style.transform = "translateX(0)";
    };

    const liElements = document.querySelectorAll(".blog-lists li");
    const h4Elements = document.querySelectorAll(".blog-years div");

    const handleMouseEnterWrapper = (index) =>
      handleMouseEnter(index, h4Elements);
    const handleMouseLeaveWrapper = (index) =>
      handleMouseLeave(index, h4Elements);

    liElements.forEach((li, index) => {
      li.addEventListener("mouseenter", () => handleMouseEnterWrapper(index));
      li.addEventListener("mouseleave", () => handleMouseLeaveWrapper(index));
    });

    return () => {
      liElements.forEach((li, index) => {
        li.removeEventListener("mouseenter", () =>
          handleMouseEnterWrapper(index)
        );
        li.removeEventListener("mouseleave", () =>
          handleMouseLeaveWrapper(index)
        );
      });
    };
  }, []);
  // this is the data for the section head part of the blog section.
  const data = [
    {
      title: "Blog",
      content0: (
        <Fragment>
          Neque porro quisquam est qui dolorem ipsum quia <br />
          dolor sit amet, consectetur,adipisci velit...
        </Fragment>
      ),
      content: (
        <Fragment>
          A full stack allaround designer that tristique est placerat in massa
          consectetur <br /> quisque lobortis vitae{" "}
          <strong>faucibus diam</strong> ac quam est lorem ipsum. Lorem ipsum
          dolor sit <br /> amet, consectetur adipiscing elit. Viverra tristique
          placerat in massa consectetur <br /> quisque. Nunc ac fames lectus in
          libero aliquet.
        </Fragment>
      ),
    },
  ];
  return (
    <ParallaxProvider>
      <section id="blog" name="blog" className="section">
        {/*section head component*/}
        <SectionHead data={data} />
        {/*Blog Wraps*/}
        <BlogWrap />
      </section>
    </ParallaxProvider>
  );
};

export default Blogs;

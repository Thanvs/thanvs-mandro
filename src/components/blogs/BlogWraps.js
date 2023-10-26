import React from "react";
import { Parallax } from "react-scroll-parallax";
import BlogLists from "./BlogLists";
import BlogYears from "./BlogYears";
import BlogArrows from "./BlogArrows";
const BlogWrap = () => {
  return (
    <Parallax className="blog-wrap" translateX={[-5, 5]}>
      <div className="blog-inner">
        {/*blog lists*/}
        <BlogLists />
        {/*blog years*/}
        <BlogYears />
        {/*blog arrows*/}
        <BlogArrows />
      </div>
    </Parallax>
  );
};

export default BlogWrap;

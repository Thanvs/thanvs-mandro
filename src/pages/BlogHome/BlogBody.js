import React from "react";
import { useLocation } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
//this comp contains the imp data about your comp.
const BlogBody = () => {
  const location = useLocation();
  const data = location.state?.data;
  return (
    <div>
      <div className="section-body">
        <h2 className="content0">{data.blogTitle}</h2>
        {data.blogContent.map((d, i) => {
          return (
            <p className="content" key={i}>
              {d}
            </p>
          );
        })}
      </div>
      {/*This is the quote section if you want you can add or discard*/}
      <Parallax className="blog-home-overlay" translateX={[-5, 5]} tag="figure">
        <h2 className="content0">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur,adipisci velit...
        </h2>
      </Parallax>
    </div>
  );
};

export default BlogBody;

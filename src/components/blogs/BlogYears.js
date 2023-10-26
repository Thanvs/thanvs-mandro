import React from "react";
import { datas } from "./BlogData";
// this component shows the blogyears.
const BlogYears = () => {
  return (
    <div className="blog-years">
      {datas.map((data, i) => {
        return (
          <div className="year-wrapper" key={i}>
            <p>DATE</p>
            <span>{data.blogData.date}</span>
          </div>
        );
      })}
    </div>
  );
};

export default BlogYears;

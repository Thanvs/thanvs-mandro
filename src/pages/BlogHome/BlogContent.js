import React from "react";
import { useLocation } from "react-router-dom";
//this comp gives extra data about your blog
const BlogContent = () => {
  const location = useLocation();
  const data = location.state?.data;
  return (
    <div>
      <div className="section-head">
        {data.blogConclusionContent.map((d, i) => {
          return (
            <p className="content" key={i}>
              {d}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default BlogContent;

import React from "react";
import { Link } from "react-router-dom";
import { datas } from "./BlogData";
// this is the arrows corresponding to the blogs that takes you to the blog page. there's nothing here to be changed as it relies on the blog data.
// clicking the blog title or this takes to the page.
const BlogArrows = () => {
  const renderedItems = datas.map((data, index) => (
    <li key={index}>
      <Link to="/blog-home" state={{ data: data.blogData }}>
        <svg
          width="13"
          height="22"
          viewBox="0 0 13 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.87122"
            width="15.3487"
            height="2.64632"
            transform="rotate(45 1.87122 0)"
            fill="#F9F9F9"
          />
          <rect
            width="15.3487"
            height="2.64632"
            transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 2.14685 21.9976)"
            fill="#F9F9F9"
          />
        </svg>
      </Link>
    </li>
  ));

  return (
    <div className="blog-arrows">
      <ul className="d-flex flex-column justify-content-evenly">
        {renderedItems}
      </ul>
    </div>
  );
};

export default BlogArrows;

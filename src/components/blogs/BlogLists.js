import React from "react";
import { Link } from "react-router-dom";
import { datas } from "./BlogData";
// this component is used for rendering all the blog titles on the home.
const BlogLists = () => {
  return (
    <ul className="blog-lists">
      {datas.map((data, i) => (
        <li key={i}>
          <Link to="/blog-home" state={{ data: data.blogData }}>
            <span>{data.title}</span>
            <h4>{data.content}</h4>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BlogLists;

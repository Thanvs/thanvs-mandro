import React from "react";
// this is the section head that act as an header part for the sections.
const SectionHead = ({ data }) => {
  const { title, content0, content } = data[0];
  return (
    <div className="section-head">
      <h1 className="title">{title}</h1>
      <h2 className="content0">{content0}</h2>
      <p className="content">{content}</p>
    </div>
  );
};

export default SectionHead;

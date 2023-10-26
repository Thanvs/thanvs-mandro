import React, { Fragment } from "react";

//this is the component that is used for displaying the body content of the sections.
const SectionBody = ({ data }) => {
  return (
    <Fragment>
      {data.map((d, i) => {
        return <p key={i}>{d}</p>;
      })}
    </Fragment>
  );
};

export default SectionBody;

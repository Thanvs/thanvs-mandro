import React from "react";

const SectionBody2 = ({ datas }) => {
  return (
    <div>
      {datas.map((data, i) => {
        return (
          <p key={i}>
            <strong>{data.title}</strong>
            {data.content}
          </p>
        );
      })}
    </div>
  );
};

export default SectionBody2;

import React from "react";
import SectionBody2 from "../sectionBody/SectionBody2";
const SkillsBottom = () => {
  const datas = [
    {
      title: "2010 - 2013 ",
      content:
        "Tristique amet volutpat nunc euismod mauris ollicitudin est sempe vulputate id in nullam. Purus tincidunt maga ut turpis eu, eu enim. Nisl porttitor elit risus velit urnase morbit mauris at proin laoreet lobortis urna aliquame.",
    },
    {
      title: "2013 - 2015 ",
      content:
        "Tristique amet volutpat nunc euismod mauris ollicitudin est sempe vulputate id in nullam. Purus tincidunt maga ut turpis eu, eu enim. Nisl porttitor elit risus velit urnase morbit mauris at proin laoreet lobortis urna aliquame.",
    },
    {
      title: "2015 - 2020 ",
      content:
        "Tristique amet volutpat nunc euismod mauris ollicitudin est sempe vulputate id in nullam. Purus tincidunt maga ut turpis eu, eu enim. Nisl porttitor elit risus velit urnase morbit mauris at proin laoreet lobortis urna aliquame.",
    },
    {
      title: "2020 - 2023 ",
      content:
        "Tristique amet volutpat nunc euismod mauris ollicitudin est sempe vulputate id in nullam. Purus tincidunt maga ut turpis eu, eu enim. Nisl porttitor elit risus velit urnase morbit mauris at proin laoreet lobortis urna aliquame.",
    },
  ];
  return (
    <div className="skills-bottom">
      {/*section body component*/}
      <SectionBody2 datas={datas} />
    </div>
  );
};

export default SkillsBottom;

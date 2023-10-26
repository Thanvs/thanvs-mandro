import React from "react";
import SkillsLists from "./SkillsLists";
import { Parallax } from "react-scroll-parallax";
//this is the skills info component for providing details about your skills.
const SkillsInfos = () => {
  return (
    <Parallax className="skills-infos" translateX={[5, -5]}>
      <div className="skills-left-info">
        <h4>NAM ULTRICES</h4>
        <p>
          Tristique amet volutpat nunc dism euismod mauris ollicitudin est asp
          sempe vulputate id in nullm. Purus tincidunt maga ut turpis eu, euse
          enim.
        </p>
        <p>
          Nisl porttitor elit risus velito urnase morbit mauris at propingi
          laoreet lobortis urna aliquame. Mauris at propingi laoreet lobortis
          urna asa aliquame.
        </p>
      </div>
      {/*skills lists*/}
      <SkillsLists />
    </Parallax>
  );
};

export default SkillsInfos;

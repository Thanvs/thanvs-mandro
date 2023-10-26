import React, { Fragment } from "react";
import SectionHead from "../sectionHead/SectionHead";
import SkillsInfos from "./SkillsInfos";
import SkillsBottom from "./SkillsBottom";
import { ParallaxProvider } from "react-scroll-parallax";
// this is the skills main component.
const Skills = () => {
  // data for the section head.
  const data = [
    {
      title: "Skills",
      content0: (
        <Fragment>
          Neque porro quisquam est qui dolorem ipsum quia <br />
          dolor sit amet, consectetur,adipisci velit...
        </Fragment>
      ),
      content: (
        <Fragment>
          A full stack allaround designer that tristique est placerat in massa
          consectetur <br /> quisque lobortis vitae{" "}
          <strong>faucibus diam</strong> ac quam est lorem ipsum. Lorem ipsum
          dolor sit <br /> amet, consectetur adipiscing elit. Viverra tristique
          placerat in massa consectetur <br /> quisque. Nunc ac fames lectus in
          libero aliquet.
        </Fragment>
      ),
    },
  ];
  return (
    <ParallaxProvider>
      <section id="skills" className="section" data-num="06">
        {/*section head*/}
        <SectionHead data={data} />
        {/*skills infos*/}
        <SkillsInfos />
        {/*skills bottom*/}
        <SkillsBottom />
      </section>
    </ParallaxProvider>
  );
};

export default Skills;

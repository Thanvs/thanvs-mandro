import React, { Fragment } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import SectionHead from "../sectionHead/SectionHead";
import AboutContent from "./AboutContent";
import AboutBottom from "./AboutBottom";
// this is the main about component.
const About = () => {
  // this data is provided for the section head of the about section
  const data = [
    {
      title: "About",
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
      <section id="about" className="section" data-num="02">
        {/*section head component*/}
        <SectionHead data={data} />
        {/*about content*/}
        <AboutContent />
        {/*about bottom*/}
        <AboutBottom />
      </section>
    </ParallaxProvider>
  );
};

export default About;

import React, { Fragment } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import SectionHead from "../sectionHead/SectionHead";
import ServiceItems from "./ServiceItems";
import ServiceBottom from "./ServiceBottom";
// this is the service setions main component
const Services = () => {
  // data for the section head
  const data = [
    {
      title: "Services",
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
      <section id="services" className="section" data-num="03">
        {/*section head*/}
        <SectionHead data={data} />
        {/*service items*/}
        <ServiceItems />
        {/*service Bottom*/}
        <ServiceBottom />
      </section>
    </ParallaxProvider>
  );
};

export default Services;

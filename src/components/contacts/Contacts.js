import React, { Fragment } from "react";
import SectionHead from "../sectionHead/SectionHead";
import { ParallaxProvider } from "react-scroll-parallax";
import ContactWrap from "./ContactWrap";
// this is the contact section component
const Contacts = () => {
  // data for the section head part of the contact section.
  const data = [
    {
      title: "Contact",
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
      <section id="contact" className="section" data-num="07">
        {/*section head*/}
        <SectionHead data={data} />
        {/*contact wrap*/}
        <ContactWrap />
      </section>
    </ParallaxProvider>
  );
};

export default Contacts;

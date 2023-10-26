import React, { Fragment, useEffect } from "react";
import SectionHead from "../sectionHead/SectionHead";
import AwardsCard from "./AwardsCard";
import { ParallaxProvider } from "react-scroll-parallax";
// this is the main component of the awards section.
const Awards = () => {
  useEffect(() => {
    const liElements = document.querySelectorAll(".awards-lists li");
    const h4Elements = document.querySelectorAll(".awards-years h4");

    const handleMouseEnter = (index) => {
      h4Elements[index].style.transform = "translateX(-20px)";
      h4Elements[index].style.color = "#d5c0a4";
    };

    const handleMouseLeave = (index) => {
      h4Elements[index].style.transform = "translateX(0)";
      h4Elements[index].style.color = "#fff";
    };

    liElements.forEach((li, index) => {
      li.addEventListener("mouseenter", () => handleMouseEnter(index));
      li.addEventListener("mouseleave", () => handleMouseLeave(index));
    });

    return () => {
      liElements.forEach((li, index) => {
        li.removeEventListener("mouseenter", () => handleMouseEnter(index));
        li.removeEventListener("mouseleave", () => handleMouseLeave(index));
      });
    };
  }, []);

  // this is the data that is needed to change the head part of the award section.
  const data = [
    {
      title: "Awards",
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
      <section id="awards" className="section" data-num="05">
        {/*section head component*/}
        <SectionHead data={data} />
        {/*awards card*/}
        <AwardsCard />
      </section>
    </ParallaxProvider>
  );
};

export default Awards;

import React, { useEffect } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import heroImg from "../../assests/images/hero-img.png";
import down from "../../assests/images/down.svg";
import { HashLink } from "react-router-hash-link";
// this is the home or the hero component that gives the hero information.
const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const y1 = document.getElementById("scroll-down");
      let x = window.pageYOffset;
      if (x >= 254) {
        y1.style.opacity = 0;
      } else {
        y1.style.opacity = 1;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <ParallaxProvider>
        <section id="home" className="section" data-num="01">
          <div className="container-wrap">
            <Parallax translateX={[-15, 20]} tag="figure">
              <img className="main-photo block-left" src={heroImg} alt="hero" />
            </Parallax>
            <div className="home-content">
              <h1 className="entry-title">
                Hello
                <br />
                I’m <span>Steve</span>
                <br />
                Richardson.
              </h1>
              <p>
                A full stack allaround designer that tristique est placerat in
                <br /> massa consectetur quisque lobortis vitae faucibus diam ac
                <br />
                quam est lorem ipsum.
              </p>
            </div>
          </div>

          <HashLink
            to="#about"
            id="scroll-down"
            className="scroll-down slow-scroll"
          >
            <img src={down} alt="Icon" />
          </HashLink>
        </section>
      </ParallaxProvider>
    </div>
  );
};

export default Home;

import React from "react";
import Menu from "../components/menu/Menu";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Services from "../components/services/Services";
import Portfolio from "../components/portfolio/Portfolio";
import Awards from "../components/awards/Awards";
import Skills from "../components/skills/Skills";
import Blogs from "../components/blogs/Blogs";
import Contacts from "../components/contacts/Contacts";
//this is the main component for holding all the section components.
const Main = () => {
  return (
    <div className="container">
      <div className="page-wrapper">
        {/*menu*/}
        <Menu />
        {/*home*/}
        <Home />
        {/*about*/}
        <About />
        {/*services*/}
        <Services />
        {/*portfolio*/}
        <Portfolio />
        {/*awards*/}
        <Awards />
        {/*skills*/}
        <Skills />
        {/*blogs*/}
        <Blogs />
        {/*contacts*/}
        <Contacts />
      </div>
    </div>
  );
};

export default Main;

import React, { Fragment, useEffect, useRef, useState } from "react";
import logo from "../../assests/images/logo.svg";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
//this is the menu comp that contains the links and functions for the menu.
const Menu = () => {
  const location = useLocation();
  const showNavCount = location.pathname === "/";
  const sectionRefs = useRef([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const setActiveMenuItem = () => {
    const sections = sectionRefs.current;
    const navItems = Array.from(document.querySelectorAll(".nav-menu ul li"));

    let currentSectionIndex = -1;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom > 150) {
        currentSectionIndex = index;
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("current");
    });

    if (currentSectionIndex !== -1) {
      navItems[currentSectionIndex].classList.add("current");
    }

    setCurrentSectionIndex(currentSectionIndex);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setActiveMenuItem();
    };

    window.addEventListener("scroll", handleScroll);
    const sections = Array.from(document.querySelectorAll(".section"));
    sectionRefs.current = sections;

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setActiveMenuItem();
  }, [currentSectionIndex]);

  return (
    <Fragment>
      <div
        className={`show-hide-nav-wrap ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="show-hide-nav-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`nav-wrapper ${isMenuOpen ? "active" : ""}`}>
        <div className="nav-container">
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
          </Link>
          <nav className="nav-menu">
            <ul className="nav-list">
              <li>
                <Link to="/#home" smooth={true} onClick={handleMenuLinkClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  smooth={true}
                  onClick={() => {
                    handleMenuLinkClick();
                    setActiveMenuItem();
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/#services"
                  smooth={true}
                  onClick={() => {
                    handleMenuLinkClick();
                    setActiveMenuItem();
                  }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/#portfolio"
                  smooth={true}
                  onClick={() => {
                    handleMenuLinkClick();
                    setActiveMenuItem();
                  }}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/#awards"
                  smooth={true}
                  onClick={() => {
                    handleMenuLinkClick();
                    setActiveMenuItem();
                  }}
                >
                  Awards
                </Link>
              </li>
              <li>
                <Link
                  to="/#skills"
                  smooth={true}
                  onClick={() => {
                    handleMenuLinkClick();
                    setActiveMenuItem();
                  }}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/#blog"
                  smooth={true}
                  onClick={() => {
                    handleMenuLinkClick();
                    setActiveMenuItem();
                  }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/#contact"
                  smooth={true}
                  onClick={() => {
                    handleMenuLinkClick();
                    setActiveMenuItem();
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {showNavCount && (
          <span className="nav-count">0{currentSectionIndex + 1}</span>
        )}
      </div>
    </Fragment>
  );
};

export default Menu;

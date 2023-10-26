import "bootstrap/dist/css/bootstrap.min.css";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

//contains all the styles and responsive ones.
import "./App.css";

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Main from "./pages/Main";
import Loader from "./components/loader/Loader";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogHome from "./pages/BlogHome/BlogHome";
//App comp that has routing btw main and blog and loader
const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      if (pathname === "/blog-home") {
        window.scrollTo(0, 0);
      }
    }, [pathname]);

    return null;
  };

  return (
    <div className="App">
      {/*loader function*/}
      <Loader />
      <Router>
        <ScrollToTop />
        <Routes>
          {/*main page*/}
          <Route exact path="/*" element={<Main />} />
          <Route path="/blog-home" element={<BlogHome />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

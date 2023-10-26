import React, { useEffect } from "react";
// this is the loader component that provides the loading animation.
const Loader = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const loaderWrapper = document.getElementById("loftloader-wrapper");
      if (loaderWrapper) {
        loaderWrapper.classList.add("off");
      }
    }, 3400);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div id="loftloader-wrapper" className="mandro-imgloading">
      <div className="loader-inner">
        <div id="loader">
          <h1 id="bg-loader">
            mandro<span>.</span>
          </h1>
          <h1 id="fg-loader">
            mandro<span>.</span>
          </h1>
        </div>
      </div>
      <div className="loader-section section-fade"></div>
    </div>
  );
};

export default Loader;

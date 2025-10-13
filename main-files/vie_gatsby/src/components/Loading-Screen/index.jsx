import React from "react";
import loadingPace from "common/loadingPace";
import appData from "data/app.json";

const LoadingScreen = () => {

  React.useEffect(() => {
    let bodyEl = document.querySelector("body");

    if (appData.showLoading) {
      loadingPace();
    } else {
      // Ensure body is scrollable when loading is disabled
      bodyEl.classList.remove("hideX");
      bodyEl.style.overflow = "visible";
      bodyEl.style.overflowX = "hidden";
    }
  }, []);

  return (
    <>
      <div className={`${appData.showLoading === true ? "showX" : "hideX"}`} style={{ display: 'none' }}>
        <div className="loading">
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </div>
        <div id="preloader"></div>
      </div>
    </>
  );
};

export default LoadingScreen;

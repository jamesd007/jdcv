import React, { useState, useEffect } from "react";
import GetCurrentLoc from "./Weather/GetCurrentLoc";
import Gallery from "./gallery/Gallery";
import "./styles/DetailedCV.css";
import { Link } from "react-router-dom";
import "./styles/Main.css";
// import GalleryX from "./gallery/GalleryX";

const SkillsShow = () => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Footer = () => {
    return (
      <div
        style={{
          width: "100%",
          maxWidth: `{screenWidth}px`,
          position: "absolute",
          bottom: "4px",
          left: "0px",
          backgroundColor: "lightsteelblue",
          // gridColumn:screenWidth<=550
          // ? {}
          // : screenWidth<=1000
          // ? "1 / 3"
          // : "2"
        }}
      >
        <Link to="/" className="footerLink">
          /Home
        </Link>
        {screenWidth <= 550 && (
          <Link to="/detailedcv" className="footerLink">
            Detailed CV
          </Link>
        )}
      </div>
    );
  };

  return (
    <div
      className="container"
      style={{
        height:
          screenWidth <= 1000
            ? `${screenHeight}px`
            : // "100vh"
              `${screenHeight - 200}px`,
        // borderLeft: screenWidth>1000 && '1px solid darkgrey'
      }}
    >
      <div>
        <h2>Some things...</h2>
        <GetCurrentLoc />
      </div>
      {/* <div>
        Quote for the moment
      </div>
      <div>
        Today's headlines
      </div> */}
      <div>
        {/* <h3>Loadshedding</h3> */}
        {/* <Loadshedding/> */}
      </div>
      <div>
        <Gallery />
        {/* <GalleryX /> */}
      </div>
      {screenWidth <= 1000 && <Footer />}
    </div>
  );
};
export default SkillsShow;

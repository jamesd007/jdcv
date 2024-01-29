import React, { useState, useEffect } from "react";
import GetCurrentLoc from "./Weather/GetCurrentLoc";
import { Link } from "react-router-dom";
import "./styles/Main.css";
import GalleryY from "./gallery/GalleryY";
import Loadshedding from "./Loadshedding/Loadshedding";
import LoadsheddingEscom from "./Loadshedding/LoadSheddingEscom";
import GetQuotes from "./GetQuotes";

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
          position: "fixed", // Change to fixed
          bottom: "0px", // Adjust position to bottom
          backgroundColor: "lightsteelblue",
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
        position: "relative",
        height:
          screenWidth <= 1000
            ? `${screenHeight - 25}px`
            : `${screenHeight - 180}px`,
      }}
    >
      <div>
        <h2>Some things...</h2>
        <GetCurrentLoc />
      </div>
      {/* <div>
        Today's headlines
      </div> */}
      {/* <div>
        <LoadsheddingEscom />
      </div> */}
      {/* <div>
        <Loadshedding />
      </div> */}
      <div>
        <GalleryY />
      </div>
      <div>
        <GetQuotes />
      </div>
      {screenWidth <= 1000 && <Footer />}
    </div>
  );
};
export default SkillsShow;

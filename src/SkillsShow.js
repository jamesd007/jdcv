import React, { useRef, useState, useEffect } from "react";
import GetCurrentLoc from "./Weather/GetCurrentLoc";
import { Link } from "react-router-dom";
import "./styles/Main.css";
import GalleryY from "./gallery/GalleryY";
import Loadshedding from "./Loadshedding/Loadshedding";
import LoadsheddingEscom from "./Loadshedding/LoadSheddingEscom";
import GetQuotes from "./GetQuotes";
import { head } from "lodash";

const SkillsShow = (props) => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [headsHeight, setHeadsHeight] = useState(
    props?.headsHeight ? props?.headsHeight : 200
  );
  console.log("tedtestPP props=", props);
  const [containerHeight, setContainerHeight] = useState("auto");
  // useEffect(() => {
  //   function handleResize() {
  //     setScreenHeight(window.innerHeight);
  //     setScreenWidth(window.innerWidth);
  //   }
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

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
        {screenWidth <= 768 && (
          <Link to="/detailedcv" className="footerLink">
            Detailed CV
          </Link>
        )}
      </div>
    );
  };
  const updateContainerHeight = () => {
    const container = document.querySelector(".container");
    if (container) {
      let newHeight;
      if (screenWidth <= 768) newHeight = screenHeight - 45;
      else newHeight = screenHeight - headsHeight - 45;
      setContainerHeight(`${newHeight}px`);
    }
  };
  useEffect(() => {
    updateContainerHeight();
  }, [screenWidth, screenHeight, headsHeight]);

  const handleResize = () => {
    // Update container height when child components resize
    updateContainerHeight();
  };

  useEffect(() => {
    console.log("tedtestG SS screenHeight=", screenHeight);
    console.log("tedtestG SS headsHeight=", headsHeight);
    console.log("tedtestG SS screenwidth=", screenWidth);
    console.log("tedtestGG containerHeight=", containerHeight);
  }, [screenHeight, headsHeight, screenWidth, containerHeight]);

  return (
    <div
      className="container"
      style={{
        position: "relative",
        maxHeight: `${screenHeight - 45}px`,
        height:
          screenWidth <= 768
            ? `${screenHeight - 45}px`
            : `${screenHeight - headsHeight - 45}px`,
      }}
      // style={{
      //   position: "relative",
      //   height:
      //     screenWidth <= 1000
      //       ? `${screenHeight - 55}px`
      //       : `${screenHeight - 180}px`,
      // }}
    >
      <div>
        <h2>Some things...</h2>
        <GetCurrentLoc onResize={handleResize} />
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
        <GalleryY onResize={handleResize} />
      </div>
      <div>
        <GetQuotes />
      </div>
      {screenWidth <= 1000 && <Footer />}
    </div>
  );
};
export default SkillsShow;

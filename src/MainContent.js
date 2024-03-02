// MainContent.js
import React, { useState, useEffect, useRef } from "react";
import Summary from "./Summary";
import DetailedCV from "./DetailedCV";
import SkillsShow from "./SkillsShow";
import JDPic from "./JDPic";
import { Link } from "react-router-dom";
import "./styles/Main.css";
import MoonRising from "./MoonRising";

const MainContent = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const maxCol1Size = 300;
  const maxCol2Size = 700;
  const maxCol3Size = 300;
  const [headHgt, setHeadHgt] = useState(0);
  const headerContainerRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Header = (props) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      if (headerContainerRef?.current)
        setHeadHgt(headerContainerRef?.current?.clientHeight);
    }, [headerContainerRef?.current?.clientHeight]);

    return (
      <div
        ref={headerContainerRef}
        style={{
          width: "100%",
          height: "fit-content",
          fontSize: "3rem",
          gridColumn:
            screenWidth <= 768 ? {} : screenWidth <= 1000 ? "1 / 3" : "2",
        }}
      >
        <MoonRising />
      </div>
    );
  };

  const Footer = () => {
    return (
      <div
        className="footerMenu"
        style={{
          maxWidth: `{screenWidth/2}px`,
          gridColumn:
            screenWidth <= 768 ? {} : screenWidth <= 1000 ? "1 / 3" : "2",
        }}
      >
        {screenWidth <= 768 && (
          <Link to="/detailedcv" className="footerLink">
            Detailed CV
          </Link>
        )}
        <Link to="/skillsshow" className="footerLink">
          Some other things
        </Link>
      </div>
    );
  };

  useEffect(() => {
    console.log("tedtestG app screenHeight=", screenHeight);
    console.log("tedtestG app headHgt=", headHgt);
    console.log("tedtestG app screenwidth=", screenWidth);
  }, [screenHeight, headHgt, screenWidth]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5px",
      }}
    >
      <div
        style={{
          width: "90%",
          padding: "0 5px 0 5px",
          maxWidth: `${maxCol1Size + maxCol2Size + maxCol3Size}px`,
          display: screenWidth <= 768 ? "" : "grid",
          gridTemplateColumns:
            screenWidth <= 768
              ? {}
              : screenWidth <= 1000
              ? screenWidth <= 800
                ? "1fr 1fr"
                : `${maxCol1Size}px 1fr`
              : screenWidth <= 1200
              ? `minmax(0, ${maxCol1Size}px) minmax(0, ${maxCol2Size}px) minmax(0, ${maxCol3Size}px)`
              : `minmax(0, ${maxCol1Size}px) minmax(0, ${maxCol2Size}px) minmax(0, ${maxCol3Size}px)`,
        }}
      >
        <div
          style={{
            position: screenWidth <= 1000 ? "absolute" : "relative",
            left:
              screenWidth <= 768 ? "10px" : screenWidth <= 1000 ? "18px'" : {},
            zIndex: "10",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gridColumn:
              screenWidth <= 768 ? {} : screenWidth <= 1000 ? "1" : "1",
          }}
        >
          <JDPic />
        </div>
        <Header />
        <div
          style={{
            width: "100%",
            gridColumn: screenWidth <= 768 ? {} : "1",
          }}
        >
          <Summary headsHeight={headHgt} />
        </div>
        {screenWidth > 768 && (
          <div
            style={{
              width: "100%",
              gridColumn: screenWidth <= 768 ? {} : "2",
            }}
          >
            <DetailedCV headsHeight={headHgt} />
          </div>
        )}
        {screenWidth > 1000 && <SkillsShow headsHeight={headHgt} />}
        {screenWidth <= 1000 && <Footer />}
      </div>
    </div>
  );
};

export default MainContent;

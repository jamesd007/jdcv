// MainContent.js
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import MoonRising from "./MoonRising";
import Summary from "./Summary";
import DetailedCV from "./DetailedCV";
import SkillsShow from "./SkillsShow";
import JDPic from "./JDPic";
import { Link, useNavigate } from "react-router-dom";
import "./styles/Main.css";
import Header from "./Header";

const MainContent = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const maxCol1Size = 300;
  const maxCol2Size = 700;
  const maxCol3Size = 300;
  const navigate = useNavigate();
  const [headHgt, setHeadHgt] = useState(0);

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

  // const Header=()=>{
  // return(
  //   <div
  //     style={{
  //       width:"100%",
  //       height:"fit-content",
  //       fontSize:"3rem",
  //       gridColumn:screenWidth<=550
  //         ? {}
  //         : screenWidth<=1000
  //           ? "1 / 3"
  //           :  "2"
  //     }}>
  //       <MoonRising/>
  //   </div>
  // )
  // }

  const handleNavigation = () => {
    navigate("/");
  };

  const Footer = () => {
    return (
      <div
        style={{
          position: "absolute",
          bottom: "4px",
          width: "100%",
          maxWidth: `{screenWidth/2}px`,
          backgroundColor: "lightsteelblue",
          gridColumn:
            screenWidth <= 550 ? {} : screenWidth <= 1000 ? "1 / 3" : "2",
        }}
      >
        {screenWidth <= 550 && (
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
          width: "100%",
          padding: "0 5px 0 5px",
          maxWidth: `${maxCol1Size + maxCol2Size + maxCol3Size}px`,
          display: screenWidth <= 550 ? "" : "grid",
          gridTemplateColumns:
            screenWidth <= 550
              ? {}
              : screenWidth <= 1000
              ? screenWidth <= 800
                ? "1fr 1fr"
                : `${maxCol1Size}px 1fr`
              : screenWidth <= 1200
              ? `minmax(0, ${maxCol1Size}px) minmax(0, ${maxCol2Size}px) minmax(0, ${maxCol3Size}px)`
              : // ? "repeat(3, 1fr)"
                `minmax(0, ${maxCol1Size}px) minmax(0, ${maxCol2Size}px) minmax(0, ${maxCol3Size}px)`,
        }}
      >
        <div
          style={{
            position: screenWidth <= 1000 ? "absolute" : "relative",
            // top:screenWidth<=1000
            //   && "18px",
            left:
              screenWidth <= 550 ? "10px" : screenWidth <= 1000 ? "18px'" : {},
            zIndex: "10",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gridColumn:
              screenWidth <= 550 ? {} : screenWidth <= 1000 ? "1" : "1",
          }}
        >
          <JDPic />
        </div>
        <Header callback={(val) => setHeadHgt(val)} />
        <div
          style={{
            width: "100%",
            gridColumn: screenWidth <= 550 ? {} : "1",
          }}
        >
          <Summary />
        </div>
        {screenWidth > 550 && (
          <div
            style={{
              width: "100%",
              gridColumn: screenWidth <= 550 ? {} : "2",
            }}
          >
            <DetailedCV headsHeight={headHgt} testHGT={screenHeight} />
          </div>
        )}
        {/* <div
    style={{
      width:"100%",
      gridColumn:screenWidth<=550
      ? {}
      : screenWidth<=1000
        ? "1 / 3"
        : "3"
    }}> */}
        {screenWidth > 1000 && <SkillsShow />}
        {screenWidth <= 1000 && <Footer />}
        {/* </div> */}

        {/* {screenWidth>1000 &&<Footer  //tedtest to be determined
  style={{position:"relative"}}/>} */}
      </div>
    </div>
  );
};

export default MainContent;

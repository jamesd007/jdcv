import React, { useState, useEffect } from "react";
import moon from "./images/moon.png";
import bluetrees from "./images/bluetrees.png";
import "./styles/MoonRising.css";
import { isMobileTablet } from "./utils/utilities";

const MoonRising = () => {
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

  // const containerStyle = {
  //   position: 'relative',
  //   border:"1px solid black",
  //   overflow:"hidden",
  //   width: '100%',
  //   height: `${screenHeight*0.2}px`,
  //   backgroundColor:"#1f26c8"
  // };
  const skyStyle = {
    position: "absolute",
    top: "0px",
    left: "0px",
    height: `${window.innerHeight * 0.2 * 0.5}px`,
    width: "100%",
    backgroundColor: "#464efe",
    overflow: "hidden",
    animation: "skyTransition 45s linear", // Use a longer duration for a slower transition
  };
  // const skyStyle = {
  //   position: 'absolute',
  //   top:"0px",
  //   left:"0px",
  //   height:`${screenHeight*0.2*0.5}px`,
  //   width:"100%",
  //   // border:"1px solid black",
  //   overflow:"hidden",
  //   // backgroundColor:"#000000",
  //   animation: 'skyOverlayChange 45s linear',
  // };

  const moonOverlayStyle = {
    position: "absolute",
    top: "-90%",
    right:
      window.innerWidth <= 768
        ? "12%"
        : window.innerWidth < 1000
        ? "12%"
        : "20%",
    width: "100px",
    height: "100px",
    backgroundColor: "rgba(255, 255, 255, 0)",
    borderRadius: "50%",
    zIndex: 5,
    animation: "moonOverlayChange 45s linear 1s",
  };

  // const treeStyle = {
  //   position: 'relative',
  //   top: 0,
  //   left: 0,
  //   width:"100%",
  //   height: `${screenHeight*0.2}px`,
  //   height: '100%',
  //   backgroundImage: `url(${bluetrees})`, // Use template literals to include the image variable
  //   backgroundSize: 'cover',
  //   zIndex: 3, // The tree should be on top
  // };

  // const moonStyle = {
  //   position: 'absolute',
  //   top: '-130%',
  //   right: '12%',
  //   width: '100px',
  //   height: '100px',
  //   backgroundImage: `url(${moon})`,
  //   backgroundSize: 'cover',
  //   animation: 'moonRising 10s linear ',
  //   zIndex: 5,
  // };

  return (
    <div
      style={{
        position: "relative",
        border: "1px solid black",
        overflow: "hidden",
        width: "100%",
        height: `${window.innerHeight * 0.2}px`,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: screenWidth <= 1000 ? "6rem" : "0",
          bottom: "0.2rem",
          fontSize: screenWidth <= 1000 ? "1.8rem" : "1.8rem",
          fontWeight: "bold",
          marginLeft: screenWidth < 768 ? "1.5rem" : "1rem",
          zIndex: screenWidth < 768 ? "99" : "9",
          color:
            screenWidth < 768
              ? "darkkhaki"
              : screenWidth <= 1000
              ? "darkkhaki"
              : "lightsteelblue",
        }}
      ></div>
      <div style={skyStyle}></div>
      {/* <div //sky
        style={{
          position:"absolute",
          top:"0",
          left:"0",
          width:"100%",
          height:`${screenHeight*0.2*0.5}px`,
          backgroundColor:"#050a89",
          zIndex:"1",
          // animation:'lighten 45s linear '
        }}>
      </div> */}

      <div //ground
        style={{
          position: "absolute",
          top: `${window.innerHeight * 0.2 * 0.5}px`,
          left: "0",
          width: "100%",
          height: `${window.innerHeight * 0.2 * 0.5}px`,
          backgroundColor: "#1f26c8",
          zIndex: "7",
        }}
      ></div>
      <img
        className="tree-image"
        style={{
          height: "auto",
          width: isMobileTablet()
            ? `${screenWidth * 0.8}px`
            : window.innerWidth <= 768
            ? `${screenWidth * 0.7}px`
            : window.innerWidth < 1000
            ? `${screenWidth * 0.6}px`
            : window.innerWidth < 1300
            ? `${screenWidth * 0.5}px`
            : `${screenWidth * 0.4}px`,
          right: isMobileTablet()
            ? "2%"
            : window.innerWidth <= 768
            ? "8%"
            : window.innerWidth < 1000
            ? "4%"
            : "8%",
        }}
        src={bluetrees}
        alt="trees"
      ></img>
      {/* <div //road
        >
        <img
          style={{
            position:"absolute",
            top:"0",
            left:"0",
            height:"100%",
            width:"100%",
            zIndex:"9",
            animation: 'fadeIn 45s linear ', // Customize the animation properties
          }}
          src={freehandRoad}
          alt="freehand road"
          >
        </img>
      </div> */}
      {/* <div> //house
        <img
        style={{
          position:"absolute",
          top:"0",
          left:"0",
          height:"100%",
          width:"100%",
          zIndex:"9",
          animation: 'fadeIn 45s linear ', // Customize the animation properties
        }}
        src={house}
        alt="house">
        </img>
      </div> */}
      <div //moon
      >
        <img
          className="moon-image"
          style={{
            right:
              window.innerWidth <= 768
                ? "12%"
                : window.innerWidth < 1000
                ? "12%"
                : "20%",
          }}
          src={moon}
          alt="moon"
        ></img>
      </div>
      <div style={moonOverlayStyle}></div>
    </div>
  );
};

export default MoonRising;

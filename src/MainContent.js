import React, { useState, useEffect, useContext } from "react";
import Summary from "./components/summary/Summary";
import DetailedCV from "./components/detailedcv/DetailedCV";
import OtherThings from "./components/otherthings/OtherThings";
import "./styles/Main.css";
import { HeaderContext } from "./contexts/HeaderContext";

const MainContent = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const maxCol1Size = 300;
  const maxCol2Size = 700;
  const maxCol3Size = 300;

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
          width: screenWidth > 768 ? "90%" : "100%",
          padding: "0 5px 0 5px",
          maxWidth:
            screenWidth <= 768
              ? `${window.innerWidth}px`
              : `${maxCol1Size + maxCol2Size + maxCol3Size}px`,
          display: screenWidth <= 768 ? "" : "grid",
          gridTemplateColumns:
            screenWidth <= 768
              ? {}
              : screenWidth <= 1000
              ? screenWidth <= 800
                ? "1fr 1fr"
                : `${maxCol1Size}px 1fr`
              : screenWidth <= 1000
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
        ></div>
        <div
          style={{
            width: "100%",
            gridColumn: screenWidth <= 768 ? {} : "1",
          }}
        >
          <Summary />
        </div>
        {screenWidth > 768 && (
          <div
            style={{
              width: "100%",
              gridColumn: screenWidth <= 768 ? {} : "2",
            }}
          >
            <DetailedCV />
          </div>
        )}
        {screenWidth > 1000 && <OtherThings />}
      </div>
    </div>
  );
};

export default MainContent;

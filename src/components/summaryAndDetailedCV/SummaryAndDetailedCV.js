import React, { useState, useEffect, useRef, useContext } from "react";
import Summary from "../summary/Summary";
import DetailedCV from "../detailedcv/DetailedCV";
import "../../styles/Main.css";
import { HeaderContext } from "../../contexts/HeaderContext";

const SummaryAndDetailedCV = () => {
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
          width: "90%",
          padding: "0 5px 0 5px",
          maxWidth: `${maxCol1Size + maxCol2Size + maxCol3Size}px`,
          display: "grid",
          gridTemplateColumns:
            screenWidth <= 1000
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
            left: screenWidth <= 1000 ? "18px'" : {},
            zIndex: "10",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gridColumn: screenWidth <= 1000 ? "1" : "1",
          }}
        ></div>
        <div
          style={{
            width: "100%",
            gridColumn: "1",
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
      </div>
    </div>
  );
};

export default SummaryAndDetailedCV;

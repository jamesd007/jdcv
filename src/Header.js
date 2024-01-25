import React, { useState, useEffect, useRef } from "react";
import MoonRising from "./MoonRising";
import JDPic from "./JDPic";

const Header = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const headerContainerRef = useRef(null);

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

  useEffect(() => {
    if (headerContainerRef?.current) {
      if (props.callback && typeof props.callback === "function")
        props.callback(headerContainerRef?.current?.clientHeight);
    }
  }, [headerContainerRef?.current?.clientHeight]);

  return (
    <div
      ref={headerContainerRef}
      style={{
        width: "100%",
        height: "fit-content",
        fontSize: "3rem",
        gridColumn:
          screenWidth <= 550 ? {} : screenWidth <= 1000 ? "1 / 3" : "2",
      }}
    >
      <MoonRising />
      {/* <JDPic/> */}
    </div>
  );
};

export default Header;

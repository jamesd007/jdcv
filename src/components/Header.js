import React, { useEffect, useRef, useContext } from "react";
import MoonRising from "../MoonRising";
import jdimg2 from "../images/JDpic.png";
import "../styles/Header.css";
import { isMobileTablet } from "../utils/utilities";

const Header = () => {
  const headerContainerRef = useRef(null);
  // const { headerHeight, setHeaderHeight } = useContext(HeaderContext);
  const maxCol1Size = 300;
  const maxCol2Size = 700;
  const maxCol3Size = 300;

  return (
    <div
      ref={headerContainerRef}
      id="header-container"
      className="header-container"
    >
      <div style={{ gridColumn: window.innerWidth > 768 ? "2" : {} }}>
        <MoonRising />
        <div
          style={{
            position: "absolute",
            top: "4px",
            left: "4px",
            height: `${window.innerHeight / 5.4}px`,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="profile-image"
            style={{
              height: `${window.innerHeight / 5.4}px`,
              marginLeft:
                window.innerWidth <= 768
                  ? "2%"
                  : window.innerWidth < 1000
                  ? "8%"
                  : "16%",
              // marginLeft: window.innerWidth > 1000 ? "4rem" : "0rem",
            }}
          >
            <img
              className="picImg"
              style={{
                border: "3px solid darkblue",
                borderRadius: "50%",
                height: `${window.innerHeight / 5.7}px`,
                width: "auto",
              }}
              src={jdimg2}
              alt="pic"
            ></img>
            <div
              className="header-titles"
              // style={{
              //   whiteSpace: window.innerWidth > 768 ? "nowrap" : "normal",
              // }}
            >
              <span className="header-name">James Doyle</span>
              {isMobileTablet() ? (
                <p className="header-cv">Curriculum Vitae</p>
              ) : (
                <span className="header-cv">Curriculum Vitae</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

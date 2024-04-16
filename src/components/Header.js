import React, { useRef } from "react";
import MoonRising from "../MoonRising";
import jdimg2 from "../images/JDpic.png";
import "../styles/Header.css";
import { isMobileTablet } from "../utils/utilities";

const Header = () => {
  const headerContainerRef = useRef(null);
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
            <div className="header-titles">
              <span
                className="header-name"
                style={{
                  fontSize: isMobileTablet() && "1.5rem",
                }}
              >
                James Doyle
              </span>
              {isMobileTablet() || window.innerWidth <= 768 ? (
                <p
                  className="header-cv"
                  style={{
                    fontSize: isMobileTablet() ? "1rem" : "1.5rem",
                  }}
                >
                  Curriculum Vitae
                </p>
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

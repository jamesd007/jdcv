import React, { useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import "./App.css";
import { StyleSheetManager } from "styled-components";

const grow = (x, y) => keyframes`
0% {
opacity: 1;
height: 100px;
width: 100px;
transform: translate(${x}px, ${y}px);
}
100% {
opacity: 1;
height: ${window.innerHeight / 1.8}px;
width: ${window.innerHeight / 1.8}px;
transform: translate(${window.innerWidth / 2 - window.innerHeight / 1.8 / 2}px,
${(window.innerHeight * 67) / 100 - window.innerHeight / 1.8}px);
background-color:white;
}
`;

// transform: translate(${window.innerWidth / 2 - (window.innerWidth <= 768 ? window.innerHeight / 7.6 : window.innerHeight / 3.6) / 2}px,
// ${(window.innerHeight * 67) / 100 - (window.innerWidth <= 768 ? window.innerHeight / 7.6 : window.innerHeight / 3.6)}px);
// transform: translate(${window.innerWidth / 2 - window.innerHeight / 1.8 / 2}px,
// ${(window.innerHeight * 67) / 100 - window.innerHeight / 1.8}px);

const fadeIn = keyframes`
from {
opacity: 0;
}
to {
opacity: 1;
}
`;

const AnimatedDiv = styled.div`
  ${({ x, y, delay }) => css`
    animation: ${fadeIn} 1s linear forwards, ${grow(x, y)} 2s linear forwards;
    border-radius: 50%;
  `}
`;

const growAnimation = keyframes`
from {
  opacity:0;
  font-size:10px;
}
to {
  opacity:1;
  font-size:20px;
}
`;
// transform:  scale(0);
// transform: scale(3);

const StyledDiv = styled.div`
  position: absolute;
  width: ${window.innerHeight / 1.8}px;
  left: ${window.innerWidth / 2 - window.innerHeight / 1.8 / 2}px;
  top: ${(window.innerHeight * 67) / 100 - window.innerHeight / 1.8 / 2}px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${growAnimation} 1s ease forwards;
  transform-origin: center; /* Set the origin to the center */
`;
// animation: ${growAnimation} 1s ease forwards;
const growSubAnimation = keyframes`
from {
transform: scale(0);
}
to {
transform: scale(2);
}
`;

const StyledSubDiv = styled.div`
  position: absolute;
  width: ${window.innerHeight / 1.8}px;
  left: ${window.innerWidth / 2 - window.innerHeight / 1.8 / 2}px;
  top: ${(window.innerHeight * 67) / 100 - window.innerHeight / 1.8 / 2 + 50}px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${growSubAnimation} 0.5s ease forwards;
  transform-origin: center; /* Set the origin to the center */
`;

const BigLight = (props) => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubTitle, setShowSubTitle] = useState(false);
  const [showText, setShowText] = useState(false);
  const ssmRef = useRef(null);

  const handleAnimationEnd = (e) => {
    setShowTitle(true);
  };

  const handleStyledDivAnimationEnd = () => {
    console.log("tedtest handleStyledDivAnimationEnd");
    setShowSubTitle(true);
  };

  const handleSubTitleEnd = () => {
    setShowText(true);
    props.callback(true);
  };

  const shouldForwardProp = (prop) => {
    return !["param1", "param2", "delay"].includes(prop);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        maxHeight: `${window.innerHeight}px`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <div className={showText ? "scroll-out" : ""} ref={ssmRef}>
          {/* <button onClick={() => props.callback(true)}>testtedtest</button> */}
          <AnimatedDiv
            x={window.innerWidth}
            y={(window.innerHeight * 67) / 100 - 100}
            delay={0}
            onAnimationEnd={(e) => handleAnimationEnd(e)}
          />

          {
            // showTitle
            true && (
              <StyledDiv onAnimationEnd={(e) => handleStyledDivAnimationEnd(e)}>
                <span>James Doyle</span>
              </StyledDiv>
            )
          }
          {showSubTitle && (
            <StyledSubDiv onAnimationEnd={(e) => handleSubTitleEnd(e)}>
              <span>Curriculum Vitae</span>
            </StyledSubDiv>
          )}
        </div>
      </StyleSheetManager>
    </div>
  );
};

export default BigLight;

import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { StyleSheetManager } from "styled-components";

const moveball = (param1, param2) => keyframes`
0% {
opacity: 1;
transform: translateX(${param1}px);
background-color:white
}
100% {
opacity: 1;
transform: translateX(${param2}px);
background-color:white
}
`;

const fadeOut = keyframes`
0% {
opacity: 1;
}
100% {
opacity: 0;
}
`;

const AnimatedDiv = styled.div`
  position: absolute;
  top: ${(window.innerHeight * 67) / 100 - 100}px;
  width: 100px;
  ${({ param1, param2, delay }) => css`
    animation: ${moveball(param1, param2)} 0.5s linear ${delay}s forwards,
      ${fadeOut} 1s linear ${delay + 1}s forwards;
  `}
  /* Transient props */
  ${"" /* $param1, $param2 */}
`;

const MoveTest = (props) => {
  const ballCount = 7;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerWidth);
  let grow = false;
  const [lastLightPosition, setLastLightPosition] = useState({ x: 0, y: 0 });

  const handleAnimationEnd = (e, index, position) => {
    if (index === ballCount - 1 && !grow) {
      grow = true;
    }
    setLastLightPosition(position);
    if (grow) props.callback(position);
    else props.callback({ x: 0, y: 0 });
  };

  const CoL = ({ index }) => {
    let x = index === 0 ? -300 : (((index - 1) * 16) / 100) * screenWidth;
    return (
      <div
        className="ballContainer"
        style={{
          position: index === 0 ? "relative" : "absolute",
          // width: "100px",
          left: `${x}px`,
          zIndex: `${index}`,
        }}
      ></div>
    );
  };

  const shouldForwardProp = (prop) => {
    return !["param1", "param2", "delay"].includes(prop);
  };

  return (
    <div
      style={{
        position: "relative",
        top: "0px",
        left: "-100px",
        // top: "calc(67% - 100px)",
        // width: "100px",
        backgroundColor: "pink",
        // height: "100px",
        // maxHeight: `${window.innerHeight}px`,
      }}
    >
      {[...Array(ballCount)].map((_, index) => (
        <StyleSheetManager key={index} shouldForwardProp={shouldForwardProp}>
          <AnimatedDiv
            index={index}
            shgt={100}
            key={index}
            style={{
              // position: "relative",
              zIndex: `${index}`,
              backgroundColor: "yellow",
              // backgroundColor: index > 0 && "transparent",
              // top:
              //   index > 0
              //     ? `${-index * 100}px`
              //     : `${screenHeight * (67 / 100) - 100}px`,
              // width: index > 0 && "100px",
              height: index > 0 && "100px",
              borderRadius: "50%",
            }}
            param1={
              index === 0 ? -300 : (((index - 1) * 16) / 100) * screenWidth
            }
            param2={((index * 16) / 100) * screenWidth}
            delay={(index + 1) * 0.5}
            onAnimationEnd={(e) =>
              index === ballCount - 1 &&
              handleAnimationEnd(e, index, {
                x: -screenWidth,
                y: (67 / 100) * screenHeight - 100,
              })
            }
          >
            <CoL index={index} />
          </AnimatedDiv>
        </StyleSheetManager>
      ))}
      {/* {grow && lastLightPosition.x !== 0 && props.callback(lastLightPosition)} */}
    </div>
  );
};

export default MoveTest;

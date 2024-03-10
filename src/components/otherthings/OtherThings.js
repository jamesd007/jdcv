// import React from "react";

// export default function OtherThings() {
//   return (
//     <div style={{ position: "absolute", left: "30px", top: "100px" }}>
//       OtherThings
//     </div>
//   );
// }
import React, { useRef, useState, useEffect } from "react";
import GetCurrentLoc from "../../Weather/GetCurrentLoc";
// import GetCurrentLoc from "./Weather/GetCurrentLoc";
import { Link } from "react-router-dom";
import "../../styles/Main.css";
import GalleryY from "../../gallery/GalleryY";
// import GalleryY from "./gallery/GalleryY";
import Loadshedding from "../../Loadshedding/Loadshedding";
// import Loadshedding from "./Loadshedding/Loadshedding";
import GetQuotes from "../../GetQuotes";
// import GetQuotes from "./GetQuotes";

const OtherThings = (props) => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [headsHeight, setHeadsHeight] = useState(
    props?.headsHeight ? props?.headsHeight : 200
  );
  const [containerHeight, setContainerHeight] = useState("auto");

  const Footer = () => {
    return (
      <div
        className="footerMenu"
        // style={{
        //   width: "100%",
        //   position: "fixed", // Change to fixed
        //   bottom: "4px", // Adjust position to bottom
        //   backgroundColor: "lightsteelblue",
        // }}
      >
        <Link to="/" className="footerLink">
          /Home
        </Link>
        {window.innerWidth <= 768 && (
          <Link to="/detailedcv" className="footerLink">
            Detailed CV
          </Link>
        )}
      </div>
    );
  };
  const updateContainerHeight = () => {
    const container = document.querySelector(".container");
    if (container) {
      let newHeight;
      if (window.innerWidth <= 768) newHeight = window.innerHeight - 45;
      else newHeight = window.innerHeight - headsHeight - 45;
      setContainerHeight(`${newHeight}px`);
    }
  };
  useEffect(() => {
    updateContainerHeight();
  }, [window.innerWidth, window.innerHeight, headsHeight]);

  const handleResize = () => {
    // Update container height when child components resize
    updateContainerHeight();
  };

  return (
    <div>
      <div
        className="container"
        style={{
          position: "relative",
          maxHeight: `${window.innerHeight - 45}px`,
          height:
            window.innerWidth <= 768
              ? `${window.innerHeight - 45}px`
              : `${window.innerHeight - headsHeight - 45}px`,
        }}
        // style={{
        //   position: "relative",
        //   height:
        //     window.innerWidth <= 1000
        //       ? `${window.innerHeight - 55}px`
        //       : `${window.innerHeight - 180}px`,
        // }}
      >
        <div>
          <h2>Some things...</h2>
          <GetCurrentLoc onResize={handleResize} />
        </div>
        {/* <div>
        Today's headlines
      </div> */}
        {/* <div>
        <LoadsheddingEscom />
      </div> */}
        {/* <div>
        <Loadshedding />
      </div> */}
        <div>
          <GalleryY onResize={handleResize} />
        </div>
        <div>
          <GetQuotes />
        </div>
      </div>
      {window.innerWidth <= 1000 && <Footer />}
    </div>
  );
};
export default OtherThings;

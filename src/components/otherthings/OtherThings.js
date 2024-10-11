import React, { useRef, useState, useEffect, useContext } from "react";
import GetCurrentLoc from "../../Weather/GetCurrentLoc";
import { Link } from "react-router-dom";
import "../../styles/Main.css";
import GalleryY from "../../gallery/GalleryY";
import Loadshedding from "../../Loadshedding/Loadshedding";
import GetQuotes from "../../GetQuotes";
import { HeaderContext } from "../../contexts/HeaderContext";

const OtherThings = (props) => {
  const { headerHeight } = useContext(HeaderContext);

  return (
    <div>
      <div
        className="container"
        style={{
          position: "relative",
          maxHeight: `${window.innerHeight - 60}px`,
          height:
            window.innerWidth <= 768
              ? `${window.innerHeight - headerHeight - 60}px`
              : `${window.innerHeight - headerHeight - 60}px`,
        }}
      >
        <div>
          <h2>Some things...</h2>
          <GetCurrentLoc />
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
          <GalleryY
          // onResize={handleResize}
          />
        </div>
        {/* <div>
          <GetQuotes />
        </div> */}
      </div>
    </div>
  );
};
export default OtherThings;

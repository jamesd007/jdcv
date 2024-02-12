import React from "react";

const ArrowLeft = (props) => {
  return (
    <div>
      <svg
        stroke={props.strokecolor}
        fill={props.fillcolor}
        strokeWidth={props.strokewidth}
        viewBox="0 0 24 24"
        // stroke-linecap="round"
        // stroke-linejoin="round"
        height={props.height}
        width={props.width}
        xmlns="http://www.w3.org/2000/svg"
        // style="position: absolute; left: 0px; bottom: 0px;"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 8 8 12 12 16"></polyline>
        <line x1="16" y1="12" x2="8" y2="12"></line>
      </svg>
      {/* <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 8 8 12 12 16"></polyline>
            <line x1="16" y1="12" x2="8" y2="12"></line> */}
    </div>
  );
};
export default ArrowLeft;

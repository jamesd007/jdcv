import React from "react";

const ArrowRight = (props) => {
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
        // style="position: absolute; right: 0px; top: 50%; cursor: pointer;"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 16 16 12 12 8"></polyline>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
      {/* <circle cx="12" cy="12" r="10"></circle>
<polyline points="12 16 16 12 12 8"></polyline>
<line x1="8" y1="12" x2="16" y2="12"></line> */}
      {/* <svg
        stroke={props.strokecolor}
        fill={props.fillcolor}
        strokeWidth={props.strokewidth}
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        transform="
        translate(0 3)
        scale(0.8 0.8)">
        <path
          d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z">
        </path>
        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z">
        </path>
      </svg> */}
    </div>
  );
};
export default ArrowRight;

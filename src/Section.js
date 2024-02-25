import React from "react";

const Section = ({ id, title, scrollToSection, children }) => {
  return (
    <div id={id}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Section;

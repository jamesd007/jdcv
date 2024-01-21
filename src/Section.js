import React from 'react';

const Section = ({ id, title, scrollToSection, children }) => {
 // const handleScrollToSection = () => {
 //  scrollToSection(id); // Use the id prop here
 // };

 return (
  <div id={id}>
   <h2>{title}</h2>
   {children}
  </div>
 );
};

export default Section;

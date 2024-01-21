import React from 'react';
const Contents = ({ id,scrollTo }) => {

 const handleScrollTo = (id) => () => {
  scrollTo(id);
 };

 return (
  <div>
   <h2>Contents</h2>
   <ul>
   <li>
     <a href="#personal" onClick={handleScrollTo('personal')}>
      Personal Details
     </a>
    </li>
    <li>
     <a href="#education" onClick={handleScrollTo('education')}>
      Education
     </a>
    </li>
    <li>
     <a href="#work-experience" onClick={handleScrollTo('work-experience')}>
      Work Experience
     </a>
    </li>
    <li>
     <a href="#hobbies" onClick={handleScrollTo('hobbies')}>
      Hobbies
     </a>
    </li>
   </ul>
  </div>
 );
};

export default Contents;

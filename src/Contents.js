import React from "react";
const Contents = ({ id, scrollTo }) => {
  const handleScrollTo = (id) => () => {
    scrollTo(id);
  };

  return (
    <div>
      <h2>Detailed CV</h2>
      <h3>Contents</h3>
      <ul>
        <li>
          <a
            style={{ color: "blue" }}
            href="#personal"
            onClick={handleScrollTo("personal")}
          >
            Personal Details
          </a>
        </li>
        <li>
          <a
            style={{ color: "blue" }}
            href="#education"
            onClick={handleScrollTo("education")}
          >
            Education
          </a>
        </li>
        <li>
          <a
            style={{ color: "blue" }}
            href="#work-experience"
            onClick={handleScrollTo("work-experience")}
          >
            Work Experience
          </a>
        </li>
        <li>
          <a
            style={{ color: "blue" }}
            href="#hobbies"
            onClick={handleScrollTo("hobbies")}
          >
            Hobbies
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contents;

import React, { useState, useEffect, useRef, useContext } from "react";
import "../../styles/Summary.css";
// import "../../styles/Main.css"
// import "./styles/Summary.css";
import Modals from "../../Modals";
// import Modals from "./Modals";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { HeaderContext } from "../../contexts/HeaderContext";

const Summary = (props) => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [modalOpen, setModalOpen] = useState(false);
  const emailAddress = "pers@stardev.co.za";
  const containerRef = useRef(null);
  const { headerHeight } = useContext(HeaderContext);

  const skillsData = [
    {
      title: "Civil Engineering",
      skills: ["Construction management", "Project planning"],
    },
    {
      title: "Business Administration",
      skills: ["Strategic planning", "Leadership", "Financial management"],
    },
    {
      title: "Project Management",
      skills: [
        "Project planning",
        "Risk management",
        "Stakeholder communication",
      ],
    },
    {
      title: "Technical Skills",
      skills: ["Microsoft Excel", "Microsoft Word", "React JS"],
    },
    {
      title: "Programming",
      skills: ["Excel-VBA", "Android Studio", "React JS"],
    },
    {
      title: "Accounting and Payroll",
      skills: ["Pastel Accounting", "Pastel Payroll"],
    },
  ];

  const ExpandableSection = ({ title, skills, onExpandChange }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = (props) => {
      setIsExpanded(!isExpanded);
    };

    useEffect(() => {
      if (isExpanded)
        // Scroll to the bottom when the component mounts or whenever data changes
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }, [isExpanded]);

    useEffect(() => {
      if (isExpanded && onExpandChange) {
        onExpandChange();
      }
    }, [isExpanded, onExpandChange]);

    return (
      <div>
        <div onClick={handleToggle} style={{ cursor: "pointer" }}>
          {isExpanded ? <FaCaretDown /> : <FaCaretRight />} {title}
        </div>
        {isExpanded && (
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  useEffect(() => {
    function handleResize() {
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleExpandScroll = () => {
    containerRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <div
      ref={containerRef}
      className="container"
      style={{
        position: "relative",
        maxHeight: `${screenHeight - headerHeight - 60}px`,
        height:
          screenWidth <= 768
            ? `${screenHeight - headerHeight - 60}px`
            : `${screenHeight - headerHeight - 60}px`,
        // margin: screenWidth <= 768 && "0px",
      }}
    >
      <h3>Welcome</h3>
      {/* <h3>About Me</h3> */}
      <div style={{ fontSize: "1rem", whiteSpace: "pre-wrap" }}>
        <p style={{ fontSize: "1rem", whiteSpace: "pre-wrap" }}>
          Thank you for visiting my website!
        </p>
        <p>
          With over 30 years of experience in various fields including, civil
          engineering, IT, financial controls, project management, and
          contracts, I bring a wealth of expertise and versatility to every
          endeavor.
        </p>
        <p>Passionate about problem-solving, enthusiastic about life.</p>
        <p>
          <span
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              color: "blue",
            }}
            onClick={openModal}
          >
            Read here for more…
          </span>
          or view a point by point CV in the Detailed CV menu link
        </p>
        {modalOpen && (
          <Modals
            onClose={closeModal}
            onClickOutside={closeModal}
            title="Professional Summary:"
            styleBody={{ maxWidth: "90vw", width: "500px" }}
          >
            <div style={{ fontSize: "1rem" }}>
              <p>
                A seasoned professional with a rich background in civil
                engineering and construction management, I began my career with
                Basil Read in the 80s and later gained valuable experience at De
                Leuw Cather. My expertise extended to programming in Turbo
                Pascal, where I developed applications for road sign design and
                conducted economic analyses.
              </p>
              <p>
                In the entrepreneurial realm, I co-founded DipCivils, a
                successful medium-sized construction company, where I managed
                financial affairs. Subsequently, I established Sunstar Civils,
                which flourished until 2018. Embracing technological
                advancements, I transitioned into programming with enabled.World
                in 2020, specializing in messaging apps using Android Studio and
                React JS.
              </p>
              <p>
                Driven by a passion for problem-solving and a commitment to
                excellence, I am currently engaged in a community living
                management project. Despite my 64 years, I approach work with
                boundless enthusiasm, dedicating energy and time to each
                endeavor. Known for adaptability and a love for learning, I am
                now seeking new opportunities.
              </p>
              <h3>Personal Traits:</h3>
              <p>
                Energetic and health-conscious, I maintain a vigorous lifestyle,
                running 25km weekly and having achieved notable feats like
                completing Comrades ultra marathons, paddling the Umzindusi
                river, and summiting Kilimanjaro. My youthful spirit and
                dedication to continuous improvement make me an asset to any
                team or project.
              </p>
              <p>
                In my spare time I love to paint in oils - have a look at the
                gallery alongside :)
              </p>
            </div>
          </Modals>
        )}
      </div>
      <h3>Contact</h3>
      <p>Mobile: available on request/email</p>
      <p>
        Contact me via email:
        <a href={`mailto:${emailAddress}`}>email</a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/jamesodoyle"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn profile
        </a>
      </p>
      <h3>Skills</h3>
      {skillsData.map((section, index) => (
        <ExpandableSection
          key={index}
          title={section.title}
          skills={section.skills}
          onExpandChange={handleExpandScroll}
        />
      ))}
    </div>
  );
};
export default Summary;

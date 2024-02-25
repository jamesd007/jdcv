import React, { useState, useEffect, useRef } from "react";
import "./styles/Summary.css";
import Modals from "./Modals";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

const Summary = (props) => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [modalOpen, setModalOpen] = useState(false);
  const emailAddress = "pers@stardev.co.za";
  const containerRef = useRef(null);
  const [headsHeight, setHeadsHeight] = useState(
    props?.headsHeight ? props?.headsHeight : 200
  );

  useEffect(() => {
    setHeadsHeight(props.headsHeight);
  }, [props.headsHeight]);

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
        maxHeight: `${screenHeight - headsHeight - 45}px`,
        height:
          screenWidth <= 550
            ? `${screenHeight - 45}px`
            : `${screenHeight - headsHeight - 45}px`,
        //   screenWidth <= 1000
        //     ? `${screenHeight - 25}px`
        //     : `${screenHeight - headsHeight - 25}px`,
        // // `${screenHeight - 180}px`,
        // borderLeft: screenWidth>1000 && '1px solid darkgrey'
      }}
      // style={{
      //   height: `${screenHeight - 25}px`,
      // }}
    >
      <h3>About Me</h3>
      <div style={{ fontSize: "1rem" }}>
        <p>
          A career spanning more than 30 years. Experience in civil engineering
          and IT fields coupled with exposure to financial controls, project
          management and contracts, I bring a wealth of experience and
          versatility to any project.
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
          or view a point by point CV on this page
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
                Leuw Cather. My expertise extends to programming in Turbo
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

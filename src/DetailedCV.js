import React,{useEffect,useState,useRef} from "react";
import Section from "./Section"
import { Element, scroller } from 'react-scroll';
import Contents from "./Contents";
import "./styles/DetailedCV.css"

const DetailedCV = ()=>{

 const [screenHeight, setScreenHeight] = useState(window.innerHeight);
 const [showButton, setShowButton] = useState(false);
 const containerRef=useRef()
 const keyValuePairs = [
  ['Surname','Doyle'],
  ['First Names',	'James Oliver'],
  ['Gender',	'Male'],
  ['Nationality',	'South African and Irish'],
  ['Address', 'Johannesburg, South Africa'],
  ['Home language',	'English'],
  ['Other languages',	'Afrikaans'],
  ['Driver’s Licence',	'Code EA']]

const enabledWorld={
  "company":"enabled.World",
  "period":"March 2020 to current",
  "position":"Software developer",
  "duties":["Front-end – creating efficient attractive user friendly interfaces",
    "Programming in Android Studio. Maintenance of messaging Application, development of front-end GUI.",
    "Programming in React Javascript - building progressive web application (PWA) for management of Sectional Title communities and estates.",
    "Project management making use of Git, Sourcetree, Atlassian JIRA and BitBucket facilities.",
    "Programming in Python, communications with AWS (lambdas, S3, Cloudwatch)",
    "Use of Docker systems"],
  "comment":"Enabled.World had a growing database of users in sub Saharan Africa. One of the highlights of working at Enabled.World has been building Progressive Web Application (PWA) to handle management of communities in estates.",
  "achievements":["Android App maintenance and development","Application of acquired skills in React JS",
  "Played a key role in a collaborative team, contributing to the design and development of user-friendly GUI's."]
}

const sunstarCivils={
  "company":"Sunstar Civils",
  "period":"2009 to 2019",
  "position":"Director",
  "duties":["Tendering and Estimating (CCS)",
  "Management of Contracts",
  "Scheduling, planning and programming",
  "Submission of claims",
  "Interpretation of drawings and contracts",
  "Company Administration",
  "Human resources",
  "Client liaison",
  "Contract documentation (JBCC and GCC)",
  "Health and Safety",
  "Interpret drawings, compile programmes and plan events for constructions works.",
  "Chairing weekly site meetings concerning site activities, performance, safety, etc.",
  "Managed a core staff compliment of 30 people."],
  "comment":"The company employed many sub-contractors and temporary staff."
}

const dipCivils={
  "company":"Dipcivils",
  "period":"1993 to 2007",
  "position":"Director",
  "duties":["Installation, support and maintenance of computer network and software.",
  "Maintaining a set of accounting records.",
  "Preparation of monthly management accounts and budgets.",
  "Liaison with the company’s auditors.",
  "Maintenance and security of Dipcivils’ offices and stores and land.",
  "Management of the company at executive level if CEO absent."],
  // "comment":
  "achievements":["Built a company from scratch to a company with turnover in excess of R100m pa"]
}
const witsTech={
"company":"Witwatersrand Technikon (now University of Johannesburg)",
"period":"1989 to 1993",
"position":"Lecturer to first year and final year civil engineering students",
"duties":["Teaching Computer Applications for Civils Engineers ",
"Development of a syllabus","Compilation and marking examinations"
]
}
const deLeuw={
  "company":"De Leuw Cather Inc",
  "period":"1986 to 1993",
  "position":"Computer Programmer / Engineering Technician",
  "duties":["Programming (Turbo Pascal)",
  "Transportation engineering technician.",
  "Research and writing reports.",
  "Maintenance of computer systems."
  ],
  // "comment":"",
  "achievements":["Designed, programmed and implemented a computer program for design and construction Road signs. This was done before the advent of MS-Windows. The program produced fully dimensioned WYSIWYG graphic drawings including all symbols, arrows, text and panels ready for construction."]
}

const WorkExp=(data)=>{
return (
  <div>
    <h3>{data?.data?.company}</h3>
    <p>{data?.data?.period}</p>
    <p>{data?.data?.position}</p>
    {data?.data?.duties && 
    <div>
      <h4>Duties and responsibilities</h4>
        <ul>
          {data?.data?.duties?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>}
  <p>
    {data?.data?.comment}
  </p>
  {data?.data?.achievements && 
  <div>
    <h4>Achievements</h4>
      <ul>
        {data?.data?.achievements.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>}
</div>)
}

 const handleScroll = event => {
  const { scrollTop, scrollHeight, clientHeight } = event.target;
  const currentPosition = scrollTop / (scrollHeight - clientHeight) * 100;
  setShowButton(currentPosition>0)
 };

 const scrollToTop = () => {
  containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
 };

 const scrollTo = (id) => {
  scroller.scrollTo(id, {
   duration: 1800,
   delay: 0,
   smooth: 'easeInOutQuart',
  });
 };

 useEffect(() => {
  function handleResize() {
   setScreenHeight(window.innerHeight);
  }
  window.addEventListener("resize", handleResize);
  return () => {
   window.removeEventListener("resize", handleResize);
  };
 }, []);

const KeyValueList = ({ data }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '20px' }}>
        {/* Render keys in the left column */}
        {data.map(([key, _], index) => (
          <div key={index} style={{ textAlign: 'left' }}>
            {key}:
          </div>
        ))}
      </div>
      <div>
        {/* Render values in the right column */}
        {data.map(([_, value], index) => (
          <div key={index} style={{ textAlign: 'left' }}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

return (
  <div
    className="container"
    onScroll={handleScroll}
    ref={containerRef}
      style={{
        position:"relative",
        height:`${screenHeight-200}px`}}>
      <Contents scrollTo={()=>scrollTo('contents')} id="contents" />
      <Element name="personal">
        <Section id="personal" title="Personal Details" scrollToSection={() => scrollTo('personal')}>
          <div
            style={{paddingLeft:"1rem"}}>
            <KeyValueList data={keyValuePairs} />
          </div>
        </Section> 
      </Element>
      <Element name="education">
        <Section id="education" title="Education" scrollToSection={() => scrollTo('education')}>
          <div 
            style={{paddingLeft:"1rem"}}>
              <ul>
            <li>Master’s Degree (MSc) in Engineering (Civil) University of the Witwatersrand
              <p
                style={{paddingLeft:"1.4rem"}}>
                Title of Research report “In Preparedness for an Integrated Infrastructure Asset Management System for the City of Johannesburg”.
              </p>
            </li>
            <li>
              Graduate Diploma in Engineering (GDE) University of the Witwatersrand
            </li>
            <li>
              Project Management University of Pretoria
            </li>
            <li>
              National Higher Diploma Civil engineering Witwatersrand Technikon (now University of Johannesburg)
            </li>
            </ul>
          </div>
        </Section> 
      </Element>
      <Element name="work-experience">
        <Section id="work-experience" title="Work Experience" scrollToSection={() => scrollTo('work-experience')}>
          <div
            style={{paddingLeft:"1rem"}}>
            <WorkExp data={enabledWorld}/>
            <WorkExp data={sunstarCivils}/>
            <WorkExp data={dipCivils}/>
            <WorkExp data={witsTech}/>
            <WorkExp data={deLeuw}/>
          </div>
        </Section> 
      </Element>
      <Element name="hobbies">
        <Section id="hobbies" title="Hobbies" scrollToSection={() => scrollTo('hobbies')} >
          <div style={{paddingLeft:"1rem"}}>
            <ul>
              <li>Running</li>
              <li>Oil painting and anything 'Art'</li>
              <li>Reading (anything from Thrillers to Scientific Journals)</li>
              <li>Chess</li>
            </ul>
          </div>
        </Section>
      </Element>    
      <button 
        className="scrollToTopButton"
        style={showButton?{}:{display:"none"}}
        onClick={scrollToTop} >
          Scroll to Top
      </button>      
  </div>
)
}

export default DetailedCV;

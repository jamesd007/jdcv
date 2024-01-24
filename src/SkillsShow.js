import React, {useState, useEffect} from "react";
import GetCurrentLoc from './Weather/GetCurrentLoc'
// import SvnDayForecast from "./Weather/SvnDayForecast";
// import Loadshedding from "./Loadshedding/Loadshedding";
import Gallery from "./gallery/Gallery";
import './styles/DetailedCV.css'

const SkillsShow =()=>{
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
  
return(
  <div
    className="container"
    style={{
      height:`${screenHeight-200}px`,
      // borderLeft: screenWidth>1000 && '1px solid darkgrey'
      }}>
    <div>
      <h2>Some things...</h2>
      <GetCurrentLoc/>
    </div>
      {/* <div>
        Quote for the moment
      </div>
      <div>
        Today's headlines
      </div> */}
    <div>
      {/* <h3>Loadshedding</h3> */}
      {/* <Loadshedding/> */}
    </div>
    <div>
      <Gallery/>
    </div>
  </div>
)
}
export default SkillsShow;

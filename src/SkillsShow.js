import React,{useState} from "react";
import GetCurrentLoc from './Weather/GetCurrentLoc'
// import SvnDayForecast from "./Weather/SvnDayForecast";
import SearchCities from './Weather/SearchCities'
import Loadshedding from "./Loadshedding/Loadshedding";
import Gallery from "./gallery/Gallery";

const SkillsShow =()=>{

  return(
<div>
  <div>
    <h2>Some things...</h2>
              {/* <h3> Weather</h3> */}
              {/* <p>Location</p> */}
    {/*tedtest just for now commented <GetCurrentLoc/> */}
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

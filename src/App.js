import React, {useState, useEffect} from 'react'
import MoonRising from './MoonRising';
import Summary from './Summary';
import DetailedCV from './DetailedCV';
import SkillsShow from './SkillsShow';
import JDPic from './JDPic';

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const maxCol1Size=300;
  const maxCol2Size=700;
  const maxCol3Size=300;
  
  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

const Header=()=>{
return(
  <div
    style={{
      width:"100%",
      height:"fit-content",
      fontSize:"3rem",
      gridColumn:screenWidth<=550
        ? {}
        : screenWidth<=1000
          ? "1 / 3"
          :  "2"
    }}>
      <MoonRising/>
  </div>
)
}

const Footer=()=>{
return(
  <div
    style={{
      width:"100%",
      backgroundColor:"lightcoral",
      gridColumn:screenWidth<=550
      ? {}
      : screenWidth<=1000
      ? "1 / 3"
      : "2"
    }}>
      Footer
  </div>
)
}

return (
  <div
    style={{ display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop:"15px"
    }}>
  <div 
    style={{
      width:"100%",
      maxWidth:`${maxCol1Size+maxCol2Size+maxCol3Size}px`,
      display: screenWidth<=550
        ? ""
        : "grid",
      gridTemplateColumns: screenWidth<=550
        ? {}
        : screenWidth<=1000
          ? screenWidth<=800
            ? "1fr 1fr"
            : `${maxCol1Size}px 1fr`
          : screenWidth<=1200
            ? "repeat(3, 1fr)"
            : `minmax(0, ${maxCol1Size}px) minmax(0, ${maxCol2Size}px) minmax(0, ${maxCol3Size}px)`

    }}>
      <div
        style={{
          position:screenWidth<=550 
            ? "absolute" 
            : screenWidth<=1000
              ? "absolute"
              : "relative",
          top:screenWidth<=550 
            ? "18px" 
            : screenWidth<=1000
            ? "18px"
            : {},
            left:screenWidth<=550 
            ? "10px" 
            : screenWidth<=1000
            ? "18px'"
            : {},
          zIndex:"10",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          gridColumn:screenWidth<=550
            ? {}
            : screenWidth<=1000
              ? "1"
              : "1"
        }}>
        <JDPic/>
      </div>
  <Header/>
  <div
    style={{
      width:"100%",
      backgroundColor:"cyan",
      gridColumn:screenWidth<=550
        ? {}
        : "1"
    }}>
  <Summary/>
  </div>
  <div
      style={{
        width:"100%",
        gridColumn:screenWidth<=550
          ? {}
          : "2"
    }}>
      <DetailedCV/>
   </div>
   <div
    style={{
      width:"100%",
      height:"100px",
      gridColumn:screenWidth<=550
      ? {}
      : screenWidth<=1000
        ? "1 / 3"
        : "3"
    }}>
    <SkillsShow/>
    {/* {screenWidth<=1000 &&<Footer  //tedtest to be determined
  style={{position:"relative"}}/>} */}
  </div>
  {/* {screenWidth>1000 &&<Footer  //tedtest to be determined
  style={{position:"relative"}}/>} */}
  
    </div>
    </div>
  );
}

export default App;

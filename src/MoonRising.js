import React,{useState,useEffect} from 'react';
import moon from "./images/moon.png"
import bluetrees from "./images/bluetrees.png"
import "./styles/MoonRising.css"

const MoonRising = () => {
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

  // const containerStyle = {
  //   position: 'relative',
  //   border:"1px solid black",
  //   overflow:"hidden",
  //   width: '100%',
  //   height: `${screenHeight*0.2}px`,
  //   backgroundColor:"#1f26c8"
  // };

  // const skyStyle = {
  //   position: 'absolute',
  //   top:"0px",
  //   left:"0px",
  //   height: `${screenHeight*0.09}px`,
  //   width:"100%",
  //   border:"1px solid black",
  //   overflow:"hidden",
  //   backgroundColor:"#050a89",
  //   // animation: 'skyLighter 10s linear'
  //   // width: '100%',
  //   // height: '100%'
  // };

  // const treeStyle = {
  //   position: 'relative',
  //   top: 0,
  //   left: 0,
  //   width:"100%",
  //   height: `${screenHeight*0.2}px`,
  //   height: '100%',
  //   backgroundImage: `url(${bluetrees})`, // Use template literals to include the image variable
  //   backgroundSize: 'cover',
  //   zIndex: 3, // The tree should be on top
  // };

  // const moonStyle = {
  //   position: 'absolute',
  //   top: '-130%', 
  //   right: '12%',
  //   width: '100px',
  //   height: '100px',
  //   backgroundImage: `url(${moon})`, 
  //   backgroundSize: 'cover',
  //   animation: 'moonRising 10s linear ', 
  //   zIndex: 5,
  // };

  const moonOverlayStyle = {
    position: 'absolute',
    top: '-70%', 
    right: '12%',
    width: '100px', 
    height: '100px',
    backgroundColor: 'rgba(255, 255, 255, 0)', 
    borderRadius: '50%',
    zIndex: 5, 
    animation: 'moonOverlayChange 30s linear', 
  };

  return (
    <div 
    style={{
      position: 'relative',
      border:"1px solid black",
      overflow:"hidden",
      width: '100%',
      height: `${screenHeight*0.2}px`,
    }}
    >
      <div
        style={{
          position:"absolute",
          left: screenWidth<550 
            ? "140px" 
            : screenWidth<=1000
              ? "140px"
              : "0",
          bottom:"0",
          fontSize:"2.5rem",
          fontWeight:"bold",
          zIndex:"9",
          marginLeft:"1rem",
          zIndex: screenWidth<550 ? "999":"999",
          color: screenWidth<550 
            ? "darkkhaki"
            : screenWidth<=1000
              ? "darkkhaki"
              : "lightsteelblue"}}>
        <p>James Doyle</p>
        <p style={{fontSize:"1.5rem"}}>Curriculum Vitae</p>
      </div>
      <div //sky
        style={{
          position:"absolute",
          top:"0",
          left:"0",
          width:"100%",
          height:`${screenHeight*0.2*0.5}px`,
          backgroundColor:"#050a89",
          zIndex:"1"
        }}>
      </div>
      <div //ground
        style={{
          position:"absolute",
          top:`${screenHeight*0.2*0.5}px`,
          left:"0",
          width:"100%",
          height:`${screenHeight*0.2*0.5}px`,
          backgroundColor:"#1f26c8",
          zIndex:"7"
        }}>
      </div>
      <div  //trees
      >
        <img
          style={{
            position:"absolute",
            top:"0",
            left:"0",
            height:"100%",
            width:"100%",
            zIndex:"9",
          }}
          src={bluetrees}
          alt="trees">
        </img>
      </div>
      <div //moon
        >
        <img
          style={{
            position:"absolute",
            top: '-70%', 
            right: '12%',
            opacity:"1",
            height:"100px",
            width:"100px",
            zIndex:"4",
            animation: 'moonRising 30s linear ', // Customize the animation properties
          }}
          src={moon}
          alt="moon">
        </img>
      </div>
      <div 
         style={moonOverlayStyle}>
      </div>
    </div>
  );
};

export default MoonRising;

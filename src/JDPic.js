import React, {useState, useEffect} from 'react'
import './styles/JDPic.css'
import jdimg from './images/JDCVPIC3.png'
import jdimg2 from './images/JDpic.png'

const JDPic=()=>{
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

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

return (
<div className='picContainer'>
    <div
        style={{
          position:screenWidth<=1000
            ? "absolute"
            : "relative",
          top:screenWidth<=1000
            && "4px",
          left:screenWidth<=1000 
            && "4px",
            // : screenWidth<=1000
            // ? "18px'"
            // : {},
          zIndex:"10",
          height:`${screenHeight/5.4}px`,
          width:"auto",
          border:"3px solid darkblue",
    borderRadius:"50%",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          gridColumn:screenWidth<=550
            ? {}
            : screenWidth<=1000
              ? "1"
              : "1"
        }}>
        <img
        className='picImg'
        style={{
          height:`${screenHeight/5.4}px`,
          width:"auto",
        }}
        src={jdimg2}
        alt="pic">
    </img>
      </div>
    {/* <img
        className='picImg'
        src={jdimg2}
        alt="pic">
    </img> */}
</div>
)
}
export default JDPic;
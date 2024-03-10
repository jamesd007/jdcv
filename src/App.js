import React, { useState, useEffect } from "react";
import "./App.css";
import AppStart from "./AppStart";

function App() {
  return <AppStart />;
}

export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainContent from "./MainContent";
// import DetailedCV from "./DetailedCV";
// import SkillsShow from "./SkillsShow";
// import MoveTest from "./MoveTest";
// import BigLight from "./BigLight";
// import { isMobileTablet } from "./utils/utilities";

//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [audioLoaded, setAudioLoaded] = useState(false);
//   const [audioStarted, setAudioStarted] = useState(false);
//   const [splashed, setSplashed] = useState();
//   const [showIntro, setShowIntro] = useState();

//   useEffect(() => {
//     if (isMobileTablet()) {
//       console.log("tedtestING this is a mobile or tablet");
//       setShowIntro(false);
//       setSplashed(true);
//     } else {
//       console.log("tedtestING this is NOT a mobile or tablet");
//       setShowIntro(true);
//       setSplashed(false);
//     }
//   }, []);

//   useEffect(() => {
//     // Preload the audio file
//     const audio = new Audio("/JB.mp3");
//     audio.load();
//     audio.onloadeddata = () => {
//       setAudioLoaded(true); // Set audioLoaded to true when audio is loaded
//     };
//   }, []);

//   const startAudio = () => {
//     setAudioStarted(true);
//     const audio = new Audio("/JB.mp3");
//     audio.play();
//   };

//   useEffect(() => {
//     function handleResize() {
//       setScreenWidth(window.innerWidth);
//     }
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handleCallback = (val) => {
//     setTimeout(() => {
//       setSplashed(val);
//     }, 2000);
//   };

//   const handleSkipIntro = () => {
//     setShowIntro(false);
//     setSplashed(true);
//   };

//   return (
//     <div
//       style={{
//         width: "100%", // Set width to 100% to occupy the entire width of the screen
//         height: "100%", // Set height to 100% to occupy the entire height of the screen
//         position: "relative", // Set position to relative for proper absolute positioning of the button
//       }}
//       // style={{
//       //   width: `${window.innerWidth}px`,
//       //   maxWidth: `${window.innerWidth}px`,
//       //   maxHeight: `${window.innerHeight}px`,
//       //   overflow: "hidden",
//       // }}
//     >
//       <div className={splashed ? "scroll-out" : "blackBackground"}>
//         {showIntro && (
//           <button
//             style={{ position: "absolute", right: "50px", bottom: "50px" }}
//             onClick={handleSkipIntro}
//           >
//             Skip Intro
//           </button>
//         )}
//         {(!audioStarted || !audioLoaded) && showIntro && (
//           <div>
//             <button className="actionButton" onClick={() => startAudio()}>
//               <p
//                 style={{
//                   fontSize: "1rem",
//                   color: "white",
//                   margin: "0",
//                 }}
//               >
//                 Press for{" "}
//               </p>
//               <p
//                 style={{
//                   margin: "0",
//                   fontSize: "2rem",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Action
//               </p>
//             </button>
//           </div>
//         )}

//         {audioStarted && showIntro && (
//           <div>
//             <audio src="/JB.mp3" autoPlay />
//             <MoveTest callback={(val) => setPosition(val)} />
//             {position.x !== 0 && (
//               <BigLight callback={(val) => handleCallback(val)} />
//             )}
//           </div>
//         )}
//       </div>
//       {splashed && (
//         <div
//           style={{
//             width: `${window.innerWidth}px`,
//             maxWidth: `${window.innerWidth}px`,
//           }}
//         >
//           {window.innerWidth <= 768 ? (
//             <BrowserRouter>
//               <div>
//                 {window.innerWidth <= 768 ? (
//                   <Routes>
//                     <Route path="/detailedcv" element={<DetailedCV />} />
//                     <Route path="/skillsshow" element={<SkillsShow />} />
//                     <Route exact path="/" element={<MainContent />} />
//                   </Routes>
//                 ) : window.innerWidth <= 1000 ? (
//                   <Routes>
//                     <Route path="/detailedcv" element={<DetailedCV />} />
//                     <Route path="/skillsshow" element={<SkillsShow />} />
//                     <Route exact path="/" element={<MainContent />} />
//                   </Routes>
//                 ) : (
//                   <MainContent />
//                 )}
//               </div>
//             </BrowserRouter>
//           ) : (
//             <MainContent />
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

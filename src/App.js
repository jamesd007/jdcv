import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContent from "./MainContent";
import DetailedCV from "./DetailedCV";
import SkillsShow from "./SkillsShow";
import MoveTest from "./MoveTest";
import BigLight from "./BigLight";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);
  const [splashed, setSplashed] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Preload the audio file
    const audio = new Audio("/JB.mp3");
    audio.load();
    audio.onloadeddata = () => {
      setAudioLoaded(true); // Set audioLoaded to true when audio is loaded
    };
  }, []);

  const startAudio = () => {
    setAudioStarted(true);
    const audio = new Audio("/JB.mp3");
    audio.play();
  };

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCallback = (val) => {
    setTimeout(() => {
      setSplashed(val);
    }, 2000);
  };

  const handleSkipIntro = () => {
    console.log("tedtestAAA skipping intro");
    setShowIntro(false);
    setSplashed(true);
  };

  return (
    <div
      style={{
        width: `${screenWidth}px`,
        maxWidth: `${screenWidth}px`,
        overflow: "hidden",
      }}
    >
      <div className={splashed ? "scroll-out" : "blackBackground"}>
        <button
          style={{ position: "absolute", right: "20px", bottom: "20px" }}
          onClick={handleSkipIntro}
        >
          Skip Intro
        </button>
        {(!audioStarted || !audioLoaded) && (
          <div>
            <button className="actionButton" onClick={() => startAudio()}>
              <p
                style={{
                  fontSize: "1rem",
                  color: "white",
                  margin: "0",
                }}
              >
                Press for{" "}
              </p>
              <p
                style={{
                  margin: "0",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                Action
              </p>
            </button>
          </div>
        )}

        {audioStarted && showIntro && (
          <div>
            <audio src="/JB.mp3" autoPlay />
            <MoveTest callback={(val) => setPosition(val)} />
            {position.x !== 0 && (
              <BigLight callback={(val) => handleCallback(val)} />
            )}
          </div>
        )}
      </div>
      {splashed && (
        <div
          style={{ width: `${screenWidth}px`, maxWidth: `${screenWidth}px` }}
        >
          {screenWidth > 768 ? (
            <BrowserRouter>
              <div>
                {screenWidth <= 768 ? (
                  <Routes>
                    <Route path="/detailedcv" element={<DetailedCV />} />
                    <Route path="/skillsshow" element={<SkillsShow />} />
                    <Route exact path="/" element={<MainContent />} />
                  </Routes>
                ) : screenWidth <= 1000 ? (
                  <Routes>
                    <Route path="/detailedcv" element={<DetailedCV />} />
                    <Route path="/skillsshow" element={<SkillsShow />} />
                    <Route exact path="/" element={<MainContent />} />
                  </Routes>
                ) : (
                  <MainContent />
                )}
              </div>
            </BrowserRouter>
          ) : (
            {}
          )}
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainContent from "./MainContent";
// import DetailedCV from "./DetailedCV";
// import SkillsShow from "./SkillsShow";
import MoveTest from "./MoveTest";
import BigLight from "./BigLight";
import { isMobileTablet } from "./utils/utilities";

const Introduction = ({ endIntro }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);
  const [splashed, setSplashed] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (isMobileTablet()) {
      console.log("tedtestING this is a mobile or tablet");
      setShowIntro(false);
      setSplashed(true);
    } else {
      console.log("tedtestING this is NOT a mobile or tablet");
      setShowIntro(true);
      setSplashed(false);
    }
  }, []);

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

  const handleCallback = (val) => {
    setTimeout(() => {
      setSplashed(val);
    }, 2000);
  };

  const handleSkipIntro = () => {
    setShowIntro(false);
    setSplashed(true);
  };

  useEffect(() => {
    if (splashed) {
      // Ensure state update occurs after the initial render of Introduction
      endIntro(true);
    }
  }, [splashed, endIntro]);

  return (
    <div
      style={{
        width: "100%", // Set width to 100% to occupy the entire width of the screen
        height: "100%", // Set height to 100% to occupy the entire height of the screen
        position: "relative", // Set position to relative for proper absolute positioning of the button
      }}
    >
      <div className={splashed ? "scroll-out" : "blackBackground"}>
        {showIntro && (
          <button
            style={{ position: "absolute", right: "50px", bottom: "50px" }}
            onClick={handleSkipIntro}
          >
            Skip Intro
          </button>
        )}
        {(!audioStarted || !audioLoaded) && showIntro && (
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
    </div>
  );
};

export default Introduction;

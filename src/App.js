import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainContent from './MainContent';
import DetailedCV from './DetailedCV';
import SkillsShow from './SkillsShow';

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
    <div>
    {
      screenWidth<=550
      ? (
        <Routes>
          <Route path="/detailedcv" element={<DetailedCV />} />
          <Route path="/skillsshow" element={<SkillsShow />} />
          <Route exact path="/" element={<MainContent />} />
        </Routes>
        )
      : screenWidth<=1000 
        ? (
          <Routes>
            <Route path="/detailedcv" element={<DetailedCV />} />
            <Route path="/skillsshow" element={<SkillsShow />} />
            <Route exact path="/" element={<MainContent />} />
          </Routes>
          )
        : <MainContent/>}
    </div>
    </BrowserRouter>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Introduction from "./Introduction";
import Summary from "./components/summary/Summary";
import DetailedCV from "./components/detailedcv/DetailedCV";
import OtherThings from "./components/otherthings/OtherThings";
import MainContent from "./MainContent";
import Header from "./components/Header";
import { HeaderProvider } from "./contexts/HeaderContext";
import SummaryAndDetailedCV from "./components/summaryAndDetailedCV/SummaryAndDetailedCV";

const Navigation = ({
  showHome,
  showDetailedCV,
  showOther,
  showSummaryAndDetailedCV,
  showMainContent,
}) => {
  return (
    <div>
      {!showMainContent && (
        <nav className="navbar">
          <ul>
            {showHome && (
              <li>
                <Link to="/">Home</Link>
              </li>
            )}
            {showSummaryAndDetailedCV && (
              <li>
                <Link to="/summaryanddetailedcv">Home</Link>
              </li>
            )}
            {showDetailedCV && (
              <li>
                <Link to="/detailedcv">Detailed CV</Link>
              </li>
            )}
            {showOther && (
              <li>
                <Link to="/otherthings">Other things</Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </div>
  );
};

function AllRoutes(props) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const location = useLocation();
  const navigate = useNavigate();

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

  useEffect(() => {
    if (screenWidth > 1000) navigate("/maincontent");
    else if (
      screenWidth > 768 &&
      screenWidth < 1000 &&
      location.pathname === "/"
    ) {
      navigate("/summaryanddetailedcv");
    } else if (
      screenWidth <= 768 &&
      location.pathname === "/summaryanddetailedcv"
    ) {
      navigate("/");
    } else if (
      screenWidth > 768 &&
      screenWidth < 1000 &&
      location.pathname === "/detailedcv"
    ) {
      navigate("/summaryanddetailedcv");
    }
  }, [location, screenWidth, navigate]);

  return (
    <HeaderProvider>
      <div className="main-frame">
        <Header />
        <Navigation
          showHome={screenWidth <= 768}
          showDetailedCV={
            screenWidth <= 768 ||
            (screenWidth < 1000 && location.pathname === "/otherthings")
          }
          showOther={
            screenWidth <= 768 ||
            (screenWidth < 1000 &&
              location.pathname === "/summaryanddetailedcv")
          }
          showSummaryAndDetailedCV={
            screenWidth > 768 &&
            screenWidth < 1000 &&
            (location.pathname === "/otherthings" ||
              location.pathname === "/summaryanddetailedcv")
          }
          showMainContent={screenWidth > 1000}
        />
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/detailedcv" element={<DetailedCV />} />
          <Route path="/otherthings" element={<OtherThings />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route
            path="/summaryanddetailedcv"
            element={<SummaryAndDetailedCV />}
          />
          <Route path="/maincontent" element={<MainContent />} />
        </Routes>
      </div>
    </HeaderProvider>
  );
}

export default AllRoutes;

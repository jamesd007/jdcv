import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import Introduction from "./Introduction";
import Summary from "./components/summary/Summary";
import DetailedCV from "./components/detailedcv/DetailedCV";
import OtherThings from "./components/otherthings/OtherThings";

function AllRoutes(props) {
  console.log("tedtest props=", props);
  return (
    <div
    // style={{ display: props.authenticated ? {} : "none" }}
    >
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/introduction">Introduction</Link>
          </li> */}
          <li>
            <Link to="/summary">Summary</Link>
          </li>
          <li>
            <Link to="/detailedcv">Detailed CV</Link>
          </li>
          <li>
            <Link to="/otherthings">Other things</Link>
          </li>
        </ul>
      </nav>
      {/* )} */}
      <Routes>
        <Route path="/" element={<Summary />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/detailedcv" element={<DetailedCV />} />
        <Route path="/otherthings" element={<OtherThings />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;

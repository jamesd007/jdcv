import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import Introduction from "./Introduction";

function AppStart() {
  const [splashed, setSplashed] = useState(false);

  useEffect(() => {
    console.log("tedtestAAA splashed=", splashed);
    //   if (splashed) {
    //     // Ensure state update occurs after the initial render of Introduction
    //     props.splashed(true);
    //   }
  }, [splashed]);

  return (
    <div>
      <Introduction endIntro={setSplashed} />
      {splashed && (
        <div>
          <BrowserRouter>
            <AllRoutes />
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default AppStart;

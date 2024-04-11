import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import Introduction from "./Introduction";

function App() {
  const [splashed, setSplashed] = useState(false);

  return (
    <div>
      <Introduction endIntro={setSplashed} />
      {splashed && (
        <BrowserRouter>
          <AllRoutes />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

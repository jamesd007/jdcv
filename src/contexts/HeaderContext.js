import React, { createContext, useState, useEffect, useContext } from "react";

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const headerContainerRef = document.getElementById("header-container");
    if (headerContainerRef) setHeaderHeight(headerContainerRef.clientHeight);

    const handleResize = () => {
      if (headerContainerRef) setHeaderHeight(headerContainerRef.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderContext.Provider value={{ headerHeight, setHeaderHeight }}>
      {children}
    </HeaderContext.Provider>
  );
};

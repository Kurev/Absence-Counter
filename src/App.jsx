import Footer from "./Components/Footer/footer";
import List from "./Components/List/list";
import Navbar from "./Components/Navbar/Navbar";
import React, { useState } from "react";

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <>
      <div
        className={`h-svh w-full px-[30%] flex flex-col ${
          isLightMode ? "bg-white text-black" : "bg-[#060610] text-white"
        }`}
      >
        <Navbar toggleTheme={toggleTheme} isLightMode={isLightMode} />
        <div
          className="flex-1 overflow-y-scroll"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <List isLightMode={isLightMode} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
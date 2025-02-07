import { useState } from "react";
import "./App.css";
import HeaderContext from "./contexts/Context";
import Header from "./layout/Header";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isWelcome, setWelcome] = useState(true);
  document.title = "Truong Tam CV";
  return (
    <>
      <HeaderContext.Provider value={{ isDarkMode, isWelcome, setDarkMode, setWelcome }}>
        <Header />
      </HeaderContext.Provider>
    </>
  );
}

export default App;

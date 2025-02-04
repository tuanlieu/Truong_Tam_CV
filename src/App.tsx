import { useState } from "react";
import "./App.css";
import HeaderContext from "./components/contexts/Context";
import Header from "./layout/Header";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isWelcome, setWelcome] = useState(true);
  return (
    <>
      <HeaderContext.Provider value={{ isDarkMode, isWelcome, setDarkMode, setWelcome }}>
        <Header />
      </HeaderContext.Provider>
    </>
  );
}

export default App;

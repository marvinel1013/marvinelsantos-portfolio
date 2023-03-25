import React, { useState } from "react";
import MiniMenuBar from "./components/mini_menu_bar/MiniMenuBar";
import NavBar from "./components/navbar/NavBar";
import About from "./components/section/About";
import Contact from "./components/section/Contact";
import Hero from "./components/section/Hero";
import Projects from "./components/section/Projects";
import Skills from "./components/section/Skills";
import MainPage from "./pages/MainPage";

function App() {
  //Darkmode Theme
  const [darkmode, setDarkmode] = useState(true);

  const handleToggleDarkmode = () => {
    setDarkmode((prevMode) => !prevMode);
  };

  return (
    <div className={darkmode ? "dark" : " "}>
      <div className="dark:bg-dark bg-light">
        <nav>
          <NavBar />
        </nav>
        <main>
          <MainPage />
        </main>
        <MiniMenuBar
          handleToggleDarkmode={handleToggleDarkmode}
          darkMode={darkmode}
        />
      </div>
    </div>
  );
}

export default App;

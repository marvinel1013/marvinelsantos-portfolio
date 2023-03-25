import React, { useState } from "react";
import NavBar from "./components/navbar/NavBar";
import About from "./components/section/About";
import Hero from "./components/section/Hero";
import Skills from "./components/section/Skills";

function App() {
  //Darkmode Theme
  const [darkmode, setDarkmode] = useState(false);

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
          {/* Hero Section */}
          <div>
            <Hero />
          </div>

          {/* About Section */}
          <div>
            <About />
          </div>

          {/* Skills Section */}
          <div>
            <Skills />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

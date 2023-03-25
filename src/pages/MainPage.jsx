import React from "react";
import About from "../components/section/About";
import Contact from "../components/section/Contact";
import Hero from "../components/section/Hero";
import Projects from "../components/section/Projects";
import Skills from "../components/section/Skills";

function MainPage() {
  return (
    <div>
      {/* Hero Section */}
      <div name="home">
        <Hero />
      </div>

      {/* About Section */}
      <div name="about">
        <About />
      </div>

      {/* Skills Section */}
      <div name="skills">
        <Skills />
      </div>

      {/* Projects Section */}
      <div name="projects">
        <Projects />
      </div>

      {/* Contact Section */}
      <div name="contact">
        <Contact />
      </div>

      {/* Mini Menu Bar */}
    </div>
  );
}

export default MainPage;

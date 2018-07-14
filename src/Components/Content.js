import React from "react";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import LandingPage from "./LandingPage";
import Nav from "./Nav.js";

const Content = props => {
  return (
    <div>
      <Nav />
      <LandingPage />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default Content;

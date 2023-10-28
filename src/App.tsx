import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <div id="Skills">
        <Skills/>
      </div>
      <section>
        <Parallax />
      </section>
      <div id="Portfolio">
        <Portfolio />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;

import React from "react";
import Navbar from "./components/navbar/Navbar.js";
import Hero from "./components/hero/Hero.js";
import About from "./components/about/About.js";
import Services from "./components/services/Services.js";
import Footer from "./components/footer/Footer.js";
import Skills from "./components/skills/Skills.js";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;

import React from "react";
import { Element } from "react-scroll";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Skills from "../Skills/Skills";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Element name="home">
        <Banner />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="portfolio">
        <Portfolio />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default Home;

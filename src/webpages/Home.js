import React from "react";
import Hero from "../sections/Hero";
import Findyourskin from "../sections/Findyourskin";
import Generateroutine from "../sections/Generateroutine";
//import Forum from "../sections/Forum";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

import "../styles/General.css";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Findyourskin />
      <Generateroutine />
     {/*  <Forum /> */}
      <About />
      <Contact />
       <Footer />
    </div>
  );
};
export default Home;

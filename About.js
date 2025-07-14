import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import React from 'react'
import Footer from "../components/Footer";
import Aboutus from "../components/About-us";

function About() {
  return (
    <>
     <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg="./assets/night.jpg"
    title="About"
   
    btnClass="hide"
    />
    <Aboutus/>
      <Footer/>
    </>
  )
}

export default About
import React from 'react'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
function Contact() {
  return (
    <>  <Navbar/>
    <Hero
    cName="hero"
    heroImg="/assets/2.jpg"
    title="Contact"
    btnClass="show"
    />
    <ContactForm/>
      <Footer/>
      </>
  )
}

export default Contact
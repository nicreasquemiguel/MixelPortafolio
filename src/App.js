import React from 'react'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';


function App() {

  return (
    <div >
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Work/>


      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;

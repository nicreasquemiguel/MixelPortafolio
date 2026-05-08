import React from 'react'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import GitHubActivity from './components/GitHubActivity';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';


function App() {

  return (
    <div className="pt-12">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <GitHubActivity/>
      <Experience/>
      <Work/>


      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;

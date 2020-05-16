import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./Header/Header";
import About from "./About-me/About";
import Skills from "./My-skills/Skills";
import Remote from "./Remote-work/Remote";
import Contact from "./Contact-me/Contact-me";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Skills/>
      <Remote/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

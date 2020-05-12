import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./Header/Header";
import About from "./About-me/About";
import Skills from "./My-skills/Skills";

function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;

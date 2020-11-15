import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./Header/Header";
import About from "./About-me/About";
import Skills from "./My-skills/Skills";
import Remote from "./Remote-work/Remote";
import Contact from "./Contact-me/Contact-me";
import Footer from "./Footer/Footer";
import MyWorks from "./My-works/My-works";

function App() {
  return (
    <div>

      <About/>
        {
            false && <Contact/>
        }
      {/*<Skills/>*/}
      {/*<MyWorks/>*/}
      {/*<Remote/>*/}

      {/*<Footer/>*/}
    </div>
  );
}

export default App;

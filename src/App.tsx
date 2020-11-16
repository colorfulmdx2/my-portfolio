import React from 'react';
import './App.css';
import Contact from "./Contact-me/Contact-me";
import About from "./About-me/About";
//@ts-ignore
import _video from "./assets/video/blue1.m4v";

function App() {
    return (
        <div className={'app'}>

            <video height="150%" width="auto" src={_video} preload="auto" autoPlay={true}
                   loop={true} muted={true}></video>

            <About/>

            {
                false && <Contact/>
            }

        </div>
    );
}

export default App;

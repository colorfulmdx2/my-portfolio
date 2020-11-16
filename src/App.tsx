import React from 'react';
import './App.css';

import About from "./About-me/About";
//@ts-ignore
import _video from "./assets/video/blue.m4v";

function App() {
    return (
        <div className={'app'}>

            <video height="150%" width="auto" src={_video} preload="auto" autoPlay={true}
                   loop={true} muted={true}></video>

            <About/>

        </div>
    );
}

export default App;

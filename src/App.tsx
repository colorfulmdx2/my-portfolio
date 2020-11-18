import React, {useState} from 'react';
import './App.css';
import {Main} from "./_a1 - main/Main";
//@ts-ignore
import _video from "./assets/video/blue.m4v";
import {About} from "./_a3 - about/About";
//@ts-ignore
import Fade from 'react-reveal/Fade';


export const App = () => {

    const [about, setAbout] = useState<boolean>(false)
    const aboutHandler = () => {
        setAbout(!about)
    }

    return (
        <div className={'app'}>

            <Main aboutHandler={aboutHandler}/>


            <About aboutHandler={aboutHandler}
                   about={about}
            />


            {/* <video height="150%" width="auto" src={_video} preload="auto" autoPlay={true}
                   loop={true} muted={true}></video>*/}
        </div>
    );
}



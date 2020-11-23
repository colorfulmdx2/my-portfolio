import React, {useState} from 'react';
import './App.css';
import {Main} from "./_a1 - main/Main";
import {About} from "./_a3 - about/About";
import {Resume} from "./_a4 - resume/Resume";


export const App = () => {

    const [about, setAbout] = useState<boolean>(false)
    const aboutHandler = () => {
        setAbout(!about)
    }

    const [resume, setResume] = useState<boolean>(false)
    const resumeHandler = () => {
        setResume(!resume)
    }

    return (
        <div className={'app'}>

            <Main aboutHandler={aboutHandler}
                  resumeHandler={resumeHandler}/>


            <About aboutHandler={aboutHandler}
                   about={about}
            />

            <Resume resumeHandler={resumeHandler}
                    resume={resume}/>


            {/* <video height="150%" width="auto" src={_video} preload="auto" autoPlay={true}
                   loop={true} muted={true}></video>*/}
        </div>
    );
}



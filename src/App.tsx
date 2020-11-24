import React, {useState} from 'react';
import './App.css';
import {Main} from "./_a1 - main/Main";
import {About} from "./_a3 - about/About";
import {Resume} from "./_a4 - resume/Resume";
import {Portfolio} from "./_a5 - portfolio/Portfolio";


export const App = () => {

    const [about, setAbout] = useState<boolean>(false)
    const aboutHandler = () => {
        setAbout(!about)
    }

    const [resume, setResume] = useState<boolean>(false)
    const resumeHandler = () => {
        setResume(!resume)
    }

    const [portfolio, setPortfolio] = useState<boolean>(true)
    const portfolioHandler = () => {
        setPortfolio(!portfolio)
    }

    return (
        <div className={'app'}>

            <Main aboutHandler={aboutHandler}
                  resumeHandler={resumeHandler}
                  portfolioHandler={portfolioHandler}/>


            <About aboutHandler={aboutHandler}
                   about={about}
            />

            <Resume resumeHandler={resumeHandler}
                    resume={resume}/>

            <Portfolio portfolioHandler={portfolioHandler}
                       portfolio={portfolio}
            />


            {/* <video height="150%" width="auto" src={_video} preload="auto" autoPlay={true}
                   loop={true} muted={true}></video>*/}
        </div>
    );
}



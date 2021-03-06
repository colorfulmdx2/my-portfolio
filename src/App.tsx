import React, {useState} from 'react';
import './App.css';
import {Main} from "./_a1 - main/Main";
import {About} from "./_a3 - about/About";
import {Resume} from "./_a4 - resume/Resume";
import {Portfolio} from "./_a5 - portfolio/Portfolio";
import {Contacts} from "./_a6 - contacts/Contacts";


export const App = () => {

    const [about, setAbout] = useState<boolean>(false)
    const aboutHandler = () => {
        setAbout(!about)
    }

    const [resume, setResume] = useState<boolean>(false)
    const resumeHandler = () => {
        setResume(!resume)
    }

    const [portfolio, setPortfolio] = useState<boolean>(false)
    const portfolioHandler = () => {
        setPortfolio(!portfolio)
    }

    const [contacts, setContacts] = useState<boolean>(false)
    const contactsHandler = () => {
        setContacts(!contacts)
    }

    return (
        <div className={'app'}>

            <Main aboutHandler={aboutHandler}
                  resumeHandler={resumeHandler}
                  portfolioHandler={portfolioHandler}
                  contactsHandler={contactsHandler}
            />


            <About aboutHandler={aboutHandler}
                   about={about}
            />

            <Resume resumeHandler={resumeHandler}
                    resume={resume}/>

            <Portfolio portfolioHandler={portfolioHandler}
                       portfolio={portfolio}
            />

            <Contacts contacts={contacts}
                      contactsHandler={contactsHandler}
            />


            {/* <video height="150%" width="auto" src={_video} preload="auto" autoPlay={true}
                   loop={true} muted={true}></video>*/}
        </div>
    );
}



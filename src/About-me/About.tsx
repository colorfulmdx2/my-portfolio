import React from 'react';
import styleAbout from './About.module.scss'
import '../container/Container.css'


const About = () => {
    return (
        <div className={styleAbout.about}>
            <div className={styleAbout.mainHeading}>Viktor Berezovskyi</div>
            <div className={styleAbout.subHeading}>I'm developer</div>
            <div className={styleAbout.sideMenu}>
                <div className={styleAbout.sideLanguages}>

                    <ul>
                        <li>
                            <span>ENG</span>
                        </li>
                    </ul>
                </div>
                <div className={styleAbout.sidesContacts}>
                    Sicial Media
                    {/*<ul>*/}
                    {/*    <li className={styleAbout.logoTwitter}  ><a><i></i></a></li>*/}
                    {/*    <li className={styleAbout.logoFaceBook} ><a><i></i></a></li>*/}
                    {/*    <li className={styleAbout.logoLinkedIn} ><a><i></i></a></li>*/}
                    {/*    <li className={styleAbout.logoGitHub}   ><a><i></i></a></li>*/}
                    {/*    <li className={styleAbout.logoInstagram}><a><i></i></a></li>*/}
                    {/*</ul>*/}
                </div>
            </div>

        </div>
    )
}

export default About;
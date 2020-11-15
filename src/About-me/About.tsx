import React, {useEffect, useState} from 'react';
import style from './About.module.scss'
// import '../container/Container.css'
import twitter from '../assets/images/twitter.svg'
import facebook from '../assets/images/facebook.svg'
import git from '../assets/images/git-hub.svg'
import instagram from '../assets/images/instagram.svg'
import linked from '../assets/images/linked-in.svg'
import Header from "../Header/Header";
// @ts-ignore
import _video from '../assets/video/Fuego_de_Refineria.mp4'


const About = () => {

    const [num, setNum] = useState(0);



    useEffect( () => {
        setTimeout( () => setNum( (i) => {
            let newI = i + 1;
            if (newI === 2) newI = 0;  //(newI === 2) +1 если хотим еще одно слово
            return newI
        }), 3000);
    }, [num])


    return (
        <div className={style.about}
        onClick={() => {}}>
            <video height="auto" width="100%" className={style.video} src={_video} preload="auto" autoPlay={true} loop={true} poster=""></video>

            <Header />

            <div className={style.headingsWrapper}>
                <div className={style.mainHeading}>Viktor Berezovskyi</div>
                <div className={style.subHeading}>I'm a
                    <div className={(num === 0) ? style.span : style.span + ' ' + style.hidden_span}><span style={{color: 'white'}}>{'Developer'}</span></div>
                    <div className={(num === 1) ? style.span : style.span + ' ' + style.hidden_span}><span style={{color: 'white'}}>{'Freelancer'}</span></div>
                </div>
            </div>


           <div className={style.elementsContainer}>
               <div className={style.sideLanguages}>
                   <div className={style.leng}>EN</div>
                   <div className={style.leng}>RU</div>
               </div>
               <div className={style.sidesContacts}>
                   <div className={style.contactElement}><a><img src={twitter}/></a></div>
                   <div className={style.contactElement}><a><img src={facebook}/></a></div>
                   <div className={style.contactElement}><a><img src={linked}/></a></div>
                   <div className={style.contactElement}><a><img src={git}/></a></div>
                   <div className={style.contactElement}><a><img src={instagram}/></a></div>
               </div>
           </div>


        </div>
    )
}

export default About;

/*
return (
    <div className={styleAbout.about}>
        <Header/>
        <div className={styleAbout.headings}>
            <div className={styleAbout.headingsWrapper}>
                <div className={styleAbout.mainHeading}>Viktor Berezovskyi</div>
                <div className={styleAbout.subHeading}>I'm a developer</div>
            </div>
        </div>
        <div className={styleAbout.sideMenu}>
            <div className={styleAbout.sideLanguages}>
                <div>ENG</div>
                <div>RU</div>
            </div>
            <div className={styleAbout.sidesContacts}>
                <div className={styleAbout.contactElement}><a><img src={twitter}/></a></div>
                <div className={styleAbout.contactElement}><a><img src={facebook}/></a></div>
                <div className={styleAbout.contactElement}><a><img src={linked}/></a></div>
                <div className={styleAbout.contactElement}><a><img src={git}/></a></div>
                <div className={styleAbout.contactElement}><a><img src={instagram}/></a></div>
            </div>
        </div>

    </div>
)*/

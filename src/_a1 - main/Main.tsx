import React, {useEffect, useState} from 'react';
import style from './Main.module.scss'
// import '../container/Container.css'
import twitter from '../assets/images/twitter.svg'
import facebook from '../assets/images/facebook.svg'
import git from '../assets/images/git-hub.svg'
import instagram from '../assets/images/instagram.svg'
import linked from '../assets/images/linked-in.svg'
import Header from "../_a2 - header/Header";

type MainPropsType = {
    aboutHandler: () => void
    resumeHandler: () => void
    portfolioHandler: () => void
}

export const Main = (props: MainPropsType) => {

    const [num, setNum] = useState(0);


    useEffect(() => {
        setTimeout(() => setNum((i) => {
            let newI = i + 1;
            if (newI === 2) newI = 0;  //(newI === 2) +1 если хотим еще одно слово
            return newI
        }), 3000);
    }, [num])


    return (
        <div className={style.main}
             onClick={() => {
             }}>


            <Header aboutHandler={props.aboutHandler}
                    resumeHandler={props.resumeHandler}
                    portfolioHandler={props.portfolioHandler}
            />

            <div className={style.headingsWrapper}>
                <div className={style.mainHeading}>Viktor Berezovskyi</div>
                <div className={style.subHeading}>I'm a
                    <div className={(num === 0) ? style.span : style.span + ' ' + style.hidden_span}><span
                        style={{color: 'white'}}>{'Developer'}</span></div>
                    <div className={(num === 1) ? style.span : style.span + ' ' + style.hidden_span}><span
                        style={{color: 'white'}}>{'Freelancer'}</span></div>
                </div>
            </div>


            <div className={style.elementsContainer}>
                <div className={style.sideLanguages}>
                    <div className={style.leng}>EN</div>
                    <div className={style.leng}>RU</div>
                </div>
                <div className={style.sidesContacts}>
                    <div className={style.contactElement} ><a href='https://www.twitch.tv/'><img src={twitter}/></a></div>
                    <div className={style.contactElement} ><a href={'facebook.com'}><img src={facebook}/></a></div>
                    <div className={style.contactElement} ><a href={'twitter.com'}><img src={linked}/></a></div>
                    <div className={style.contactElement} ><a href={'twitter.com'}><img src={git}/></a></div>
                    <div className={style.contactElement} ><a href={'twitter.com'}><img src={instagram}/></a></div>
                </div>
            </div>


        </div>
    )
}




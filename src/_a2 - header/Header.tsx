import React, {useState} from 'react';
import style from './Header.module.scss'
import react from '../assets/images/react.svg'


type HeaderPropsType = {
    aboutHandler: () => void
}


const Header = (props: HeaderPropsType) => {

    const [burger, setBurger] = useState(false)

    const burgerChange = () => {
        setBurger(!burger)
    }


    return (
        <div className={style.header}>
            <div>
                <div className={style.content}>

                    <div className={style.logo}>
                        <img src={react}/>
                    </div>

                    <div className={style.navigation}>
                        <div className={style.link} onClick={() => {
                            props.aboutHandler()
                        }}>About
                        </div>
                        <div className={style.link}>Resume</div>
                        <div className={style.link}>Portfolio</div>
                        <div className={style.link}>Blog</div>
                        <div className={style.link}>Contact</div>
                    </div>

                    <div className={style.burger}
                         onClick={burgerChange}
                        /*onBlur={() => {setBurger(false)}}*/
                    >
                        {
                             <div className={style.small_menu_container} onClick={() => {
                                setBurger(false)
                            }}>
                                <div className={burger ? style.small_menu + ' ' + style.open : style.small_menu}>
                                    <div className={style.small_link} onClick={() => {props.aboutHandler()}}>About</div>
                                    <div className={style.small_link} onClick={() => {props.aboutHandler()}}>Resume</div>
                                    <div className={style.small_link} onClick={() => {props.aboutHandler()}}>Portfolio</div>
                                    <div className={style.small_link} onClick={() => {props.aboutHandler()}}>Blog</div>
                                    <div className={style.small_link} onClick={() => {props.aboutHandler()}}>Contact</div>

                                </div>
                            </div>
                        }
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Header;
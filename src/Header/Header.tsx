import React, {useState} from 'react';
import style from './Header.module.scss'
import '../container/Container.css'
import react from '../assets/images/react.svg'



const Header = () => {

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
                        <a href='/'>About</a>
                        <a href='/'>Resume</a>
                        <a href='/'>Portfolio</a>
                        <a href='/'>Blog</a>
                        <a href='/'>Contact</a>
                    </div>

                    <div className={style.burger}
                         onClick={burgerChange}
                         >
                    </div>

                    {
                       burger &&  <div className={style.small_menu_container} onClick={() => {setBurger(false)}}>
                            <div className={burger ? style.small_menu + ' ' + style.open : style.small_menu}>
                                <a href='/'>About</a>
                                <a href='/'>Resume</a>
                                <a href='/'>Portfolio</a>
                                <a href='/'>Blog</a>
                                <a href='/'>Contact</a>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default Header;
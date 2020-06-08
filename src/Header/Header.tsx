import React from 'react';
import styleHeader from './Header.module.scss'
import '../container/Container.css'
const Header = () => {
    return (
        <div className={styleHeader.header}>
            <div>
                <div className={styleHeader.content}>
                    <div className={styleHeader.logo}>
                        LOGO
                    </div>
                    <div className={styleHeader.navigation}>
                        <a href='/'>Home</a>
                        <a href='/'>Work</a>
                        <a href='/'>Services</a>
                        <a href='/'>Blog</a>
                        <a href='/'>Contacts</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
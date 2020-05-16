import React from 'react';
import styleFooter from './Footer.module.css'
import '../container/Container.css'


const Footer = () => {
    return (
        <div className={styleFooter.footer}>
            <div className='container'>
                <div className={styleFooter.content}>
                    <div className={styleFooter.title}><h2>Viktor Berezovskyi</h2></div>
                    <div className={styleFooter.inner}>
                        <div className={styleFooter.innerElement}></div>
                        <div className={styleFooter.innerElement}></div>
                        <div className={styleFooter.innerElement}></div>
                        <div className={styleFooter.innerElement}></div>
                    </div>
                    <div className={styleFooter.rights}><h2>©2020 All rights reserved</h2></div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
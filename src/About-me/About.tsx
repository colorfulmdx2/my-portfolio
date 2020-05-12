import React from 'react';
import styleAbout from './About.module.css'
import '../container/Container.css'


const About = () => {
    return (
        <div className={styleAbout.about}>
            <div className='container'>
                <div className={styleAbout.content}>
                    <div className={styleAbout.text}>
                        <p>Hi my name is Viktor Berezovskyi. Im front-end developer.</p>
                    </div>
                    <div className={styleAbout.img}>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;
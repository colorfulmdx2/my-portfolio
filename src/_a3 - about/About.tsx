import React, {useEffect} from "react";
import style from './About.module.scss'
import avatar from '../assets/images/mee.jpg'
import close from '../assets/images/x.png'

type AboutPropsType = {
    aboutHandler: () => void
    about: boolean
}

export const About = (props: AboutPropsType) => {


    return (


            <div className={props.about ? style.wrapper + ' ' + style.open : style.wrapper}>
                <div className={style.background}></div>
                <div className={style.content}>
                    <div onClick={() => {
                        props.aboutHandler()
                    }} className={style.close}><img src={close}/></div>

                    <div className={style.container}>


                        <div className={style.title_container}>

                            <div className={style.pre_title}>Get to know me</div>
                            <div className={style.post_title}>About Me</div>
                            <div className={style.line}></div>

                        </div>

                        <div className={style.info_container}>

                            <div className={style.info_photo}><img src={avatar}/></div>

                            <div className={style.info}>

                                <div className={style.info_title}>
                                    <div className={style.info_pre_title}>Who am i?</div>
                                    <div className={style.info_post_title}>I'm Viktor Berezovskyi, a front-end React
                                        developer
                                    </div>
                                </div>

                                <div className={style.info_info}>
                                    I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI
                                    designs and websites for years, which comply with the latest design trends. I help
                                    convert a
                                    vision and an idea into meaningful and useful products. Having a sharp eye for product
                                    evolution helps me prioritize tasks, iterate fast and deliver faster.
                                </div>

                            </div>
                        </div>


                    </div>
                </div>


            </div>
    )
}
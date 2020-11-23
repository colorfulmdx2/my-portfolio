import React from "react";
import style from './About.module.scss'
import avatar from '../assets/images/mee.jpg'
import {PageContainer} from "../components/page-container/Page-container";
import {AnimatedLine} from "../components/animated-line/Animated-line";
import fire from '../assets/images/skills-images/fire.png'
import image from '../assets/images/skills-images/image.png'
import circle from '../assets/images/skills-images/circle.png'
import web from '../assets/images/skills-images/web.png'
import responsive from '../assets/images/skills-images/responsive.png'
import rocket from '../assets/images/skills-images/rocket.png'

type AboutPropsType = {
    aboutHandler: () => void
    about: boolean
}

export const About = (props: AboutPropsType) => {


    return (
         <PageContainer onClickHandler={props.aboutHandler} trigger={props.about}>

             <div className={style.title_container}>

                 <div className={style.pre_title}>Get to know me</div>
                 <div className={style.post_title}>About Me</div>
                 <AnimatedLine/>

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

             <div className={style.services_container}>

                 <div className={style.services_pre_title}>Services i offer to my clients</div>

                 <div className={style.services_title}>My Services</div>

                 <div className={style.services}>

                     <div className={style.services_element_container}>
                        <div className={style.services_element}>
                            <img src={fire}/>
                            <div className={style.services_element_title}>Design Trends</div>
                            <div className={style.services_element_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                        </div>
                     </div>

                     <div className={style.services_element_container}>
                         <div className={style.services_element}>
                             <img src={image}/>
                             <div className={style.services_element_title}>PSD Design</div>
                             <div className={style.services_element_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                         </div>
                     </div>

                     <div className={style.services_element_container}>
                         <div className={style.services_element}>
                             <img src={circle}/>
                             <div className={style.services_element_title}>Customer Support</div>
                             <div className={style.services_element_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                         </div>
                     </div>

                     <div className={style.services_element_container}>
                         <div className={style.services_element}>
                             <img src={web}/>
                             <div className={style.services_element_title}>Web Development</div>
                             <div className={style.services_element_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                         </div>
                     </div>

                     <div className={style.services_element_container}>
                         <div className={style.services_element}>
                             <img src={responsive}/>
                             <div className={style.services_element_title}>Fully Responsive</div>
                             <div className={style.services_element_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                         </div>
                     </div>

                     <div className={style.services_element_container}>
                         <div className={style.services_element}>
                             <img src={rocket}/>
                             <div className={style.services_element_title}>Branding</div>
                             <div className={style.services_element_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                         </div>
                     </div>

                 </div>

             </div>

         </PageContainer>
    )
}


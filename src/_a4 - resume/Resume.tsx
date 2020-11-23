import React from "react";
import {PageContainer} from "../components/page-container/Page-container";
import style from './Resume.module.scss'
import {AnimatedLine} from "../components/animated-line/Animated-line";

type ResumePropsType = {
    resumeHandler: () => void
    resume: boolean
}

type SkillPropsType = {
    title: string
    percentage: string
}

export const Resume = (props: ResumePropsType) => {



    return (
        <>
            <PageContainer onClickHandler={props.resumeHandler}
                           trigger={props.resume}>

               <div className={style.title}>

                   <div className={style.title__pre_title}>Check out my Resume</div>

                   <div className={style.title__title}>Resume</div>

               </div>

                <AnimatedLine/>

                <div className={style.skill_lines}>

                    <div className={style.skill_lines__pre_title}>My level of knowledge in some tools</div>

                    <div className={style.skill_lines__title}>My Skills</div>

                    <div className={style.skill_lines__lines_container}>

                        <Skill title={'HTML/CSS'} percentage={'95%'}/>
                        <Skill title={'Web design'} percentage={'75%'}/>
                        <Skill title={'React JS'} percentage={'95%'}/>
                        <Skill title={'JavaScript'} percentage={'90%'}/>
                        <Skill title={'TypeScript'} percentage={'80%'}/>
                        <Skill title={'Redux'} percentage={'70%'}/>

                    </div>

                </div>

                <div className={style.more_skills}>
                    <span>And more...</span>
                    SCSS, SASS, Module CSS, React-Router-Dom, Axios, ClassNames, jest,
                    Material UI, Ant Design, React Amimation, Node.Js, Yarn, NPM, React Reveal
                </div>

            </PageContainer>
        </>
    )
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill_container}>

            <div className={style.skill_info}
                 style={{width: `${props.percentage}`}}
            >
                <div className={style.skill_info__element}>{props.title}</div>
                <div className={style.skill_info__element}>{props.percentage}</div>
            </div>

            <div className={style.skill_line}>
                <div className={style.skill_line__first}
                     style={{width: `${props.percentage}`}}
                ></div>
                <div className={style.skill_line__last}></div>
            </div>

        </div>
    )
}
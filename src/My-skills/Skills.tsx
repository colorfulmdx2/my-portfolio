import React from 'react';
import styleSkills from './Skills.module.css'
import '../container/Container.css'

const MySkillsElement = () => {
    return (
        <div className={styleSkills.element}>
            <div className={styleSkills.img}></div>
            <div className={styleSkills.title}><h2>React</h2></div>
            <div className={styleSkills.description}><h3>Skill description</h3></div>
        </div>
    )
}

const Skills = () => {
    return (
        <div className={styleSkills.skills}>
            <div className='container'>
                <div className={styleSkills.content}>
                    <div className={styleSkills.mySkills}><h2>My Skills</h2></div>
                    <MySkillsElement/>
                    <MySkillsElement/>
                    <MySkillsElement/>
                </div>
            </div>
        </div>
    )
}

export default Skills;
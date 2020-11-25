import React from "react";
import tag from '../../assets/contacts-images/tag.png'
import style from './SkillLabel.module.scss'
type SkillLabelPropsType = {
    title: string
}

export const SkillLabel = (props: SkillLabelPropsType) => {
    return (
            <span className={style.skill}>{props.title}</span>
    )
}
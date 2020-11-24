import React from "react";
import {PageContainer} from "../components/page-container/Page-container";
import style from './Portfolio.module.scss'
import {AnimatedLine} from "../components/animated-line/Animated-line";
import network from '../assets/portfolio-images/network.png'
import movies from '../assets/portfolio-images/movies.jpg'
import todolist from '../assets/portfolio-images/todo.png'

type PortfolioPropsType = {
    portfolioHandler: () => void
    portfolio: boolean
}


const divStyle = {
    backgroundImage: 'url(' + network + ')',
};

export const Portfolio = (props: PortfolioPropsType) => {

    return (
        <PageContainer onClickHandler={props.portfolioHandler}
                       trigger={props.portfolio}>

            <div className={style.title}>

                <div className={style.title__pre_title}>Showcasing some of my best work</div>

                <div className={style.title__title}>Portfolio</div>

                <AnimatedLine/>

                <div className={style.cases}>

                    <Project image={network} title={'Social network'}/>
                    <Project image={movies} title={'Top movies'}/>
                    <Project image={todolist} title={'To Do list'}/>


                </div>


            </div>

        </PageContainer>
    )
}

type ProjectType = {
    image: string
    title: string
}
export const Project = (props: ProjectType) => {

    const image = {
        backgroundImage: 'url(' + props.image + ')',
    };

    return (
        <div style={image} className={style.cases_element}>
            <div className={style.cases_element__link}>
                <div className={style.after}>
                    <div className={style.cases_element__link_container}>
                        <div className={style.cases_element__link__title}>{props.title}</div>
                        <div className={style.cases_element__link__more_info}>More info</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
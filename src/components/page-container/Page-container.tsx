import React from "react";
import style from './Page-container.module.scss'
import close from "../../assets/images/x.png";
import avatar from "../../assets/images/mee.jpg";

type PageContainerPropsType = {
    children: any
    onClickHandler: () => void
    trigger: boolean
}

export const PageContainer = (props: PageContainerPropsType) => {
    return (
        <>
            <div className={props.trigger ? style.wrapper + ' ' + style.open : style.wrapper}>
                <div className={style.background}></div>
                <div className={style.content}>
                    <div onClick={() => {
                        props.onClickHandler()
                    }} className={style.close}><img src={close}/></div>

                    <div className={style.container}>

                        {props.children}

                    </div>
                </div>


            </div>
        </>
    )
}

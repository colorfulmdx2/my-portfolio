import React from 'react';
import styleMyWorks from './My-works.module.scss'
import '../container/Container.css'
import WorkElement from "./Work-element/Work-element";
const MyWorks = () => {
    return (
        <div className={styleMyWorks.myWorks}>
        <div className={'container'}>
            <div className={styleMyWorks.content}>
                <div className={styleMyWorks.title}>My cases</div>
                <WorkElement />
                <WorkElement />
            </div>
        </div>
        </div>

    )
}

export default MyWorks;
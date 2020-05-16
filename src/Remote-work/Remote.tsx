import React from 'react';
import styleRemote from './Remote.module.css'
import '../container/Container.css'

const Remote = () => {
    return (
        <div className={styleRemote.remote}>
            <div className='container'>
                <div className={styleRemote.content}>
                    <h2>Dont mind to work remote</h2>
                    <div className={styleRemote.button}><button>Hire me</button></div>
                </div>
            </div>
        </div>
    )
}



export default Remote;
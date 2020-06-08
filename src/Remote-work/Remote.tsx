import React from 'react';
import styleRemote from './Remote.module.css'
import '../container/Container.css'

const Remote = () => {
    return (
        <div className={styleRemote.remote}>
            <div className='container'>
                <div className={styleRemote.content}>
                    <h2>I Am Available For Freelancer</h2>
                    <div className={styleRemote.button}><button>Hire me</button></div>
                </div>
            </div>
        </div>
    )
}



export default Remote;
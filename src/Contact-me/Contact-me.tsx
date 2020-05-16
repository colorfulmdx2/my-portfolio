import React from 'react';
import styleContact from './Contact-me.module.css'
import '../container/Container.css'

const Contact = () => {
    return (
        <div className={styleContact.contact}>
            <div className='container'>
                <div className={styleContact.content}>
                    <div className={styleContact.form}>
                        <div><h2>Contact me</h2></div>
                        <div><input/></div>
                        <div><input/></div>
                        <div><textarea></textarea></div>
                        <div className={styleContact.button}><button>Sent</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Contact;
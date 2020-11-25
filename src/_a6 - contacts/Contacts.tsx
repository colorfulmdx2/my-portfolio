import React from "react";
import {PageContainer} from "../components/page-container/Page-container";
import style from './Contacts.module.scss'
import {AnimatedLine} from "../components/animated-line/Animated-line";
import {useFormik} from "formik";
import {Input} from "../components/input/Input";
import telegram_img from '../assets/contacts-images/telegram.png'
import email_img from '../assets/contacts-images/email.png'
import map_img from '../assets/contacts-images/location.png'
import name_img from '../assets/contacts-images/name.png'

type ContactsPropsType = {
    contactsHandler: () => void
    contacts: boolean
}


export const Contacts = (props: ContactsPropsType) => {

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: '',
            name: '',
            subject: '',
            message: ''
        },
        onSubmit: values => {
            console.log(values)
        }
    })

    return (
        <PageContainer onClickHandler={props.contactsHandler} trigger={props.contacts}>

            <div className={style.title}>

                <div className={style.title__pre_title}>Feel free to contact me anytime</div>

                <div className={style.title__title}>Get in Touch</div>

            </div>

            <AnimatedLine/>

            <div className={style.contacts}>

                <div className={style.contacts__form_container}>

                    <form onSubmit={formik.handleSubmit}>
                        <div className={style.form__title}>Message Me</div>

                        <div className={style.form__first_row}>
                            <input type={'text'} placeholder={'Name'}  {...formik.getFieldProps('name')}/>
                            <input type={'text'} placeholder={'Email'}  {...formik.getFieldProps('email')}/>
                        </div>

                        <div className={style.form__second_row}>
                            <input type={'text'} placeholder={'Subject'}  {...formik.getFieldProps('subject')}/>
                            <textarea placeholder={'Your message'} {...formik.getFieldProps('message')}/>
                        </div>

                        <button>Send Message</button>
                    </form>

                    <div className={style.links_container}>
                        <div className={style.links_container__title}>Contact Info</div>
                        <div className={style.links_container__post_title}>Always available for freelance work if the right project comes along, Feel free to contact me!</div>

                        <div className={style.links}>

                            <div className={style.links_contacts}>

                                <div className={style.links_contacts__element}>
                                    <img src={name_img}/>
                                   <div className={style.links_contacts__element__title_container}>
                                       <div className={style.links_contacts__element__title}>Name</div>
                                       <div className={style.links_contacts__element__post_title}>Viktor Berezovskyi</div>
                                   </div>
                                </div>

                                <div className={style.links_contacts__element}>

                                    <img src={map_img}/>
                                    <div className={style.links_contacts__element__title_container}>
                                        <div className={style.links_contacts__element__title}>Location</div>
                                        <div className={style.links_contacts__element__post_title}>Russia, Moscow</div>
                                    </div>

                                </div>

                                <div className={style.links_contacts__element}>

                                    <img src={telegram_img}/>
                                    <div className={style.links_contacts__element__title_container}>
                                        <div className={style.links_contacts__element__title}>Telegram</div>
                                        <div className={style.links_contacts__element__post_title}>
                                            <a href="https://t.me/berezovskiyviktor">@berezovskiyviktor</a>
                                        </div>
                                    </div>

                                </div>
                                <div className={style.links_contacts__element}>
                                    <img src={email_img}/>
                                    <div className={style.links_contacts__element__title_container}>
                                        <div className={style.links_contacts__element__title}>Email Me</div>
                                        <div className={style.links_contacts__element__post_title}>colorfulmdx2@gmail.com</div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </PageContainer>
    )
}
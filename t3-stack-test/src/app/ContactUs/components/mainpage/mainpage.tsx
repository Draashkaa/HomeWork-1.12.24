'use client'
import React,{useState} from "react";
import { useRef } from 'react';
import styles from './mainpage.module.css'

export interface MainpageProps{
}

export const Mainpage: React.FC<MainpageProps> = (props) => {

    const {} = {...props}
    const [mainState, setmainState] = useState({
        CommunicationPrefer:'',
        messageText:'',
    })

    const NameRef = useRef(null)
    const EmailRef = useRef(null)
    const PhoneRef = useRef(null)

    const onChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setmainState({...mainState, [name]:value})
    }

    const onChangeTextArea = (e:  React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name,value} = e.target
        setmainState({...mainState, [name]:value})
    }

    const onSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (NameRef.current){
        console.log(Object.values(useState)[0])
        alert(`
            Name: ${NameRef!.current!.value} 
            Email: ${EmailRef!.current!.value} 
            Phone: ${PhoneRef!.current!.value} 
            Prefer communication: ${Object.values(mainState)[0]} 
            Message text: ${Object.values(mainState)[1]}`)
        setmainState({
            CommunicationPrefer:'',
            messageText:'',
        })
        }
    }


    return(   
    <div className={styles.mainDiv}>
        
        <p className={styles.mainP}><p className={styles.headingP}>Contact Us</p>Get in touch with us! Whether you have
                a questions, feedback, or just want to say hello,
                we`re here for you</p>
        <form onSubmit={onSubmit} className={styles.mainform}>
            <label htmlFor='heading' className={styles.heading}>Send us a Message</label>
            <input className={styles.input} name='Name' ref={NameRef} placeholder='Name'/>
            <input className={styles.input} name='Email' ref={EmailRef} placeholder='Email'/>
            <input className={styles.input} name='Phone' ref={PhoneRef} placeholder='Phone'/>
            <label htmlFor='heading' className={styles.preferred}>Preferred contact method of communicaton</label>
            <div className={styles.Communication}>
            <input type='radio' title="email" id='Email' name='CommunicationPrefer' value='email' onChange={onChange}/>
            <label>Email</label>
            <input type='radio' title="phone" id='Phone' name='CommunicationPrefer' value='phone' onChange={onChange}/>
            <label>Phone</label>
            </div>
            <textarea className={styles.inputMessage} placeholder='Message' rows={9} onChange={onChangeTextArea} value={mainState.messageText} name='messageText'/>
            <button type='submit' className={styles.btn}>Submit</button>
        </form>
    </div>
    )
}
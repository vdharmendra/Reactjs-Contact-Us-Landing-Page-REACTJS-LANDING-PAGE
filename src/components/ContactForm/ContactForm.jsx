import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import {MdMessage } from "react-icons/md";
import {MdPhone } from "react-icons/md";
import {HiMail } from "react-icons/hi";
import { useState } from "react";
const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    
    const onSubmit = (e) => {
        e.preventDefault();
        setName(e.target[0].value);
        setEmail(e.target[1].value);
        setMessage(e.target[2].value);
            
        console.log(e);
        console.log("Name", e.target[0].value);
        console.log("Email", e.target[1].value);
        console.log("Message", e.target[2].value);
    }
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
                <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
                <Button text="VIA SUPPORT CALL" icon={<MdPhone  fontSize="24px" />} />
            </div>
            <Button isSecondray={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />} />

            <form action="/" onSubmit={onSubmit}>
                <div className={styles.form_control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"/>
                </div>

                <div className={styles.form_control}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"/>
                </div>

                <div className={styles.form_control}>
                    <label htmlFor="textarea">Meaasge</label>
                    <textarea name="textarea" rows="8" />
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "end",
                    }}
                >
                    <Button text="SUBMIT" />
                </div>
                <div>{name + "" + email + "" + message + ""}</div>
            </form>
        </div>
        <div className={styles.contact_image}>
            <img src="./img/contact.svg" alt="" />
        </div>
    </section>
  )
}

export default ContactForm;
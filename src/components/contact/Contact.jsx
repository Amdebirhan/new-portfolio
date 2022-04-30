import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import './contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xcudpqc', 'template_10sqeos', form.current, 't5NwrUse7ehNIih6Q')
            .then((result) => {
                e.target.reset();
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <section id="contact">
            <h5>Contact me</h5>
            <h2>Get In Touch</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>amdebirhanteshome@gmail.com</h5>
                        <a href="mailto:amdebirhanteshome@gmail.com" target={"_blank"}>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messanger</h4>
                        <h5>Amdebirhan Teshome</h5>
                        <a href="https://m.me/" target={"_blank"}>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+251936912096</h5>
                        <a href="https://api.whatsapp.com/send?" target={"_blank"}>Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='your full name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
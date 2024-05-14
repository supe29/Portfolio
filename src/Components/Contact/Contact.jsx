import React, { useState } from 'react';
import './Contact.css';
import theme_patern from '../../assets/theme_patern.png';
import call from '../../assets/call.png';
import mail from '../../assets/mail.png';
import map from '../../assets/map.png';
import Linkedin from '../../assets/LinkedIn_logo.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "4ac29761-f4df-4050-a939-b225f20787a8");

        const formDataEntries = Object.fromEntries(formData.entries());
        const json = JSON.stringify(formDataEntries);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
            // Clear form fields
            setFormData({ name: '', email: '', message: '' });
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>


                <div className="contact-section">
                    <div className="contact-left">
                        <p>I am currently avaliable to take new opportunities, so feel free to send me message about anythingthat you want me to work on. You can contact me here </p>
                        <div className="contact-details">
                            <div className="contact-detail">
                                <img src={mail} alt="" /> <p>kaustubh.supe@gmail.com</p>
                            </div>
                            <div className="contact-detail">
                                <img src={call} alt="" /> <p>+33751342600</p>
                            </div>
                            <div className="contact-detail">
                                <img src={map} alt="" /> <p>Paris, France</p>
                            </div>
                            <div className="contact-detail">
                                <a href="https://www.linkedin.com/in/kaustubh-supe/" target="_blank" rel="noopener noreferrer">
                                    <img src={Linkedin} alt="Linkedin" />
                                </a>
                            </div>

                        </div>
                    </div>
                    <form onSubmit={onSubmit} className="contact-right">
                        <label htmlFor="name">Your name</label>
                        <input type="text" placeholder='Enter your name' name='name' value={formData.name} onChange={handleInputChange} />
                        <label htmlFor="email">Your Email</label>
                        <input type="email" placeholder='Enter your email' name='email' value={formData.email} onChange={handleInputChange} />
                        <label htmlFor="message">Write your message</label>
                        <textarea name="message" rows="8" placeholder='Enter your message' value={formData.message} onChange={handleInputChange}></textarea>
                        <button type='submit' className="contact-submit">Submit now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;

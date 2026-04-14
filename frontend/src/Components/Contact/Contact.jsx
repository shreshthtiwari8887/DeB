import React from 'react';
import './Contact.css';
import Swal from 'sweetalert2'
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "a62f8582-9a7e-4468-836b-bf18375d58c4");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
            event.target.reset(); // Reset the form
        }
      };

  return (
    <section className="contact">
        <form onSubmit={onSubmit} >
            <h2>{t("Contact Us")}</h2>
            <div className="input-box">
                <label className='label'>{t("Full Name")}</label>
                <input type="text" className="field" placeholder={t("Enter your name")} name="name" required />
            </div>

            <div className="input-box">
                <label className='label'>{t("Email Address")}</label>
                <input type="email" className="field" placeholder={t("Enter your email")} name="email" required />
            </div>

            <div className="input-box">
                <label >{t("Your message")}</label>
                <textarea className="field mess" placeholder={t("Enter your message")} name="message" required></textarea>
            </div>

            <div className="button-container">
            <button type="submit" className="btn">{t("Send Message")}</button>

            </div>

        </form>
    </section>
  );
};

export default Contact;
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { AiOutlineMail, AiOutlineCloseCircle } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [isSend, setIsSet] = useState(false);

  const toggleInfo = () => {
    setIsSet(!isSend);
  };

  const sendMessageHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lwc5cov",
        "template_pt7vu1x",
        form.current,
        "jt0RrpX-zGuPhwNnS"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSet(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset(); //reset the fields from the form
  };
  return (
    <section id="contact">
      <h5>Let's Talk</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option_icon" />
            <h4>Email</h4>
            <h5>Papadakis.andone@gmail.com</h5>
            <a href="mailto:papadakis.andone@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option_icon" />
            <h4>Messenger</h4>
            <h5>Papadakis Antonios</h5>
            <a href="https://m.me/antonis.papadakis" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option_icon" />
            <h4>WhatsApp</h4>
            <h5>Papadakis Antonios</h5>
            <a
              href="https:/api.whatsapp.com/send?phone=+4917664801000"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendMessageHandler}>
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <label for="email">E-mail</label>
          <input type="email" name="email" placeholder="Your E-mail" required />
          <label for="message">Your Message</label>
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {isSend && (
            <div onClick={toggleInfo} className="form_msg-info">
              <p>Your message have been send</p>
              <AiOutlineCloseCircle className="form__close-icon" />
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

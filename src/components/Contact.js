import React from 'react';
import './Contact.css';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp,FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Connect with Me</h2>
      <div className="social-links">
        <a href="https://wa.me/+916282289862" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/____an___to____/profilecard/?igsh=MXVmdDh2NHExMjczdA==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/antojoseph2806/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/antojoseph2806" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=antomaruthaniyil@yahoo.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope/>
        </a>
      </div>
    </section>
  );
};

export default Contact;

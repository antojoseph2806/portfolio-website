import React from 'react';
import './Contact.css';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  // Detect if the user is on a mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Email link based on device
  const emailLink = isMobile
    ? "mailto:antomaruthaniyil@yahoo.com" // for mobile users, opens the default mail app
    : "https://mail.google.com/mail/?view=cm&fs=1&to=antomaruthaniyil@yahoo.com"; // for desktop, opens Gmail web

  return (
    <section className="contact">
      <h2>Connect with Me</h2>
      <div className="social-links">
        <a href="https://wa.me/+916282289862" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/anto_maruthaniyil/profilecard/?igsh=MXVmdDh2NHExMjczdA==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/antojoseph2806/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/antojoseph2806" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={emailLink} target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://youtube.com/@codecraftbyanto?si=Ji8PsmPatKz9J_zv" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>  
      </div>
    </section>
  );
};

export default Contact;

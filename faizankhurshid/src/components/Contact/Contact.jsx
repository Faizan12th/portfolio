import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-container">
        {/* Left Side - Contact Info */}
        <div className="contact-info glassy">
          <h3>Let's Connect</h3>
          <ul>
            <li>
              <a href="mailto:faizan@example.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="icon" /> faizan@example.com
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/faizan" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon" /> linkedin.com/in/faizan
              </a>
            </li>
            <li>
              <a href="https://github.com/faizan" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" /> github.com/faizan
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side - Contact Form */}
        <form className="contact-form glassy">
          <h3>Send a Message</h3>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

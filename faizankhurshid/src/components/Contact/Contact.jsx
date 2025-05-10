import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e374d7e8-bb83-48b0-b90c-88ffc02723f0");

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
      alert(res.message)
    }else{
      alert(res.message)
    }
  };

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
        <form onSubmit={onSubmit} className="contact-form glassy">
          <h3>Send a Message</h3>
          <input type="text" placeholder="Your Name" name='name' required />
          <input type="email" placeholder="Your Email" name='email' required />
          <textarea placeholder="Your Message" name='message' required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

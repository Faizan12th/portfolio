import React from 'react';
import './Contact.css';
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

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
    } else {
      alert(res.message)
    }

    event.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="container">

        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have an exciting project? Let's collaborate and create something amazing</p>
        </div>

        <div className="contact-grid">

          {/* Left Side - Contact Form */}
          <div className="contact-form-wrapper">
            <form onSubmit={onSubmit} className="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Your name" name='name' required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="your@email.com" name='email' required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Tell me about your project..." name='message' required rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                <FiSend /> Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Connect */}
          <div className="contact-info-wrapper">
            <h3 className="connect-title">Connect With Me</h3>
            <p className="connect-text">
              I'm available on multiple platforms. Reach out via email or connect on social media. I'd love to hear from you.
            </p>

            <div className="social-links-grid">
              <a href="https://github.com/Faizan12th" target="_blank" rel="noopener noreferrer" className="social-card">
                <div className="social-icon text-teal"><FaGithub /></div>
                <span className="social-name">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/faizan-khurshid-a99632298" target="_blank" rel="noopener noreferrer" className="social-card">
                <div className="social-icon text-teal"><FaLinkedinIn /></div>
                <span className="social-name">LinkedIn</span>
              </a>
              <a href="mailto:faizankhurshid83@gmail.com" className="social-card">
                <div className="social-icon text-teal"><FaRegEnvelope /></div>
                <span className="social-name">Email</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

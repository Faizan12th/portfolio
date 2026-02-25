import React from 'react';
import './Footer.css';
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">

        <div className="footer-top">
          <div className="footer-logo">
            <span className="logo-icon text-teal">&lt;/&gt;</span> Faizan
          </div>

          <ul className="footer-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="footer-socials">
            <a href="https://github.com/Faizan12th" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/faizan-khurshid-a99632298" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Faizan Khurshid. All rights reserved.</p>
          <div className="footer-links-small">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

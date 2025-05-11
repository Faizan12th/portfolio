import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer glassy-footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer-icons">
          <a href="mailto:faizankhurshid83@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
          <a href="https://github.com/Faizan12th" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a  href="https://www.linkedin.com/in/faizan-khurshid-a99632298" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      <p className="footer-bottom">&copy; {new Date().getFullYear()} Faizan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

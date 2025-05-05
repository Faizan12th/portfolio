import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer glassy-footer">
      <div className="footer-content">
        <h2 className="footer-logo">Faizan</h2>
        <ul className="footer-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer-icons">
          <a href="mailto:faizan@example.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
          <a href="https://github.com/faizan" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/faizan" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </div>
      <p className="footer-bottom">&copy; {new Date().getFullYear()} Faizan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

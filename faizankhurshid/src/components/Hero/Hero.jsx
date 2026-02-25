import React from 'react';
import './Hero.css';
import resume from '../../assets/cv-Faizan-Khurshid.pdf';
import { TypeAnimation } from 'react-type-animation';
import { BsStars } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa';
import { HiOutlineLightningBolt } from "react-icons/hi";

const Hero = () => {

  return (
    <section className="hero" id='home'>
      <div className="hero-content">

        <div className="hero-badge">
          <BsStars className="badge-icon" />
          <span>Welcome to My Portfolio</span>
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="text-teal">Faizan</span>
        </h1>

        <div className="hero-subtitle-container">
          <p className="hero-description">
            Software Engineering student with proven experience in full-stack development, API management, and AI integration. Passionate about building scalable, secure, and AI-driven solutions.
          </p>
        </div>

        <div className="hero-typing">
          <TypeAnimation
            sequence={[
              'Software Engineer', 1000,
              'Full-Stack Developer', 1000,
              'AI Integration Specialist', 1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="typing-text"
          />
        </div>

        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary hero-btn">
            <HiOutlineLightningBolt className="btn-icon" /> Get in Touch
          </a>
          <a href="#projects" className="btn btn-outline hero-btn">
            <FaCode className="btn-icon" /> View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

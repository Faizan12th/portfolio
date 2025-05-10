import React from 'react';
import './Hero.css';
import faizanImage from './faizan14.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu(); // Close mobile menu after click
    }
  };

  return (
    <section className="hero" id='home'>
      <div className="hero-left">
        <h1 className="hero-title">
          Hi, I am <span>Faizan</span>
        </h1>

        <div className="hero-subtitle">
          <TypeAnimation
            sequence={[
              'Software Engineer', 1000,
              'MERN Stack Developer', 1000,
              'UI/UX Designer', 1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{ fontSize: '1.4rem', display: 'inline-block' }}
          />
        </div>

        <div className="hero-buttons">
          <button className="hero-btn primary" onClick={()=>handleScrollTo('contact')}>Connect with Me</button>
          <button className="hero-btn secondary">My Resume</button>
        </div>
      </div>

      <div className="hero-right hide-on-mobile">
        <div className="image-container">
          <img
            src={faizanImage}
            alt="Faizan"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

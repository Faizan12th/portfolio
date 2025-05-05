import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              Hey there! I’m <strong>Faizan</strong>, a passionate and dedicated Software Engineer who thrives on creating clean, user-centric web applications. I specialize in the <strong>MERN stack</strong>, coupled with an eye for <strong>UI/UX design</strong> that ensures an intuitive user experience. I’m driven by a love for both the logic of code and the art of design, making sure that every project I work on feels as good to use as it is to build.
            </p>
            <p>
              With my strong foundation in software development and design, I aim to create scalable solutions that blend form and function. When I’m not coding, you’ll probably find me keeping up with the latest in design trends, creating wireframes, or experimenting with new technologies to optimize my workflow.
            </p>
            <p>
              If you're looking for someone to transform your ideas into elegant, seamless digital experiences, let's connect and create something incredible together!
            </p>
          </div>
        </div>

        <div className="about-boxes">
          <div className="about-box">
            <h3>3+ Years</h3>
            <p>Experience</p>
          </div>
          <div className="about-box">
            <h3>25+</h3>
            <p>Projects</p>
          </div>
          <div className="about-box">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section >
  );
};

export default About;

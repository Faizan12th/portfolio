import React from 'react';
import './About.css';
import { FaReact, FaNodeJs, FaPython, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const coreSkills = [
  { name: 'React.js / Next.js', icon: <FaReact /> },
  { name: 'Node.js / Express', icon: <FaNodeJs /> },
  { name: 'Python / FastAPI', icon: <FaPython /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'OAuth2 / Security', icon: <span className="text-teal font-bold">&lt;/&gt;</span> },
  { name: 'REST / OpenAPI', icon: <span className="text-teal font-bold">&lt;/&gt;</span> },
  { name: 'UI/UX Design', icon: <FaFigma /> },
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-text-content">
            <p>
              Hey there! I’m a passionate Software Engineering student at COMSATS University with a strong academic background, maintaining a 3.74 CGPA. I specialize in full-stack web development and am constantly expanding my expertise in AI integrations and system security.
            </p>
            <p>
              I recently completed a comprehensive internship at the Securities and Exchange Commission of Pakistan (SECP), which solidified my understanding of enterprise secure authentication, Single Sign-On protocols, and optimal API management. I enjoy blending logic and UI/UX design together to forge seamless digital experiences.
            </p>
            <p>
              When I'm not coding, you'll find me exploring modern technologies, from utilizing Mistral 7B for automation features to building responsive eCommerce dashboards. If you have an exciting project or role in mind, let's connect!
            </p>
          </div>

          <div className="about-skills-content">
            <h3 className="expertise-title">Core Expertise</h3>
            <div className="expertise-grid">
              {coreSkills.map((skill, index) => (
                <div key={index} className="expertise-badge">
                  <span className="expertise-icon">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

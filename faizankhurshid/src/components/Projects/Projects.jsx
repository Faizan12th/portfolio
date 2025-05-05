import React from 'react';
import './Projects.css';
import image from './project-image.png'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';

const projects = [
  {
    title: 'Spotify Clone',
    description: 'A fully responsive music streaming clone built with HTML, CSS, and JavaScript. A fully responsive music streaming clone built with HTML, CSS, and JavaScript. A fully responsive music streaming clone built with HTML, CSS, and JavaScript. A fully responsive music streaming clone built with HTML, CSS, and JavaScript.A fully responsive music streaming clone built with HTML, CSS, and JavaScript.',
    image: '/images/spotify-clone.png',
    link: 'https://your-spotify-clone-live-link.com',
    techStack: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
  },
  {
    title: 'Portfolio Website',
    description: 'This personal portfolio site built with React and vanilla CSS shows my skills, projects, and contact details.',
    image: '/images/portfolio.png',
    link: 'https://your-portfolio-link.com',
    techStack: [<FaReact />, <FaCss3Alt />],
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            key={index}
          >
            <div className="project-image">
              <img src={image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((icon, idx) => (
                  <span key={idx} className="tech-icon">{icon}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;

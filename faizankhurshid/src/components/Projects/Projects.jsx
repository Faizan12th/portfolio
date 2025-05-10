import React from 'react';
import './Projects.css';
import recruitech from '../../assets/recruitech.png'
import assertiveattire from '../../assets/assertiveattire.png'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs} from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const projects = [
  {
    title: 'Assertive Attire',
    description: 'Assertive Attire is a modern e-commerce clothing store where users can browse products, add items to their cart, and place orders securely. It includes complete cart and order management, user authentication, and admin functionality. Stripe integration ensures secure and smooth payment processing. The site offers a clean UI, real-time updates, and responsive design for seamless shopping across devices. Built with the MERN stack, it leverages MongoDB for data storage, Express and Node.js for backend services, and React for a dynamic frontend.',
    image: assertiveattire,
    link: 'https://assertiveattire.vercel.app',
    techStack: [ <SiMongodb />,<SiExpress/>,<FaReact />, <FaNodeJs />],
  },
  {
    title: 'Recruitech',
    description: 'Recruitech is a full-featured job portal that connects job seekers and recruiters through a seamless interface. Users can register, create profiles, upload resumes, and apply for jobs with ease. Recruiters can post job listings, manage applicants, and review candidate details through an intuitive dashboard. The platform includes role-based authentication, form validation, and responsive layouts. Powered by the MERN stack, it combines MongoDB, Express, React, and Node.js to deliver a robust, scalable, and user-friendly recruitment solution.',
    image: recruitech,
    link: 'https://recruitech-amber.vercel.app',
    techStack: [ <SiMongodb />,<SiExpress/>,<FaReact />, <FaNodeJs />],
  }
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
              <img src={project.image} alt={project.title} />
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

import React from 'react';
import './Projects.css';
import recruitech from '../../assets/recruitech.png'
import assertiveattire from '../../assets/assertiveattire.png'
import lawyerup from '../../assets/lawyerup.png'
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'LawyerUP – Legal Services Marketplace (FYP)',
    description: 'Engineering an AI Assistant using a fine-tuned Mistral 7B model to automate legal drafting and predict case outcomes. Designed a microservices architecture to separate AI inference from core business logic, featuring role-specific portals.',
    image: lawyerup,
    link: '#',
    githubLink: 'https://github.com/Faizan12th',
    techStack: ['Next.js', 'FastAPI', 'MongoDB', 'Mistral 7B', 'Node.js'],
  },
  {
    title: 'Assertive Attire – Full-Stack E-Commerce',
    description: 'Integrated Stripe API for secure financial transactions and Cloudinary for high-performance image hosting. Built a custom Admin Dashboard for real-time inventory tracking and order management.',
    image: assertiveattire,
    link: 'https://assertiveattire.vercel.app',
    githubLink: 'https://github.com/Faizan12th',
    techStack: ['MERN', 'Stripe', 'Cloudinary', 'Tailwind CSS'],
  },
  {
    title: 'Recruitech – Job Portal',
    description: 'Implemented Role-Based Access Control (RBAC) to differentiate between Recruiter and Applicant workflows. Integrated Sentry for real-time backend error tracking and performance monitoring.',
    image: recruitech,
    link: 'https://recruitech-amber.vercel.app',
    githubLink: 'https://github.com/Faizan12th',
    techStack: ['React', 'Node.js', 'Clerk Auth', 'Sentry'],
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">

        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Showcase of recent work combining design, performance, and cutting-edge technology</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-image-wrapper">
                <div className="project-image-bg">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="project-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary project-btn">
                    <FiExternalLink /> View Live
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline project-btn">
                    <FiGithub /> Code
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

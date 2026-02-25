import React, { useState } from 'react';
import './Experience.css';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { BsGraphUp } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa';

const experiences = [
    {
        id: 1,
        company: 'Securities and Exchange Commission of Pakistan',
        role: 'IT Intern',
        duration: 'June 2025 – August 2025',
        description: 'Implemented secure OAuth2 and SSO using SAML2/OIDC protocols. Published and managed REST APIs using OpenAPI specifications with rate-limiting. Customized authentication UIs and authored technical documentation.',
        skills: ['OAuth2 / OIDC', 'SAML2', 'OpenAPI', 'WSO2 API Manager'],
        icon: <HiOutlineUserGroup />
    }
];

const Experience = () => {
    const [activeTab, setActiveTab] = useState(experiences[0]);

    return (
        <section className="experience" id="experience">
            <div className="container">
                <h2 className="section-title">Experience</h2>

                <div className="experience-container">
                    {/* Tabs */}
                    <div className="experience-tabs">
                        {experiences.map((exp) => (
                            <button
                                key={exp.id}
                                className={`tab-btn ${activeTab.id === exp.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(exp)}
                            >
                                <span className="tab-icon">{exp.icon}</span>
                                {exp.company}
                            </button>
                        ))}
                    </div>

                    {/* Content Card */}
                    <div className="experience-content-card">
                        <div className="exp-card-header">
                            <div className="exp-role-info">
                                <h3 className="exp-role">{activeTab.role}</h3>
                                <p className="exp-company">{activeTab.company}</p>
                                <p className="exp-duration">{activeTab.duration}</p>
                            </div>
                            <div className="exp-large-icon">{activeTab.icon}</div>
                        </div>

                        <p className="exp-description">{activeTab.description}</p>

                        <div className="exp-skills">
                            {activeTab.skills.map((skill, index) => (
                                <span key={index} className="exp-skill-badge">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

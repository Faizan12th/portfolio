import React, { useState, useRef } from 'react';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu(); // Close mobile menu after click
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">


        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {/* Mobile Close Icon */}
          <li className="mobile-close" onClick={closeMenu}>
            <FiX />
          </li>

          <li><a href="#home" onClick={()=>handleScrollTo('home')}>Home</a></li>
          <li><a href="#about" onClick={()=>handleScrollTo('about')}>About</a></li>
          <li><AnchorLink href="#skills" onClick={()=>handleScrollTo('skills')}>Skills</AnchorLink></li>
          <li><a href="#projects" onClick={()=>handleScrollTo('projects')}>Projects</a></li>
          <li><a href="#contact" onClick={()=>handleScrollTo('contact')}>Contact</a></li>
        </ul>

        {/* Desktop Button */}
        <button className="contact-button">Contact with me</button>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <FiMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

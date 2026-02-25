import React, { useState } from 'react';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      closeMenu();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-icon">&lt;/&gt;</span> <span className="logo-text">Faizan</span>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {/* Mobile Close Icon */}
          <li className="mobile-close" onClick={closeMenu}>
            <FiX />
          </li>

          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <FiMenu color="#111827" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

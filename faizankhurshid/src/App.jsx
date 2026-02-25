import React from 'react';
import './App.css';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='body'>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;

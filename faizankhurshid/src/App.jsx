import React from 'react'
import './App.css'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='body'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App

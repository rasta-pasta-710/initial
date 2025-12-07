import { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero setActiveSection={setActiveSection} />
        <About setActiveSection={setActiveSection} />
        <Skills setActiveSection={setActiveSection} />
        <Projects setActiveSection={setActiveSection} />
        <Contact setActiveSection={setActiveSection} />
      </main>
    </div>
  )
}

export default App


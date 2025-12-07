import { motion } from 'framer-motion'
import { useEffect } from 'react'

interface HeroProps {
  setActiveSection: (section: string) => void
}

const Hero = ({ setActiveSection }: HeroProps) => {
  useEffect(() => {
    setActiveSection('home')
  }, [setActiveSection])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="gradient-text">Hey, I'm</span>
          <br />
          <span className="text-white">rasta-pasta-710</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8"
          variants={itemVariants}
        >
          Full Stack Developer & Creative Problem Solver
        </motion.p>
        <motion.p
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Building beautiful, functional, and user-friendly applications with modern
          technologies. Welcome to my digital space!
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              setActiveSection('projects')
            }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 border-2 border-primary-600 text-primary-400 rounded-lg font-semibold hover:bg-primary-600/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              setActiveSection('contact')
            }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
        <motion.div
          className="mt-16"
          variants={itemVariants}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <a
            href="#about"
            className="text-gray-400 hover:text-primary-400 transition-colors"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              setActiveSection('about')
            }}
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero


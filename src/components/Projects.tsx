import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface ProjectsProps {
  setActiveSection: (section: string) => void
}

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations and a clean design.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/rasta-pasta-710',
    demo: '#',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/rasta-pasta-710',
    demo: '#',
  },
  {
    id: 3,
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    tech: ['React', 'TypeScript', 'WebSocket', 'PostgreSQL'],
    github: 'https://github.com/rasta-pasta-710',
    demo: '#',
  },
]

const Projects = ({ setActiveSection }: ProjectsProps) => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('projects')
        }
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [setActiveSection])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-primary-500 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-primary-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-600/20 text-primary-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    GitHub →
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


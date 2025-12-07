import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface AboutProps {
  setActiveSection: (section: string) => void
}

const About = ({ setActiveSection }: AboutProps) => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('about')
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
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-4 text-gray-300">
            <p className="text-lg leading-relaxed">
              I'm a passionate developer who loves creating digital experiences that
              make a difference. With a focus on clean code, user experience, and
              modern technologies, I bring ideas to life.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source, or working on side projects that push the
              boundaries of what's possible.
            </p>
            <p className="text-lg leading-relaxed">
              I believe in continuous learning and staying up-to-date with the latest
              industry trends and best practices.
            </p>
          </div>
          <motion.div
            className="bg-gray-800 rounded-lg p-8 border border-gray-700"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary-400">
              What I Do
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-primary-400 mr-2">▹</span>
                <span>Full Stack Web Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-2">▹</span>
                <span>UI/UX Design & Implementation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-2">▹</span>
                <span>Mobile App Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-2">▹</span>
                <span>API Development & Integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-400 mr-2">▹</span>
                <span>Cloud Infrastructure & DevOps</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About


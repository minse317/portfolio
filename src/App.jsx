import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './index.css'
import Intro from './components/Intro'
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const sectionsRef = useRef([])

  useEffect(() => {
    sectionsRef.current.forEach(section => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true,
          },
        },
      )
    }, [])
  })

  return (
    <>
      <div
        ref={el => (sectionsRef.current[0] = el)}
        className="animation-section"
      >
        <Intro />
      </div>
      <div
        ref={el => (sectionsRef.current[1] = el)}
        className="animation-section"
      >
        <About />
      </div>
      <div
        ref={el => (sectionsRef.current[2] = el)}
        className="animation-section"
      >
        <Skill />
      </div>
      <div
        ref={el => (sectionsRef.current[3] = el)}
        className="animation-section"
      >
        <Project />
      </div>
      <Contact />
    </>
  )
}

export default App

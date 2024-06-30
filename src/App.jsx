import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './index.css'
import Intro from './components/Intro'
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'
import ProjectModal from './components/ProjectModal'
import tw from 'twin.macro'

gsap.registerPlugin(ScrollTrigger)

const Container = tw.div`
  p-20 xs:p-10 md:p-10 
`

function App() {
  const sectionsRef = useRef([])
  const [projectDetail, setProjectDetail] = useState(null)
  const handleCloseModal = () => setProjectDetail(null)

  useEffect(() => {
    window.scrollTo(0, 0)

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
    })
  }, [])

  /* 모달창 열릴 때 배경 스크롤 방지 */
  useEffect(() => {
    if (projectDetail !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [projectDetail])

  return (
    <>
      <div
        ref={el => (sectionsRef.current[0] = el)}
        className="animation-section"
      >
        <Intro />
      </div>
      <Container>
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
          <Project setProjectDetail={setProjectDetail} />
        </div>
      </Container>
      <Contact />

      {projectDetail !== null && (
        <ProjectModal project={projectDetail} onClose={handleCloseModal} />
      )}
    </>
  )
}

export default App

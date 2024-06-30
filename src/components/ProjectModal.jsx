import React from 'react'
import * as S from './styles/ProjectModal.styles'

function ProjectModal({ project, onClose }) {
  const handleOnClose = e => {
    if (e.target.id === 'container') onClose()
  }

  if (!project) return null

  return (
    <S.BackgoundContainer id="container" onClick={handleOnClose} className="">
      <S.ModalContainer>
        <S.TitleContainer>
          <h2 className="mr-4">{project.title}</h2>
          <p>#{project.type}</p>
        </S.TitleContainer>

        <S.ProjectInfoContainer>
          <p>{project.desc}</p>
          <S.LinkText>
            <p className="mr-5">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
            {project.presentation && (
              <p>
                <a
                  href={project.presentation}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  발표 자료
                </a>
              </p>
            )}
          </S.LinkText>
          <p>{project.period}</p>
          <p>{project.skill}</p>
          <p>{project.role}</p>
          <h4>느낀 점</h4>
          <S.Review>{project.review}</S.Review>
        </S.ProjectInfoContainer>
      </S.ModalContainer>
    </S.BackgoundContainer>
  )
}

export default ProjectModal

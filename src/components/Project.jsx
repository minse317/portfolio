import React from 'react'
import { project } from '../constants/Index'
import * as S from './styles/Project.styles'

function Project({ setProjectDetail }) {
  return (
    <S.MainContainer>
      <h1>Project</h1>

      <S.ProjectContainer>
        {project.map((item, index) => (
          <S.ProjectBtn
            key={index}
            onClick={() => setProjectDetail(item)}
            className="group"
          >
            <S.AnimatedBackgroundSpan className=" group-hover:w-full" />
            <S.TextSpan className=" group-hover:text-white">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </S.TextSpan>
          </S.ProjectBtn>
        ))}
      </S.ProjectContainer>
    </S.MainContainer>
  )
}

export default Project

import React from 'react'
import { fronted, etc } from '../constants/Index'
import * as S from './styles/Skill.styles'

function Skill() {
  return (
    <S.MainContainer>
      <h1>Skill</h1>

      <h2>Fronted</h2>
      {fronted.map((tech, index) => (
        <h3 key={index}>{`{ ${tech} }`}</h3>
      ))}

      <h2>etc</h2>
      {etc.map((tech, index) => (
        <h3 key={index}>{`{ ${tech} }`}</h3>
      ))}
    </S.MainContainer>
  )
}

export default Skill

import React from 'react'
import * as S from './styles/About.styles'

function About() {
  return (
    <S.MainContainer>
      <div>
        안녕하세요. <br />
        신입 프론트엔드 개발자 <br />
        <b>백민세</b>입니다.
      </div>
      <S.AboutText>
        사용자 중심의 멋진 웹 경험을 만드는 것에 열정을 느끼고 있습니다. <br />
        함께 일하며 협업하고, 프로젝트를 통해 성장하고 싶습니다.
      </S.AboutText>
    </S.MainContainer>
  )
}

export default About

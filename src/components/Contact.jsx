import React from 'react'
import * as S from './styles/Contact.styles'

function Contact() {
  return (
    <S.MainContainer>
      <S.LeftContainer>
        <h1>BAEK MINSE</h1>
        <h2>(+82)010-2601-7736</h2>
        <h2>bminse@gmail.com</h2>
        <h2>
          <a
            href="https://github.com/minse317"
            target={'_blank'}
            className="underline"
          >
            github.com
          </a>
        </h2>
      </S.LeftContainer>
      <S.RightContainer>
        <h4>
          <a
            href="https://drive.google.com/file/d/1PXF2AdiZWEO4CXXFDxUNY22RATJFzCi0/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            이력서 PDF
          </a>
        </h4>
        <h4>
          <a
            href="https://drive.google.com/file/d/1kvDEnOWRxXodz7ahxatcR1gJW2XAT2IA/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            포트폴리오 PDF
          </a>
        </h4>
      </S.RightContainer>
    </S.MainContainer>
  )
}

export default Contact

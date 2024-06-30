import styled from 'styled-components'
import tw from 'twin.macro'

export const MainContainer = styled.div`
  ${tw`h-screen text-5xl relative leading-relaxed`}

  @media (max-width: 640px) {
    ${tw`h-auto text-2xl`}
  }

  @media (min-width: 641px) and (max-width: 1024px) {
    ${tw`h-auto`}
  }
`

export const AboutText = styled.div`
  ${tw`absolute bottom-0 right-0`}

  @media (max-width: 640px) {
    ${tw`left-0 mt-10 text-xl`}
    position: static;
  }

  @media (min-width: 641px) and (max-width: 1024px) {
    ${tw`left-0 mt-10 text-5xl leading-normal`}
    position: static;
  }
`

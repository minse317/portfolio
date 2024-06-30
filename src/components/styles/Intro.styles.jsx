import styled from 'styled-components'
import tw from 'twin.macro'

export const MainContainer = styled.div`
  ${tw`h-screen text-9xl relative font-light flex flex-col justify-center items-center tracking-widest`}
`

export const TextContainer = styled.div`
  ${tw`text-center absolute bottom-0 pb-20`}

  @media (max-width: 640px) {
    ${tw`text-4xl pb-10 m-auto`}
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    ${tw`text-8xl m-auto`}
  }
`

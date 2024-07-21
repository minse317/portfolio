import styled from 'styled-components'
import tw from 'twin.macro'

export const MainContainer = styled.div`
  h1 {
    ${tw`mb-10 mt-20`}

    @media (max-width: 640px) {
      ${tw`text-3xl`}
    }
  }
`

export const ProjectContainer = styled.div`
  ${tw`flex flex-wrap`}
`

export const ProjectBtn = styled.button`
  ${tw`relative inline-block overflow-hidden border-l-2 border-black bg-transparent m-5 p-5 space-y-2 text-left`}

  @media (max-width: 640px) {
    width: 100%;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (min-width: 1025px) {
    width: 440px;
  }

  h2 {
    @media (max-width: 640px) {
      ${tw`text-2xl`}
    }
  }
`

export const AnimatedBackgroundSpan = styled.span`
  ${tw`absolute left-0 top-0 mb-0 flex h-full w-0 translate-x-0 transform bg-black transition-all duration-500 ease-out`}
`

export const TextSpan = styled.span`
  ${tw`relative`}

  h2 {
    ${tw`mb-5`}

    @media (max-width: 640px) {
      width: text-2xl;
    }
  }
`

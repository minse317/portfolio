import styled from 'styled-components'
import tw from 'twin.macro'

export const BackgoundContainer = styled.div`
  ${tw`fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center`}
`

export const ModalContainer = styled.div`
  ${tw`bg-white p-10 rounded w-3/5 h-auto`}

  @media (max-width: 640px) {
    ${tw`p-5 w-5/6 h-auto`}
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    ${tw`p-8 w-3/5 h-auto`}
  }

  h2 {
    ${tw`mr-4 whitespace-pre-wrap`}

    @media (max-width: 640px) {
      ${tw`text-2xl`}
    }
  }

  h4 {
    ${tw`mr-4 whitespace-pre-wrap`}

    @media (max-width: 640px) {
      ${tw`text-xl`}
    }
  }

  p {
    @media (max-width: 640px) {
      ${tw`text-sm`}
    }
  }
`

export const TitleContainer = styled.div`
  ${tw`flex items-end mb-5`}
`
export const ProjectInfoContainer = styled.div`
  ${tw`space-y-2`}

  h2 {
    ${tw`mr-4`}
  }
`
export const LinkText = styled.div`
  ${tw`flex`}

  a {
    ${tw`underline`}
  }
`
export const Review = styled.p`
  ${tw`whitespace-pre-wrap leading-relaxed`}
`

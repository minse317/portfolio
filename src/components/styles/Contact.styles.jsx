import styled from 'styled-components'
import tw from 'twin.macro'

export const MainContainer = styled.div`
  ${tw`border-t-4 border-[black] [display: flex]`}
`
export const LeftContainer = styled.div`
  ${tw`p-20 w-1/2 border-r-4 border-[black]`}

  @media (max-width: 640px) {
    ${tw`p-5`}
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    ${tw`p-10`}
  }

  h1 {
    ${tw`mb-10`}

    @media (max-width: 640px) {
      ${tw`text-xl`}
    }
    @media (min-width: 641px) and (max-width: 1024px) {
      ${tw`text-3xl`}
    }
  }

  h2 {
    ${tw`mb-2`}

    @media (max-width: 640px) {
      ${tw`text-base`}
    }
    @media (min-width: 641px) and (max-width: 1024px) {
      ${tw`text-2xl`}
    }
  }
`
export const RightContainer = styled.div`
  ${tw`p-20`}

  @media (max-width: 640px) {
    ${tw`p-5`}
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    ${tw`p-10`}
  }

  h4 {
    ${tw`font-medium underline text-gray-500 mb-2`}

    @media (max-width: 640px) {
      ${tw`text-base`}
    }
  }
`

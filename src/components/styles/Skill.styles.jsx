import styled from 'styled-components'
import tw from 'twin.macro'

export const MainContainer = styled.div`
  h1 {
    ${tw`mb-10 mt-20`}

    @media (max-width: 640px) {
      ${tw`text-3xl`}
    }
  }

  h2 {
    ${tw`my-5`}

    @media (max-width: 640px) {
      ${tw`text-2xl`}
    }
  }

  h3 {
    ${tw`inline-block mr-10 mb-10`}

    @media (max-width: 640px) {
      ${tw`text-xl`}
    }
  }
`

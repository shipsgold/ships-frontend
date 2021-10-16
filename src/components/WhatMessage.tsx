import styled from "styled-components"
import React from "react"
import { ThemeProp } from "./types"

const WhatContainer: React.FC = styled.div`
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1.5fr;
  grid-column: 1 / 6;
  grid-row: 4 / 5;
  display: grid;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.lg} {
  }
`

const Message: React.FC = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  font-weight: 700;
  font-size: 1.5rem;
  padding-top: 15px;
  padding-left: 10px;
  text-align: left;
${({ theme }: ThemeProp) => theme.base.mediaQueries.sm} {
    font-size: min(3rem, 5vw);
    padding-top: 25px;
    padding-left: 25px;
  }
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.md} {

    font-size: min(3rem, 5vw);
    padding-top: 100px;
    text-align: center;
    padding-top: 0px;
  }
`
const CoinBackgroundContainer = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  background-image: url('/images/coin3-01.svg');
  background-repeat: round;
  opacity: 0.8;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.sm} {
  background-repeat: space;
  }
`

const CoinLarge = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  width: 100%;
  z-index: ${({theme}: ThemeProp) => theme.base.zIndices.modal};
  background-image: url('/images/coin3-01.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  background-repeat: space;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.lg} {
  }
`

function WhatMessage(): React.ReactElement {
  return (
    <WhatContainer>
      <Message>
        MINT PROJECT TOKENS
      </Message>
      <CoinBackgroundContainer/>
      <CoinLarge/>
    </WhatContainer>
  )
}

export default WhatMessage;
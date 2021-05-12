import styled from "styled-components"
import React from "react"
import { ThemeProp } from "./types"
import JoinButton from "./JoinButton"

const JoinContainer: React.FC = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-row: 3 / 4;
  grid-column: 1 / 6;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.lg} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`

const LeftJoinBox: React.FC = styled.div`
  grid-row: 1/1;
  grid-column: 1/1;
  background-position: top center;
  background-image: url('/images/left-back-coin.svg');
  background-repeat: no-repeat;
  background-size: auto;
  width: 100%;
  height: 100%;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.lg} {
    grid-row: 1/1;
    grid-column: 1/2;
  }
`

const CenterJoinBox: React.FC = styled.div`
  grid-row: 1/1;
  grid-column: 1/1;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column; 
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.lg} {
    grid-row: 1/1;
    grid-column: 2/3;
  }
`

const RightJoinBox: React.FC = styled.div`

  display: none; 
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.xs} {
    background-image: url('/images/right-back-coin.svg');
    background-size: auto;
    background-position: top;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }

  ${({ theme }: ThemeProp) => theme.base.mediaQueries.md} {
    display: block;
    grid-column: 3/4;
    grid-row: 1/1;
  }
`
const JoinButtonBox: React.FC = styled.div`
    text-align: center;
    justify-self: center;
    justify-items: center;
    padding-top: 50px;
    flex: 1;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.lg} {
    text-align: center;
    justify-self: center;
    justify-items: center;
    padding-top: 100px;
    flex: 1;
  }
`

function Join(): React.ReactElement {
  return (
    <JoinContainer>
      <LeftJoinBox />
      <CenterJoinBox>
        <JoinButtonBox>
          <JoinButton>JOIN US</JoinButton>
        </JoinButtonBox>
      </CenterJoinBox>
      <RightJoinBox />
    </JoinContainer>
  )

}

export default Join;
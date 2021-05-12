import styled from "styled-components"
import React from "react"
import { ThemeProp } from "./types"
import JoinButton from "./JoinButton";

const CommunityContainer: React.FC = styled.div`
  grid-column: 1 / 6;
  grid-row: 5 / 6;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.lg} {
  }
`

const CommunityMessage: React.FC = styled.div`
  background: white;
  grid-row: 1/2;
  grid-column: 1/1;
  font-weight: 700;
  padding-bottom: 50px;
  font-size: min(3rem, 6vw);
  text-align: center;
  align-self: center;
  justify-self: center;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.sm} {
    padding-top: 50px;
    font-size: min(3rem, 5vw);
  }
`
const CommunityJoinContainer: React.FC = styled.div`
  grid-row: 1/2;
  grid-column: 1/1;
  display: flex;
  align-self: end;
  text-align: center;
  justify-self: center;
  justify-items: center;
  padding-top: 100px;
  flex: 1;
`
const CommunityContainerPeople = styled.div`
  grid-row: 2/3;
  grid-column: 1/1;
  background: url("/images/community-landing.svg");
  background-size: contain;
  background-repeat: no-repeat; 
  background-position: center;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.sm} {
    background-position: initial;
  }
`

function Community(): React.ReactElement {
  return (
    <CommunityContainer>
      <CommunityMessage>
            Give Tokens To Contributors
        <br/>Incentivize Support
        <br/>Grow Community with Rewards
      </CommunityMessage>
      <CommunityJoinContainer>
        <JoinButton>JOIN US</JoinButton>
      </CommunityJoinContainer>
      <CommunityContainerPeople/>
    </CommunityContainer>
  )
}

export default Community;
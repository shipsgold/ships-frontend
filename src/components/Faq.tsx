import styled from "styled-components"
import React from "react"
import { ThemeProp } from "./types"
import JoinButton from "./JoinButton";

const FaqLayoutContainer: React.FC = styled.div`
  grid-row: 6/7;
  grid-column: 1/ 6;
  display: flex;
  flex-direction: column;
`

const FaqContainer: React.FC = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`
const FaqContent: React.FC = styled.div`
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.md} {
    width: 50vw;
    padding-bottom: 40px;
  }
`
const FaqHeaderContainer: React.FC = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const FaqHeader: React.FC = styled.div`
  padding: 20px;
  font-weight: 700;
  font-size: 3.5rem;
  text-align: center;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.sm} {
    text-align: left;
    font-size: min(5rem, 10vw);
  }
`
const FaqQuestion: React.FC = styled.div`
  text-align: justify;
  text-justify: inter-word;
  padding: 20px;
`

const Details = styled.details`
  font-size: 1.2rem;
  cursor: pointer;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.md} {
    max-width: 60vw;
  }
`
const Summary: React.FC = styled.summary`
  font-size: 1.5rem;
  font-weight: 700;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.md} {
    font-size: min(2rem, 2vw);
    max-width: 60vw;
  }
`
const JoinContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding-bottom: 50px;
`

function Faq(): React.ReactElement {
  return (
    <FaqLayoutContainer>
      <FaqContainer>
        <FaqContent>
          <FaqHeaderContainer>
            <FaqHeader>FAQ</FaqHeader>
          </FaqHeaderContainer>
          <FaqQuestion>
            <Details open>
              <Summary>
              Wait what is SHIPS?
              </Summary>
            SHIPS is a platform that allows developers to mint fungible tokens 
            with every significant software release. These release tokens 
            are then able to be purchased by the community 
            and/or distributed to contributors to the project.
              <br />&nbsp;<br />
            The release tokens are good for developer specified services, such as
            preimum support, building incentivized knowledge bases, 
            swag or market speculation. 
              <br />&nbsp;<br />
            At the end of a release token life-cycle developers retire the token,
            allowing token holders to have chance to claim a NFT(non-fungible token) that represents
            the software release. Imagine owning Apache 2.0 version 1.0 NFT.
              <br />&nbsp;<br />
            The platform we are building is built to make it easy for developers
            to create knowledge bases and offer preimium support services. We are 
            building it in a way that the community can participate in providing
            incentivized support lifting the open source boat.
            </Details>
          </FaqQuestion>
          <FaqQuestion>
            <Details>
              <Summary>What are the incentives?</Summary>
            SHIPS actually consists of a fungible protocol token $SHPS in addition
            to the developer owned tokens. The $SHPS token is used to set fees charged
            on txs surrounding purchase of developer minted tokens.
              <br />&nbsp;<br />
            In addition to the fees, SHPS represents an opportunity for developers
            that add value to the network to earn SHPS. Periodically SHPS are minted and
            distributed to projects that have added value to the network on a weighted
            selection basis, based off of developer contributions to the overall network.
              <br />&nbsp;<br />
            This allows developers that create high quality projects, to gain access to
            a broader reward ecosystem. Helping encourage maintenance and development.
            </Details>
          </FaqQuestion>
          <FaqQuestion>
            <Details>
              <Summary>Why would I do this?</Summary>
            We believe that a way forward to improve open source dynamics is to
            open, open source to different monetary opportunities. 
              <br />&nbsp;<br />
            Creating a marketplace means flexibility, and the ability to 
            trade access tokens or allow community to support request for help to problems, or 
            spend on the economic well being of OSS is important.  
            People can contribute in a variety of ways and still
            have access to economic opportunities previously restricted to core team.
              <br />&nbsp;<br />
            Additionally, the target is to get those individual contributors and creators 
            access to the $SHPS network reward through contributions. Making OSS as a concept
            and the projects tied into the network stronger as whole. 
            </Details>
          </FaqQuestion>
          <FaqQuestion>
            <Details>
              <Summary>How do I signup?</Summary>
             Right now we are developing the software to release soon and debating
             over a few protocol details. We&apos;d love to have you for our
             closed <a target="_blank" href="https://forms.gle/nNHQ3t4YdzVkiv3HA" rel="noreferrer">beta</a> and &apos; also love your help tuning the protocol
            </Details>
          </FaqQuestion>
          <FaqQuestion>
            <Details>
              <Summary>When will you be live?</Summary>
            We are targeting production in 2021.
            </Details>
          </FaqQuestion>
        </FaqContent>
      </FaqContainer>
      <JoinContainer>
        <JoinButton>JOIN BETA</JoinButton>
      </JoinContainer>
    </FaqLayoutContainer>
  )
}

export default Faq;
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FaqContainer: React.FC = styled.div.attrs((_props)=>({
  id:"faq"
}))`
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
              SHIPS is a platform that allows OSS creator to build token economies for their projects.
              The platform helps you launch an NFT collection, create a DAO and structure tokens for your organization or project. 
            </Details>
          </FaqQuestion>
          <FaqQuestion>
            <Details open>
              <Summary>
              How does it work?
              </Summary>
              First you setup an NFT collection size, depending on your community and goals.
              Then you set a release date, and the platform helps you select the right token structure to activate your community.
              <br />&nbsp;<br />
              The platform helps you launch a DAO that allows the people that purchase your NFT to become members, 
              and claim utility tokens for holding your NFT. We also allow you to setup contributor rewards and contributor NFTs. 
              Contributor rewards incentivizes active participation in making the ecosystem better. 
              <br />&nbsp;<br />
              The tokens that are claimed by NFT holders and contributors are utility tokens. 
              These tokens  can be used to create licenses, give access to APIs, 
              or for users and non NFT holders to purchase for support from the project. The sky is the limit!
            </Details>
          </FaqQuestion>
          <FaqQuestion>
            <Details>
              <Summary>What are the incentives?</Summary>
              People are incentivized to purchase your  NFT for the same reasons that people use OpenCollective and GitHub sponsors today. 
              Only there is more upside than what you can get with a single one shot donation.  
              <br />&nbsp;<br />
              People in general need support, they want to give back to the project, and now with ships they 
              can also tap into the project network. They can be a part of the project, by holding the project NFT. 
              Holding the NFT is to belong to the project social club! 
              <br />&nbsp;<br />
              Being a holder comes with benefits such as gated discord, DAO membership, being a part of the of the network, 
              and potential benefits like free access to hosted services and the ability to help direct the project. 
              <br />&nbsp;<br />
              Additionally, there are incentives for people, that contribute to simply earn an NFT or earn utilty tokens. 
              These rewards regular contributors for building a deeper knowledge of the project.  
              Contributor token holders could even become verified service providers for the project receiving tokens 
              for helping people use the project or projects in your organization.
              <br />&nbsp;<br /> 
              With a token economy in place. People can now structure and build value around your project, 
              and get the support of the entire community behind it. 
              A rising tide lifts all boats!
            </Details>
          </FaqQuestion>
          <FaqQuestion>
            <Details>
              <Summary>Why would I do this?</Summary>
            You would do this if you want to grow your project in a community first way. Open source and Open economy.  
            We believe that this is the way forward to make OSS sustainable, using tokens as a schelling point for the software. 
              <br />&nbsp;<br />
            It shouldn&#39;t matter if you&#39;re making a core library or building an application, 
            being a part of the community should allow anyone to take part in the ecosystem.
            </Details>
          </FaqQuestion>
          <FaqQuestion>
            <Details>
              <Summary>How do I signup?</Summary>
              Right now we&#39;re building out the platform. 
              Sign up for the&nbsp;<a target="_blank" href="https://forms.gle/nNHQ3t4YdzVkiv3HA" rel="noreferrer">closed beta</a> 
              &nbsp;look out for our first token drop, that will signal the launch of SHIPS.
            </Details>
          </FaqQuestion>
          <FaqQuestion>
            <Details>
              <Summary>When will you be live?</Summary>
              We&39;re targeting the end of 2021 for the full release, 
              and the predecessor super early test DAO sometime in during the last quarter of 2021. Join the &nbsp;  
              <a target="_blank" href="https://discord.gg/SmJv96G9PX" rel="noreferrer">discord</a> to find out.
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
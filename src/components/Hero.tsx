import styled from "styled-components";
import React from "react";
import { ThemeProp } from "./types";

const HeroContainer: React.FC = styled.div`
  display: flex;
  flex-direction: column;
  position: relative; 
  grid-row: 1 / 3;
  grid-column: 1 / 6;
`
const TitleBox: React.FC = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  font-style: normal;
  grid-row: 2 / 3;
  grid-column: 1 / 6;
  background-color: ${({theme}: ThemeProp)=>theme.colors.primary};
`

const SubtitleBox: React.FC = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 20px 0px 20px 0px;
  ${({theme}: ThemeProp)=>theme.base.mediaQueries.md} {
    padding: 20px;
  }
`

const HeroTitle: React.FC = styled.div`
  font-size: max(7rem, 30vw);
  font-weight: 700;
  line-height: 0.9;
  color: white;
  align-self: center;
  width: fit-content;
  position: relative;
  padding-bottom: 1.5rem;
  text-shadow: -1px 1px 0 #000,
    1px 1px 0 #000,
    1px -1px 0 #000,
    -1px -1px 0 #000;
  ${({theme}: ThemeProp)=>theme.base.mediaQueries.md} {
    padding-top: 3rem;
    padding-bottom: 2rem;
    font-size: max(3rem, 25vw);
  }

`

const HeroSubtitle: React.FC = styled.div`
  flex: 1;
  text-align: center;
  font-weight: 700;
  font-size: min(2rem, 8vw);
  ${({theme}: ThemeProp)=>theme.base.mediaQueries.md} {
    font-size: 3rem;
  }
`

function Hero(): React.ReactElement {
  return (
    <HeroContainer>
      <TitleBox>
        <HeroTitle>SHIPS</HeroTitle>
      </TitleBox>
      <SubtitleBox>
        <HeroSubtitle>A NEW WAY TO SUSTAIN OPEN SOURCE</HeroSubtitle>
      </SubtitleBox>
    </HeroContainer>
  )
}

export default Hero;

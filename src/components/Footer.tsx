import styled from "styled-components"
import React from "react"
import { ThemeProp } from "./types"

const FooterContainer: React.FC = styled.div`
 background-color: ${({ theme }: ThemeProp) => theme.colors.primary};
 display: flex;
 align-items: center;
 justify-items: center;
 width:100%;
 flex-direction: column;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.sm} {
    flex-direction: row;
  }
`
const Copyright: React.FC = styled.div`
  flex:1;
  padding-top: 20px;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.sm} {
    padding-left: 20px;
  }
`
const Contact: React.FC = styled.div`
  padding-top: 20px;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.sm} {
    padding-right: 20px;
  }
`

function Footer(): React.ReactElement {
  return (
    <FooterContainer>
      <Copyright>
      &copy; 2021 Create Dream Tech
      </Copyright>
      <Contact>Contact Us - info@ships.gold</Contact>
    </FooterContainer>
  )

}

export default Footer;
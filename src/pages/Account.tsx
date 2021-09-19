import React from "react"
import styled from "styled-components"
import { ThemeProp } from "../components/types"
import { AppPageTemplate } from "./Util"
import * as acctComp from "../components/Account";

interface SignupProps {
  address: string,
}

const AccountTitleContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-items: left;
  align-text: left;
`
const AccountLayout = styled.div`
 display:flex;
 flex-direction: column;
 align-items: center;
`

const AccountContainer = styled.div`
  max-width: 500px;
  
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.lg} {
    min-width: 1000px;
    min-height: max(vh,800px);
    max-width: 1200px;
  }
`
const LeftJoinBox: React.FC = styled.div`
  background-position: bottom center;
  background-image: url('/images/left-back-coin.svg');
  background-repeat: no-repeat;
  background-size: auto;
  width: 672px;
  height: 524px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: -2;

  ${({ theme }: ThemeProp) => theme.base.mediaQueries.lg} {
  }
`

const CenterJoinBox: React.FC = styled.div`
  grid-row: 1/1;
  grid-column: 1/1;
  width: 50px;
  height: 500px;
  align-items: center;
`

const RightJoinBox: React.FC = styled.div`

position: absolute;
z-index: -2;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.xs} {
    background-image: url('/images/right-back-coin.svg');
    background-size: auto;
    background-position: bottom;
    background-repeat: no-repeat;
    width: 742px;
    height: 480px;
    bottom: 0px;
    right: 0px;
  }
`;

const Account: React.FunctionComponent<SignupProps> = () => (
  <>
    <AccountLayout>
      <AccountContainer>
        <AccountTitleContainer>
          <acctComp.AccountTitle>Hi, 0983Bfe</acctComp.AccountTitle>
        </AccountTitleContainer>
        <acctComp.AccountView/>
      </AccountContainer>

    </AccountLayout>
  </>
)
/*
      <LeftJoinBox/>
      <CenterJoinBox/>
      <RightJoinBox/>
      */
// <Footer/>

export default AppPageTemplate(Account)

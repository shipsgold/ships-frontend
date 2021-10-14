import React from "react"
import styled from "styled-components"
import { ThemeProp } from "./types"
import {TabBar, TabView} from "./Tabs";
import AccountProjectView from "./AccountProjectView";
import AccountTokenView from "./AccountTokenView";

export const AccountTitle = styled.span`
  font-size: 2.5rem;
  margin-bottom: 40px
  font-family: 'proxima-nova-condensed', ${({ theme }: ThemeProp) => theme.text.primary};
  font-weight:800;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.lg} {
    font-size: 3.5rem;
  }

`

const projectTabView =  {
  label: "Projects",
  view: ()=>(
    <>
      <AccountProjectView/>
    </>
  )
}
const tokenTabView:TabView = {
  label: "Tokens",
  view:  () => (
    <>
      <AccountTokenView/>
    </>
  )
}
const launchTabView:TabView = {
  label: "+ Launch New Project",
  view: ()=>(
    <>
      <div>
   Tokens 
      </div>
    </>
  ),
  // eslint-disable-next-line no-alert
  onclick: ()=> alert("Launching new Project")
}
const AccountViewContainer = styled.div`
${({ theme }: ThemeProp) => theme.base.mediaQueries.sm} {
    max-width:400px;
  }
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.md} {
    max-width:800px;
  }
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.lg} {
    max-width: 1200px;
    width:1200px;
  }
`

const AccountViewTabBar = styled.div`



`

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const AccountView = () => {

  const tabs= [projectTabView, tokenTabView, launchTabView];
  return (
    <AccountViewContainer>
      <AccountViewTabBar>
        <TabBar tabs={tabs}/>
      </AccountViewTabBar>
    </AccountViewContainer>
  )
}


export const AccountTabBar = styled.div`




`
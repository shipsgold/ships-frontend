/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react"
import styled from "styled-components";
import { useAuthService } from "../services";
import Burger from "./Burger";
import Menu from "./Menu";
import NavItem from "./NavItem";
import NavLink from "./NavLink";
import { ThemeProp } from "./types";
import config from "../config";


const NavList: React.FC = styled.div`
  display: flex;
  justify-content: space-between;
  ${NavLink} {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  } 
`

const LeftNavContainer: React.FC = styled.div`
  flex: 1;
  ${NavItem} {
    padding-left: 0rem;
  }
  align-items: center;
  justify-content: flex-start;
  align-content: space-between;
  display: flex;
  ${({theme}: ThemeProp)=> theme.base.mediaQueries.md} {
    ${NavItem} {
      padding-left: 1.5rem;
    }
  }
`


const RightNavContainer = styled.div`
  align-items: center;
  justify-content: flex-end;
  align-content: space-between;
  display: flex;
  flex: 1;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  grid-row: 1;
  grid-column: 1/ 6;
  z-index: ${({theme}: ThemeProp)=> theme.base.zIndices.background};
  background: ${({theme}: ThemeProp)=> theme.colors.primary};
`
const AppHeaderContainer = styled(HeaderContainer)`
  padding: 1.1rem;
`

function LeftNav() {
  return (
    <LeftNavContainer>
      <NavItem>
        <NavLink href="/home">HOME</NavLink>
      </NavItem>
    </LeftNavContainer>)
}

const BurgeredNavLink = styled(NavLink)`
  display: none;
  ${({theme}: ThemeProp) => theme.base.mediaQueries.sm} {
    display: inherit;
  }
`
function RightNav(){
  const [state, send] = useAuthService();
  const loginStatus = () => {
    switch(true) {
    case state.matches('authenticating'):
      return "authenticating";
    case state.matches('authenticated'):
      return "Logged In"
    case state.matches('unauthenticated'):
      return "Login"
    default:
      return "unknown"
    }
  }
  return (
    <RightNavContainer>
      <NavList>
        <BurgeredNavLink href="/#faq">FAQ</BurgeredNavLink>
        {config.env !== "production" &&
        <>
          <BurgeredNavLink href="/signup">Signup</BurgeredNavLink>
          <BurgeredNavLink href="" onClick={()=>send("AUTH_REQUEST")}>{loginStatus()}</BurgeredNavLink>
          <BurgeredNavLink href="" onClick={()=>send("AUTH_REQUEST")}>Wallet</BurgeredNavLink>
        </>
        }
      </NavList>
    </RightNavContainer>)
}

const MenuContainer = styled(Menu)`
`
const BurgerContainer = styled(Burger)`
  align-self: center;
  justify-self:
  margin-left: 20px;
`

export default function Header(): React.ReactElement{
  const [open, setOpen] = useState(false);
  return (
    <>
      <HeaderContainer>
        <LeftNav />
        <RightNav/>
      </HeaderContainer>
    </>
  )
}
export function AppHeader(): React.ReactElement{
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div>
        <AppHeaderContainer>
          <LeftNav />
          <RightNav/>
        </AppHeaderContainer>
      </div>
    </div>
  )
}
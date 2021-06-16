import React, { useState } from "react"
import styled from "styled-components";
import { useAuthService } from "../services";
import Burger from "./Burger";
import Menu from "./Menu";
import NavItem from "./NavItem";
import NavLink from "./NavLink";
import { ThemeProp } from "./types";


const LeftNavContainer: React.FC = styled.div`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  align-content: space-between;
  display: flex;
`
const NavList: React.FC = styled.div`
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
  background: ${({theme}: ThemeProp)=> theme.colors.primary}

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
        <NavItem>
          <BurgeredNavLink href="/#faq">FAQ</BurgeredNavLink>
        </NavItem>
        <NavItem>
          <BurgeredNavLink href="" onClick={()=>send("AUTH_REQUEST")}>{loginStatus()}</BurgeredNavLink>
        </NavItem>
      </NavList>
    </RightNavContainer>)
}

const MenuContainer = styled(Menu)`
  grid-column: 1 / 6;
  grid-row: 1 / 2;
`
const BurgerContainer = styled(Burger)`
  grid-column: 5 / 6;
  grid-row: 1 / 2;
  align-self: center;
  justify-self:
`

export default function Header(): React.ReactElement{
  const [open, setOpen] = useState(false);
  return (
    <>
      <BurgerContainer open={open} setOpen={setOpen} onClick={() => setOpen(!open)} />
      <MenuContainer open={open} setOpen={setOpen}/>
      <HeaderContainer>
        <LeftNav />
        <RightNav/>
      </HeaderContainer>
    </>
  )
}
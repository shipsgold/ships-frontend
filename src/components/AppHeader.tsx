import React, { useState } from "react"
import styled from "styled-components";
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
display: flex;
flex-direction: row;
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
  z-index: ${({theme}: ThemeProp)=> theme.base.zIndices.background};
  background: ${({theme}: ThemeProp)=> theme.colors.primary};
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
  const loginStatus = () => "unknown"
  return (
    <RightNavContainer>
      <NavList>
        <NavItem>
          <BurgeredNavLink href="/#faq">FAQ</BurgeredNavLink>
        </NavItem>
        <NavItem>
          <BurgeredNavLink href="/login">{loginStatus()}</BurgeredNavLink>
        </NavItem>
      </NavList>
    </RightNavContainer>
  )

}

const MenuContainer = styled(Menu)`
`
const BurgerContainer = styled(Burger)`
  align-self: center;
  justify-self:
`

/* <BurgerContainer open={open} setOpen={setOpen} onClick={() => setOpen(!open)} />
        <MenuContainer open={open} setOpen={setOpen}/>
        */

export default function AppHeader(): React.ReactElement{
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
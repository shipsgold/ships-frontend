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
const BurgerMenu = styled.div`
  display: flex;
  flex-direction: row;
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
  return (
    <RightNavContainer>
      <NavList>
        <NavItem>
          <BurgeredNavLink href="/#faq">FAQ</BurgeredNavLink>
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
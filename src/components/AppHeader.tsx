import React, { useState } from "react"
import styled from "styled-components";
import Burger from "./Burger";
import Header from "./Header";
import Menu from "./Menu";
import NavItem from "./NavItem";
import NavLink from "./NavLink";
import { ThemeProp } from "./types";


const ApplicationHeader = styled(Header)`
  
  padding: 1.1rem;
`
/* <BurgerContainer open={open} setOpen={setOpen} onClick={() => setOpen(!open)} />
        <MenuContainer open={open} setOpen={setOpen}/>
        */

export default function AppHeader(): React.ReactElement{
  const [open, setOpen] = useState(false);
  /* <>
      <HeaderContainer>
        <LeftNav />
        <RightNav/>
      </HeaderContainer>
    </> */
  return (
    <ApplicationHeader />
  )
}
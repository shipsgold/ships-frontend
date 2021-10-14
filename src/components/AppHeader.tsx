import React from "react";
import styled from "styled-components";
import Header from "./Header";



const ApplicationHeader = styled(Header)`
  padding: 1.1rem;
`
/* <BurgerContainer open={open} setOpen={setOpen} onClick={() => setOpen(!open)} />
        <MenuContainer open={open} setOpen={setOpen}/>
        */

export default function AppHeader(): React.ReactElement{
  // const [open, setOpen] = useState(false);
  return (
    <ApplicationHeader />
  )
}
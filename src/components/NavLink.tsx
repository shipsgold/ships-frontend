import styled from "styled-components"
import { ThemeProp } from "./types"

const NavLink = styled.a`
 ${({ theme }: ThemeProp) =>
    `color: ${theme.colors.text};`

}
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: lighter;
  font-style: normal;
`
export default NavLink
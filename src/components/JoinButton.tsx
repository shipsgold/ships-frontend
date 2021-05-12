import styled from "styled-components";
import BaseStyledButton from "./Button";
import { ThemeProp } from "./types";


const JoinButton = styled(BaseStyledButton)`
background-color: ${({theme}: ThemeProp)=>theme.colors.button};
font-size: 2.5rem;
width: 220px;
height: 65px;
${({ theme }: ThemeProp) => theme.base.mediaQueries.md} {
  font-size: 3.5rem;
  width: 292px;
  height: 89px;
}
`
export default JoinButton;
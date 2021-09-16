import styled from "styled-components";
import {CommonButton} from "./CommonButton";
import { ThemeProp } from "./types";


const JoinButton = styled(CommonButton)`
background-color: ${({theme}: ThemeProp)=>theme.colors.button};
font-size: 2.0rem;
font-weight: 550;
width: 220px;
height: 65px;
${({ theme }: ThemeProp) => theme.base.mediaQueries.md} {
  width: 250px;
  height: 80px;
}
`
export default JoinButton;
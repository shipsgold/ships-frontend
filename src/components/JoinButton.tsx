import styled from "styled-components";
import {CommonButton} from "./CommonButton";
import { ThemeProp } from "./types";


const JoinButton = styled(CommonButton).attrs(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props=> ({
    as: "a",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeg4C9rmJlzs0u4D4dYx3_y5ouWFNkczw1pjkIZUIgV7ifvfg/viewform"
  })
)`
background-color: ${({theme}: ThemeProp)=>theme.colors.button};
font-size: 2.0rem;
font-weight: 550;
width: 220px;
text-decoration: none;
text-align: center;
display: flex;
flex-direction: column;
align-self: center;
justify-content: center;
height: 65px;
${({ theme }: ThemeProp) => theme.base.mediaQueries.md} {
  width: 250px;
  height: 80px;
}
`
export default JoinButton;
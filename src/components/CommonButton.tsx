import styled from "styled-components";
import BaseStyledButton from "./Button";
import { ThemeProp } from "./types";

const CommonButton = styled(BaseStyledButton)`
background-color: ${({theme}: ThemeProp)=>theme.colors.button};
font-size: 2.0rem;
width: 220px;
height: 100px;
border: 4px;
border-radius: 4px;
border-style: solid;
:hover {
  opacity: 0.6;
}
`
export const CommonRoundedButton = styled(BaseStyledButton)`
background-color: ${({theme}: ThemeProp)=>theme.colors.button};
font-size: 2.0rem;
width: 220px;
height: 100px;
border: 4px;
border-radius: 20px;
border-style: solid;
`
export const CommonExtraRoundButton = styled(CommonRoundedButton)`
border-radius: 40px;
border-color: ${({theme}: ThemeProp)=>theme.colors.primary};
:hover {
  opacity: 0.6;
}
`
export default CommonButton;

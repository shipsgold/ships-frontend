import styled from "styled-components";
import BaseStyledButton from "./Button";
import { ThemeProp } from "./types";

const CommonButton = styled(BaseStyledButton)`
background-color: ${({theme}: ThemeProp)=>theme.colors.button};
font-size: 1.3rem;
font-weight: 900;
width: 220px;
height: 100px;
border-radius: 16px;
border-style: solid;
:hover {
  opacity: 0.6;
}
border-radius: 16px;
border-style: solid;
border-color: ${({theme}: ThemeProp)=>theme.colors.black}
color: ${({theme}: ThemeProp)=>theme.colors.black};
border-width: 4px;

${({theme}: ThemeProp)=>theme.base.mediaQueries.sm} {
border-width: 5px;
}
`
export const CommonRoundedButton = styled(BaseStyledButton)`
background-color: ${({theme}: ThemeProp)=>theme.colors.button};
color: ${({theme}: ThemeProp)=>theme.colors.black};
font-size: 1.3rem;
width: 220px;
height: 100px;
border-radius: 20px;
border-style: solid;
border-width: 4px;
${({theme}: ThemeProp)=>theme.base.mediaQueries.sm} {
border-width: 5px;
}
`
export const CommonExtraRoundButton = styled(CommonRoundedButton)`
border-radius: 40px;
border-color: ${({theme}: ThemeProp)=>theme.colors.primary};
:hover {
  opacity: 0.6;
}
border-width: 4px;
color: ${({theme}: ThemeProp)=>theme.colors.black};
${({theme}: ThemeProp)=>theme.base.mediaQueries.sm} {
border-width: 5px;
}
`
export default CommonButton;

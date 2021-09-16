import styled from "styled-components";
import React, { ReactNode } from "react";
import { ThemeProp } from "./types";

export type SnackBarType = "success" | "info" | "failure";
export interface SnackBarProps{
  snackbar: SnackBarType, 
  children?: ReactNode,
}

const SnackBarBody = styled.div<SnackBarProps>`
bottom: 100px;
display: flex;
position: fixed;
width: 400px;
height: 45px;
font-weight: 900;
font-size: 1.1rem;
align-items: center;
justify-content: center;
flex-direction: column;
color: ${({theme}: ThemeProp)=> theme.colors.text};
background-color:${(props)=> props.theme.colors[props.snackbar]};
border-radius: 6px;
filter: drop-shadow(2px 2px 5px rgba(0,0,0,0.6));
`
const SnackBarHiddenCheck = styled.input.attrs({
  type: "checkbox",
  focus: "none"
})`


`
const SnackBarWrapper = styled.div`

margin: 0 auto;

`
const SnackBar: React.FC<SnackBarProps> = (props: SnackBarProps) =>{
  const {children} = props;
  return (<SnackBarWrapper>
    <SnackBarHiddenCheck />
    <SnackBarBody {...props}>{children}</SnackBarBody>
  </SnackBarWrapper>)
}


export default SnackBar
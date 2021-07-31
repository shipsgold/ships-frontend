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
display: block;
position: fixed;
width: 100;
background-color:${(props)=> props.theme.colors[props.snackbar]};
`
const SnackBarHiddenCheck = styled.input.attrs({
  type: "checkbox",
  focus: "none"
})`


`
const SnackBarWrapper = styled.div`


`
const SnackBar: React.FC<SnackBarProps> = (props: SnackBarProps) =>{
  const {children} = props;
  return (<SnackBarWrapper>
    <SnackBarHiddenCheck />
    <SnackBarBody {...props}>{children}</SnackBarBody>
  </SnackBarWrapper>)
}


export default SnackBar
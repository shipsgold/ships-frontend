import styled from "styled-components";
import React from "react";
import { isPropertySignature } from "typescript";
import BaseStyledButton from "./Button";
import { ThemeProp } from "./types";

export const ToolTipBody = styled.div`
background-color: ${({theme}: ThemeProp)=>theme.colors.secondary};
color: ${({theme}: ThemeProp)=>theme.colors.secondaryText};
font-size: 1.0rem;
width: 220px;
border-radius: 20px;
padding: 10px;
position: relative;
align-items: center;
}
`
const ToolTipTriangle = styled.div`
display: block;
height: 20px;
width: 20px;
background-color: inherit;
border: inherit;
position: absolute;
top: -10px;
clip-path: polygon(
  0% 0%,
  0% 100%,
  100% 100%
);
transform: rotate(135deg);
left: calc(50% - 10px);
}
`
export const ToolTipContainer = styled.div`
  margin:10px; 
  visibility: hidden;
  opacity: 0;
`
const ToolTip: React.FC<any> = ({children}: any) =>
  (
    <ToolTipContainer>
      <ToolTipBody>
        {children}
        <ToolTipTriangle/>
      </ToolTipBody>
    </ToolTipContainer>
  );



export default ToolTip;
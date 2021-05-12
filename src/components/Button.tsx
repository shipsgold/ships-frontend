import styled from "styled-components";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> 

const BaseStyledButton: React.FC<ButtonProps> = styled.button`
  border: none;
  cursor: pointer;
`

export default BaseStyledButton
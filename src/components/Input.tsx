import styled from "styled-components";
import { ThemeProp } from "./types";

const Input = styled.input`
background-color: ${({theme}: ThemeProp)=>theme.colors.button};
font-size: 2.0rem;
width: 220px;
height: 100px;
border: 4px;
border-radius: 4px;
border-style: solid;

`
export const EmailInput = styled.input.attrs({
  type: "email",
  focus: "none",
  placeholder:"Enter your email"
})
`
 border: 4px solid ${({ theme }: ThemeProp) => theme.colors.primary};
 border-radius: 100px;
 height: 80px;
 font-size: 2rem;
 background-color: white;
 padding: 20px;
&:focus {
  outline: none;
}
`;

export default Input
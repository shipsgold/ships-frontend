
// Menu.styled.js
import styled from 'styled-components';
import React from 'react';
import { ThemeProp } from './types';

const BaseMenu:React.FC<MenuProps> = styled.nav`
  ${({ open }: MenuProps) => open ? `transform: translateY(0);` : `transform: translateY(-100%);`}
  ${({ open }: MenuProps) => open ? `display:flex;` : `display:none;`}
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }: ThemeProp) => theme.colors.secondary};
  z-index: ${({ theme }: ThemeProp) => theme.base.zIndices.modal};
  
  text-align: left;
  padding: 2rem;
  transition: transform 0.3s ease-in-out;
  width: 100vw; 
  height: 50vh;
  ${({theme}: ThemeProp) => theme.base.mediaQueries.sm} {
    width: auto;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }: ThemeProp) => theme.colors.text};
    text-decoration: none;
    transition: color 0.3s linear;
    font-size: 1.5rem;
    text-align: center;
    ${({theme}: ThemeProp) => theme.base.mediaQueries.sm} {
      padding: 2rem 0;
      text-align: left;
    }
    &:hover {
      color: ${({ theme }: ThemeProp) => theme.colors.tertiary};
    }
  }
`;

export interface MenuProps {
  open: boolean,
  setOpen: (action: boolean) => void;
}

const Menu:React.FC<MenuProps> = (props: MenuProps)=> (
  <BaseMenu {...props}>
    <a href="#faq">FAQ</a>
  </BaseMenu>
)

export default Menu;
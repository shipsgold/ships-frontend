import styled from 'styled-components';
import React from 'react';
import { ThemeProp } from './types';

export interface BurgerProps extends  React.HTMLProps<HTMLButtonElement>  {
  open: boolean,
  setOpen: (action: boolean) => void;
}

const BurgerBase: React.FC<BurgerProps> = styled.button<BurgerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: ${({ theme }: ThemeProp) => theme.base.zIndices.modalControl};
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.10rem;
    background: ${({ theme }:ThemeProp) => theme.colors.tertiary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 4px;

    :first-child {
      transform: ${({ open }: BurgerProps) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }: BurgerProps) => open ? '0' : '1'};
      transform: ${({ open }: BurgerProps) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }: BurgerProps) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  ${({theme}: ThemeProp) => theme.base.mediaQueries.sm} {
    display: none;
  }
`;

const Burger:React.FC<BurgerProps> = (props: BurgerProps) => (
  <BurgerBase {...props}>
    <div />
    <div />
    <div />
  </BurgerBase>
)

export default Burger


/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import React, {useState } from "react";
import { ThemeProp } from "./types";

export interface TabProps {
  active: boolean
}
// ${({theme}: ThemeProp)=> theme.colors.primary}
const TabButton = styled.button<TabProps>`
  font-size: 20px;
  position: relative;
  padding-top: 10px;
  margin-right: 40px;
  cursor: pointer;
  opacity: 0.6;
  padding-left: 0px;
  padding-bottom: 10px;
  border-style: none none solid;
  text-align: left;
  background-color: white;
  border-bottom-color: ${({theme}: ThemeProp)=> theme.colors.black}; 
  outline: 0;
  top: 2px;
  ${({ theme, active }) =>
    active &&
    `
    border-width:0 0 2px 0; 
    border-bottom-color: ${theme.colors.primary};
    opacity: 1;
  `}
`;

export interface TabView{
  label: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  view : React.FC<any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onclick?: (...args: any)=>void,
}

export interface TabBarProps{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tabs: TabView[];  
}

const TabButtonGroup = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 40px;
  border-width: 0 0 2px 0;
  border-bottom-color: black;
  border-style: none none solid;
  box-sizing:border-box;
  -webkit-box-sizing:border-box;
`;

const TabButtonGroupContainer = styled.div`
  display: flex;
`;

export function TabBar(props: TabBarProps):React.ReactElement {
  const {tabs} = props; 
  const [active, setActive] = useState(tabs[0].label);
   


  return (
    <>
      <TabButtonGroup>
        {tabs.map(tab => (
          <TabButton
            key={tab.label}
            active={active === tab.label}
            onClick={ tab.onclick ? tab.onclick : () => setActive(tab.label)}
          >
            {tab.label}
          </TabButton>
        ))}

      </TabButtonGroup>
      {tabs.map(tab => (
        <>
          {active === tab.label && <tab.view key={`${tab.label  }v`}/>} 
        </>
      ))}
    </>
  );
}

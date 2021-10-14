import styled from "styled-components"
import React, { useState } from "react"
import { ThemeProp } from "./types"
 
export const AccountProjectViewContainer = styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);
grid-auto-rows: 200px;
grid-gap: 20px;
justify-items: center;
${({theme}: ThemeProp) => theme.base.mediaQueries.md } {
grid-template-columns: repeat(2, 1fr);
}
${({theme}: ThemeProp) => theme.base.mediaQueries.lg } {
grid-template-columns: repeat(4, 1fr);
}
`


const AccountProject = styled.div`
  background: ${({theme}: ThemeProp) => theme.colors.gray};
  height: 200px;
  width: 271px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, .4); 
`
const AccountProjectTitle=styled.span`
  font-size: 1.5rem;
  font-weight: 300; 
  text-align: center;
`

const AccountProjectView = (): React.ReactElement => {
  const [projects] = useState(["Create Your First Project","...","...","...","...","...","...","..."])
  
  return (
    <AccountProjectViewContainer>
      {projects.map(project => (
        <AccountProject>
          <AccountProjectTitle>{project}</AccountProjectTitle>
        </AccountProject>
      ))}   
    </AccountProjectViewContainer>
  )

}
export default AccountProjectView;
import styled from "styled-components"
import React, { useEffect, useState } from "react"
import { ThemeProp } from "./types"
 
export const AccountTokenViewContainer = styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);
grid-auto-rows: 338px;
gap: 10px;
justify-items: center;
${({theme}: ThemeProp) => theme.base.mediaQueries.md } {
grid-template-columns: repeat(2, 1fr);
}
${({theme}: ThemeProp) => theme.base.mediaQueries.lg } {
grid-template-columns: repeat(4, 1fr);
}
`


const AccountTokenContainer = styled.div`
  background: ${({theme}: ThemeProp) => theme.colors.gray};
  height: 338px;
  width: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: 5px 5px 2px 1px rgba(0, 0, 0, .4); 
`
const AccountTokenTitle=styled.span`
  font-size: 1.5rem;
  font-weight: 300; 
  text-align: center;
`
const TokenCard = styled.div`
background-color:white;
border-color: ${({theme}: ThemeProp) => theme.colors.gray};
border-width: 2px;
border-style: solid;
transition: 0.3s;
&:hover {
  box-shadow: 0 10px 15px 0 rgba(0,0,0,0.4);
}

`
interface ImageProp {
  url: string
}
const TokenImage = styled.div<ImageProp>`
background-image: url(${(props: ImageProp)=> props.url});
background-position: center;
background-size: cover;
width: 250px;
height: 250px;

`
const TokenHeader = styled.div`
 padding:20px;
`

const TokenDetailText = styled.div`
  font-size: 0.5rem;
  font-weight: 800;
`

const img= "https://lh3.googleusercontent.com/Lx4G9Xka721I-6fxMNLA5wQT4U-6LMugFgF2aZ5smUnMRj0B8VA72rddT_KMM72qt6g7W1j2FhDiyHRpuIgj9A4zPLpD-0eQ_4P_5w=w600"
interface Token {
  img: string,
  project: string;
  name: string;
}
const project= "Cool Project Official"
const name= "The Awesomeness Fluffy NFT"
const testTokens = 
Array.from(Array(10).keys()).map(()=>({img,
  project,
  name
}))

const AccountTokenCard = (props:any): React.ReactElement => {

  const {token} = props;
  return (
    <TokenCard>
      <TokenHeader/>
      <TokenImage url={token.img}/>            
      <TokenDetailText>{token.project}</TokenDetailText>
      <TokenDetailText>{token.name}</TokenDetailText>
    </TokenCard>
  )

}

const AccountTokenView = (): React.ReactElement => {
  const [tokens] = useState(testTokens)
  
  return (
    <AccountTokenViewContainer>
      {tokens.map((token,idx) => (
        <AccountTokenCard key={`token_${token.name + idx}`}token = {token}/>
      ))}   
    </AccountTokenViewContainer>
  )

}
export default AccountTokenView;
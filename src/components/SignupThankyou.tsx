import styled from "styled-components";
import React from "react"
import qs from "qs";
import * as std from "./Standards";
import { ThemeProp } from "./types"

const ThanksTitle: React.FC = styled(std.H1)`
text-align: center;
margin-top: 60px;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.sm} {
    margin-top:20px;
  }
`
const ThanksMessageWrapper = styled.div`
padding-left: 10px;
`

const ThanksMessage: React.FC = styled.div`
  text-align: justify;
  text-justify: distribute;
  font-size: 1.7rem;
  margin-top: 40px;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.sm} {
    font-weight: 300;
    font-size: 2.5rem;
    font-style: italic;
    margin-top: 20px;
  }
`
const PSMessage: React.FC = styled(std.H3)`
font-size: 1.35rem;

  ${({ theme }: ThemeProp) => theme.base.mediaQueries.sm} {
    font-size: 1.3rem;
  }
margin-top: 60px;
`
const ThanksContainer: React.FC = styled.div`
  max-width: 90vw;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.sm} {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-self: center;
  }
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.lg} {
    min-height: 864px;
    max-width: 700px;
  }
`
const ThanksNoWallet: React.FC = styled.div`

`
const ThanksWallet: React.FC = styled.div`
   margin-bottom: 40px;
   text-align: left;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.md} {
    text-align: left;
  }
`


interface CoinProps {
  coins: number
}

const Coin: React.FC = styled.div`
 background-image: url('/images/coin3-01.svg');
 background-repeat: no-repeat;
 background-size: contain;
 background-position: right;
 width: 50px;
 height: 50px;

 ${({ theme }: ThemeProp) => theme.base.mediaQueries.sm} {
 width: 85px;
 height: 85px;
}
 display: flex;
 align-items: center;
 font-weight: 800;
 justify-content: center;
 font-size: 1.1rem;
 ${({ theme }: ThemeProp) => theme.base.mediaQueries.md} {
   width: 60px;
   height: 60px;
}
`

const Coins: React.FC = styled.div`
display: grid; 
margin-top: 40px;
grid-template-rows: 50px 50px;
grid-template-columns: repeat(5, 1fr);
column-gap: 10px;
row-gap: 5px;
max-width: 90vw;
 ${({ theme }: ThemeProp) => theme.base.mediaQueries.sm} {
  grid-template-rows: 85px 85px;
  grid-gap: 10px;
  column-gap: 16px;
  row-gap: 5px;
  max-width: 500px;
 }

 ${({ theme }: ThemeProp) => theme.base.mediaQueries.md} {
  max-width: 700px;
  grid-template-rows: 60px;
  grid-template-columns: repeat(10, 1fr);
  column-gap: 10px;
  row-gap: 5px;
}
`
const ThanksWrapper = styled.div`
  max-width: 90vw;
  margin: 0 auto;
 ${({ theme }: ThemeProp) => theme.base.mediaQueries.sm} {
  max-width: 500px;
 }
${({ theme }: ThemeProp) => theme.base.mediaQueries.md} {
  max-width: 700px;
 }
`

const CoinContainer:React.FC<CoinProps> = (props: CoinProps) => {
  const {coins} = props;
  const coinElements = [];
  for (let i = 0; i < coins; i += 1) {
    coinElements.push(<Coin>{i + 1}&nbsp;&nbsp;</Coin>)
  }
  return (
    <Coins>
      {coinElements}
    </Coins>
  )
}

const Link = styled.a`
color: ${({ theme }: ThemeProp) => theme.colors.secondary};
text-decoration-color:  ${({ theme }: ThemeProp) => theme.colors.secondary};
text-decoration-thickness: .05em;
text-underline-offset: 2px;
`
const BlackLink = styled(Link)`
color: ${({ theme }: ThemeProp) => theme.colors.black};
text-decoration-color:  ${({ theme }: ThemeProp) => theme.colors.black};
`
const SignupThankyou: React.FC = () => {

  const { wallet } = qs.parse(window.location.search, { ignoreQueryPrefix: true })
  return (
    <ThanksWrapper>
      <ThanksContainer>
        <ThanksTitle>Thanks for <wbr/>signing&nbsp;up!</ThanksTitle>
        <ThanksMessageWrapper>        
          {wallet === "false" ? <ThanksNoWallet>
            <ThanksMessage><Link href="https://foobar.com">Copy this link</Link> 
    &nbsp;and keep it safe.  It&apos;s your way to recover your account 
    until you create a <Link href="https://wallet.near.org">Near Wallet</Link>.</ThanksMessage>
            <PSMessage>PS. We&apos;ve just deposited 10 SHIPS Frontend Tokens to <BlackLink href="/account">your account</BlackLink>!</PSMessage>
          </ThanksNoWallet>
            : 
            <ThanksWallet>
              <ThanksMessage>
          We’ve just deposited 10 Ships Frontend
          Tokens to your account. <Link href="/account">Check it out!</Link>
              </ThanksMessage>
            </ThanksWallet>
          }
        </ThanksMessageWrapper>

        <CoinContainer coins={10} />
      </ThanksContainer>
    </ThanksWrapper>
  ) 
}

export default SignupThankyou;
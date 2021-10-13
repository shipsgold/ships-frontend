import styled from "styled-components"
import React, { useEffect } from "react"
import qs from "qs";
import { useLocation, useHistory } from "react-router-dom";
import { ThemeProp } from "./types"
import {CommonButton, CommonExtraRoundButton} from "./CommonButton";
import DividerWithText from "./DividerWithText";
import { EmailInput, CommonInput, InputLabel } from "./Input";
import { useUserService } from "../services";
  
const SignupButton = styled(CommonButton)`
  width: 90vw;
  height: 65px;
${({ theme }: ThemeProp) => theme.base.mediaQueries.sm} {
  width: 472px;
}
`
const SignupEmailButton = styled(CommonButton)`
width: 90vw;
height: 65px;
font-weight: 900;
border-color: black;
${({ theme }: ThemeProp) => theme.base.mediaQueries.sm} {
  width: 472px;
}
`
const SignupEmailInput = styled(EmailInput)`
width: 90vw;
height: 65px;
${({ theme }: ThemeProp) => theme.base.mediaQueries.sm} {
  width: 472px;
}
`

const SlideContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-rows: auto;
`
const ArtContainer = styled.div`
background-color: black;
display: flex;
flex-direction: column;
align-items: center;
`
const ArtImage = styled.img.attrs(props => ({
  src:'/images/moon.svg',
}))`
margin-top:100px;
  width: 500px;
  
`;

/* const ArtImage = styled.div`
  background-image: 
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
`
*/

const SignupContainer: React.FC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const EmailMessage: React.FC = styled.div`
  text-align: center;
  margin-bottom: 2px;
  font-size: 1.3rem;
`
const SignupMessage: React.FC = styled.span`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px
`
const SignupBold: React.FC = styled.span`
  font-family: 'proxima-nova-condensed', ${({ theme }: ThemeProp) => theme.text.primary};
  font-weight:800;
`

const SignupFormContainer: React.FC = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  ${CommonInput} {
    margin-bottom: 20px;
  }
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.lg} {
    min-height: 800px;
    max-width: 700px;
  }

  ${SignupButton} {
    margin: 10px;
  }
  ${SignupEmailButton} {
    margin: 10px;
  }
  ${SignupEmailInput} {
    margin: 10px;
  }
`


const githubLink = "https://github.com/login/oauth/authorize?redirect_uri=http://localhost:3000/auth&client_id=bb507e0752af3f27dabb&scope=read:user";


const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

`

function CreateProjectForm(): React.ReactElement {
  const location = useLocation();
  const history = useHistory();
  const [user, send] = useUserService();
  useEffect(() => {
    const { code } = qs.parse(location.search, { ignoreQueryPrefix: true })
    if(code) {
      console.log("calling git auth now")
      send("GIT_AUTH",{code: code.toString()})
      history.push("/auth")
    }
    //   history.push("/profile") 
    // Send request to your server to increment page view count
    /*
          <SignupMessage>
            Launch your&nbsp;<br />
            project on <SignupBold>SHIPS</SignupBold>
          </SignupMessage>
          <SignupButton onClick={()=>{window.location.href = githubLink}}> Sign up with Github
          </SignupButton> 
          <SignupButton onClick={() => send("WALLET_AUTH")}>
          Sign up with Near 
          </SignupButton>
          <DividerWithText>OR</DividerWithText>
          <EmailMessage> Sign up with your email address</EmailMessage>
          <SignupEmailInput />
          <SignupEmailButton>Sign up with email</SignupEmailButton>
          */
  // <!--<div>{user && user.context.gitCode}</div>-->
  }, [location, send, history])
  return (
    <SlideContainer>
      <ArtContainer>
        <ArtImage/>
      </ArtContainer>
      <SignupContainer>
        <SignupFormContainer>
          <SignupMessage>
            Launch your&nbsp;<br />
            project on <SignupBold>SHIPS</SignupBold>
          </SignupMessage>
          <InputContainer>
            <InputLabel>Project Name</InputLabel>
            <CommonInput />
          </InputContainer>
          <InputContainer>
            <InputLabel>Github Repo</InputLabel>
            <CommonInput />
          </InputContainer>
          <InputContainer>
            <InputLabel>Owner</InputLabel>
            <CommonInput />
          </InputContainer>
          <SignupEmailButton>Launch</SignupEmailButton>
        </SignupFormContainer>
      </SignupContainer>
    </SlideContainer>
  )
}

export default CreateProjectForm;
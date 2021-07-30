import styled from "styled-components"
import React, { useEffect } from "react"
import qs from "qs";
import { useLocation, useHistory } from "react-router-dom";
import { ThemeProp } from "./types"
import CommonButton, {CommonExtraRoundButton} from "./CommonButton";
import DividerWithText from "./DividerWithText";
import { EmailInput } from "./Input";
import client from "../api/client";
import { useUserService } from "../services";
  
const ButtonLink = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: lighter;
  font-style: normal;
`
const SignupButton = styled(CommonButton)`
width: max(25vw, 100px);
font-size: 2.0rem;
height: 80px;
${({ theme }: ThemeProp) => theme.base.mediaQueries.md} {
  height: 80px;
}
`
const SignupEmailButton = styled(CommonExtraRoundButton)`
width: max(25vw, 100px);
font-size: 2.0rem;
height: 80px;
${({ theme }: ThemeProp) => theme.base.mediaQueries.md} {
  height: 80px;
}
`
const SignupEmailInput = styled(EmailInput)`
width: max(25vw, 100px);
font-size: 2.0rem;
height: 80px;
${({ theme }: ThemeProp) => theme.base.mediaQueries.md} {
  height: 80px;
}
`
const SignupContainer: React.FC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const EmailMessage: React.FC = styled.div`
  text-align: center;
  padding:20px;
`
const SignupMessage: React.FC = styled.span`
  font-size: 2.5rem;
  text-align: center;
  padding:20px;
`
const SignupBold: React.FC = styled.span`
  font-weight:700;
`

const SignupFormContainer: React.FC = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.lg} {
    min-height: 864px;
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


function SignupForm(): React.ReactElement {
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

  // <!--<div>{user && user.context.gitCode}</div>-->
  }, [location, send, history])
  return (
    <div>
      <SignupContainer>
        <SignupFormContainer>
          <SignupMessage>
            Signup for <SignupBold>SHIPS!</SignupBold>
          </SignupMessage>
          <SignupButton onClick={()=>{window.location.href = githubLink}}> Sign up with Github
          </SignupButton> 
          <SignupButton onClick={() => send("WALLET_AUTH")}>
          Sign up with Near 
          </SignupButton>
          <DividerWithText>OR</DividerWithText>
          <EmailMessage> Enter your email address to sign up</EmailMessage>
          <SignupEmailInput />
          <SignupEmailButton>Sign up with email</SignupEmailButton>
        </SignupFormContainer>
      </SignupContainer>
    </div>
  )
}

export default SignupForm;
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
import ToolTip, {ToolTipContainer} from "./ToolTip";
  
const LoginButton = styled(CommonButton)`
width: max(25vw, 100px);
font-size: 2.0rem;
height: 80px;
${({ theme }: ThemeProp) => theme.base.mediaQueries.md} {
  height: 80px;
}
`
const RecoveryToolTip = styled(ToolTip)`
font-size: 1.5rem;
width: max(20vw, 100px);
margin: 0 auto;
display: flex;
align-self: center;

`
const RecoverContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
&:hover ${ToolTipContainer} {
  visibility: visible;
  transition: opacity 0.5s ease;
  opacity: 1;

}
`
const RecoveryButton = styled(CommonExtraRoundButton)`
width: max(25vw, 100px);
background-color: ${({theme}: ThemeProp) => theme.colors.background};
font-size: 2.0rem;
height: 80px;
:hover {
  opacity: 1;
}


${({ theme }: ThemeProp) => theme.base.mediaQueries.md} {
  height: 80px;
}
`

const LoginContainer: React.FC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoginMessage: React.FC = styled.span`
  font-size: 2.5rem;
  text-align: center;
  padding:20px;
`
const LoginBold: React.FC = styled.span`
  font-weight:700;
`

const LoginFormContainer: React.FC = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.lg} {
    min-height: 864px;
    max-width: 700px;
  }

  ${LoginButton} {
    margin: 10px;
  }

  ${RecoveryButton} {
    margin: 10px;
  }

`
const githubLink = "https://github.com/login/oauth/authorize?redirect_uri=http://localhost:3000/auth&client_id=bb507e0752af3f27dabb&scope=read:user";


function LoginForm(): React.ReactElement {
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
      <LoginContainer>
        <LoginFormContainer>
          <LoginMessage>
            Login to <LoginBold>SHIPS!</LoginBold>
          </LoginMessage>
          <LoginButton onClick={() => send("WALLET_AUTH")}>
           Login with Near 
          </LoginButton>
          <DividerWithText>OR</DividerWithText>
          <RecoverContainer>
            <RecoveryButton>Use Recovery Link</RecoveryButton>
            <RecoveryToolTip>The recovery link is the only way to
login after you’ve logged out without
a wallet. Just pop the link into the
browser window and you’ll recover
the account you’ve created. Or,
create a new account.</RecoveryToolTip>
          </RecoverContainer>
        </LoginFormContainer>
      </LoginContainer>
    </div>
  )
}

export default LoginForm;
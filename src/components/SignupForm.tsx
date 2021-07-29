import styled from "styled-components"
import React, { useEffect } from "react"
import qs from "qs";
import { useLocation, useHistory } from "react-router-dom";
import { ThemeProp } from "./types"
import Button from "./Button";
import client from "../api/client";
import { useUserService } from "../services";
  
const ButtonLink = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: lighter;
  font-style: normal;
`
const SignupContainer: React.FC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SignupFormContainer: React.FC = styled.div`
  max-width: 500px;
  ${({ theme }: ThemeProp) => theme.base.mediaQueries.lg} {
    min-height: 864px;
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
  }, [location, send, history])
  return (
    <div>
      <SignupContainer>
        <Button>
          <ButtonLink href={githubLink}>Sign up with Github
          </ButtonLink>
        </Button> 
        <Button onClick={() => send("WALLET_AUTH")}>
          Sign up with Near 
        </Button>
        <div>{user && user.context.gitCode}</div>
      </SignupContainer>
    </div>
  )
}

export default SignupForm;
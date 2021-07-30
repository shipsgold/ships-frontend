
import React from "react"
import { AppPageTemplate } from "./Util"
import LoginForm from "../components/LoginForm"

interface LoginProps {
  address: string,
}
const Login: React.FunctionComponent<LoginProps> = () => (
  <>
    <LoginForm/>
  </>
)


export default AppPageTemplate(Login)

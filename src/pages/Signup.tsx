import React from "react"
import { AppPageTemplate } from "./Util"
import SignupForm from "../components/SignupForm"

interface SignupProps {
  address: string,
}
const Signup: React.FunctionComponent<SignupProps> = () => (
  <>
    <SignupForm/>
  </>
)

// <Footer/>

export default AppPageTemplate(Signup)

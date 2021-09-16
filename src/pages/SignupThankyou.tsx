import React from "react"
import { AppPageTemplate } from "./Util"
import SignupThankyou from "../components/SignupThankyou"

interface SignupProps {
  address: string,
}
const Signedup: React.FunctionComponent<SignupProps> = () => (
  <>
    <SignupThankyou/>
  </>
)

// <Footer/>

export default AppPageTemplate(Signedup)

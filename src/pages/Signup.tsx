import React from "react"
import { AppPageTemplate } from "./Util"
import { AppBaseLayout } from "../components/Layout"
import Header from "../components/AppHeader"
import Footer from "../components/Footer"
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

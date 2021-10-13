import React from "react"
import { AppPageTemplate } from "./Util"
import CreateProjectForm from "../components/CreateProjectForm"

interface SignupProps {
  address: string,
}


const LaunchProject: React.FunctionComponent<SignupProps> = () => (
  <>
    <CreateProjectForm/>
  </>
)

// <Footer/>

export default AppPageTemplate(LaunchProject)

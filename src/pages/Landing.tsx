import React from "react"
import PageTemplate from "./Util"
import { LandingBaseLayout } from "../components/Layout"
import Hero from "../components/Hero"
import Join from "../components/Join"
import WhatMessage from "../components/WhatMessage"
import Community from "../components/Community"
import Faq from "../components/Faq"
import Footer from "../components/Footer"

interface LandingProps {
  address: string,
}
const Landing: React.FunctionComponent<LandingProps> = () => (
  <>
    <LandingBaseLayout>
      <Hero/>      
      <Join/>
      <WhatMessage/>
      <Community/>
      <Faq/>
    </LandingBaseLayout>
    <Footer/>
  </>
)


export default PageTemplate(Landing)
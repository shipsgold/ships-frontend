import React from "react"
import { AppBaseLayout } from "../components/Layout"
import  AppHeader  from "../components/AppHeader"

export default function PageTemplate<T>(Page: React.FC<T>): React.FC<T> {
  return (props: T) => (
    <>
      <div>
        <Page {...props} />
      </div>
    </>
  )
}

// <-! <AppFooter/>-->
export function AppPageTemplate<T>(Page: React.FC<T>): React.FC<T> {
  return (props:T) => (
    <>
      <AppBaseLayout>
        <AppHeader/>
        <Page {...props}/>
      </AppBaseLayout>
    </>
  )

}
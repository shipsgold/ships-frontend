import React from "react"

export default function PageTemplate<T>(Page: React.FC<T>): React.FC<T> {
  return (props: T) => (
    <>
      <div>
        <Page {...props} />
      </div>
    </>
  )
}
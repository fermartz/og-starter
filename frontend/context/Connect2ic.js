import React from "react"
import { defaultProviders } from "@connect2ic/core"
import { Connect2ICProvider } from "@connect2ic/react"
// Styles for the ConnectDialog & Button
// import "@connect2ic/core/style.css"
import { counter } from "canisters/counter"

function ConnectProvider({ children }) {
  return (
    <Connect2ICProvider
      canisters={{
        counter,
      }}
      providers={defaultProviders}
    >
      {children}
    </Connect2ICProvider>
  )
}

export default ConnectProvider

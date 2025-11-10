"use client"

import { TinaCMS } from "tinacms"
import { ReactNode } from "react"

interface TinaProviderProps {
  children: ReactNode
}

export function TinaProvider({ children }: TinaProviderProps) {
  return (
    <TinaCMS
      clientId={process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
      token={process.env.TINA_TOKEN}
      branch={process.env.NEXT_PUBLIC_TINA_BRANCH || "main"}
      apiURL={process.env.NEXT_PUBLIC_TINA_API_URL || "https://content.tinajs.io/content"}
    >
      {children}
    </TinaCMS>
  )
}

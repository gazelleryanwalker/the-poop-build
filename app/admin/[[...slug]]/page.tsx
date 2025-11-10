"use client"

import { TinaCMS, TinaAdmin } from "tinacms"

export default function AdminPage() {
  return (
    <TinaCMS
      clientId={process.env.NEXT_PUBLIC_TINA_CLIENT_ID!}
      branch={process.env.NEXT_PUBLIC_TINA_BRANCH || "main"}
      token={process.env.NEXT_PUBLIC_TINA_TOKEN}
      isLocalClient={false}
    >
      <TinaAdmin />
    </TinaCMS>
  )
}

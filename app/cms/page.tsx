"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

/**
 * This page redirects to the Pages CMS admin interface.
 * Pages CMS is managed directly through GitHub, so we redirect users there.
 */
export default function AdminDashboard() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to Pages CMS admin
    window.location.href = "https://pages.cloudcannon.com"
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A1628] to-[#0D1D35]">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Redirecting to Pages CMS...</h1>
        <p className="text-xl opacity-75">
          Please wait while we redirect you to the Pages CMS admin interface.
        </p>
      </div>
    </div>
  )
}

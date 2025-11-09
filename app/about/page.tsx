"use client"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Award, Users, Target, Heart, TrendingUp, Shield, Mail, Linkedin } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
export default function AboutPage() {
  const defaultTeamMember = {
    name: 'Joshua "Josh" Costello, Esq.',
    role: "Founder & Managing Attorney",
    bio: "With over 12 years of courtroom and litigation experience, Joshua Costello has dedicated his career to fighting for individuals who have been injured or wrongfully denied by insurance companies. A graduate of the University of Miami School of Law, Josh brings a relentless commitment to achieving justice for his clients throughout Broward County.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JulioNaranjoPhotography_20250922_Joshua%27sExecutiveHeadshots-005.JPG-1S7hL1RcPFnJQqMhexzFc2I73NMQB4.jpeg",
    email: null,
    linkedin: null,
  }
  const displayTeamMembers = [defaultTeamMember]
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* rest of file unchanged */}
      <Footer />
    </div>
  )
}

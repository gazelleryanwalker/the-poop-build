"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About the Firm" },
    { href: "/practice-areas", label: "Services" },
    { href: "/case-results", label: "Case Results" },
    { href: "/blog", label: "Industry News" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-md border-b border-gray-200/50 shadow-sm"
            : "bg-white/80 backdrop-blur-lg border-b border-gray-200/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <Link href="/" className="flex items-center">
              <div className="relative h-16 sm:h-20 lg:h-24 w-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image__3_-removebg-preview-Daaaq0Xv5zULRCTZ5RA1rcWmtPaPh5.png"
                  alt="The Costello Law Group - Personal Injury Attorney Broward County"
                  width={400}
                  height={100}
                  className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-2 mr-4 border-r border-gray-300 pr-6">
                <a
                  href="https://www.facebook.com/costellolawgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A2540] hover:text-[#0066B2] transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/costello-law-group"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A2540] hover:text-[#0066B2] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/costellolawgrp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A2540] hover:text-[#0066B2] transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-[#0A2540] hover:text-[#0066B2] transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00A878] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              <Button
                asChild
                variant="ghost"
                className="border-2 border-[#0066B2] text-[#0066B2] hover:bg-[#0066B2] hover:text-white hover:border-[#0066B2] bg-transparent hover:scale-105 transition-all duration-300 font-semibold"
              >
                <a href="tel:+19545918099" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">(954) 591-8099</span>
                </a>
              </Button>
              <Button
                asChild
                className="bg-[#00A878] text-white hover:bg-[#00A878]/90 shadow-lg shadow-[#00A878]/20 hover:shadow-xl hover:shadow-[#00A878]/30 hover:scale-105 transition-all duration-300 font-semibold"
              >
                <Link href="/contact">Free Consultation</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#0A2540] hover:bg-[#00A878]/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-lg">
            <div className="px-4 py-6 space-y-4 max-w-7xl mx-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-base font-semibold text-[#0A2540] hover:text-[#0066B2] transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                variant="outline"
                className="w-full border-2 border-[#0066B2] text-[#0066B2] bg-transparent font-semibold"
              >
                <a href="tel:+19545918099" onClick={() => setMobileMenuOpen(false)}>
                  <Phone className="h-4 w-4 mr-2" />
                  (954) 591-8099
                </a>
              </Button>
              <Button asChild className="w-full bg-[#00A878] text-white hover:bg-[#00A878]/90 font-semibold">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
      <div className="h-20 lg:h-24" />
    </>
  )
}

"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
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
            : "bg-white border-b border-gray-200"
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/costello-logo.svg"
                alt="Costello"
                width={200}
                height={50}
                className="h-16 w-auto"
                priority
              />
            </Link>

            <nav className="hidden lg:flex lg:items-center lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <a
                href="tel:12345678900"
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
              >
                <Phone className="h-5 w-5" />
                <span className="font-medium">1-234-567-8900</span>
              </a>
              <Button asChild>
                <Link href="/contact">Free Consultation</Link>
              </Button>
            </div>

            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white pt-20">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-lg font-medium text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <a
                href="tel:12345678900"
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 py-2"
              >
                <Phone className="h-5 w-5" />
                <span className="font-medium">1-234-567-8900</span>
              </a>
              <Button className="w-full mt-4" asChild>
                <Link href="/contact">Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

import Link from "next/link"
import { Scale, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Scale className="h-8 w-8 text-[#00A878]" />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold">The Costello Law Group</span>
                <span className="text-xs tracking-wider opacity-90">ATTORNEYS AT LAW</span>
              </div>
            </Link>
            <p className="text-sm opacity-90 leading-relaxed">
              Providing exceptional personal injury and insurance claims representation in Broward County, Florida.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/practice-areas" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  About Josh
                </Link>
              </li>
              <li>
                <Link href="/case-results" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Case Results
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:12345678900" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                    1-234-567-8900
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:contact@costellolaw.com" className="text-sm opacity-90 hover:opacity-100 transition-opacity break-all">
                    contact@costellolaw.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm opacity-90">
                  123 Legal Street<br />
                  Fort Lauderdale, FL 33301
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} The Costello Law Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

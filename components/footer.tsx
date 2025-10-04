import Link from "next/link"
import { Scale, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
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
                  Industry News
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/practice-areas#car-accidents"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Car Accidents
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas#truck-accidents"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Truck Accidents
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas#motorcycle-accidents"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Motorcycle Accidents
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas#slip-and-fall"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Slip & Fall
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas#wrongful-death"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Wrongful Death
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#00A878]" />
                <span className="text-sm opacity-90">
                  5846 S Flamingo Rd. Ste. 520
                  <br />
                  Cooper City, FL 33330
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 text-[#00A878]" />
                <a href="tel:+19545918099" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  (954) 591-8099
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 text-[#00A878]" />
                <a
                  href="mailto:joshua@thecostellolawgroup.com"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  joshua@thecostellolawgroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} The Costello Law Group. All rights reserved. |
            <Link href="/privacy" className="hover:opacity-100 transition-opacity ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:opacity-100 transition-opacity ml-1">
              Terms of Service
            </Link>
          </p>
          <p className="text-xs opacity-75 mt-2">
            Attorney Advertising. Prior results do not guarantee a similar outcome.
          </p>
        </div>
      </div>
    </footer>
  )
}

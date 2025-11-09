import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import "./globals.css"
import { Suspense } from "react"
import Script from "next/script"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://thecostellolawgroup.com'),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  title: "The Costello Law Group | Personal Injury Attorney Broward County FL",
  description:
    "Joshua Costello, Esq. - 12+ years fighting for personal injury victims and insurance claim denials in Broward County, Florida. Free consultation. No win, no fee.",
  keywords:
    "personal injury attorney, car accident lawyer, Broward County attorney, Cooper City lawyer, Davie attorney, Plantation lawyer, Pembroke Pines attorney, insurance claims, criminal defense, wrongful death, slip and fall, premises liability",
  authors: [{ name: "Joshua Costello, Esq." }],
  openGraph: {
    title: "The Costello Law Group | Personal Injury Attorney Broward County FL",
    description: "12+ years fighting for personal injury victims in Broward County. Free consultation. No win, no fee.",
    url: "https://thecostellolawgroup.com",
    siteName: "The Costello Law Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Costello Law Group | Personal Injury Attorney Broward County FL",
    description: "12+ years fighting for personal injury victims in Broward County. Free consultation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.jpg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "The Costello Law Group",
            image: "https://thecostellolawgroup.com/logo.png",
            "@id": "https://thecostellolawgroup.com",
            url: "https://thecostellolawgroup.com",
            telephone: "+19545918099",
            email: "joshua@thecostellolawgroup.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "5846 S Flamingo Rd. Ste. 520",
              addressLocality: "Cooper City",
              addressRegion: "FL",
              postalCode: "33330",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 26.0581,
              longitude: -80.2683,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "17:00",
            },
            // sameAs: [], // Social media links to be added via CMS
            priceRange: "$$",
            areaServed: [
              {
                "@type": "City",
                name: "Cooper City",
                "@id": "https://en.wikipedia.org/wiki/Cooper_City,_Florida",
              },
              {
                "@type": "City",
                name: "Davie",
                "@id": "https://en.wikipedia.org/wiki/Davie,_Florida",
              },
              {
                "@type": "City",
                name: "Plantation",
                "@id": "https://en.wikipedia.org/wiki/Plantation,_Florida",
              },
              {
                "@type": "City",
                name: "Pembroke Pines",
                "@id": "https://en.wikipedia.org/wiki/Pembroke_Pines,_Florida",
              },
            ],
          })}
        </Script>

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className={`font-sans ${inter.variable} ${playfairDisplay.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ScrollToTop />
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}

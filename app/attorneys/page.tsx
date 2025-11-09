import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Mail, Linkedin } from "lucide-react"
import Image from "next/image"

export default function AttorneysPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">Our Attorneys</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Meet Joshua Costello, an experienced legal professional dedicated to achieving the best outcomes for our
            clients.
          </p>
        </div>
      </section>
      {/* Attorney Profile */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-square md:aspect-auto overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JulioNaranjoPhotography_20250922_Joshua%27sExecutiveHeadshots-005.JPG-1S7hL1RcPFnJQqMhexzFc2I73NMQB4.jpeg"
                  alt="Joshua Costello, Esq."
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <h2 className="font-serif text-3xl font-bold mb-4">Joshua Costello, Esq.</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Joshua Costello brings extensive experience in employment law, with a proven track record of
                  successfully representing clients in complex legal matters. His dedication to justice and client
                  advocacy has earned him recognition throughout the legal community.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Education</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>J.D., University of California, Berkeley School of Law</li>
                      <li>B.A., Political Science, UCLA</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Bar Admissions</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>California State Bar</li>
                      <li>U.S. District Court, Central District of California</li>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="mailto:joshua@costelloemploymentlaw.com">
                      <Mail className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  )
}

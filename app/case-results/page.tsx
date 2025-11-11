import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { DollarSign, Scale, TrendingUp } from "lucide-react"

export default function CaseResultsPage() {
  const results = []

  const testimonials = [
    {
      quote:
        "After my motorcycle accident on Griffin Road, I didn't know where to turn. Joshua Costello and his team not only won my case but helped me through the darkest time of my life. The $1.2 million verdict has allowed me to get the medical care I need and secure my family's future.",
      author: "Michael R.",
      case: "Motorcycle Accident Victim",
    },
    {
      quote:
        "The slip and fall at the shopping center left me unable to work for months. Joshua fought tirelessly for me and secured a $425,000 settlement that covered all my medical bills and lost wages. I'm forever grateful to The Costello Law Group.",
      author: "Patricia L.",
      case: "Slip and Fall",
    },
    {
      quote:
        "After the car accident on Stirling Road, the insurance company tried to lowball me. Joshua stepped in and got me $850,000 - ten times what they initially offered. His knowledge of Cooper City and Broward County courts made all the difference.",
      author: "Jennifer M.",
      case: "Car Accident",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">Case Results</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Our track record speaks for itself. We've recovered millions for Cooper City residents.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <DollarSign className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-serif font-bold text-primary mb-2">$5M+</div>
              <div className="text-gray-600">Total Recovered</div>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <Scale className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-serif font-bold text-primary mb-2">100+</div>
              <div className="text-gray-600">Cases Won</div>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-serif font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

    
      {/* Disclaimer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>Important Disclaimer:</strong> The case results shown on this page are examples of verdicts and
            settlements obtained for clients. Every case is different, and past results do not guarantee or predict
            future outcomes. The value of your case depends on the specific facts and circumstances. No attorney-client
            relationship is formed by viewing this information. For a free evaluation of your case, please contact our
            office.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Get the Results You Deserve</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Let us fight for you. Schedule your free consultation to discuss your case and learn how we can help.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
            <Link href="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

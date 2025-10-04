import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { DollarSign, Scale, TrendingUp } from "lucide-react"

export default function CaseResultsPage() {
  const results = [
    {
      amount: "$1.2 Million",
      category: "Motorcycle Accident",
      description:
        "Motorcycle accident on Griffin Road resulting in severe injuries. Our client required extensive medical treatment and rehabilitation.",
      outcome: "Jury verdict",
    },
    {
      amount: "$850,000",
      category: "Car Accident",
      description:
        "Car accident victim on Stirling Road suffered traumatic injuries. We proved the other driver's negligence and secured maximum compensation.",
      outcome: "Settlement",
    },
    {
      amount: "$675,000",
      category: "Premises Liability",
      description:
        "Premises liability case at a Cooper City apartment complex. Property owner failed to maintain safe conditions.",
      outcome: "Settlement",
    },
    {
      amount: "$425,000",
      category: "Slip and Fall",
      description:
        "Slip and fall at a local shopping center resulted in hip fracture and complications requiring surgery.",
      outcome: "Settlement",
    },
    {
      amount: "$380,000",
      category: "Truck Accident",
      description: "Commercial truck accident on Florida Turnpike. Negligent trucking company held accountable.",
      outcome: "Settlement",
    },
    {
      amount: "$295,000",
      category: "Car Accident",
      description: "Rear-end collision at Cooper City intersection caused severe whiplash and back injuries.",
      outcome: "Settlement",
    },
    {
      amount: "$250,000",
      category: "Motorcycle Accident",
      description: "Motorcycle accident caused by distracted driver. Our client suffered multiple fractures.",
      outcome: "Settlement",
    },
    {
      amount: "$185,000",
      category: "Premises Liability",
      description: "Inadequate security at local business led to assault. Property owner held liable.",
      outcome: "Settlement",
    },
    {
      amount: "$165,000",
      category: "Car Accident",
      description: "DUI-related collision on Flamingo Road. Drunk driver caused serious injuries to our client.",
      outcome: "Settlement",
    },
    {
      amount: "$145,000",
      category: "Slip and Fall",
      description: "Slip and fall at Cooper City restaurant due to wet floor without warning signs.",
      outcome: "Settlement",
    },
    {
      amount: "$125,000",
      category: "Dog Bite",
      description:
        "Severe dog bite injuries in residential neighborhood. Owner had prior knowledge of dog's aggression.",
      outcome: "Settlement",
    },
    {
      amount: "$95,000",
      category: "Bicycle Accident",
      description: "Cyclist struck by negligent driver in Cooper City. Our client suffered broken bones and road rash.",
      outcome: "Settlement",
    },
  ]

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

      {/* Notable Results */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">Notable Results</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recent verdicts and settlements achieved for our clients
            </p>
            <p className="text-sm text-muted-foreground mt-4 italic">
              *Past results do not guarantee future outcomes. Every case is unique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl font-serif font-bold text-accent mb-2">{result.amount}</div>
                  <div className="text-sm font-semibold text-primary mb-3">{result.category}</div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{result.description}</p>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{result.outcome}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Client Stories</h2>
            <p className="text-lg text-gray-600">Hear from Cooper City clients whose lives we've helped change</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl text-[#00A878] mb-4">"</div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">{testimonial.quote}</p>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.case}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
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

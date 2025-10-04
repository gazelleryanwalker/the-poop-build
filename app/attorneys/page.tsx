import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
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
          <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">Our Attorney</h1>
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
                <h3 className="font-serif text-3xl font-bold text-foreground mb-2">Joshua "Josh" Costello, Esq.</h3>
                <div className="text-accent font-medium mb-6">Founder & Managing Attorney</div>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-1">Specialties</div>
                    <div className="text-sm text-muted-foreground">
                      Personal Injury, Insurance Claims, PIP, Criminal Defense
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-1">Education</div>
                    <div className="text-sm text-muted-foreground">University of Miami School of Law, J.D.</div>
                    <div className="text-sm text-muted-foreground">Florida State University, B.S.</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-1">Bar Admissions</div>
                    <div className="text-sm text-muted-foreground">Florida</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-1">Experience</div>
                    <div className="text-sm text-muted-foreground">12+ years</div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  For more than a decade, Joshua Costello has dedicated his career to fighting for individuals who have
                  been injured or wrongfully denied by insurance companies. With 12 years of courtroom and litigation
                  experience, Mr. Costello has built a reputation as a relentless advocate who combines deep legal
                  knowledge with a genuine commitment to helping those in need.
                </p>

                <div className="flex gap-3">
                  <Button asChild className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/contact">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact Josh
                    </Link>
                  </Button>
                  <Button size="default" variant="outline">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Full Bio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-8">Professional Background</h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Raised in Palm Coast, Florida, Joshua was taught from an early age the values of honesty, hard work, and
              service to others—principles that continue to guide his practice today. He graduated at the top of his
              class from Flagler Palm Coast High School in Bunnell, Florida, before earning a full academic scholarship
              to Florida State University. There, he completed his Bachelor of Science degree in just three years.
            </p>

            <p>
              Joshua then pursued his law degree at the University of Miami School of Law, where his passion for trial
              advocacy quickly became clear. As an intern with the Miami-Dade Public Defender's Office, he gained
              invaluable courtroom experience by participating in jury trials before even graduating—delivering opening
              statements and conducting cross-examinations.
            </p>

            <p>
              After law school, Joshua accepted a position as an Assistant Public Defender with the Broward County
              Public Defender's Office. During his time there, he sharpened his trial skills by representing clients in
              felony, juvenile, and misdemeanor cases. In 2016, he transitioned into the field of personal injury and
              PIP (personal injury protection), starting at one of Florida's largest filing firms, where he quickly
              developed extensive expertise.
            </p>

            <p>
              Joshua's career path then led him to a prominent Broward County personal injury firm, where his dedication
              and leadership elevated him to Head of Litigation. Later, he became Managing Partner at a rapidly growing
              firm, where his guidance helped drive significant expansion in both revenue and reach.
            </p>

            <p className="font-semibold text-primary text-xl">
              Today, Joshua Costello brings all of his trial experience, leadership skills, and client-first philosophy
              to his own practice—providing personalized, aggressive, and efficient representation for those facing
              personal injury and insurance disputes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Our experienced attorney is ready to provide the legal guidance you need. Schedule a consultation today.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

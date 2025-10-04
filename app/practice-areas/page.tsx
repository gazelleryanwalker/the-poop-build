"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Car, Truck, Bike, Users, Home, Dog, Heart, Shield, Scale } from "lucide-react"
import { motion } from "framer-motion"

export default function PracticeAreasPage() {
  const practiceAreas = [
    {
      id: "car-accidents",
      icon: Car,
      title: "Car Accidents",
      description:
        "If you've been injured in a car accident, you need an experienced attorney who will fight for the compensation you deserve.",
      details: [
        "Rear-end collisions",
        "Head-on collisions",
        "T-bone accidents",
        "Multi-vehicle accidents",
        "Hit-and-run accidents",
        "Distracted driving accidents",
      ],
      results: "100+ successful car accident cases",
    },
    {
      id: "truck-accidents",
      icon: Truck,
      title: "Truck Accidents",
      description:
        "Commercial truck accidents often result in catastrophic injuries. We hold trucking companies accountable.",
      details: [
        "Semi-truck collisions",
        "Delivery truck accidents",
        "Jackknife accidents",
        "Underride accidents",
        "Truck driver negligence",
        "Trucking company liability",
      ],
      results: "Millions recovered for truck accident victims",
    },
    {
      id: "motorcycle-accidents",
      icon: Bike,
      title: "Motorcycle Accidents",
      description:
        "Motorcyclists face unique dangers on the road. We understand the complexities of motorcycle accident claims.",
      details: [
        "Lane splitting accidents",
        "Left-turn collisions",
        "Road hazard accidents",
        "Defective motorcycle parts",
        "Motorcycle vs. car accidents",
        "Serious injury claims",
      ],
      results: "Dedicated motorcycle accident representation",
    },
    {
      id: "rideshare-accidents",
      icon: Users,
      title: "Rideshare Accidents",
      description: "Uber and Lyft accidents involve complex insurance issues. We navigate these claims effectively.",
      details: [
        "Uber accident claims",
        "Lyft accident claims",
        "Passenger injury claims",
        "Rideshare driver negligence",
        "Third-party collisions",
        "Insurance coverage disputes",
      ],
      results: "Expert rideshare accident representation",
    },
    {
      id: "slip-and-fall",
      icon: Users,
      title: "Slip & Fall",
      description: "Property owners have a duty to maintain safe premises. We hold them accountable for negligence.",
      details: [
        "Wet floor accidents",
        "Uneven surfaces",
        "Poor lighting",
        "Inadequate maintenance",
        "Negligent security",
        "Serious injury claims",
      ],
      results: "Proven slip and fall case results",
    },
    {
      id: "premises-liability",
      icon: Home,
      title: "Premises Liability",
      description: "When unsafe property conditions cause injury, we fight for your rights and compensation.",
      details: [
        "Negligent security",
        "Swimming pool accidents",
        "Elevator and escalator accidents",
        "Toxic exposure",
        "Inadequate maintenance",
        "Property owner negligence",
      ],
      results: "Strong premises liability advocacy",
    },
    {
      id: "dog-bites",
      icon: Dog,
      title: "Dog Bites",
      description: "Dog bite injuries can be severe and traumatic. Florida law protects victims of dog attacks.",
      details: [
        "Serious bite injuries",
        "Scarring and disfigurement",
        "Infection claims",
        "Dangerous dog cases",
        "Owner liability",
        "Homeowner's insurance claims",
      ],
      results: "Compassionate dog bite representation",
    },
    {
      id: "wrongful-death",
      icon: Heart,
      title: "Wrongful Death",
      description:
        "When negligence causes a loved one's death, we provide compassionate legal guidance and fight for justice.",
      details: [
        "Fatal car accidents",
        "Medical malpractice deaths",
        "Workplace fatalities",
        "Defective product deaths",
        "Negligent security deaths",
        "Survivor compensation",
      ],
      results: "Compassionate wrongful death advocacy",
    },
    {
      id: "pip",
      icon: Shield,
      title: "PIP (Personal Injury Protection)",
      description:
        "Florida's no-fault insurance system can be complex. We help you get the PIP benefits you're entitled to.",
      details: [
        "PIP claim denials",
        "Medical bill coverage",
        "Lost wage claims",
        "Insurance company disputes",
        "Bad faith insurance",
        "Maximum benefit recovery",
      ],
      results: "Expert PIP claims representation",
    },
    {
      id: "homeowners-insurance",
      icon: Home,
      title: "Homeowners Insurance",
      description:
        "When insurance companies deny or undervalue your claim, we fight to get you the coverage you paid for.",
      details: [
        "Hurricane damage claims",
        "Water damage claims",
        "Fire damage claims",
        "Roof damage claims",
        "Claim denials",
        "Bad faith insurance",
      ],
      results: "Aggressive insurance claim advocacy",
    },
    {
      id: "criminal-defense",
      icon: Scale,
      title: "Criminal Defense",
      description: "Aggressive defense of your constitutional rights and freedom in criminal matters.",
      details: [
        "DUI/DWI defense",
        "Drug crimes",
        "Assault charges",
        "Theft crimes",
        "Traffic violations",
        "Record expungement",
      ],
      results: "Strong criminal defense representation",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">Our Practice Areas</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Personal injury and insurance claims representation in Broward County, Florida. We fight for maximum
            compensation for our clients.
          </p>
        </div>
      </motion.section>

      {/* Practice Areas Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card id={area.id} className="scroll-mt-24">
                <CardContent className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <area.icon className="h-16 w-16 text-primary mb-6" />
                      <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">{area.title}</h2>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{area.description}</p>

                      <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-6">
                        <div className="font-semibold text-accent mb-1">Track Record</div>
                        <div className="text-foreground">{area.results}</div>
                      </div>

                      <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link href="/contact">Discuss Your Case</Link>
                      </Button>
                    </div>

                    <div>
                      <h3 className="font-semibold text-xl text-foreground mb-4">Services Include:</h3>
                      <ul className="space-y-3">
                        {area.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span className="text-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-muted"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Don't See Your Legal Issue?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We handle a wide range of legal matters. Contact us to discuss your specific situation and learn how we can
            help.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}

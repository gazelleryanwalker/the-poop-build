"use client"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { MultiStepForm } from "@/components/multi-step-form"
import {
  Scale,
  Shield,
  Award,
  Phone,
  ArrowRight,
  CheckCircle2,
  Star,
  Clock,
  Car,
  Truck,
  Bike,
  HomeIcon,
  Dog,
  FileText,
  Gavel,
} from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// Icon mapping for dynamic icon rendering
const iconMap: { [key: string]: any } = {
  Scale,
  Shield,
  Award,
  Phone,
  ArrowRight,
  CheckCircle2,
  Star,
  Clock,
  Car,
  Truck,
  Bike,
  HomeIcon,
  Dog,
  FileText,
  Gavel,
}

function getIconComponent(iconName: string) {
  return iconMap[iconName] || Scale
}

export default function Home() {
  const [homepageData, setHomepageData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Load homepage data
    async function loadData() {
      try {
        const response = await fetch('/content/pages/homepage.json')
        const data = await response.json()
        setHomepageData(data)
      } catch (error) {
        console.error('Error loading homepage data:', error)
        // Set default data if fetch fails
        setHomepageData(getDefaultHomepageData())
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0066B2] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  const data = homepageData || getDefaultHomepageData()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-[#0066B2] via-[#0077CC] to-[#0088DD] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent)]" />
        </div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
              <span>📍</span>
              <span>{data.heroSection.locationBadge}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
              {data.heroSection.mainHeading}{" "}
              <span className="text-[#D4AF37]">{data.heroSection.accentHeading}</span>
            </h1>

            <p className="text-xl md:text-2xl mb-4 text-white/90">
              {data.heroSection.subheading}
            </p>

            <p className="text-lg mb-8 text-white/80 max-w-3xl mx-auto">
              {data.heroSection.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#C19B2B] text-black font-semibold px-8"
                asChild
              >
                <Link href={data.heroSection.primaryCTA.link}>
                  {data.heroSection.primaryCTA.text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-2 border-white hover:bg-white/20 text-white font-semibold px-8"
                asChild
              >
                <Link href={data.heroSection.secondaryCTA.link}>
                  <Phone className="mr-2 h-5 w-5" />
                  {data.heroSection.secondaryCTA.text}
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Expertise Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 flex flex-wrap gap-3 justify-center max-w-4xl mx-auto"
          >
            {data.expertiseBadges.map((badge: any, index: number) => {
              const Icon = getIconComponent(badge.icon)
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm"
                >
                  <Icon className="h-4 w-4" />
                  <span>{badge.text}</span>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.statsSection.stats.map((stat: any, index: number) => {
              const Icon = getIconComponent(stat.icon)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <Icon className="h-12 w-12 text-[#0066B2] mx-auto mb-4" />
                  <div className="text-4xl font-bold text-[#0066B2] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-12">
            {data.statsSection.badges.map((badge: any, index: number) => {
              const Icon = getIconComponent(badge.icon)
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md"
                >
                  <Icon className="h-5 w-5 text-[#00A878]" />
                  <span className="font-semibold text-gray-800">{badge.text}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#0066B2]/10 text-[#0066B2] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {data.practiceAreasSection.sectionLabel}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-gray-900">
              {data.practiceAreasSection.heading}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {data.practiceAreasSection.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.practiceAreasSection.practiceAreas.map((area: any, index: number) => {
              const Icon = getIconComponent(area.icon)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link href={`/services/${area.slug}`}>
                    <Card
                      className={`${area.hoverBg} transition-all duration-300 hover:shadow-xl cursor-pointer h-full border-2 border-transparent hover:border-current`}
                    >
                      <CardContent className="p-6">
                        <div className={`${area.bgColor} ${area.color} p-4 rounded-lg w-fit mb-4`}>
                          <Icon className="h-8 w-8" />
                        </div>
                        <h3 className={`text-xl font-bold mb-3 ${area.color}`}>
                          {area.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {area.description}
                        </p>
                        <div className={`mt-4 inline-flex items-center ${area.color} font-semibold`}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-gray-900">
              {data.contactFormSection.heading}
            </h2>
            <p className="text-xl text-gray-600">
              {data.contactFormSection.subheading}
            </p>
          </motion.div>
          <MultiStepForm />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#00A878]/10 text-[#00A878] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {data.testimonialsSection.sectionLabel}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-gray-900">
              {data.testimonialsSection.heading}
            </h2>
            <p className="text-xl text-gray-600">
              {data.testimonialsSection.subheading}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.testimonialsSection.testimonials.map((testimonial: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-900">
                        {testimonial.clientName}
                      </p>
                      <p className="text-sm text-gray-600">{testimonial.caseType}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0066B2] to-[#00A878] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              {data.ctaSection.heading}
            </h2>
            <p className="text-xl mb-8 text-white/90">
              {data.ctaSection.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#C19B2B] text-black font-semibold px-8"
                asChild
              >
                <Link href="#contact-form">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-2 border-white hover:bg-white/20 text-white font-semibold px-8"
                asChild
              >
                <Link href="tel:+19545918099">
                  <Phone className="mr-2 h-5 w-5" />
                  (954) 591-8099
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Default homepage data fallback
function getDefaultHomepageData() {
  return {
    heroSection: {
      locationBadge: "Serving Broward County, Florida",
      mainHeading: "Expert Legal",
      accentHeading: "Representation",
      subheading: "The Costello Law Group delivers personalized legal solutions with proven results.",
      description: "Specializing in personal injury, insurance claims, and criminal defense across Cooper City, Davie, Plantation, and Pembroke Pines.",
      primaryCTA: { text: "Get Free Consultation", link: "#contact-form" },
      secondaryCTA: { text: "Call Now", link: "tel:+19545918099" }
    },
    expertiseBadges: [
      { text: "Auto Accidents", icon: "Car" },
      { text: "Personal Injury", icon: "Scale" },
      { text: "Insurance Claims", icon: "Shield" },
      { text: "Premises Liability", icon: "HomeIcon" },
      { text: "Wrongful Death", icon: "Scale" },
      { text: "PIP Claims", icon: "FileText" },
      { text: "Criminal Defense", icon: "Gavel" },
      { text: "Homeowners Insurance", icon: "HomeIcon" }
    ],
    statsSection: {
      stats: [
        { number: "12+", label: "Years of Legal Excellence", icon: "Award" },
        { number: "100+", label: "Successful Case Outcomes", icon: "CheckCircle2" },
        { number: "98%", label: "Client Satisfaction Rate", icon: "Star" }
      ],
      badges: [
        { text: "24/7 Available", icon: "Clock" },
        { text: "No Win, No Fee", icon: "CheckCircle2" }
      ]
    },
    googleReviews: { enabled: true, rating: 5, reviewCount: 50 },
    contactFormSection: {
      heading: "Get Your Free Case Evaluation",
      subheading: "Answer a few quick questions and we'll get back to you within 24 hours"
    },
    practiceAreasSection: {
      sectionLabel: "Our Expertise",
      heading: "Our Practice Areas",
      description: "Personal injury and insurance claims representation in Broward County, Florida. We fight for maximum compensation for our clients.",
      practiceAreas: [
        {
          title: "Car Accidents",
          description: "Aggressive representation for car accident victims. We fight to get you the compensation you deserve.",
          icon: "Car",
          slug: "car-accidents",
          color: "text-blue-600",
          bgColor: "bg-blue-50",
          hoverBg: "hover:bg-blue-100"
        },
        {
          title: "Truck Accidents",
          description: "Specialized expertise in complex commercial truck accident cases with proven results.",
          icon: "Truck",
          slug: "truck-accidents",
          color: "text-orange-600",
          bgColor: "bg-orange-50",
          hoverBg: "hover:bg-orange-100"
        },
        {
          title: "Personal Injury",
          description: "Comprehensive personal injury representation for all types of accidents and injuries.",
          icon: "Scale",
          slug: "personal-injury",
          color: "text-purple-600",
          bgColor: "bg-purple-50",
          hoverBg: "hover:bg-purple-100"
        }
      ]
    },
    testimonialsSection: {
      sectionLabel: "Testimonials",
      heading: "What Our Clients Say",
      subheading: "Real results from real people",
      testimonials: [
        {
          quote: "I was extremely impressed with the way Josh and The Costello Law Group handled my personal injury case. Josh's expertise and dedication made a significant difference in achieving a successful outcome.",
          clientName: "Sally W.",
          caseType: "Personal Injury Client",
          rating: 5
        },
        {
          quote: "The Costello Law Group fought tirelessly for my case. Their expertise and dedication resulted in a settlement that exceeded my expectations.",
          clientName: "Michael R.",
          caseType: "Car Accident Client",
          rating: 5
        },
        {
          quote: "Josh and his team provided exceptional service throughout my entire case. They kept me informed every step of the way and achieved an outstanding result.",
          clientName: "Jennifer M.",
          caseType: "Insurance Claim Client",
          rating: 5
        }
      ]
    },
    ctaSection: {
      heading: "Ready to Get Started?",
      description: "Schedule your free consultation today. Let's discuss how we can help you achieve the best possible outcome for your case."
    }
  }
}

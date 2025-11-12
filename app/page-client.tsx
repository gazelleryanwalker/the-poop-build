"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
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
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

interface HomePageClientProps {
  testimonials: any[]
  practiceAreas: any[]
  homePageData: any
}

export default function HomePageClient({ testimonials, practiceAreas, homePageData }: HomePageClientProps) {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const defaultPracticeAreas = [
    {
      title: "Car Accidents",
      description:
        "Aggressive representation for car accident victims. We fight to get you the compensation you deserve.",
      icon: "Car",
      slug: { current: "car-accidents" },
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      hoverBg: "hover:bg-blue-100",
    },
    {
      title: "Truck Accidents",
      description: "Specialized expertise in complex commercial truck accident cases with proven results.",
      icon: "Truck",
      slug: { current: "truck-accidents" },
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      hoverBg: "hover:bg-orange-100",
    },
    {
      title: "Motorcycle Accidents",
      description: "Dedicated advocacy for motorcyclists injured due to negligence on Florida roads.",
      icon: "Bike",
      slug: { current: "motorcycle-accidents" },
      color: "text-red-600",
      bgColor: "bg-red-50",
      hoverBg: "hover:bg-red-100",
    },
    {
      title: "Slip & Fall",
      description: "Holding property owners accountable for dangerous conditions that cause injuries.",
      icon: "Scale",
      slug: { current: "slip-and-fall" },
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      hoverBg: "hover:bg-purple-100",
    },
    {
      title: "Premises Liability",
      description: "Protecting your rights when injured on someone else's property.",
      icon: "HomeIcon",
      slug: { current: "premises-liability" },
      color: "text-[#00A878]",
      bgColor: "bg-[#00A878]/10",
      hoverBg: "hover:bg-[#00A878]/20",
    },
    {
      title: "Dog Bites",
      description: "Compassionate representation for victims of dog attacks and animal injuries.",
      icon: "Dog",
      slug: { current: "dog-bites" },
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      hoverBg: "hover:bg-amber-100",
    },
    {
      title: "Wrongful Death",
      description: "Seeking justice for families who have lost loved ones due to negligence.",
      icon: "Scale",
      slug: { current: "wrongful-death" },
      color: "text-gray-700",
      bgColor: "bg-gray-100",
      hoverBg: "hover:bg-gray-200",
    },
    {
      title: "PIP Claims",
      description: "Expert handling of Personal Injury Protection insurance disputes.",
      icon: "FileText",
      slug: { current: "pip" },
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      hoverBg: "hover:bg-cyan-100",
    },
    {
      title: "Criminal Defense",
      description: "Vigorous defense of your rights and freedom in criminal proceedings.",
      icon: "Gavel",
      slug: { current: "criminal-defense" },
      color: "text-[#0066B2]",
      bgColor: "bg-[#0066B2]/10",
      hoverBg: "hover:bg-[#0066B2]/20",
    },
    {
      title: "Homeowners Insurance",
      description: "Fighting denied or underpaid homeowners insurance claims.",
      icon: "HomeIcon",
      slug: { current: "homeowners-insurance" },
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      hoverBg: "hover:bg-indigo-100",
    },
  ]

  const defaultTestimonials = [
    {
      quote:
        "I was extremely impressed with the way Josh and The Costello Law Group handled my personal injury case. Josh's expertise and dedication made a significant difference in achieving a successful and prompt outcome. I am truly grateful for their support and highly recommend their services to anyone dealing with a personal injury matter.",
      clientName: "Sally W.",
      caseType: "Personal Injury Client",
      rating: 5,
    },
    {
      quote:
        "The Costello Law Group fought tirelessly for my case. Their expertise and dedication resulted in a settlement that exceeded my expectations. I couldn't be happier with the outcome.",
      clientName: "Michael R.",
      caseType: "Car Accident Client",
      rating: 5,
    },
    {
      quote:
        "Josh and his team provided exceptional service throughout my entire case. They kept me informed every step of the way and achieved an outstanding result. Highly recommended!",
      clientName: "Jennifer M.",
      caseType: "Insurance Claim Client",
      rating: 5,
    },
  ]

  // Use content from Pages CMS if available, otherwise use defaults
  const displayPracticeAreas = practiceAreas && practiceAreas.length > 0 ? practiceAreas : defaultPracticeAreas
  const displayTestimonials = testimonials && testimonials.length > 0 ? testimonials : defaultTestimonials

  const getIcon = (iconName: string) => {
    const icons: any = { Car, Truck, Bike, Scale, HomeIcon, Dog, FileText, Gavel }
    return icons[iconName] || Scale
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0A1628] overflow-hidden min-h-[75vh] sm:min-h-[80vh] lg:min-h-[85vh] flex items-center"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-pattern" />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0D1D35] to-[#0A1628]" />

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
            {/* Left Content - 7 columns */}
            <motion.div className="lg:col-span-7" initial="hidden" animate="visible" variants={containerVariants}>
              {/* Location badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4 sm:mb-6"
              >
                <div className="h-2 w-2 rounded-full bg-[#00A878] animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-white/80">Serving Broward County, Florida</span>
              </motion.div>

              {/* Main heading with better hierarchy */}
              <motion.h1
                variants={itemVariants}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 leading-[1.1] tracking-tight"
              >
                Expert Legal
                <br />
                <span className="text-[#00A878]">Representation</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl lg:text-2xl text-white/70 mb-2 sm:mb-3 leading-relaxed font-light"
              >
                The Costello Law Group delivers personalized legal solutions with proven results.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-white/60 mb-6 sm:mb-8 leading-relaxed"
              >
                Specializing in personal injury, insurance claims, and criminal defense across Cooper City, Davie,
                Plantation, and Pembroke Pines.
              </motion.p>

              {/* Stronger CTAs */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#00A878] text-white hover:bg-[#00A878]/90 text-base sm:text-lg px-8 sm:px-10 h-14 sm:h-16 shadow-2xl shadow-[#00A878]/20 hover:shadow-[#00A878]/40 hover:scale-[1.02] transition-all duration-300 font-semibold"
                >
                  <Link href="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/20 text-white hover:bg-white/5 hover:border-white/30 text-base sm:text-lg px-8 sm:px-10 h-14 sm:h-16 bg-transparent backdrop-blur-sm hover:scale-[1.02] transition-all duration-300"
                >
                  <Link href="tel:+19545918099">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </Link>
                </Button>
              </motion.div>

              {/* Key expertise areas - more prominent */}
              <motion.div variants={itemVariants} className="border-t border-white/10 pt-4 sm:pt-6">
                <p className="text-xs sm:text-sm font-semibold text-white/50 uppercase tracking-wider mb-3 sm:mb-4">
                  Areas of Expertise
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { icon: Car, label: "Auto Accidents" },
                    { icon: Scale, label: "Personal Injury" },
                    { icon: Shield, label: "Insurance Claims" },
                    { icon: HomeIcon, label: "Premises Liability" },
                    { icon: Award, label: "Wrongful Death" },
                    { icon: FileText, label: "PIP Claims" },
                    { icon: Gavel, label: "Criminal Defense" },
                    { icon: HomeIcon, label: "Homeowners Insurance" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
                    >
                      <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#00A878]/20 transition-colors border border-white/10 group-hover:border-[#00A878]/30 flex-shrink-0">
                        <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white/70 group-hover:text-[#00A878] transition-colors" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - 5 columns */}
            <motion.div
              className="lg:col-span-5 hidden lg:block mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                {/* Subtle glow effect */}
                <div className="absolute -inset-8 bg-gradient-to-br from-[#00A878]/20 to-transparent rounded-3xl blur-3xl" />

                {/* Updated Google Reviews widget */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mb-6"
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-0.5">
                          <span className="text-[#4285F4] font-semibold text-lg">G</span>
                          <span className="text-[#EA4335] font-semibold text-lg">o</span>
                          <span className="text-[#FBBC04] font-semibold text-lg">o</span>
                          <span className="text-[#4285F4] font-semibold text-lg">g</span>
                          <span className="text-[#34A853] font-semibold text-lg">l</span>
                          <span className="text-[#EA4335] font-semibold text-lg">e</span>
                          <span className="text-white/70 font-medium text-sm ml-2">Reviews</span>
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-[#FBBC04] fill-[#FBBC04]" />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Stats cards */}
                <div className="relative space-y-4">
                  {[
                    { icon: Award, number: "12+", label: "Years of Legal Excellence", stars: true },
                    { icon: CheckCircle2, number: "100+", label: "Successful Case Outcomes" },
                    { icon: Shield, number: "98%", label: "Client Satisfaction Rate" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div className="h-12 w-12 rounded-xl bg-[#00A878]/20 flex items-center justify-center border border-[#00A878]/30">
                              <stat.icon className="h-6 w-6 text-[#00A878]" />
                            </div>
                            {stat.stars && (
                              <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="h-3 w-3 text-[#00A878] fill-[#00A878]" />
                                ))}
                              </div>
                            )}
                          </div>
                          <div className="text-4xl font-serif font-bold text-white mb-1">{stat.number}</div>
                          <div className="text-white/60 font-medium text-sm">{stat.label}</div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Trust indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="mt-6 flex items-center gap-6 px-4"
                >
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#00A878]" />
                    <span className="text-xs text-white/60">24/7 Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-[#00A878]" />
                    <span className="text-xs text-white/60">No Win, No Fee</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-[#00A878]/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Get Your Free Case Evaluation
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Answer a few quick questions and we'll get back to you within 24 hours
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MultiStepForm />
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0066B2] to-[#00A878]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 mb-4">
              <span className="text-sm font-semibold text-white uppercase tracking-wider">Our Expertise</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">Our Practice Areas</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Personal injury and insurance claims representation in Broward County, Florida. We fight for maximum
              compensation for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayPracticeAreas.map((area: any, index: number) => {
              const IconComponent = getIcon(area.icon)
              return (
                <Card
                  key={area._id || index}
                  className="group hover:shadow-2xl hover:border-transparent transition-all duration-300 bg-card border-2 hover:-translate-y-1"
                >
                  <CardContent className="p-8">
                    <div
                      className={`h-14 w-14 rounded-lg ${area.bgColor || "bg-gray-100"} ${area.hoverBg || "hover:bg-gray-200"} flex items-center justify-center mb-6 transition-colors`}
                    >
                      <IconComponent className={`h-7 w-7 ${area.color || "text-gray-600"}`} />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{area.description}</p>
                    <Link
                      href={`/practice-areas/${area.slug.current}`}
                      className={`inline-flex items-center ${area.color || "text-primary"} font-semibold group-hover:gap-2 transition-all`}
                    >
                      Learn More <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[#00A878]/5 to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-[#00A878]/10 border border-[#00A878]/20 mb-4">
              <span className="text-sm font-semibold text-[#00A878] uppercase tracking-wider">Testimonials</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">Real results from real people</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {displayTestimonials.slice(0, 3).map((testimonial: any, index: number) => (
              <Card
                key={testimonial._id || index}
                className="border-2 hover:border-[#00A878]/50 transition-all duration-300 hover:shadow-xl bg-white"
              >
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-[#00A878] fill-[#00A878]" />
                    ))}
                  </div>
                  <p className="text-foreground mb-8 leading-relaxed text-lg">{testimonial.quote}</p>
                  <div className="border-t border-border pt-6">
                    <div className="font-semibold text-foreground text-lg">{testimonial.clientName}</div>
                    <div className="text-sm text-muted-foreground mt-1">{testimonial.caseType}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0066B2] via-[#0A1628] to-[#0066B2] overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-pattern" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-xl mb-10 text-white/80 leading-relaxed max-w-2xl mx-auto">
            Schedule your free consultation today. Let's discuss how we can help you achieve the best possible outcome
            for your case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#00A878] text-white hover:bg-[#00A878]/90 text-lg px-8 h-14 shadow-lg shadow-[#00A878]/30 hover:shadow-[#00A878]/50"
            >
              <Link href="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 h-14 bg-transparent backdrop-blur-sm"
            >
              <Link href="tel:+19545918099">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  Briefcase,
  Users,
  TrendingUp,
  Heart,
  Award,
  GraduationCap,
  Clock,
  DollarSign,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import { motion } from "framer-motion"
import { ResumeForm } from "@/components/resume-form"

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

export default function CareersPage() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Industry-leading salaries with performance bonuses and profit sharing opportunities",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance plus wellness programs",
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible schedules, remote work options, and generous PTO policy",
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "CLE credits, conference attendance, and continuing education support",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear advancement paths with mentorship from experienced attorneys",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Supportive team environment focused on collective success",
    },
  ]

  const openPositions = [
    {
      title: "Associate Attorney - Personal Injury",
      type: "Full-Time",
      location: "Cooper City, FL",
      description:
        "Seeking an experienced personal injury attorney to join our growing practice. Handle cases from intake through trial, with focus on auto accidents and premises liability.",
      requirements: [
        "Florida Bar admission required",
        "2+ years personal injury experience",
        "Strong litigation and negotiation skills",
        "Excellent written and verbal communication",
      ],
    },
    {
      title: "Paralegal - Litigation Support",
      type: "Full-Time",
      location: "Cooper City, FL",
      description:
        "Looking for a detail-oriented paralegal to support our litigation team. Assist with case management, discovery, and trial preparation for personal injury matters.",
      requirements: [
        "Paralegal certificate or equivalent experience",
        "3+ years litigation experience preferred",
        "Proficiency in case management software",
        "Strong organizational and communication skills",
      ],
    },
    {
      title: "Legal Assistant",
      type: "Full-Time",
      location: "Cooper City, FL",
      description:
        "Join our team as a legal assistant supporting multiple attorneys. Handle administrative tasks, client communications, and document preparation.",
      requirements: [
        "High school diploma required, associate's degree preferred",
        "1+ years legal experience",
        "Proficiency in Microsoft Office Suite",
        "Excellent multitasking abilities",
      ],
    },
  ]

  const coreValues = [
    {
      title: "Client-Centered Excellence",
      description: "We put our clients first in everything we do, delivering exceptional results with compassion",
    },
    {
      title: "Integrity & Ethics",
      description: "We uphold the highest standards of professional conduct and ethical practice",
    },
    {
      title: "Continuous Innovation",
      description: "We embrace new technologies and strategies to better serve our clients",
    },
    {
      title: "Team Collaboration",
      description: "We believe in the power of teamwork and support each other's growth",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A1628] via-[#0D1D35] to-[#0A1628] overflow-hidden"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="text-center">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
            >
              <Briefcase className="h-4 w-4 text-[#00A878]" />
              <span className="text-sm font-medium text-white/80">Join Our Team</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-serif text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Build Your Career at
              <br />
              <span className="text-[#00A878]">The Costello Law Group</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join a dynamic team of legal professionals dedicated to making a difference in our clients' lives. We're
              looking for talented individuals who share our commitment to excellence and client advocacy.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#00A878] text-white hover:bg-[#00A878]/90 text-lg px-8 h-14 shadow-2xl shadow-[#00A878]/20 hover:shadow-[#00A878]/40 hover:scale-[1.02] transition-all duration-300 font-semibold"
              >
                <a href="#open-positions">
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/20 text-white hover:bg-white/5 hover:border-white/30 text-lg px-8 h-14 bg-transparent backdrop-blur-sm hover:scale-[1.02] transition-all duration-300"
              >
                <a href="#culture">Learn About Our Culture</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Join Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-[#00A878]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-[#00A878]/10 border border-[#00A878]/20 mb-4">
              <span className="text-sm font-semibold text-[#00A878] uppercase tracking-wider">Why Join Us</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">More Than Just a Job</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We invest in our team members' success with comprehensive benefits and a supportive work environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-[#00A878]/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="h-14 w-14 rounded-lg bg-[#00A878]/10 flex items-center justify-center mb-6">
                      <benefit.icon className="h-7 w-7 text-[#00A878]" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture Section */}
      <section id="culture" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0066B2]/5 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-[#0066B2]/10 border border-[#0066B2]/20 mb-6">
                <span className="text-sm font-semibold text-[#0066B2] uppercase tracking-wider">Our Culture</span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                A Place Where You Can Thrive
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At The Costello Law Group, we've built a culture that values collaboration, innovation, and personal
                growth. Our team members are our greatest asset, and we're committed to creating an environment where
                everyone can succeed.
              </p>

              <div className="space-y-6">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="h-6 w-6 rounded-full bg-[#00A878]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-4 w-4 text-[#00A878]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#00A878]/20 to-[#0066B2]/20 rounded-2xl blur-2xl" />
              <img
                src="/professional-legal-team-collaborating-in-modern-of.jpg"
                alt="Our team culture"
                className="relative rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section
        id="open-positions"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-[#00A878]/5 to-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-[#00A878]/10 border border-[#00A878]/20 mb-4">
              <span className="text-sm font-semibold text-[#00A878] uppercase tracking-wider">Open Positions</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">Current Opportunities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our open positions and find the perfect role to advance your legal career
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-2 hover:border-[#00A878]/50 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <h3 className="font-serif text-2xl font-semibold text-foreground">{position.title}</h3>
                          <span className="px-3 py-1 rounded-full bg-[#00A878]/10 text-[#00A878] text-sm font-medium">
                            {position.type}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-muted-foreground mb-4">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{position.location}</span>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">{position.description}</p>

                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Key Requirements:</h4>
                          <ul className="space-y-2">
                            {position.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-[#00A878] flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground text-sm">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="lg:w-48 flex-shrink-0">
                        <Button
                          onClick={() => {
                            document.getElementById("apply-now")?.scrollIntoView({ behavior: "smooth" })
                          }}
                          className="w-full bg-[#0066B2] text-white hover:bg-[#0066B2]/90 h-12 font-semibold"
                        >
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div id="apply-now" className="mt-16 scroll-mt-24">
            <div className="text-center mb-8">
              <h3 className="font-serif text-3xl font-bold text-foreground mb-3">Submit Your Application</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to join our team? Fill out the form below and upload your resume. We'll review your application
                and get back to you soon.
              </p>
            </div>
            <ResumeForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0066B2] via-[#0A1628] to-[#0066B2] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <Award className="h-16 w-16 text-[#00A878] mx-auto mb-6" />
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-white">Ready to Make an Impact?</h2>
          <p className="text-xl mb-10 text-white/80 leading-relaxed max-w-2xl mx-auto">
            Join our team and help us fight for justice while building a rewarding career in a supportive environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#00A878] text-white hover:bg-[#00A878]/90 text-lg px-8 h-14 shadow-lg shadow-[#00A878]/30 hover:shadow-[#00A878]/50 font-semibold"
            >
              <Link href="/contact">
                Apply Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 h-14 bg-transparent backdrop-blur-sm"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

"use client"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
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
    },
  },
}

const jobs = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$120k - $180k",
    description:
      "We're looking for an experienced full-stack developer to join our growing engineering team.",
  },
  {
    id: 2,
    title: "UX/UI Designer",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
    salary: "$90k - $130k",
    description:
      "Join our design team to create beautiful and intuitive user experiences.",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$110k - $160k",
    description:
      "Help us build and maintain our cloud infrastructure and deployment pipelines.",
  },
]

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Career development programs and learning budgets",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Work-life balance with flexible hours and remote options",
  },
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description: "Industry-leading compensation and equity packages",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Performance bonuses and achievement awards",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description: "Annual budget for courses, conferences, and certifications",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div variants={itemVariants}>
                <Briefcase className="w-16 h-16 mx-auto mb-6 text-blue-600" />
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-5xl font-bold mb-6"
              >
                Join Our Team
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 mb-8"
              >
                We're looking for talented individuals who are passionate about
                making a difference. Explore our open positions and find your
                next opportunity.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Work With Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer more than just a job - we provide an environment where
                you can grow, learn, and make an impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <Icon className="w-12 h-12 text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're always looking for talented people to join our team.
                Check out our current openings below.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {job.department}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.type}
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              {job.salary}
                            </div>
                          </div>
                          <p className="text-gray-600">{job.description}</p>
                        </div>
                        <Button
                          asChild
                          className="whitespace-nowrap self-start md:self-center"
                        >
                          <Link href={`/careers/${job.id}`}>
                            Apply Now
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Don't See the Right Position?
                </h2>
                <p className="text-gray-600">
                  We're always interested in hearing from talented individuals.
                  Submit your resume and we'll keep you in mind for future
                  opportunities.
                </p>
              </div>
              <ResumeForm />
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Users className="w-16 h-16 mx-auto mb-6 text-blue-600" />
              <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
              <p className="text-lg text-gray-600 mb-8">
                We believe in creating an inclusive, collaborative environment
                where everyone can thrive. Our team is diverse, passionate, and
                committed to excellence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                  <h3 className="font-semibold mb-2">Collaborative</h3>
                  <p className="text-sm text-gray-600">
                    We work together to achieve our goals
                  </p>
                </div>
                <div>
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                  <h3 className="font-semibold mb-2">Innovative</h3>
                  <p className="text-sm text-gray-600">
                    We encourage creative thinking and new ideas
                  </p>
                </div>
                <div>
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                  <h3 className="font-semibold mb-2">Supportive</h3>
                  <p className="text-sm text-gray-600">
                    We invest in our team's growth and success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Award, Users, Target, Heart, TrendingUp, Shield, Mail, Linkedin } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutPage() {
  const defaultTeamMember = {
    name: 'Joshua "Josh" Costello, Esq.',
    role: "Founder & Managing Attorney",
    bio: "With over 12 years of courtroom and litigation experience, Joshua Costello has dedicated his career to fighting for individuals who have been injured or wrongfully denied by insurance companies. A graduate of the University of Miami School of Law, Josh brings a relentless commitment to achieving justice for his clients throughout Broward County.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JulioNaranjoPhotography_20250922_Joshua%27sExecutiveHeadshots-005.JPG-1S7hL1RcPFnJQqMhexzFc2I73NMQB4.jpeg",
    email: null,
    linkedin: null,
  }

  const displayTeamMembers = [defaultTeamMember]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0A1628] text-white"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">About The Costello Law Group</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            12 years of dedicated courtroom experience fighting for personal injury victims and insurance claim disputes
            in Broward County, Florida.
          </p>
        </div>
      </motion.section>

      {/* Firm History */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on a foundation of integrity, excellence, and unwavering commitment to justice
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              The Costello Law Group was founded with a clear mission: to provide personalized, aggressive, and
              efficient legal representation to individuals facing personal injury and insurance disputes. After years
              of working at large firms, Joshua Costello recognized that clients often receive better outcomes when
              their attorney is directly involved in every aspect of their case—not passed between departments or
              handled by junior associates.
            </p>
            <p>
              Our firm was built on the belief that every client deserves direct access to experienced counsel, prompt
              communication, and a legal strategy tailored to their unique circumstances. We've deliberately structured
              our practice to remain lean and client-focused, allowing us to move quickly, adapt to changing
              circumstances, and deliver results that matter.
            </p>
            <p>
              Since our founding, we've successfully represented hundreds of clients throughout Broward County,
              recovering millions of dollars in settlements and verdicts. Our reputation is built on results, integrity,
              and a genuine commitment to fighting for those who have been wronged.
            </p>
            <p className="font-semibold text-[#0066B2] text-xl">
              Today, The Costello Law Group continues to grow while maintaining the personalized service and aggressive
              advocacy that our clients have come to expect. We're proud to serve Cooper City, Davie, Plantation,
              Pembroke Pines, and the surrounding communities.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Attorney Profile */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-[#0066B2]/20 to-[#00A878]/20 rounded-2xl blur-2xl" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JulioNaranjoPhotography_20250922_Joshua%27sExecutiveHeadshots-005.JPG-1S7hL1RcPFnJQqMhexzFc2I73NMQB4.jpeg"
                alt="Joshua Costello, Esq."
                width={600}
                height={800}
                className="relative rounded-xl shadow-2xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Joshua "Josh" Costello, Esq.
              </h2>
              <p className="text-lg text-[#0066B2] font-semibold mb-6">
                Founder & Managing Attorney – Personal Injury & Insurance Claims
              </p>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  For more than a decade, Joshua Costello has dedicated his career to fighting for individuals who have
                  been injured or wrongfully denied by insurance companies. With 12 years of courtroom and litigation
                  experience, Mr. Costello has built a reputation as a relentless advocate who combines deep legal
                  knowledge with a genuine commitment to helping those in need.
                </p>
                <p>
                  Raised in Palm Coast, Florida, Joshua was taught from an early age the values of honesty, hard work,
                  and service to others—principles that continue to guide his practice today. He graduated at the top of
                  his class from Flagler Palm Coast High School in Bunnell, Florida, before earning a full academic
                  scholarship to Florida State University. There, he completed his Bachelor of Science degree in just
                  three years.
                </p>
                <p>
                  Joshua then pursued his law degree at the University of Miami School of Law, where his passion for
                  trial advocacy quickly became clear. As an intern with the Miami-Dade Public Defender's Office, he
                  gained invaluable courtroom experience by participating in jury trials before even
                  graduating—delivering opening statements and conducting cross-examinations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Journey */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">Career Journey</h2>

          <div className="space-y-4 text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
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
            <p>
              Through these experiences, Mr. Costello not only mastered the complexities of personal injury and denied
              insurance claims but also recognized what truly serves clients best. He saw firsthand how leaner, more
              client-focused practices often achieve faster and more effective results compared to large, highly
              departmentalized firms.
            </p>
            <p className="font-semibold text-[#0066B2] text-xl">
              Today, Joshua Costello brings all of his trial experience, leadership skills, and client-first philosophy
              to his own practice—providing personalized, aggressive, and efficient representation for those facing
              personal injury and insurance disputes.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Our Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to fighting for your rights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {displayTeamMembers.map((member: any, index: number) => (
              <motion.div
                key={member._id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-[#00A878]/30 bg-gradient-to-br from-white to-[#00A878]/5">
                  <div className="relative h-[400px] bg-gradient-to-br from-[#0066B2]/10 to-[#00A878]/10 overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg?height=400&width=300"}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0066B2]/20 to-transparent" />
                  </div>
                  <CardContent className="p-6 bg-gradient-to-br from-white via-[#00A878]/5 to-[#0066B2]/5">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                    <p className="text-[#0066B2] font-semibold mb-4">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">{member.bio}</p>
                    <div className="flex gap-2">
                      {member.email && (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="flex-1 bg-transparent border-2 border-[#00A878] text-[#00A878] hover:bg-[#00A878] hover:text-white"
                        >
                          <Link href={`mailto:${member.email}`}>
                            <Mail className="h-4 w-4 mr-2" />
                            Contact
                          </Link>
                        </Button>
                      )}
                      {member.linkedin && (
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="border-2 bg-transparent border-[#0066B2] text-[#0066B2] hover:bg-[#0066B2] hover:text-white"
                        >
                          <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Integrity",
                description:
                  "We uphold the highest ethical standards in every case we handle, earning the trust of our clients and respect of our peers.",
                color: "text-[#0066B2]",
                bgColor: "bg-[#0066B2]/10",
                borderColor: "border-[#0066B2]/20",
              },
              {
                icon: Target,
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, from legal research to courtroom advocacy to client communication.",
                color: "text-[#00A878]",
                bgColor: "bg-[#00A878]/10",
                borderColor: "border-[#00A878]/20",
              },
              {
                icon: Heart,
                title: "Compassion",
                description:
                  "We understand that legal issues often arise during difficult times. We treat every client with empathy and respect.",
                color: "text-rose-600",
                bgColor: "bg-rose-50",
                borderColor: "border-rose-200",
              },
              {
                icon: Users,
                title: "Client-Focused",
                description:
                  "Your goals are our goals. We tailor our approach to your unique needs and keep you informed every step of the way.",
                color: "text-purple-600",
                bgColor: "bg-purple-50",
                borderColor: "border-purple-200",
              },
              {
                icon: TrendingUp,
                title: "Results-Driven",
                description:
                  "We measure our success by the outcomes we achieve for our clients. We fight tirelessly to get you the best possible result.",
                color: "text-amber-600",
                bgColor: "bg-amber-50",
                borderColor: "border-amber-200",
              },
              {
                icon: Award,
                title: "Community",
                description:
                  "We believe in giving back to the communities we serve through pro bono work and charitable initiatives.",
                color: "text-cyan-600",
                bgColor: "bg-cyan-50",
                borderColor: "border-cyan-200",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`hover:shadow-xl transition-all duration-300 border-2 ${value.borderColor} hover:scale-105 hover:-translate-y-1 group`}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`h-16 w-16 rounded-full ${value.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <value.icon className={`h-8 w-8 ${value.color}`} />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Experience the Costello Difference</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Let our experienced team put our values to work for you. Schedule your free consultation today.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}

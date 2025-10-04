"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, MapPin, Clock } from "lucide-react"
import { useState } from "react"
import { submitContactForm } from "@/app/actions/contact"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practiceArea: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        alert("Thank you for contacting us! We will be in touch within 24 hours.")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          practiceArea: "",
          message: "",
        })
      }
    } catch (error) {
      alert("There was an error submitting your form. Please try calling us directly.")
      console.error("[v0] Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

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
          <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Schedule your free consultation today. We're here to help you navigate your legal challenges.
          </p>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: "Phone",
                content: (
                  <a href="tel:+19545918099" className="text-muted-foreground hover:text-primary transition-colors">
                    (954) 591-8099
                  </a>
                ),
              },
              {
                icon: MapPin,
                title: "Address",
                content: (
                  <p className="text-muted-foreground text-sm">
                    5846 S Flamingo Rd. Ste. 520
                    <br />
                    Cooper City, FL 33330
                  </p>
                ),
              },
              {
                icon: Clock,
                title: "Hours",
                content: (
                  <p className="text-muted-foreground text-sm">
                    Mon-Fri: 8:00 AM - 6:00 PM
                    <br />
                    Sat: By Appointment
                    <br />
                    24/7 Emergency Line
                  </p>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6 text-center">
                    <item.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    {item.content}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Schedule Your Free Consultation
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Fill out the form below and Joshua Costello will contact you within 24 hours to discuss your case.
              </p>

              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="practiceArea">Practice Area *</Label>
                      <Select
                        value={formData.practiceArea}
                        onValueChange={(value) => setFormData({ ...formData, practiceArea: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a practice area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="car-accidents">Car Accidents</SelectItem>
                          <SelectItem value="truck-accidents">Truck Accidents</SelectItem>
                          <SelectItem value="motorcycle-accidents">Motorcycle Accidents</SelectItem>
                          <SelectItem value="rideshare-accidents">Rideshare Accidents</SelectItem>
                          <SelectItem value="slip-and-fall">Slip & Fall</SelectItem>
                          <SelectItem value="premises-liability">Premises Liability</SelectItem>
                          <SelectItem value="dog-bites">Dog Bites</SelectItem>
                          <SelectItem value="wrongful-death">Wrongful Death</SelectItem>
                          <SelectItem value="pip">PIP Claims</SelectItem>
                          <SelectItem value="homeowners-insurance">Homeowners Insurance</SelectItem>
                          <SelectItem value="criminal-defense">Criminal Defense</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell Us About Your Case *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please provide details about your legal matter..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Consultation Request"}
                    </Button>

                    <p className="text-xs text-muted-foreground">
                      By submitting this form, you agree to our privacy policy. All information is confidential and
                      protected by attorney-client privilege.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.8!2d-80.2644!3d26.0589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a7e3e3e3e3e3%3A0x1234567890abcdef!2s5846%20S%20Flamingo%20Rd%20Ste%20520%2C%20Cooper%20City%2C%20FL%2033330!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="The Costello Law Group Office Location"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Free initial consultation with no obligation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">No fees unless we win your case</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">12+ years of courtroom experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">100+ successful case wins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Available 24/7 for emergencies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-4">Emergency Legal Assistance</h3>
                  <p className="mb-4 opacity-90">
                    If you need immediate legal assistance, call our 24/7 emergency hotline:
                  </p>
                  <a href="tel:+19545918099" className="text-2xl font-bold hover:opacity-80 transition-opacity">
                    (954) 591-8099
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, CheckCircle2, Phone, Mail, User, Scale } from "lucide-react"
import { submitConsultationForm } from "@/app/actions/consultation"

const caseTypes = [
  "Car Accident",
  "Truck Accident",
  "Motorcycle Accident",
  "Slip & Fall",
  "Premises Liability",
  "Dog Bite",
  "Wrongful Death",
  "PIP Claim",
  "Homeowners Insurance",
  "Criminal Defense",
  "Other",
]

export function MultiStepForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    caseType: "",
  })

  const totalSteps = 5

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      const result = await submitConsultationForm(formData)
      if (result.success) {
        alert("Thank you! We'll contact you within 24 hours.")
        // Reset form
        setFormData({
          email: "",
          phone: "",
          firstName: "",
          lastName: "",
          caseType: "",
        })
        setStep(1)
      } else {
        alert("There was an error submitting your request. Please try again or call us directly.")
      }
    } catch (error) {
      console.error("Error submitting consultation form:", error)
      alert("There was an error submitting your request. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.email.includes("@")
      case 2:
        return formData.phone.length >= 10
      case 3:
        return formData.firstName.length > 0
      case 4:
        return formData.lastName.length > 0
      case 5:
        return formData.caseType.length > 0
      default:
        return false
    }
  }

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg border border-[#00A878]/20">
      <CardContent className="p-4">
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-muted-foreground">
              Step {step} of {totalSteps}
            </span>
            <span className="text-xs font-semibold text-[#00A878]">{Math.round((step / totalSteps) * 100)}%</span>
          </div>
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#00A878] to-[#0066B2] transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="min-h-[180px]">
          {step === 1 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-full bg-[#00A878]/10 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-[#00A878]" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-foreground">Let's Get Started</h3>
                  <p className="text-xs text-muted-foreground">What's your email address?</p>
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-sm font-semibold">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-9 text-sm"
                  autoFocus
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-full bg-[#00A878]/10 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-[#00A878]" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-foreground">Contact Number</h3>
                  <p className="text-xs text-muted-foreground">How can we reach you?</p>
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-sm font-semibold">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(954) 555-0123"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-9 text-sm"
                  autoFocus
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-full bg-[#00A878]/10 flex items-center justify-center">
                  <User className="h-4 w-4 text-[#00A878]" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-foreground">First Name</h3>
                  <p className="text-xs text-muted-foreground">What should we call you?</p>
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="firstName" className="text-sm font-semibold">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="h-9 text-sm"
                  autoFocus
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-full bg-[#00A878]/10 flex items-center justify-center">
                  <User className="h-4 w-4 text-[#00A878]" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-foreground">Last Name</h3>
                  <p className="text-xs text-muted-foreground">And your last name?</p>
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="lastName" className="text-sm font-semibold">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="h-9 text-sm"
                  autoFocus
                />
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-full bg-[#00A878]/10 flex items-center justify-center">
                  <Scale className="h-4 w-4 text-[#00A878]" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-foreground">Case Type</h3>
                  <p className="text-xs text-muted-foreground">What type of case do you have?</p>
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-sm font-semibold">Select Your Case Type</Label>
                <div className="grid grid-cols-2 gap-2 max-h-[140px] overflow-y-auto pr-1">
                  {caseTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setFormData({ ...formData, caseType: type })}
                      className={`p-2 text-left rounded-lg border-2 transition-all text-xs ${
                        formData.caseType === type
                          ? "border-[#00A878] bg-[#00A878]/10 text-foreground font-semibold"
                          : "border-gray-200 hover:border-[#00A878]/50 text-muted-foreground"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-2 mt-4">
          {step > 1 && (
            <Button onClick={handleBack} variant="outline" className="flex-1 h-9 bg-transparent text-sm" size="sm">
              <ArrowLeft className="h-3 w-3 mr-1" />
              Back
            </Button>
          )}
          {step < totalSteps ? (
            <Button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="flex-1 h-9 bg-[#00A878] hover:bg-[#00A878]/90 text-sm"
              size="sm"
            >
              Next
              <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!isStepValid() || isSubmitting}
              className="flex-1 h-9 bg-[#00A878] hover:bg-[#00A878]/90 text-sm"
              size="sm"
            >
              <CheckCircle2 className="h-3 w-3 mr-1" />
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

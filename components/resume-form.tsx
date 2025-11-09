"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitResume } from "@/app/actions/careers"
import { Upload, CheckCircle2, Loader2 } from "lucide-react"

export function ResumeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [fileName, setFileName] = useState<string>("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    try {
      const result = await submitResume(formData)
      if (result.success) {
        setIsSuccess(true)
        ;(e.target as HTMLFormElement).reset()
        setFileName("")
      }
    } catch (error) {
      console.error("[v0] Error submitting resume:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <Card className="border-2 border-[#00A878]/50 bg-gradient-to-br from-[#00A878]/5 to-white">
        <CardContent className="p-12 text-center">
          <div className="h-16 w-16 rounded-full bg-[#00A878]/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8 text-[#00A878]" />
          </div>
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">Resume Submitted Successfully!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for your interest in joining The Costello Law Group. We'll review your application and get back to
            you soon.
          </p>
          <Button
            onClick={() => setIsSuccess(false)}
            variant="outline"
            className="border-2 border-[#00A878]/30 text-[#00A878] hover:bg-[#00A878]/5"
          >
            Submit Another Application
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-2 border-[#0066B2]/20">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-semibold">
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="h-12 border-2 focus:border-[#0066B2]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                className="h-12 border-2 focus:border-[#0066B2]"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-semibold">
                Phone Number *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="(954) 555-0123"
                className="h-12 border-2 focus:border-[#0066B2]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="position" className="text-sm font-semibold">
                Position of Interest *
              </Label>
              <Select name="position" required>
                <SelectTrigger className="h-12 border-2 focus:border-[#0066B2]">
                  <SelectValue placeholder="Select a position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="associate-attorney">Associate Attorney - Personal Injury</SelectItem>
                  <SelectItem value="paralegal">Paralegal - Litigation Support</SelectItem>
                  <SelectItem value="legal-assistant">Legal Assistant</SelectItem>
                  <SelectItem value="other">Other / General Application</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="resume" className="text-sm font-semibold">
              Resume / CV *
            </Label>
            <div className="relative">
              <Input
                id="resume"
                name="resume"
                type="file"
                required
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="h-12 border-2 focus:border-[#0066B2] file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#0066B2]/10 file:text-[#0066B2] hover:file:bg-[#0066B2]/20"
              />
              {fileName && (
                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <Upload className="h-4 w-4 text-[#00A878]" />
                  <span>{fileName}</span>
                </div>
              )}
            </div>
            <p className="text-xs text-muted-foreground">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverLetter" className="text-sm font-semibold">
              Cover Letter / Additional Information
            </Label>
            <Textarea
              id="coverLetter"
              name="coverLetter"
              rows={6}
              placeholder="Tell us why you'd be a great fit for our team..."
              className="border-2 focus:border-[#0066B2] resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#0066B2] text-white hover:bg-[#0066B2]/90 h-14 text-lg font-semibold"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-5 w-5" />
                Submit Application
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitConsultationForm(formData: {
  email: string
  phone: string
  firstName: string
  lastName: string
  caseType: string
}) {
  try {
    const emailContent = `
New Free Consultation Request from The Costello Law Group Website

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CLIENT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Case Type: ${formData.caseType}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This consultation request was submitted through the 5-step form at thecostellolawgroup.com
    `

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #0066B2 0%, #00A878 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; }
    .info-row { margin: 15px 0; padding: 12px; background: white; border-left: 4px solid #00A878; }
    .label { font-weight: bold; color: #00A878; margin-bottom: 5px; }
    .value { color: #333; }
    .badge { display: inline-block; background: #00A878; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-top: 10px; }
    .footer { background: #333; color: white; padding: 20px; text-align: center; font-size: 12px; border-radius: 0 0 8px 8px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 24px;">🎯 New Consultation Request</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">The Costello Law Group</p>
      <div class="badge">5-Step Form Submission</div>
    </div>
    <div class="content">
      <h2 style="color: #00A878; margin-top: 0;">Client Information</h2>
      
      <div class="info-row">
        <div class="label">Name</div>
        <div class="value">${formData.firstName} ${formData.lastName}</div>
      </div>
      
      <div class="info-row">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${formData.email}" style="color: #00A878;">${formData.email}</a></div>
      </div>
      
      <div class="info-row">
        <div class="label">Phone</div>
        <div class="value"><a href="tel:${formData.phone}" style="color: #00A878;">${formData.phone}</a></div>
      </div>
      
      <div class="info-row">
        <div class="label">Case Type</div>
        <div class="value"><strong>${formData.caseType}</strong></div>
      </div>
      
      <div style="margin-top: 30px; padding: 20px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 4px;">
        <p style="margin: 0; color: #856404;"><strong>⏰ Action Required:</strong> This is a consultation request. Please follow up within 24 hours for best results.</p>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0;">This consultation request was submitted through the 5-step form at thecostellolawgroup.com</p>
      <p style="margin: 10px 0 0 0;">The Costello Law Group | 5846 S Flamingo Rd. Ste. 520, Cooper City, FL 33330</p>
    </div>
  </div>
</body>
</html>
    `

    await resend.emails.send({
      from: "The Costello Law Group <noreply@thecostellolawgroup.com>",
      to: ["rdub@fullstackwoo.day", "joshuacostello2013@gmail.com"],
      replyTo: formData.email,
      subject: `🎯 New Consultation: ${formData.firstName} ${formData.lastName} - ${formData.caseType}`,
      text: emailContent,
      html: htmlContent,
    })

    console.log("[v0] Consultation form successfully submitted and email sent")
    return { success: true }
  } catch (error) {
    console.error("[v0] Error sending consultation form email:", error)
    return { success: false, error: "Failed to send email" }
  }
}

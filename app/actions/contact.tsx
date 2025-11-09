"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData: {
  firstName: string
  lastName: string
  email: string
  phone: string
  practiceArea: string
  message: string
}) {
  try {
    const emailContent = `
New Contact Form Submission from The Costello Law Group Website

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CLIENT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Practice Area: ${formData.practiceArea}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This inquiry was submitted through the contact form at thecostellolawgroup.com
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
    .info-row { margin: 15px 0; padding: 12px; background: white; border-left: 4px solid #0066B2; }
    .label { font-weight: bold; color: #0066B2; margin-bottom: 5px; }
    .value { color: #333; }
    .message-box { background: white; padding: 20px; margin-top: 20px; border-radius: 4px; border: 1px solid #e0e0e0; }
    .footer { background: #333; color: white; padding: 20px; text-align: center; font-size: 12px; border-radius: 0 0 8px 8px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">The Costello Law Group</p>
    </div>
    <div class="content">
      <h2 style="color: #0066B2; margin-top: 0;">Client Information</h2>
      
      <div class="info-row">
        <div class="label">Name</div>
        <div class="value">${formData.firstName} ${formData.lastName}</div>
      </div>
      
      <div class="info-row">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${formData.email}" style="color: #0066B2;">${formData.email}</a></div>
      </div>
      
      <div class="info-row">
        <div class="label">Phone</div>
        <div class="value"><a href="tel:${formData.phone}" style="color: #0066B2;">${formData.phone}</a></div>
      </div>
      
      <div class="info-row">
        <div class="label">Practice Area</div>
        <div class="value">${formData.practiceArea}</div>
      </div>
      
      <div class="message-box">
        <h3 style="color: #0066B2; margin-top: 0;">Message</h3>
        <p style="white-space: pre-wrap; margin: 0;">${formData.message}</p>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0;">This inquiry was submitted through the contact form at thecostellolawgroup.com</p>
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
      subject: `New Contact Form: ${formData.firstName} ${formData.lastName} - ${formData.practiceArea}`,
      text: emailContent,
      html: htmlContent,
    })

    console.log("[v0] Contact form successfully submitted and email sent")
    return { success: true }
  } catch (error) {
    console.error("[v0] Error sending contact form email:", error)
    return { success: false, error: "Failed to send email" }
  }
}

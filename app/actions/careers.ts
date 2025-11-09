"use server"

export async function submitResume(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const position = formData.get("position") as string
  const coverLetter = formData.get("coverLetter") as string
  const resume = formData.get("resume") as File

  const emailContent = `
New Resume Submission

Name: ${name}
Email: ${email}
Phone: ${phone}
Position: ${position}

Cover Letter:
${coverLetter}

Resume: ${resume?.name || "No file attached"}
  `

  console.log("[v0] Resume submission:", emailContent)
  console.log("[v0] Email will be sent to: rdub@fullstackwoo.day")
  console.log("[v0] Resume file:", resume?.name, resume?.size, "bytes")

  // TODO: Replace with actual email sending logic with attachment
  // Example with Resend:
  // const resumeBuffer = await resume.arrayBuffer()
  // await resend.emails.send({
  //   from: 'careers@thecostellolawgroup.com',
  //   to: 'rdub@fullstackwoo.day',
  //   subject: `New Resume: ${name} - ${position}`,
  //   text: emailContent,
  //   attachments: [{
  //     filename: resume.name,
  //     content: Buffer.from(resumeBuffer),
  //   }],
  // })

  return { success: true }
}

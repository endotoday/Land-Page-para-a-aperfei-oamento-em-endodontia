"use server"

import emailjs from "@emailjs/nodejs"

export async function sendInquiryEmail(formData: {
  name: string
  email: string
  phone: string
  dentistry: string
  experience: string
}) {
  try {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      privateKey: process.env.EMAILJS_PRIVATE_KEY,
    })

    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
      {
        to_email: "endotoday@terra.com.br",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        dentistry: formData.dentistry,
        experience: formData.experience,
      },
    )

    return { success: true }
  } catch (error) {
    console.error("Email send error:", error)
    return { success: false, error: "Erro ao enviar formulário" }
  }
}

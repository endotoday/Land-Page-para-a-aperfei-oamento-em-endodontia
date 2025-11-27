"use client"
import HeroSection from "@/components/hero-section"
import BenefitsSection from "@/components/benefits-section"
import TestimonialsSection from "@/components/testimonials-section"
import InquiryForm from "@/components/inquiry-form"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main className="w-full">
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <InquiryForm />
      <Footer />
    </main>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { sendInquiryEmail } from "@/app/actions/send-email"

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dentistry: "",
    experience: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const result = await sendInquiryEmail(formData)

      if (result.success) {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", dentistry: "", experience: "" })
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        setError(result.error || "Erro ao enviar formulário")
      }
    } catch (err) {
      console.error("Form submission error:", err)
      setError("Erro ao enviar formulário. Por favor, tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="form-section" className="section-padding bg-background">
      <div className="max-w-2xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Solicite Mais Informações</h2>
          <p className="text-lg text-muted-foreground">
            Preencha o formulário abaixo e nossa equipe entrará em contato em até 24h
          </p>
        </div>

        {/* Form */}
        <Card className="p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="text-4xl">✓</div>
              <h3 className="text-xl font-semibold text-foreground">Obrigado!</h3>
              <p className="text-muted-foreground">
                Sua solicitação foi enviada com sucesso. Entraremos em contato em breve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome"
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefone/WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(16) 99176-5415"
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                />
              </div>

              {/* Dentistry */}
              <div>
                <label htmlFor="dentistry" className="block text-sm font-medium text-foreground mb-2">
                  Sua formação/especialidade
                </label>
                <select
                  id="dentistry"
                  name="dentistry"
                  value={formData.dentistry}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="general">Odontólogo Geral</option>
                  <option value="specialist">Especialista em Endodontia</option>
                  <option value="prostho">Prótese</option>
                  <option value="perio">Periodontia</option>
                  <option value="ortho">Ortodontia</option>
                  <option value="other">Outra especialidade</option>
                </select>
              </div>

              {/* Experience */}
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-foreground mb-2">
                  Anos de experiência clínica
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="0-2">0-2 anos</option>
                  <option value="2-5">2-5 anos</option>
                  <option value="5-10">5-10 anos</option>
                  <option value="10+">Mais de 10 anos</option>
                </select>
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-2 disabled:opacity-50"
              >
                {loading ? "Enviando..." : "Enviar Solicitação"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Respeitamos sua privacidade. Seus dados não serão compartilhados.
              </p>
            </form>
          )}
        </Card>
      </div>
    </section>
  )
}

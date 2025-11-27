"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/551640000000?text=Olá! Tenho interesse no curso de Aperfeiçoamento em Endodontia.",
      "_blank",
    )
  }

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-20 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Subheading */}
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-primary-foreground">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Formação Especializada em Endodontia
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Domine a Endodontia Moderna
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-xl">
              Aprenda técnicas de ponta com mentoria de especialistas renomados. Transforme sua prática clínica com
              metodologias comprovadas que aumentam a taxa de sucesso do tratamento.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                onClick={() => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                Inscrever-se Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                onClick={handleWhatsApp}
              >
                Fale Conosco no WhatsApp
              </Button>
            </div>

            {/* Benefits dots */}
            <div className="space-y-3 pt-8 border-t border-primary-foreground/20">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground text-sm font-bold">✓</span>
                </div>
                <span className="text-primary-foreground font-medium">100+ horas de formação prática</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground text-sm font-bold">✓</span>
                </div>
                <span className="text-primary-foreground font-medium">Casos clínicos reais com mentoria</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground text-sm font-bold">✓</span>
                </div>
                <span className="text-primary-foreground font-medium">Certificação APCD Araraquara</span>
              </div>
            </div>
          </div>

          {/* Image side */}
          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/professional-endodontist-working-with-microscope-i.jpg"
                alt="Especialista em Endodontia trabalhando em ambiente clínico"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 w-64">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground">Taxa de sucesso:</p>
                <p className="text-3xl font-bold text-primary">94%</p>
                <p className="text-xs text-muted-foreground">de nossos alunos aumentam a produtividade após o curso</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card } from "@/components/ui/card"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Carlos Silva",
      role: "Dentista Clínico Geral - SP",
      text: "O curso transformou minha prática. Em 4 meses, aumentei meus casos de endodontia em 300% e meus pacientes têm muito mais confiança nos tratamentos.",
      image: "/professional-male-dentist.png",
    },
    {
      name: "Dra. Ana Oliveira",
      role: "Especialista em Endodontia - MG",
      text: "Excelente conteúdo técnico e mentoria próxima. As técnicas de casos complexos mudaram minha forma de trabalhar. Muito recomendo!",
      image: "/professional-female-dentist.png",
    },
    {
      name: "Dr. Rafael Costa",
      role: "Proprietário de Clínica - RJ",
      text: "Investimento que se pagou. Meus alunos aplicam metodologias modernas e os resultados clínicos são notoriamente melhores. ROI extraordinário.",
      image: "/professional-male-dentist.png",
    },
  ]

  return (
    <section className="section-padding bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">O que dizem nossos alunos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Histórias de sucesso de profissionais que transformaram sua carreira
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 flex flex-col justify-between hover:shadow-lg transition-shadow">
              {/* Testimonial text */}
              <p className="text-foreground italic mb-6 leading-relaxed">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

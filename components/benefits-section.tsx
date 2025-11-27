export default function BenefitsSection() {
  const benefits = [
    {
      title: "Aumentar Produtividade",
      description: "Reduza o tempo de tratamento e atenda mais pacientes com segurança",
      icon: "⚡",
    },
    {
      title: "Maior Taxa de Sucesso",
      description: "Técnicas comprovadas que diminuem complicações e melhoram resultados",
      icon: "✓",
    },
    {
      title: "Confiança do Paciente",
      description: "Comunique com segurança oferecendo tratamentos de ponta",
      icon: "🤝",
    },
    {
      title: "Diferencial de Mercado",
      description: "Destaque-se da concorrência com especialização reconhecida",
      icon: "⭐",
    },
    {
      title: "Suporte Continuado",
      description: "Acesso vitalício a materiais, webinars e comunidade de especialistas",
      icon: "📚",
    },
    {
      title: "Retorno Financeiro",
      description: "Recupere investimento em 3-6 meses com aumento de demanda",
      icon: "💰",
    },
  ]

  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Por que escolher nosso curso?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desenvolvido para dentistas que buscam dominar a Endodontia contemporânea
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/30"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

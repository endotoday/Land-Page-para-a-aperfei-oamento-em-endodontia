"use client"

export default function Footer() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/551640000000?text=Olá! Gostaria de saber mais sobre o curso de Aperfeiçoamento em Endodontia.",
      "_blank",
    )
  }

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">EndoToday</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Aperfeiçoamento em Endodontia reconhecido pela APCD Araraquara.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-semibold">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Sobre o Curso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Cronograma
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-semibold">Fale Conosco</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <button onClick={handleWhatsApp} className="hover:text-primary-foreground transition">
                  WhatsApp: (16) 99999-9999
                </button>
              </li>
              <li>📧 contato@endotoday.com.br</li>
              <li>📍 Araraquara, SP - Brasil</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          {/* Social & Legal */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>&copy; 2025 EndoToday. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary-foreground transition">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

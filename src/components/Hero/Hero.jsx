import { contact, whatsappLink } from '../../data/contact'
import { IconWhatsapp } from '../../data/icons'
import './Hero.scss'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <span className="section-tag">Vidraçaria Pense Vidros</span>
          <h1>
            Vidro temperado sob medida para <span>transformar</span> o seu ambiente
          </h1>
          <p>
            Box para banheiro, janelas, portas, guarda-corpos, espelhos e fechamento de
            sacadas. Projeto, venda e instalação com acabamento de alta qualidade em
            Laurentino e região.
          </p>

          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href={whatsappLink(contact.whatsapp[0].phone)}
              target="_blank"
              rel="noreferrer"
            >
              <IconWhatsapp width="20" height="20" />
              Falar no WhatsApp
            </a>
            <a className="btn btn--outline" href="#servicos">
              Ver serviços
            </a>
          </div>
        </div>

        <div className="hero__art" aria-hidden="true">
          <svg viewBox="0 0 420 420" fill="none">
            <defs>
              <linearGradient id="heroGrad1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8dc63f" />
                <stop offset="100%" stopColor="#17968f" />
              </linearGradient>
              <linearGradient id="heroGrad2" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#17968f" />
                <stop offset="100%" stopColor="#1c6f82" />
              </linearGradient>
            </defs>
            <rect x="40" y="60" width="150" height="220" rx="10" fill="url(#heroGrad1)" opacity="0.9" />
            <rect x="210" y="110" width="170" height="260" rx="10" fill="url(#heroGrad2)" opacity="0.85" />
            <rect x="60" y="90" width="110" height="160" rx="6" fill="none" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="2" />
            <rect x="230" y="140" width="130" height="190" rx="6" fill="none" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="2" />
            <line x1="115" y1="90" x2="115" y2="250" stroke="#ffffff" strokeOpacity="0.4" />
            <line x1="295" y1="140" x2="295" y2="330" stroke="#ffffff" strokeOpacity="0.4" />
          </svg>
        </div>
      </div>
    </section>
  )
}

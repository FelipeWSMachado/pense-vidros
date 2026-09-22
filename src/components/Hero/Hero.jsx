import { contact, whatsappLink } from '../../data/contact'
import { IconWhatsapp } from '../../data/icons'
import logoIcon from '../../assets/logo-icon.png'
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
          <img src={logoIcon} alt="" />
        </div>
      </div>
    </section>
  )
}

import { contact, whatsappLink } from '../../data/contact'
import { IconWhatsapp, IconMail, IconPin, IconInstagram } from '../../data/icons'
import './Contact.scss'

export default function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="contact__inner">
        <div className="contact__text">
          <span className="section-tag section-tag--light">Fale conosco</span>
          <h2>Peça seu orçamento sem compromisso</h2>
          <p>
            Atendemos Laurentino e região. Chame no WhatsApp e receba um atendimento rápido
            para o seu projeto em vidro.
          </p>

          <div className="contact__whats">
            {contact.whatsapp.map((person) => (
              <a
                key={person.phone}
                className="btn btn--primary"
                href={whatsappLink(person.phone)}
                target="_blank"
                rel="noreferrer"
              >
                <IconWhatsapp width="20" height="20" />
                {person.name}
              </a>
            ))}
          </div>
        </div>

        <div className="contact__card">
          <ul>
            <li>
              <IconPin width="22" height="22" />
              <span>{contact.address}</span>
            </li>
            <li>
              <IconMail width="22" height="22" />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <IconInstagram width="22" height="22" />
              <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
                {contact.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

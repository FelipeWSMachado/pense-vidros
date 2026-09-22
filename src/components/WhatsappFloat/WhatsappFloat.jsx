import { useState } from 'react'
import { contact, whatsappLink } from '../../data/contact'
import { IconWhatsapp } from '../../data/icons'
import './WhatsappFloat.scss'

export default function WhatsappFloat() {
  const [open, setOpen] = useState(false)

  return (
    <div className="wa-float">
      {open && (
        <div className="wa-float__menu">
          <p>Fale com a gente:</p>
          {contact.whatsapp.map((person) => (
            <a
              key={person.phone}
              href={whatsappLink(person.phone)}
              target="_blank"
              rel="noreferrer"
            >
              <IconWhatsapp width="18" height="18" />
              {person.name}
            </a>
          ))}
        </div>
      )}
      <button
        className="wa-float__btn"
        onClick={() => setOpen((v) => !v)}
        aria-label="Falar no WhatsApp"
      >
        <IconWhatsapp width="28" height="28" />
      </button>
    </div>
  )
}

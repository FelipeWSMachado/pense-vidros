import { gallery } from '../../data/gallery'
import { contact, whatsappLink } from '../../data/contact'
import {
  IconWindow,
  IconDoor,
  IconShower,
  IconRailing,
  IconMirror,
  IconPartition,
  IconBalcony,
  IconTool,
} from '../../data/icons'
import './Gallery.scss'

const iconMap = {
  window: IconWindow,
  door: IconDoor,
  shower: IconShower,
  railing: IconRailing,
  mirror: IconMirror,
  partition: IconPartition,
  balcony: IconBalcony,
  tool: IconTool,
}

export default function Gallery() {
  return (
    <section id="trabalhos" className="gallery">
      <div className="gallery__inner">
        <div className="gallery__header">
          <span className="section-tag">Nossos trabalhos</span>
          <h2>Projetos realizados pela Pense Vidros</h2>
          <p>
            Clique em uma foto e fale direto com a gente no WhatsApp para orçar um
            serviço parecido no seu ambiente.
          </p>
        </div>

        <div className="gallery__grid">
          {gallery.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <a
                key={item.key}
                className="gallery__item"
                href={whatsappLink(
                  contact.whatsapp[0].phone,
                  `Olá! Vi o site e gostaria de um orçamento para: ${item.title}.`
                )}
                target="_blank"
                rel="noreferrer"
              >
                {item.image ? (
                  <img src={item.image} alt={item.title} loading="lazy" />
                ) : (
                  <div className="gallery__placeholder">
                    <Icon width="34" height="34" />
                  </div>
                )}
                <span className="gallery__label">{item.title}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

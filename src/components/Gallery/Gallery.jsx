import { useRef, useState } from 'react'
import { gallery } from '../../data/gallery'
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
import Lightbox from './Lightbox'
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
  const [activeKey, setActiveKey] = useState(null)
  const activeItem = gallery.find((item) => item.key === activeKey) ?? null
  const trackRef = useRef(null)

  function scrollByCards(direction) {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section id="trabalhos" className="gallery">
      <div className="gallery__inner">
        <div className="gallery__header">
          <span className="section-tag">Nossos trabalhos</span>
          <h2>Projetos realizados pela Pense Vidros</h2>
          <p>Clique em um trabalho para ver as fotos e falar com a gente no WhatsApp.</p>
        </div>

        <div className="gallery__carousel">
          <button
            type="button"
            className="gallery__arrow gallery__arrow--prev"
            onClick={() => scrollByCards(-1)}
            aria-label="Trabalhos anteriores"
          >
            ‹
          </button>

          <div className="gallery__track" ref={trackRef}>
            {gallery.map((item) => {
              const Icon = iconMap[item.icon]
              const cover = item.images[0]
              return (
                <button
                  key={item.key}
                  type="button"
                  className="gallery__item"
                  onClick={() => setActiveKey(item.key)}
                >
                  {cover ? (
                    <img src={cover} alt={item.title} loading="lazy" />
                  ) : (
                    <div className="gallery__placeholder">
                      <Icon width="34" height="34" />
                    </div>
                  )}
                  <span className="gallery__label">{item.title}</span>
                  {item.images.length > 1 && (
                    <span className="gallery__count">+{item.images.length}</span>
                  )}
                </button>
              )
            })}
          </div>

          <button
            type="button"
            className="gallery__arrow gallery__arrow--next"
            onClick={() => scrollByCards(1)}
            aria-label="Próximos trabalhos"
          >
            ›
          </button>
        </div>
      </div>

      {activeItem && (
        <Lightbox
          item={activeItem}
          icon={iconMap[activeItem.icon]}
          onClose={() => setActiveKey(null)}
        />
      )}
    </section>
  )
}

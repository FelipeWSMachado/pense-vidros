import { useEffect, useState } from 'react'
import { contact, whatsappLink } from '../../data/contact'
import { IconWhatsapp } from '../../data/icons'
import './Lightbox.scss'

export default function Lightbox({ item, icon: Icon, onClose }) {
  const [index, setIndex] = useState(0)
  const images = item.images
  const hasImages = images.length > 0

  useEffect(() => {
    setIndex(0)
  }, [item.key])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
      if (hasImages && e.key === 'ArrowRight') {
        setIndex((i) => (i + 1) % images.length)
      }
      if (hasImages && e.key === 'ArrowLeft') {
        setIndex((i) => (i - 1 + images.length) % images.length)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [hasImages, images.length, onClose])

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox__panel" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lightbox__close" onClick={onClose} aria-label="Fechar">
          ×
        </button>

        <div className="lightbox__viewer">
          {hasImages ? (
            <>
              <img src={images[index]} alt={`${item.title} - foto ${index + 1} de ${images.length}`} />
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    className="lightbox__nav lightbox__nav--prev"
                    onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
                    aria-label="Foto anterior"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="lightbox__nav lightbox__nav--next"
                    onClick={() => setIndex((i) => (i + 1) % images.length)}
                    aria-label="Próxima foto"
                  >
                    ›
                  </button>
                  <span className="lightbox__counter">
                    {index + 1} / {images.length}
                  </span>
                </>
              )}
            </>
          ) : (
            <div className="lightbox__empty">
              {Icon && <Icon width="40" height="40" />}
              <p>Fotos desse trabalho em breve.</p>
            </div>
          )}
        </div>

        {hasImages && images.length > 1 && (
          <div className="lightbox__thumbs">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`lightbox__thumb ${i === index ? 'is-active' : ''}`}
                onClick={() => setIndex(i)}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        )}

        <div className="lightbox__footer">
          <h3>{item.title}</h3>
          <a
            className="btn btn--primary"
            href={whatsappLink(
              contact.whatsapp[0].phone,
              `Olá! Vi as fotos de ${item.title} no site e gostaria de um orçamento.`
            )}
            target="_blank"
            rel="noreferrer"
          >
            <IconWhatsapp width="18" height="18" />
            Pedir orçamento
          </a>
        </div>
      </div>
    </div>
  )
}

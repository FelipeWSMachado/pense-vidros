import { useEffect, useState } from 'react'

export default function GalleryCard({ item, Icon, onOpen }) {
  const [index, setIndex] = useState(0)
  const images = item.images

  useEffect(() => {
    if (images.length < 2) return undefined
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 2600)
    return () => clearInterval(id)
  }, [images])

  return (
    <button type="button" className="gallery__item" onClick={onOpen}>
      {images.length > 0 ? (
        <img src={images[index]} alt={item.title} loading="lazy" />
      ) : (
        <div className="gallery__placeholder">
          <Icon width="34" height="34" />
        </div>
      )}
      <span className="gallery__label">{item.title}</span>
      {images.length > 1 && (
        <span className="gallery__dots">
          {images.map((_, i) => (
            <span key={i} className={`gallery__dot ${i === index ? 'is-active' : ''}`} />
          ))}
        </span>
      )}
    </button>
  )
}

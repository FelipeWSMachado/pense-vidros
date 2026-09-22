import { useState } from 'react'
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
import GalleryCard from './GalleryCard'
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

  return (
    <section id="trabalhos" className="gallery">
      <div className="gallery__inner">
        <div className="gallery__header">
          <span className="section-tag">Nossos trabalhos</span>
          <h2>Projetos realizados pela Pense Vidros</h2>
          <p>Clique em um trabalho para ver as fotos e falar com a gente no WhatsApp.</p>
        </div>

        <div className="gallery__grid">
          {gallery.map((item) => (
            <GalleryCard
              key={item.key}
              item={item}
              Icon={iconMap[item.icon]}
              onOpen={() => setActiveKey(item.key)}
            />
          ))}
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

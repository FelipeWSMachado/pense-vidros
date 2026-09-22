import { services } from '../../data/services'
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
import './Services.scss'

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

export default function Services() {
  return (
    <section id="servicos" className="services">
      <div className="services__inner">
        <div className="services__header">
          <span className="section-tag">O que fazemos</span>
          <h2>Serviços em vidro temperado</h2>
          <p>Soluções completas em vidro para todos os ambientes da sua casa ou empresa.</p>
        </div>

        <div className="services__grid">
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <div className="services__card" key={service.key}>
                <div className="services__icon">
                  <Icon width="26" height="26" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

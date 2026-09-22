import { mainCities, otherCities } from '../../data/serviceAreas'
import './ServiceAreas.scss'

export default function ServiceAreas() {
  return (
    <section id="regiao" className="areas">
      <div className="areas__inner">
        <div className="areas__header">
          <span className="section-tag">Onde atendemos</span>
          <h2>Levamos a Pense Vidros até você</h2>
          <p>Atendemos Laurentino e toda a região do Alto Vale do Itajaí, incluindo:</p>
        </div>

        <div className="areas__main">
          {mainCities.map((city) => (
            <span key={city} className="areas__chip areas__chip--main">
              {city}
            </span>
          ))}
        </div>

        <div className="areas__rest">
          {otherCities.map((city) => (
            <span key={city} className="areas__chip">
              {city}
            </span>
          ))}
        </div>

        <div className="areas__coast">Também atendemos todo o litoral catarinense</div>
      </div>
    </section>
  )
}

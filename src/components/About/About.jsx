import './About.scss'

const highlights = [
  {
    title: 'Projeto e medição',
    text: 'Visita técnica e medição precisa para cada ambiente, sem surpresas.',
  },
  {
    title: 'Revenda autorizada',
    text: 'Vidro temperado de procedência garantida, com qualidade e segurança certificadas.',
  },
  {
    title: 'Instalação especializada',
    text: 'Equipe experiente, cuidado com o acabamento e prazos combinados.',
  },
]

export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="about__inner">
        <div className="about__text">
          <span className="section-tag">Quem somos</span>
          <h2>Cuidado e precisão em cada projeto de vidro</h2>
          <p>
            A Pense Vidros é uma vidraçaria especializada em vidro temperado para
            residências e comércios em Laurentino e região. Do orçamento à instalação,
            entregamos qualidade, segurança e acabamento impecável em cada detalhe.
          </p>
        </div>

        <div className="about__grid">
          {highlights.map((item) => (
            <div className="about__card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

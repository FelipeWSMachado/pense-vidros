import './VerseBar.scss'

const verse =
  'Entregue ao Senhor o comando do seu trabalho, e o que você planejou dará certo. — Provérbios 16:3'

export default function VerseBar() {
  return (
    <div className="verse-bar" role="note" aria-label={verse}>
      <div className="verse-bar__track" aria-hidden="true">
        <span className="verse-bar__item">{verse}</span>
        <span className="verse-bar__item">{verse}</span>
        <span className="verse-bar__item">{verse}</span>
        <span className="verse-bar__item">{verse}</span>
      </div>
    </div>
  )
}

import './VerseBar.scss'

const verse =
  'Entregue ao Senhor o comando do seu trabalho, e o que você planejou dará certo. — Provérbios 16:3'

export default function VerseBar() {
  return (
    <div className="verse-bar" role="note">
      <span className="verse-bar__text">{verse}</span>
    </div>
  )
}

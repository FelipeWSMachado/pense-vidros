import logo from '../../assets/logo-transparent.png'
import { contact } from '../../data/contact'
import './Footer.scss'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__badge">
          <img src={logo} alt="Pense Vidros" className="footer__logo" />
        </span>
        <p>
          © {year} Pense Vidros. Todos os direitos reservados. — {contact.address}
        </p>
      </div>
    </footer>
  )
}

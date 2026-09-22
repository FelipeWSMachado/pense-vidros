import logo from '../../assets/logo.png'
import { contact } from '../../data/contact'
import './Footer.scss'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <img src={logo} alt="Pense Vidros" className="footer__logo" />
        <p>
          © {year} Pense Vidros. Todos os direitos reservados. — {contact.address}
        </p>
      </div>
    </footer>
  )
}

import { useEffect, useState } from 'react'
import logo from '../../assets/logo-transparent.png'
import './Header.scss'

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#trabalhos', label: 'Trabalhos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#inicio" className="header__brand">
          <img src={logo} alt="Pense Vidros" />
        </a>

        <nav className={`header__nav ${open ? 'header__nav--open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="btn btn--primary header__cta">
          Solicitar orçamento
        </a>

        <button
          className={`header__burger ${open ? 'header__burger--open' : ''}`}
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

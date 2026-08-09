import { useState } from 'react'
import './Header.css'

function Header() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#top" onClick={closeMenu} aria-label="Abu Sufyan home">
        <span className="brand-mark">AS</span>
        <span>Abu Sufyan</span>
      </a>
      <button className="menu-button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span></span><span></span>
      </button>
      <nav className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
      <a className="header-cta" href="https://www.fiverr.com/ansari_sufyan" target="_blank" rel="noreferrer">Hire on Fiverr <span>↗</span></a>
    </header>
  )
}

export default Header

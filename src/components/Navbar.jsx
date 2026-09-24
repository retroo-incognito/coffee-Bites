import { useState } from 'react'

const navItems = ['Home', 'Menu', 'About', 'Gallery', 'Contact']

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className={`navbar ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
        <div className="brand-block">
          <a href="#home" className="brand-link">
            COFFEE &amp; BITES
          </a>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-panel ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="button button-primary nav-button" onClick={() => setMenuOpen(false)}>
            Order Now
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

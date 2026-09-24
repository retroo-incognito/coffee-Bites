import { useEffect, useState } from 'react'

const navItems = [['Home', 'home'], ['Menu', 'menu'], ['About', 'about'], ['Gallery', 'gallery'], ['Contact', 'contact']]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 820px)').matches)

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 28)
    const mobileQuery = window.matchMedia('(max-width: 820px)')
    const updateBreakpoint = () => {
      setIsMobile(mobileQuery.matches)
      setMenuOpen(false)
    }
    const closeOnEscape = (event) => { if (event.key === 'Escape') setMenuOpen(false) }
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    window.addEventListener('keydown', closeOnEscape)
    mobileQuery.addEventListener('change', updateBreakpoint)
    return () => {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('keydown', closeOnEscape)
      mobileQuery.removeEventListener('change', updateBreakpoint)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <nav className={`navbar${menuOpen ? ' nav-open' : ''}`} aria-label="Main navigation">
        <a href="#home" className="brand-link" onClick={closeMenu} aria-label="Coffee And Bites home"><span className="brand-mark" aria-hidden="true">C<span>&amp;</span>B</span><span className="brand-name">Coffee <i>and</i> Bites</span></a>
        <button type="button" className="nav-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="nav-panel" onClick={() => setMenuOpen((open) => !open)}>
          <span /><span /><span />
        </button>
        <div className={`nav-panel${menuOpen ? ' open' : ''}`} id="nav-panel" inert={isMobile && !menuOpen} aria-hidden={isMobile && !menuOpen}>
          <ul className="nav-links">
            {navItems.map(([label, id], index) => <li key={id} style={{ '--nav-index': index }}><a href={`#${id}`} onClick={closeMenu}>{label}</a></li>)}
          </ul>
          <a href="#contact" className="button button-primary nav-button" onClick={closeMenu}>Order Now <span aria-hidden="true">{'\u2197'}</span></a>
          <span className="nav-note">A little warmth, every day</span>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

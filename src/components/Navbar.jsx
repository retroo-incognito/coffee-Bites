import { useEffect, useRef, useState } from 'react'
import { ZOMATO_ORDER_URL } from '../data/links'

const navItems = [['Home', 'home'], ['Menu', 'menu'], ['About', 'about'], ['Gallery', 'gallery'], ['Location', 'location'], ['Contact', 'contact']]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 820px)').matches)
  const previousScrollStyles = useRef(null)

  const restorePageScroll = () => {
    if (!previousScrollStyles.current) return
    document.documentElement.style.overflow = previousScrollStyles.current.html
    document.body.style.overflow = previousScrollStyles.current.body
  }

  const navigateTo = (event, id) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    const target = document.getElementById(id)
    if (!target) return

    if (menuOpen && isMobile) restorePageScroll()
    setMenuOpen(false)
    target.focus({ preventScroll: true })

    const hash = `#${id}`
    if (window.location.hash !== hash) window.history.pushState(null, '', hash)

    window.requestAnimationFrame(() => {
      const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 0
      const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerHeight)
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' })
    })
  }

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

  useEffect(() => {
    if (!isMobile || !menuOpen) return undefined
    const previousStyles = {
      html: document.documentElement.style.overflow,
      body: document.body.style.overflow,
    }
    previousScrollStyles.current = previousStyles
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = previousStyles.html
      document.body.style.overflow = previousStyles.body
      previousScrollStyles.current = null
    }
  }, [isMobile, menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <nav className={`navbar${menuOpen ? ' nav-open' : ''}`} aria-label="Main navigation">
        <a href="#home" className="brand-link" onClick={(event) => navigateTo(event, 'home')} aria-label="Coffee And Bites home"><span className="brand-mark" aria-hidden="true">C<span>&amp;</span>B</span><span className="brand-name">Coffee <i>and</i> Bites</span></a>
        <button type="button" className="nav-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="nav-panel" onClick={() => setMenuOpen((open) => !open)}>
          <span /><span /><span />
        </button>
        <div className={`nav-panel${menuOpen ? ' open' : ''}`} id="nav-panel" inert={isMobile && !menuOpen} aria-hidden={isMobile && !menuOpen}>
          <ul className="nav-links">
            {navItems.map(([label, id], index) => <li key={id} style={{ '--nav-index': index }}><a href={`#${id}`} onClick={(event) => navigateTo(event, id)}>{label}</a></li>)}
          </ul>
          <a href={ZOMATO_ORDER_URL} target="_blank" rel="noopener noreferrer" className="button button-primary nav-button" onClick={closeMenu}>Order Now <span aria-hidden="true">{'\u2197'}</span></a>
          <span className="nav-note">A little warmth, every day</span>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

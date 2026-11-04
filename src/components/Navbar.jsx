import { useEffect, useState } from 'react'
import { ZOMATO_ORDER_URL } from '../data/links'
import BrandLogo from './BrandLogo'

const navItems = [
  ['Home', 'home'],
  ['Menu', 'menu'],
  ['About', 'about'],
  ['Gallery', 'gallery'],
  ['Location', 'location'],
  ['Contact', 'contact'],
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 820px)').matches)

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 28)
    let frame = 0
    const updateActiveSection = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        const marker = window.scrollY + (document.querySelector('.site-header')?.getBoundingClientRect().height ?? 0) + window.innerHeight * 0.28
        const sections = navItems.map(([, id]) => document.getElementById(id)).filter(Boolean)
        const current = sections.filter((section) => section.offsetTop <= marker).at(-1)
        setActiveSection(current?.id ?? 'home')
      })
    }
    const mobileQuery = window.matchMedia('(max-width: 820px)')
    const updateBreakpoint = () => {
      setIsMobile(mobileQuery.matches)
      setMenuOpen(false)
    }
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    updateScroll()
    updateActiveSection()
    window.addEventListener('scroll', updateScroll, { passive: true })
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    window.addEventListener('keydown', closeOnEscape)
    mobileQuery.addEventListener('change', updateBreakpoint)

    return () => {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('keydown', closeOnEscape)
      mobileQuery.removeEventListener('change', updateBreakpoint)
    }
  }, [])

  useEffect(() => {
    if (!isMobile || !menuOpen) return undefined

    const previous = {
      html: document.documentElement.style.overflow,
      body: document.body.style.overflow,
    }
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    return () => {
      document.documentElement.style.overflow = previous.html
      document.body.style.overflow = previous.body
    }
  }, [isMobile, menuOpen])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <nav className={`navbar${menuOpen ? ' nav-open' : ''}`} aria-label="Main navigation">
        <a href="#home" className="brand-link" aria-label="Coffee And Bites home">
          <BrandLogo />
        </a>
        <span className="nav-edition" aria-hidden="true"><i /> NEIGHBOURHOOD CAFÉ <b>·</b> LUDHIANA</span>
        <button type="button" className="nav-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="nav-panel" onClick={() => setMenuOpen((open) => !open)}>
          <span /><span /><span />
        </button>
        <div className={`nav-panel${menuOpen ? ' open' : ''}`} id="nav-panel" inert={isMobile && !menuOpen} aria-hidden={isMobile && !menuOpen} onClick={(event) => {
          if (event.target.closest('a[href^="#"]')) setMenuOpen(false)
        }}>
          <ul className="nav-links">
            {navItems.map(([label, id], index) => (
              <li key={id} style={{ '--nav-index': index }}><a href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined}><span className="nav-index">0{index + 1}</span>{label}</a></li>
            ))}
          </ul>
          <a href={ZOMATO_ORDER_URL} target="_blank" rel="noopener noreferrer" className="button button-primary nav-button" onClick={() => setMenuOpen(false)}>Order Now <span aria-hidden="true">{'↗'}</span></a>
          <span className="nav-note">A little warmth, every day</span>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

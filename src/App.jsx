import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Featured from './components/Featured'
import About from './components/About'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { menuCategories } from './data/menu'

function App() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [showLoader, setShowLoader] = useState(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    try {
      return window.localStorage.getItem('coffee-bites-intro-seen') !== 'yes'
    } catch {
      return true
    }
  })

  useEffect(() => {
    if (!showLoader) return undefined
    const timer = window.setTimeout(() => {
      try { window.localStorage.setItem('coffee-bites-intro-seen', 'yes') } catch { /* Storage can be disabled; the intro still finishes. */ }
      setShowLoader(false)
    }, 2050)
    return () => window.clearTimeout(timer)
  }, [showLoader])

  useEffect(() => {
    const sections = document.querySelectorAll('.content > section:not(.hero-section)')
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' })
    sections.forEach((section) => {
      section.classList.add('section-reveal')
      observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="page-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main className="content" id="main-content">
        <Hero />
        <Menu categories={menuCategories} activeCategory={activeCategory} onChangeCategory={setActiveCategory} />
        <Featured />
        <About />
        <Features />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
      {showLoader && <Loader />}
    </div>
  )
}

export default App

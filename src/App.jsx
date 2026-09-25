import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Featured from './components/Featured'
import About from './components/About'
import Features from './components/Features'
import Gallery from './components/Gallery'
import CoffeeExperience from './components/CoffeeExperience'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { menuCategories } from './data/menu'

function App() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0])
  const [loadStage, setLoadStage] = useState('loading')

  useEffect(() => {
    document.getElementById('boot-splash')?.remove()

    let cancelled = false
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const startedAt = performance.now()
    const minDuration = reduceMotion ? 250 : 1500
    const maxDuration = reduceMotion ? 500 : 1900
    const heroImage = document.querySelector('.hero-photo img')
    const imageReady = !heroImage || heroImage.complete
      ? Promise.resolve()
      : new Promise((resolve) => {
          heroImage.addEventListener('load', resolve, { once: true })
          heroImage.addEventListener('error', resolve, { once: true })
        })
    const fontsReady = document.fonts?.ready ?? Promise.resolve()
    const pageReady = Promise.race([
      Promise.allSettled([imageReady, fontsReady]),
      new Promise((resolve) => window.setTimeout(resolve, maxDuration)),
    ])

    pageReady.then(() => {
      const remaining = Math.max(0, minDuration - (performance.now() - startedAt))
      window.setTimeout(() => {
        if (cancelled) return
        setLoadStage('exiting')
        window.setTimeout(() => {
          if (!cancelled) setLoadStage('ready')
        }, 650)
      }, remaining)
    })

    return () => { cancelled = true }
  }, [])

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
    <div className={`page-shell page-shell--${loadStage}`}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main className="content" id="main-content" tabIndex="-1">
        <Hero />
        <Menu categories={menuCategories} activeCategory={activeCategory} onChangeCategory={setActiveCategory} />
        <Featured />
        <About />
        <Features />
        <CoffeeExperience />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
      {loadStage !== 'ready' && <Loader exiting={loadStage === 'exiting'} />}
    </div>
  )
}

export default App

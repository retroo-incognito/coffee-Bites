import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import Hero from './components/Hero'
import EditorialIntroduction from './components/EditorialIntroduction'
import Menu from './components/Menu'
import Featured from './components/Featured'
import About from './components/About'
import Features from './components/Features'
import Gallery from './components/Gallery'
import CoffeeExperience from './components/CoffeeExperience'
import BitesShowcase from './components/BitesShowcase'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'

function getLoaderProgressDuration() {
  try {
    return window.sessionStorage.getItem('coffee-bites-visited') === 'yes' ? 140 : 1570
  } catch {
    return 1570
  }
}

function App() {
  const [loadStage, setLoadStage] = useState('loading')
  const [loaderDuration] = useState(getLoaderProgressDuration)
  const navigationRequest = useRef(0)

  const getSectionId = useCallback((value) => {
    const id = value.replace(/^#/, '')
    return ['home', 'menu', 'about', 'gallery', 'location', 'contact'].includes(id) ? id : null
  }, [])

  const scrollToSection = useCallback((id, { behavior = 'smooth', focus = false } = {}) => {
    const target = document.getElementById(id)
    if (!target) return

    const requestId = ++navigationRequest.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const getTargetTop = () => {
      if (id === 'home') return 0
      const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 0
      return Math.max(0, Math.round(window.scrollY + target.getBoundingClientRect().top - headerHeight))
    }
    const scroll = (nextBehavior) => window.scrollTo({ top: getTargetTop(), behavior: reduceMotion ? 'auto' : nextBehavior })

    if (focus) target.focus({ preventScroll: true })
    scroll(behavior)

    // Font loading is the only remaining source of text reflow. Correct once when it settles.
    document.fonts?.ready.then(() => {
      if (navigationRequest.current === requestId) scroll('auto')
    })
  }, [])

  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'

    // A document reload is always a new visit to the homepage, never a restored section.
    if (window.location.hash) {
      window.history.replaceState({ coffeeBitesSection: 'home' }, '', `${window.location.pathname}${window.location.search}`)
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    return () => {
      window.history.scrollRestoration = previousRestoration
    }
  }, [])

  useEffect(() => {
    const onPopState = () => {
      const id = getSectionId(window.location.hash) ?? 'home'
      window.requestAnimationFrame(() => scrollToSection(id, { behavior: 'auto' }))
    }
    const onHashChange = () => {
      const id = getSectionId(window.location.hash)
      if (id) window.requestAnimationFrame(() => scrollToSection(id, { behavior: 'auto' }))
    }

    window.addEventListener('popstate', onPopState)
    window.addEventListener('hashchange', onHashChange)
    return () => {
      window.removeEventListener('popstate', onPopState)
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [getSectionId, scrollToSection])

  const handleAnchorNavigation = useCallback((event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    const link = event.target.closest('a[href^="#"]')
    if (!link) return

    const id = getSectionId(link.getAttribute('href'))
    if (!id) return

    event.preventDefault()
    const hash = id === 'home' ? '' : `#${id}`
    if (window.location.hash !== hash) window.history.pushState({ coffeeBitesSection: id }, '', `${window.location.pathname}${window.location.search}${hash}`)
    scrollToSection(id, { focus: true })
  }, [getSectionId, scrollToSection])

  useEffect(() => {
    document.getElementById('boot-splash')?.remove()

    let cancelled = false
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const exitDuration = reduceMotion ? 0 : 450
    let exitTimer = 0
    let minimumTimer = 0
    const visited = (() => {
      try { return window.sessionStorage.getItem('coffee-bites-visited') === 'yes' } catch { return false }
    })()
    const minimumDisplay = reduceMotion ? 0 : visited ? 420 : 1850
    const startedAt = performance.now()
    const heroImage = document.querySelector('.hero-photo img')
    const settleWithin = async (promise, timeout = 8000) => {
      let timer = 0
      try {
        await Promise.race([
          Promise.resolve(promise),
          new Promise((resolve) => { timer = window.setTimeout(resolve, timeout) }),
        ])
      } finally {
        window.clearTimeout(timer)
      }
    }
    const imageReady = !heroImage
      ? Promise.resolve()
      : heroImage.complete
        ? heroImage.decode?.().catch(() => undefined) ?? Promise.resolve()
        : new Promise((resolve) => {
            heroImage.addEventListener('load', resolve, { once: true })
            heroImage.addEventListener('error', resolve, { once: true })
          }).then(() => heroImage.decode?.().catch(() => undefined))
    const documentReady = document.readyState === 'complete'
      ? Promise.resolve()
      : new Promise((resolve) => window.addEventListener('load', resolve, { once: true }))
    const appReady = new Promise((resolve) => window.requestAnimationFrame(() => window.requestAnimationFrame(resolve)))
    const readiness = Promise.allSettled([
      settleWithin(imageReady),
      settleWithin(document.fonts?.ready ?? Promise.resolve()),
      settleWithin(documentReady),
      appReady,
    ])

    readiness.then(async () => {
      const remaining = Math.max(0, minimumDisplay - (performance.now() - startedAt))
      if (remaining) await new Promise((resolve) => { minimumTimer = window.setTimeout(resolve, remaining) })
      if (cancelled) return
      setLoadStage('exiting')
      if (exitDuration) exitTimer = window.setTimeout(() => {
        if (!cancelled) setLoadStage('ready')
      }, exitDuration)
      else setLoadStage('ready')
    })

    return () => {
      cancelled = true
      window.clearTimeout(exitTimer)
      window.clearTimeout(minimumTimer)
    }
  }, [])

  useEffect(() => {
    if (loadStage !== 'ready') return
    try { window.sessionStorage.setItem('coffee-bites-visited', 'yes') } catch { /* Storage may be disabled. */ }
  }, [loadStage])

  useEffect(() => {
    const sections = document.querySelectorAll('.content > section:not(.hero-section), .site-footer')
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
    <div className={`page-shell page-shell--${loadStage}`} onClick={handleAnchorNavigation}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main className="content" id="main-content" tabIndex="-1">
        <Hero />
        <EditorialIntroduction />
        <Menu />
        <Featured />
        <About />
        <Features />
        <CoffeeExperience />
        <BitesShowcase />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
      {loadStage !== 'ready' && <Loader exiting={loadStage === 'exiting'} duration={loaderDuration} />}
    </div>
  )
}

export default App

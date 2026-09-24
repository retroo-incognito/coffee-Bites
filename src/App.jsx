import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Featured from './components/Featured'
import About from './components/About'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { menuItems } from './data/menu'

function App() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredMenu = useMemo(() => {
    if (activeCategory === 'All') {
      return menuItems
    }

    return menuItems.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  return (
    <div className="page-shell">
      <Navbar />

      <main className="content">
        <Hero />
        <Menu menuItems={filteredMenu} activeCategory={activeCategory} onChangeCategory={setActiveCategory} />
        <Featured />
        <About />
        <Features />
        <Gallery />
        <Location />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App

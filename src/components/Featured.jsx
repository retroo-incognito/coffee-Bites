import { useState } from 'react'
import { menuItems } from '../data/menu'

const featuredItems = [menuItems[0], menuItems[4], menuItems[6], menuItems[10]]
const rupees = (amount) => `${String.fromCharCode(8377)}${amount}`

function Featured() {
  const [activeIndex, setActiveIndex] = useState(0)
  const item = featuredItems[activeIndex]
  const step = (direction) => setActiveIndex((index) => (index + direction + featuredItems.length) % featuredItems.length)

  return (
    <section className="featured-section" aria-labelledby="favourites-title">
      <div className="featured-topline"><p className="eyebrow">A little extra love</p><span>{String(activeIndex + 1).padStart(2, '0')} <i /> {String(featuredItems.length).padStart(2, '0')}</span></div>
      <div className="favourite-layout">
        <div className="favourite-photo" key={`photo-${item.id}`}><img src={item.image} alt={item.alt} loading="lazy" /><span className="favourite-photo-label">On the table, in good company</span><span className="favourite-ornament" aria-hidden="true">C&amp;B</span></div>
        <div className="favourite-copy" key={`copy-${item.id}`}>
          <p className="eyebrow">House favourites</p><h2 id="favourites-title">A little<br />something<br /><em>lovely.</em></h2>
          <div className="favourite-rule" />
          <p className="favourite-category">{item.category}</p><h3>{item.name}</h3><p className="favourite-description">{item.description}</p>
          <div className="favourite-actions"><strong>{rupees(item.price)}</strong><a href="#menu" className="text-link">See it on the menu <span aria-hidden="true">{'\u2197'}</span></a></div>
          <div className="favourite-controls" aria-label="Choose a house favourite">
            <button type="button" className="favourite-arrow" aria-label="Previous favourite" onClick={() => step(-1)}>{'\u2190'}</button>
            {featuredItems.map((featuredItem, index) => <button key={featuredItem.id} type="button" className={`favourite-dot${index === activeIndex ? ' active' : ''}`} aria-label={`Show ${featuredItem.name}`} aria-pressed={index === activeIndex} onClick={() => setActiveIndex(index)} />)}
            <button type="button" className="favourite-arrow" aria-label="Next favourite" onClick={() => step(1)}>{'\u2192'}</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured

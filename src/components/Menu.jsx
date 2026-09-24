import { categoryVisuals } from '../data/menu'
import { ZOMATO_ORDER_URL } from '../data/links'

function Menu({ categories, activeCategory, onChangeCategory }) {
  const visual = categoryVisuals[activeCategory] ?? categoryVisuals.All
  const title = activeCategory === 'All' ? 'A little of everything.' : `In the mood for ${activeCategory.toLowerCase()}?`

  return (
    <section className="menu-section" id="menu" aria-labelledby="menu-title">
      <div className="menu-heading">
        <div>
          <p className="eyebrow">A little something for everyone</p>
          <h2 id="menu-title">Find your kind<br /><em>of comfort.</em></h2>
        </div>
        <p className="menu-aside-note">Take a look around, then find the current menu and ordering options on Zomato.</p>
      </div>
      <div className="menu-tabs" role="group" aria-label="Browse menu categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-button${category === activeCategory ? ' active' : ''}`}
            aria-pressed={category === activeCategory}
            onClick={() => onChangeCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="menu-layout" key={activeCategory}>
        <figure className="menu-spotlight">
          <div className="menu-spotlight-image">
            <img src={visual.image} alt={visual.alt} loading="lazy" />
          </div>
          <figcaption className="spotlight-ribbon">{visual.caption}</figcaption>
        </figure>
        <div className="menu-list-wrap" aria-live="polite" aria-atomic="true">
          <p className="menu-kicker">Coffee And Bites · Ludhiana</p>
          <h3 className="menu-selection-title">{title}</h3>
          <p className="menu-selection-copy">
            {activeCategory === 'All'
              ? 'Sandwiches, burgers, pizza, fast food, pasta and beverages.'
              : `Browse the ${activeCategory.toLowerCase()} selection and current availability.`}
          </p>
          <a href={ZOMATO_ORDER_URL} target="_blank" rel="noopener noreferrer" className="button button-dark menu-zomato-link">
            View the current menu <span aria-hidden="true">{'\u2197'}</span>
          </a>
          <p className="menu-footnote">Menu and availability are maintained on the restaurant’s Zomato listing.</p>
        </div>
      </div>
    </section>
  )
}

export default Menu

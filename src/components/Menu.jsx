import { menuItems } from '../data/menu'

function Menu({ categories, activeCategory, onChangeCategory }) {
  const activeIndex = Math.max(0, categories.indexOf(activeCategory))
  const showCategory = (index) => onChangeCategory(categories[(index + categories.length) % categories.length])

  return (
    <section className="menu-section" id="menu" tabIndex="-1" aria-labelledby="menu-title">
      <div className="menu-heading">
        <div>
          <p className="eyebrow">A little something for everyone</p>
          <h2 id="menu-title">Find your kind<br /><em>of comfort.</em></h2>
        </div>
        <p className="menu-aside-note">A simple little menu for coffee breaks, shared plates, and whatever sounds good today.</p>
      </div>
      <div className="menu-carousel-controls">
        <div className="menu-tabs" role="group" aria-label="Choose a menu category">
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
        <div className="menu-slider-nav" aria-label="Menu category slides">
          <span aria-live="polite">{String(activeIndex + 1).padStart(2, '0')} <i>/</i> {String(categories.length).padStart(2, '0')}</span>
          <button type="button" className="menu-slide-arrow" aria-label="Previous menu category" onClick={() => showCategory(activeIndex - 1)}>
            <span aria-hidden="true">{'\u2190'}</span>
          </button>
          <button type="button" className="menu-slide-arrow" aria-label="Next menu category" onClick={() => showCategory(activeIndex + 1)}>
            <span aria-hidden="true">{'\u2192'}</span>
          </button>
        </div>
      </div>
      <div className="menu-menu-list" key={activeCategory} aria-live="polite">
        <section className="menu-category-group" aria-labelledby={`menu-category-${activeCategory.toLowerCase().replaceAll(' ', '-')}`}>
          <h3 id={`menu-category-${activeCategory.toLowerCase().replaceAll(' ', '-')}`}>{activeCategory}</h3>
          <ul>
            {menuItems.filter((item) => item.category === activeCategory).map((item) => (
              <li className="menu-item" key={item.name}>
                <div className="menu-item-heading">
                  <h4>{item.name}</h4>
                  <span>{item.price}</span>
                </div>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  )
}

export default Menu

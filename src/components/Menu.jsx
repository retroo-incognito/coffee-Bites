import { menuCategories } from '../data/menu'

function Menu({ menuItems, activeCategory, onChangeCategory }) {
  return (
    <section className="menu-section" id="menu">
      <div className="section-heading">
        <p className="eyebrow">Our menu</p>
        <h2>What Are You Craving?</h2>
      </div>

      <div className="menu-filters" aria-label="Menu categories">
        {menuCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={category === activeCategory ? 'filter-button active' : 'filter-button'}
            onClick={() => onChangeCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <article key={item.id} className="menu-card">
            <div className="menu-image-wrap">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="menu-copy">
              <div className="menu-meta">
                <span>{item.category}</span>
                <strong>{item.price}</strong>
              </div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Menu

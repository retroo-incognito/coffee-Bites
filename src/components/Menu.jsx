import { menuCategories } from '../data/menu'

const rupees = (amount) => `${String.fromCharCode(8377)}${amount}`

function Menu({ menuItems, activeCategory, onChangeCategory }) {
  const spotlight = menuItems[0]
  const listItems = menuItems.slice(1)

  return (
    <section className="menu-section" id="menu" aria-labelledby="menu-title">
      <div className="menu-heading">
        <div><p className="eyebrow">A little something for everyone</p><h2 id="menu-title">Made for the<br /><em>moment you’re in.</em></h2></div>
        <p className="menu-aside-note">A few of our everyday favourites, made to be shared — or kept all to yourself.</p>
      </div>
      <div className="menu-tabs" role="group" aria-label="Filter menu by category">
        {menuCategories.map((category) => <button key={category} type="button" className={`filter-button${category === activeCategory ? ' active' : ''}`} aria-pressed={category === activeCategory} onClick={() => onChangeCategory(category)}>{category}</button>)}
      </div>
      {spotlight && <div className="menu-layout" key={activeCategory}>
        <article className="menu-spotlight">
          <div className="menu-spotlight-image"><img src={spotlight.image} alt={spotlight.alt} loading="lazy" /><span className="spotlight-ribbon">A good place to start</span></div>
          <div className="menu-spotlight-copy"><span className="menu-kicker">{spotlight.category} · house pick</span><h3>{spotlight.name}</h3><p>{spotlight.description}</p><strong className="menu-price">{rupees(spotlight.price)}</strong></div>
        </article>
        <div className="menu-list-wrap" aria-live="polite">
          <div className="menu-list-heading"><span>From the kitchen</span><span>Price</span></div>
          <div className="menu-list">
            {listItems.map((item, index) => <article className="menu-row" key={item.id} style={{ '--row-index': index }}>
              <span className="menu-row-number">{String(index + 2).padStart(2, '0')}</span><div className="menu-row-copy"><h3>{item.name}</h3><p>{item.description}</p></div><strong className="menu-row-price">{rupees(item.price)}</strong>
            </article>)}
            {listItems.length === 0 && <p className="menu-empty">One lovely choice in this category. More to come.</p>}
          </div>
          <p className="menu-footnote">A little extra happiness, served with every good meal.</p>
        </div>
      </div>}
    </section>
  )
}

export default Menu

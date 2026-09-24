import { menuItems } from '../data/menu'

const featuredItems = menuItems.slice(0, 4)

function Featured() {
  return (
    <section className="featured-section">
      <div className="section-heading section-heading-inline">
        <div>
          <p className="eyebrow">Popular picks</p>
          <h2>House Favourites</h2>
        </div>
        <a href="#menu" className="inline-link">
          View full menu
        </a>
      </div>

      <div className="featured-grid">
        {featuredItems.map((item, index) => (
          <article key={item.id} className={`featured-card featured-card-${index + 1}`}>
            <div className="featured-image-wrap">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="featured-copy">
              <span>{item.category}</span>
              <h3>{item.name}</h3>
              <div className="featured-bottom">
                <strong>{item.price}</strong>
                <a href="#contact">Order now</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Featured

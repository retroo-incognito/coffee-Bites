import { menuItems } from '../data/menu'

function Hero() {
  const signatureDish = menuItems[0]

  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Ludhiana • Café • Casual Dining</p>
        <h1>
          Good Food.
          <br />
          Great Coffee.
          <br />
          Better Moments.
        </h1>

        <p className="hero-text">
          Coffee And Bites serves burgers, sandwiches, pizza, pasta, beverages and comforting café
          favourites in Ludhiana for meals, coffee breaks and good company.
        </p>

        <div className="hero-rating-row" aria-label="Restaurant ratings">
          <div className="rating-block">
            <strong>4.3 ★</strong>
            <span>1,249 Ratings</span>
          </div>
          <div className="rating-location">
            <span>Near Baba Balak Nath Mandir</span>
            <span>Jassian Road, Haibowal Kalan</span>
          </div>
        </div>

        <div className="hero-actions">
          <a href="#menu" className="button button-primary">
            Explore Menu
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Coffee+And+Bites+Ludhiana"
            target="_blank"
            rel="noreferrer"
            className="button button-secondary"
          >
            Get Directions
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Featured restaurant food photography">
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
          alt="Freshly prepared food and coffee items at Coffee And Bites"
        />
        <div className="hero-card">
          <span>Popular pick</span>
          <strong>{signatureDish.name}</strong>
          <small>{signatureDish.price}</small>
        </div>
      </div>
    </section>
  )
}

export default Hero

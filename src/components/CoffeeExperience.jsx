import { ZOMATO_ORDER_URL } from '../data/links'

function CoffeeExperience() {
  return (
    <section className="coffee-experience-section" id="coffee-experience" tabIndex="-1" aria-labelledby="coffee-experience-title">
      <div className="coffee-experience-layout">
        <div className="coffee-intro">
          <p className="eyebrow">Brewed with intention</p>
          <h2 id="coffee-experience-title">A coffee break<br /><em>with company.</em></h2>
          <p>
            Come for a cup, bring an appetite, and let the afternoon make its own plans. Coffee And Bites brings coffee and familiar vegetarian comfort food to the same table.
          </p>
          <div className="coffee-cta-row">
            <a href={ZOMATO_ORDER_URL} target="_blank" rel="noopener noreferrer" className="button button-primary">Order Now <span aria-hidden="true">{'\u2197'}</span></a>
            <a href="#gallery" className="text-link">See the mood <span aria-hidden="true">{'\u2197'}</span></a>
          </div>
        </div>

        <div className="coffee-portrait" aria-label="Warm coffee and pastry still life">
          <img src="/images/coffee-pastry.jpg" alt="Latte and pastries set out for a coffee break" width="1800" height="1207" loading="lazy" />
          <span className="coffee-badge" aria-hidden="true">For the<br />table</span>
        </div>
      </div>
    </section>
  )
}

export default CoffeeExperience

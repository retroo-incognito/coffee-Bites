import { ZOMATO_ORDER_URL } from '../data/links'

function CoffeeExperience() {
  return (
    <section className="coffee-experience-section" id="coffee-experience" tabIndex="-1" aria-labelledby="coffee-experience-title">
      <div className="coffee-experience-layout">
        <div className="coffee-intro">
          <p className="eyebrow">Brewed with intention</p>
          <h2 id="coffee-experience-title">Freshly brewed.<br /><em>Right here.</em></h2>
          <p>
            From the first sip of espresso to the last bite of something warm, Coffee And Bites is built for slow breakfasts,
            comfort food, and the kind of easy afternoons that stretch beautifully.
          </p>
          <div className="coffee-cta-row">
            <a href={ZOMATO_ORDER_URL} target="_blank" rel="noopener noreferrer" className="button button-primary">Order Now <span aria-hidden="true">{'\u2197'}</span></a>
            <a href="#gallery" className="text-link">See the mood <span aria-hidden="true">{'\u2197'}</span></a>
          </div>
        </div>

        <div className="coffee-portrait" aria-label="Warm coffee and pastry still life">
          <img src="/images/vegetarian-pasta.jpg" alt="Vegetarian pasta with greens, tomato and parmesan" width="1100" height="733" loading="lazy" />
          <span className="table-badge" aria-hidden="true">For the<br />table</span>
        </div>
      </div>
    </section>
  )
}

export default CoffeeExperience

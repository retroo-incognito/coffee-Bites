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
          <img src="/images/coffee-pastry.jpg" alt="Freshly brewed coffee with a warm pastry on a cafe table" width="1500" height="1000" loading="lazy" />
          <span className="coffee-badge" aria-hidden="true">Coffee ritual</span>
          <svg className="coffee-steam" viewBox="0 0 200 220" fill="none" aria-hidden="true">
            <path d="M82 190C42 160 89 134 82 90C75 52 42 36 58 10" />
            <path d="M120 190C82 165 130 137 123 94C115 56 80 34 101 10" />
            <path d="M160 187C124 159 166 137 158 98C151 62 126 44 141 12" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default CoffeeExperience

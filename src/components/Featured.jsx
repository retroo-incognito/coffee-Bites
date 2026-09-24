import { ZOMATO_ORDER_URL } from '../data/links'

function Featured() {
  return (
    <section className="featured-section" aria-labelledby="favourites-title">
      <div className="featured-topline">
        <p className="eyebrow">From our neighbourhood</p>
        <span><i aria-hidden="true" /> Ludhiana, Punjab</span>
      </div>
      <div className="favourite-layout">
        <figure className="favourite-photo">
          <img src="/images/margherita.jpg" alt="Vegetarian margherita pizza with tomato, mozzarella and basil" loading="lazy" />
          <figcaption className="favourite-photo-label">Good things, shared around the table</figcaption>
          <span className="favourite-ornament" aria-hidden="true">C&amp;B</span>
        </figure>
        <div className="favourite-copy">
          <p className="eyebrow">Vegetarian kitchen</p>
          <h2 id="favourites-title">A table<br />for good<br /><em>company.</em></h2>
          <div className="favourite-rule" />
          <p className="favourite-category">Made for the everyday</p>
          <h3>Come as you are.</h3>
          <p className="favourite-description">Find coffee, familiar bites and a little time together at Coffee And Bites in Ludhiana.</p>
          <div className="favourite-actions">
            <span className="menu-kicker">Sandwiches · Burgers · Pizza · Pasta · More</span>
            <a href={ZOMATO_ORDER_URL} target="_blank" rel="noopener noreferrer" className="text-link">Explore on Zomato <span aria-hidden="true">{'\u2197'}</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured

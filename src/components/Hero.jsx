import { GOOGLE_MAPS_DIRECTIONS_URL } from '../data/links'

function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-topline"><span>Independent cafe spirit</span><span>Ludhiana, Punjab <i aria-hidden="true" /></span></div>
      <div className="hero-composition">
        <div className="hero-photo">
          <img src="/images/coffee-pastry.jpg" alt="Latte and fresh pastries on a wooden cafe table" width="1800" height="1207" loading="eager" decoding="async" fetchPriority="high" />
          <span className="photo-caption">Freshly brewed, slowly enjoyed</span>
          <svg className="hero-aroma" viewBox="0 0 120 150" fill="none" aria-hidden="true"><path d="M35 135C5 103 68 91 35 57 14 36 59 23 45 5"/><path d="M66 142C38 113 99 88 66 60 44 41 91 22 77 4"/><path d="M94 134C73 108 119 92 93 69 73 50 112 36 105 13"/></svg>
        </div>
        <div className="hero-title-wrap">
          <p className="eyebrow hero-eyebrow">Come in. Take a moment.</p>
          <h1 id="hero-title"><span>COFFEE</span><span className="hero-amp">&amp;</span><span>BITES</span></h1>
          <p className="hero-manifesto">Good food.<br />Great coffee.<br /><em>Better moments.</em></p>
        </div>
        <div className="hero-seal" role="group" aria-label="Dining rating 4.3 out of 5 from 1,249 ratings"><strong>4.3 <span aria-hidden="true">{'\u2605'}</span></strong><small>1,249 ratings</small><i>Made for good company</i></div>
      </div>
      <div className="hero-foot">
        <p>Pull up a chair for a comforting plate, a well-made coffee, and the kind of afternoon that takes its time.</p>
        <div className="hero-actions"><a href="#menu" className="button button-primary">Explore Menu <span aria-hidden="true">{'\u2198'}</span></a><a href={GOOGLE_MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="button button-secondary">Get Directions <span aria-hidden="true">{'\u2197'}</span></a></div>
      </div>
    </section>
  )
}

export default Hero

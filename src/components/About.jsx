function About() {
  return (
    <section className="about-section" id="about" tabIndex="-1" aria-labelledby="about-title">
      <div className="about-visual">
        <img src="/images/latte-pour.jpg" alt="Latte art being poured into a cup" width="1000" height="667" loading="lazy" />
        <span className="about-photo-tag">Made for slow moments</span>
        <span className="about-side-note">A warm cup, a little pause</span>
      </div>
      <div className="about-copy">
        <p className="eyebrow">Our little corner in Ludhiana</p>
        <h2 id="about-title">A place for<br /><em>the in-between.</em></h2>
        <div className="about-quote"><span aria-hidden="true">&ldquo;</span><p>One coffee turned into three. No regrets.</p></div>
        <p>Coffee And Bites brings together coffee, vegetarian comfort food, and good conversation. A neighbourhood spot for a catch-up, a quick bite, or a moment to yourself.</p>
        <p>No grand occasion required. A catch-up, a small celebration, or a Tuesday that needs improving will do nicely.</p>
        <a href="#location" className="text-link">Come find your corner <span aria-hidden="true">{'\u2197'}</span></a>
      </div>
    </section>
  )
}

export default About

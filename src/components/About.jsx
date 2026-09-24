function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-visual">
        <img src="/images/latte-pour.jpg" alt="A barista pouring a leaf pattern into a fresh latte" loading="lazy" />
        <span className="about-photo-tag">Made for slow moments</span>
        <span className="about-side-note">A warm cup, a little pause</span>
      </div>
      <div className="about-copy">
        <p className="eyebrow">Our little corner in Ludhiana</p>
        <h2 id="about-title">Made for<br /><em>slow moments.</em></h2>
        <div className="about-quote"><span aria-hidden="true">“</span><p>Coffee tastes better when there’s time to enjoy it.</p></div>
        <p>Coffee And Bites brings together coffee, comfort food, and good conversation. A familiar spot for a catch-up, a quick bite, or a moment to yourself.</p>
        <p>Settle in with a cup, share something from the kitchen, and make a little room in the day.</p>
        <a href="#location" className="text-link">Come find your corner <span aria-hidden="true">{'\u2197'}</span></a>
      </div>
    </section>
  )
}

export default About

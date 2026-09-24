function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-media">
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80"
          alt="Warm café interior with food and coffee at Coffee And Bites"
        />
      </div>

      <div className="about-copy">
        <p className="eyebrow">Our story</p>
        <h2>A Place For Good Food &amp; Good Company</h2>
        <p>
          Coffee And Bites is a casual food and café destination in Ludhiana where people come together
          to eat well, share a coffee and spend time in a comfortable, welcoming setting.
        </p>
        <p>
          The menu brings together familiar favourites from burgers and sandwiches to pizza, pasta and
          refreshing beverages, all prepared with attention to freshness, flavour and ease.
        </p>

        <div className="about-stats">
          <div>
            <strong>4.3/5</strong>
            <span>Dining rating</span>
          </div>
          <div>
            <strong>1,249</strong>
            <span>Ratings</span>
          </div>
          <div>
            <strong>Casual</strong>
            <span>Atmosphere</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

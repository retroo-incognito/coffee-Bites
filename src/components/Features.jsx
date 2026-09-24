const featureItems = [
  {
    title: 'Freshly Prepared',
    text: 'Food prepared with attention to freshness, flavour and comforting everyday quality.',
  },
  {
    title: 'Something For Everyone',
    text: 'Burgers, sandwiches, pizza, pasta and beverages served under one warm menu.',
  },
  {
    title: 'Casual Atmosphere',
    text: 'A comfortable place for meals, coffee and easy conversations throughout the day.',
  },
  {
    title: 'Made For Cravings',
    text: 'Comfort food and café favourites that hit the spot whenever you want a satisfying bite.',
  },
]

function Features() {
  return (
    <section className="features-section">
      <div className="section-heading center-heading">
        <p className="eyebrow">Why Coffee And Bites</p>
        <h2>Comfort, flavour and a place to linger.</h2>
      </div>

      <div className="feature-list">
        {featureItems.map((feature) => (
          <article key={feature.title} className="feature-item">
            <span className="feature-number">0{featureItems.indexOf(feature) + 1}</span>
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Features

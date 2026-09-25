const featureItems = [
  { title: 'Something familiar', text: 'Comforting cafe classics that make choosing easy.' },
  { title: 'A little variety', text: 'Burgers, sandwiches, pizza, pasta, quick bites and coffee.' },
  { title: 'Room to catch up', text: 'An easy neighbourhood stop for conversation and a shared plate.' },
  { title: 'Close to home', text: 'Find us near Baba Balak Nath Mandir on Jassian Village Road.' },
]

function Features() {
  return (
    <section className="features-section" aria-labelledby="why-title">
      <div className="section-heading center-heading"><p className="eyebrow">The Coffee And Bites feeling</p><h2 id="why-title">A little comfort<br />in the middle of your day.</h2></div>
      <div className="feature-list">{featureItems.map((feature, index) => <article key={feature.title} className="feature-item"><span className="feature-number">0{index + 1}</span><div><h3>{feature.title}</h3><p>{feature.text}</p></div></article>)}</div>
    </section>
  )
}

export default Features

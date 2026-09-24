function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-panel">
        <div className="contact-copy"><p className="eyebrow">The kettle is on</p><h2 id="contact-title">Come on<br /><em>in.</em></h2><p>There’s always time for one more cup.</p></div>
        <div className="contact-hours"><span className="hours-label">Come by</span><strong>11:00 AM <i>{'\u2014'}</i> 8:30 PM</strong><span>Every day</span><a href="https://www.google.com/maps/search/?api=1&query=Coffee+And+Bites%2C+Near+Baba+Balak+Nath+Mandir%2C+Jassian+Road%2C+Ludhiana%2C+Punjab" target="_blank" rel="noreferrer" className="button button-primary">Get Directions <span aria-hidden="true">{'\u2197'}</span></a></div>
        <span className="contact-bean bean-one" aria-hidden="true" /><span className="contact-bean bean-two" aria-hidden="true" />
      </div>
    </section>
  )
}

export default Contact

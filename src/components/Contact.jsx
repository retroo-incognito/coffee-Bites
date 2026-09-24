const contactDetails = [
  { label: 'Phone', value: 'PHONE_NUMBER_HERE' },
  { label: 'Instagram', value: 'INSTAGRAM_HANDLE_HERE' },
  { label: 'WhatsApp', value: 'WHATSAPP_NUMBER_HERE' },
  { label: 'Location', value: 'Near Baba Balak Nath Mandir, Jassian Road, Haibowal Kalan, Ludhiana, Punjab' },
  { label: 'Opening Hours', value: 'OPENING_HOURS_HERE' },
]

function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-panel">
        <div className="contact-copy">
          <p className="eyebrow">The kettle is on</p>
          <h2 id="contact-title">Come on<br /><em>in.</em></h2>
          <p>Perfect for a coffee break, a quick lunch, or a relaxed evening with good company.</p>
          <div className="contact-cta-row">
            <a href="#menu" className="button button-primary">Order Now <span aria-hidden="true">{'\u2198'}</span></a>
            <a href="https://www.google.com/maps/search/?api=1&query=Coffee+And+Bites%2C+Near+Baba+Balak+Nath+Mandir%2C+Jassian+Road%2C+Haibowal+Kalan%2C+Ludhiana%2C+Punjab" target="_blank" rel="noreferrer" className="button button-secondary">Get Directions <span aria-hidden="true">{'\u2197'}</span></a>
          </div>
        </div>

        <div className="contact-hours">
          <span className="hours-label">Find us</span>
          <strong>Good food,<br />great coffee,<br />easy evenings.</strong>
          <div className="contact-list">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="contact-row">
                <span>{detail.label}</span>
                <strong>{detail.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <span className="contact-bean bean-one" aria-hidden="true" />
        <span className="contact-bean bean-two" aria-hidden="true" />
      </div>
    </section>
  )
}

export default Contact

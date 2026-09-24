import { GOOGLE_MAPS_DIRECTIONS_URL, ZOMATO_ORDER_URL } from '../data/links'

function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-panel">
        <div className="contact-copy">
          <p className="eyebrow">The kettle is on</p>
          <h2 id="contact-title">Come on<br /><em>in.</em></h2>
          <p>For a coffee break, a comforting bite, or an unhurried catch-up.</p>
          <div className="contact-cta-row">
            <a href={ZOMATO_ORDER_URL} target="_blank" rel="noopener noreferrer" className="button button-primary">Order on Zomato <span aria-hidden="true">{'\u2197'}</span></a>
            <a href={GOOGLE_MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="button button-secondary">Get Directions <span aria-hidden="true">{'\u2197'}</span></a>
          </div>
        </div>

        <div className="contact-hours">
          <span className="hours-label">Come by</span>
          <strong aria-label="11:00 AM to 8:30 PM">11:00 AM <i aria-hidden="true">–</i> 8:30 PM</strong>
          <span>Every day</span>
          <address>
            Near Baba Balak Nath Mandir<br />
            Jassian Road, Haibowal Kalan<br />
            Police Station Haibowal<br />
            Ludhiana, Punjab
          </address>
        </div>
        <span className="contact-bean bean-one" aria-hidden="true" />
        <span className="contact-bean bean-two" aria-hidden="true" />
      </div>
    </section>
  )
}

export default Contact

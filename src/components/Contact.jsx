const contactDetails = [
  { label: 'Phone', value: 'PHONE_NUMBER_HERE' },
  { label: 'Instagram', value: 'INSTAGRAM_HANDLE_HERE' },
  { label: 'WhatsApp', value: 'WHATSAPP_NUMBER_HERE' },
  { label: 'Location', value: 'Near Baba Balak Nath Mandir, Jassian Road, Haibowal Kalan, Ludhiana, Punjab' },
  { label: 'Opening Hours', value: 'OPENING_HOURS_HERE' },
]

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-heading section-heading-inline contact-heading">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2>Contact</h2>
        </div>
      </div>

      <div className="contact-grid">
        {contactDetails.map((detail) => (
          <div key={detail.label} className="contact-item">
            <span>{detail.label}</span>
            <strong>{detail.value}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Contact

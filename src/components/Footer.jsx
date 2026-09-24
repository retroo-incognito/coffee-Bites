function Footer() {
  return (
    <footer className="site-footer">
      <a href="#home" className="footer-signoff"><span>COFFEE <i>&amp;</i> BITES</span><small>Good food. Good company.</small></a>
      <div className="footer-navigation"><span>Take another look</span><nav aria-label="Footer navigation"><a href="#menu">The menu</a><a href="#about">Our corner</a><a href="#gallery">Little moments</a><a href="#location">Find us</a></nav></div>
      <div className="footer-contact-links" aria-label="Restaurant contact shortcuts">
        <span>Contact</span>
        <nav>
          <a href="#contact">Phone</a>
          <a href="#contact">Instagram</a>
          <a href="#contact">WhatsApp</a>
        </nav>
      </div>
      <div className="footer-bottom"><span>Ludhiana, Punjab</span><span>With warmth, Coffee And Bites <i aria-hidden="true">{'\u2665'}</i></span><span>© 2026 Coffee And Bites</span></div>
    </footer>
  )
}

export default Footer

function Footer() {
  return (
    <footer className="site-footer">
      <a href="#home" className="footer-signoff" aria-label="Coffee And Bites, back to top">
        <span>COFFEE <i>&amp;</i> BITES</span>
        <small>Good food. Good company.</small>
      </a>
      <div className="footer-navigation">
        <span>Take another look</span>
        <nav aria-label="Footer navigation">
          <a href="#menu">The menu</a>
          <a href="#about">Our corner</a>
          <a href="#gallery">Little moments</a>
          <a href="#location">Find us</a>
          <a href="#contact">Visit</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>Ludhiana, Punjab</span>
        <span>11:00 AM &ndash; 8:30 PM</span>
        <span>&copy; {new Date().getFullYear()} Coffee And Bites</span>
      </div>
    </footer>
  )
}

export default Footer

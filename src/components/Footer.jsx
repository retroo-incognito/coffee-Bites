import BrandLogo from './BrandLogo'

function Footer() {
  return (
    <footer className="site-footer">
      <a href="#home" className="footer-signoff" aria-label="Coffee And Bites, back to top">
        <BrandLogo dark />
        <small>Good food. Excellent coffee alibis.</small>
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
        <span>&copy; {new Date().getFullYear()} Coffee And Bites</span>
      </div>
    </footer>
  )
}

export default Footer

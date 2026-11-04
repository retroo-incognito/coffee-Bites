import BrandLogo from './BrandLogo'

function Loader({ exiting = false, duration = 1850 }) {
  return (
    <div className={`coffee-loader${exiting ? ' is-exiting' : ''}`} style={{ '--loader-duration': `${duration}ms` }} role="status" aria-label="Brewing something good" aria-live="polite">
      <div className="loader-content">
        <div className="loader-emblem" aria-hidden="true"><BrandLogo variant="emblem" /></div>
        <BrandLogo className="loader-brand" />
        <p className="loader-caption">A little pause is brewing.</p>
        <span className="loader-progress" aria-hidden="true"><span /></span>
        <span className="loader-footnote" aria-hidden="true">LUDHIANA · COFFEE &amp; BITES</span>
      </div>
    </div>
  )
}

export default Loader

import BrandLogo from './BrandLogo'

function Loader({ exiting = false }) {
  return (
    <div className={`coffee-loader${exiting ? ' is-exiting' : ''}`} role="status" aria-label="Brewing something good" aria-live="polite">
      <div className="loader-content">
        <div className="loader-emblem" aria-hidden="true"><BrandLogo variant="emblem" /></div>
        <BrandLogo className="loader-brand" />
        <p className="loader-caption">Come for the coffee. Blame us for the extra pastry.</p>
        <span className="loader-progress" aria-hidden="true"><span /></span>
      </div>
    </div>
  )
}

export default Loader

function Loader() {
  return (
    <div className="coffee-loader" role="status" aria-label="Brewing something good">
      <div className="loader-content">
        <p className="loader-wordmark">COFFEE <span>&amp;</span> BITES</p>
        <svg className="loader-cup" viewBox="0 0 120 112" fill="none" aria-hidden="true">
          <path className="steam steam-one" d="M42 36c-9-10 8-12 0-23" />
          <path className="steam steam-two" d="M60 34c-9-10 8-12 0-23" />
          <path className="steam steam-three" d="M78 36c-9-10 8-12 0-23" />
          <path d="M22 49h68l-6 39a8 8 0 0 1-8 7H36a8 8 0 0 1-8-7l-6-39Z" fill="var(--beige)" />
          <path d="M90 57h8a12 12 0 0 1 0 24h-12" stroke="var(--beige)" strokeWidth="6" />
          <path d="M19 102h82" stroke="var(--caramel)" strokeWidth="2" />
          <path className="coffee-fill" d="M27 57h58l-4 27H31l-4-27Z" fill="var(--caramel)" />
        </svg>
        <p className="loader-caption">Brewing something good<span className="loader-ellipsis">...</span></p>
      </div>
    </div>
  )
}

export default Loader

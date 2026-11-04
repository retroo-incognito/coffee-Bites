function BrandLogo({ variant = 'horizontal', className = '', dark = false }) {
  const emblem = (
    <svg className="brand-emblem" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <circle className="brand-emblem-ring" cx="28" cy="28" r="25.5" />
      <path className="brand-emblem-steam" d="M21 16c-4-4 3-6 0-10m7 10c-4-4 3-6 0-10m7 10c-4-4 3-6 0-10" />
      <path className="brand-emblem-cup" d="M15 23h25l-2 15a4 4 0 0 1-4 3H21a4 4 0 0 1-4-3l-2-15Z" />
      <path className="brand-emblem-handle" d="M40 27h2.5a5.5 5.5 0 0 1 0 11H38" />
      <path className="brand-emblem-saucer" d="M13 45h30" />
      <path className="brand-emblem-accent" d="M20 28h15" />
    </svg>
  )

  if (variant === 'emblem') {
    return <span className={`brand-logo brand-logo--emblem${dark ? ' brand-logo--dark' : ''} ${className}`}>{emblem}</span>
  }

  return (
    <span className={`brand-logo brand-logo--horizontal${dark ? ' brand-logo--dark' : ''} ${className}`}>
      {emblem}
      <span className="brand-wordmark">
        <span className="brand-wordmark-main">Coffee <i>&amp;</i> Bites</span>
        <span className="brand-wordmark-sub">A little warmth, every day</span>
      </span>
    </span>
  )
}

export default BrandLogo

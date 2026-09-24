const moments = [
  { src: '/images/coffee-pastry.jpg', width: 1800, height: 1207, alt: 'A latte and warm pastries on a wooden cafe table', caption: 'Coffee, with a little something sweet', shape: 'gallery-wide' },
  { src: '/images/veggie-burger.jpg', width: 1100, height: 733, alt: 'Vegetarian burger with leafy greens', caption: 'A proper little bite', shape: 'gallery-tall' },
  { src: '/images/latte-pour.jpg', width: 1000, height: 667, alt: 'Fresh latte art poured at the counter', caption: 'Made one cup at a time', shape: 'gallery-small' },
  { src: '/images/margherita.jpg', width: 1100, height: 1375, alt: 'Margherita pizza with tomato, cheese and fresh basil', caption: 'A slice of comfort', shape: 'gallery-small' },
  { src: '/images/vegetarian-pasta.jpg', width: 1100, height: 733, alt: 'Vegetarian pasta with greens and tomato', caption: 'Fresh from the kitchen', shape: 'gallery-wide' },
  { src: '/images/golden-fries.jpg', width: 900, height: 600, alt: 'Golden potato fries served with a fork', caption: 'Something crisp and savoury', shape: 'gallery-small' },
]

function Gallery() {
  return (
    <section className="gallery-section" id="gallery" tabIndex="-1" aria-labelledby="gallery-title">
      <div className="gallery-heading"><div><p className="eyebrow">A taste of the everyday</p><h2 id="gallery-title">Little things<br /><em>worth lingering over.</em></h2></div><p>Something warm from the oven.<br />Something slow from the coffee bar.</p></div>
      <div className="gallery-collage">
        {moments.map((moment, index) => <figure key={moment.src} className={`gallery-item ${moment.shape} gallery-item-${index + 1}`}><img src={moment.src} alt={moment.alt} width={moment.width} height={moment.height} loading="lazy" decoding="async" /><figcaption><span>{moment.caption}</span><i aria-hidden="true">{'\u2197'}</i></figcaption></figure>)}
      </div>
    </section>
  )
}

export default Gallery

const moments = [
  { src: '/images/coffee-pastry.jpg', alt: 'A latte and warm pastries on a wooden cafe table', caption: 'Coffee, with a little something sweet', shape: 'gallery-wide' },
  { src: '/images/veggie-burger.jpg', alt: 'Vegetarian burger with leafy greens', caption: 'A proper little bite', shape: 'gallery-tall' },
  { src: '/images/latte-pour.jpg', alt: 'Fresh latte art poured at the counter', caption: 'Made one cup at a time', shape: 'gallery-small' },
  { src: '/images/margherita.jpg', alt: 'Margherita pizza with tomato, cheese and fresh basil', caption: 'A slice of comfort', shape: 'gallery-small' },
  { src: '/images/vegetarian-pasta.jpg', alt: 'Vegetarian pasta with greens and tomato', caption: 'Fresh from the kitchen', shape: 'gallery-wide' },
  { src: '/images/grilled-cheese.jpg', alt: 'Toasted cheese and tomato sandwich with salad', caption: 'Golden at the edges', shape: 'gallery-small' },
]

function Gallery() {
  return (
    <section className="gallery-section" id="gallery" aria-labelledby="gallery-title">
      <div className="gallery-heading"><div><p className="eyebrow">A taste of the everyday</p><h2 id="gallery-title">Little things<br /><em>worth lingering over.</em></h2></div><p>Something warm from the oven.<br />Something slow from the coffee bar.</p></div>
      <div className="gallery-collage">
        {moments.map((moment, index) => <figure key={moment.src} className={`gallery-item ${moment.shape} gallery-item-${index + 1}`}><img src={moment.src} alt={moment.alt} loading="lazy" /><figcaption><span>{moment.caption}</span><i aria-hidden="true">{'\u2197'}</i></figcaption></figure>)}
      </div>
    </section>
  )
}

export default Gallery

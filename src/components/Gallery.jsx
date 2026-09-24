const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80',
    alt: 'Café-style meal presentation',
    className: 'large',
  },
  {
    src: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=80',
    alt: 'Burger served on a rustic plate',
    className: 'small',
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    alt: 'Coffee on a café table',
    className: 'small',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Cozy café interior',
    className: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    alt: 'Pasta served in a warm café setting',
    className: 'small',
  },
  {
    src: 'https://images.unsplash.com/photo-1555992336-03aeb98d9fb5?auto=format&fit=crop&w=900&q=80',
    alt: 'Fresh pizza and beverages',
    className: 'small',
  },
]

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="section-heading center-heading">
        <p className="eyebrow">A look inside</p>
        <h2>Moments worth staying for.</h2>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <figure key={`${image.src}-${index}`} className={`gallery-item ${image.className}`}>
            <img src={image.src} alt={image.alt} />
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Gallery

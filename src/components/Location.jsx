function Location() {
  return (
    <section className="location-section" id="location">
      <div className="location-card">
        <div className="location-copy">
          <p className="eyebrow">Visit us</p>
          <h2>Coffee And Bites</h2>
          <p>Near Baba Balak Nath Mandir</p>
          <p>Jassian Road</p>
          <p>Haibowal Kalan</p>
          <p>Ludhiana, Punjab</p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Coffee+And+Bites+Ludhiana"
            target="_blank"
            rel="noreferrer"
            className="button button-primary"
          >
            Get Directions
          </a>
        </div>

        <div className="map-visual" aria-label="Restaurant location illustration">
          <div className="map-pin">●</div>
          <div className="map-line line-one" />
          <div className="map-line line-two" />
          <div className="map-line line-three" />
          <span className="map-label">Ludhiana, Punjab</span>
        </div>
      </div>
    </section>
  )
}

export default Location

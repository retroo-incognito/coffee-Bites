function Location() {
  return (
    <section className="location-section" id="location" aria-labelledby="location-title">
      <div className="location-intro"><p className="eyebrow">A familiar place to find</p><h2 id="location-title">Your table<br />in <em>Haibowal.</em></h2></div>
      <div className="location-layout">
        <div className="location-illustration" role="img" aria-label="Illustrated neighborhood map, not to scale"><span className="map-road road-one" /><span className="map-road road-two" /><span className="map-road road-three" /><span className="map-street street-one">Jassian Road</span><span className="map-street street-two">Haibowal Kalan</span><span className="map-pin"><i /><b>Coffee And Bites</b></span><span className="map-compass">LUDHIANA <i>N</i></span></div>
        <address className="location-address"><span className="eyebrow">Come say hello</span><strong>Coffee And Bites</strong><p>Near Baba Balak Nath Mandir<br />Jassian Road<br />Haibowal Kalan<br />Police Station Haibowal<br />Ludhiana, Punjab</p><a href="https://www.google.com/maps/search/?api=1&query=Coffee+And+Bites%2C+Near+Baba+Balak+Nath+Mandir%2C+Jassian+Road%2C+Haibowal+Kalan%2C+Police+Station+Haibowal%2C+Ludhiana%2C+Punjab" target="_blank" rel="noreferrer" className="text-link">Get Directions <span aria-hidden="true">{'\u2197'}</span></a></address>
      </div>
    </section>
  )
}

export default Location

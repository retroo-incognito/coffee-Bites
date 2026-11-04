function EditorialIntroduction() {
  return (
    <section className="editorial-intro" aria-labelledby="editorial-intro-title">
      <p className="eyebrow">A small pause, well spent</p>
      <div className="editorial-intro-body">
        <h2 id="editorial-intro-title">
          <span>The day can</span>
          <span>wait one <em>coffee.</em></span>
        </h2>
        <div className="editorial-intro-aside">
          <span className="editorial-index">01 / THE EVERYDAY RITUAL</span>
          <p>Drop in for a quick cup, stay for a shared plate, or take the long way through the afternoon. We have room for all three.</p>
          <a href="#menu" className="text-link">Find your usual <span aria-hidden="true">{'\u2198'}</span></a>
        </div>
      </div>
      <span className="editorial-intro-mark" aria-hidden="true">C&amp;B</span>
    </section>
  )
}

export default EditorialIntroduction

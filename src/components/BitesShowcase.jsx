import { ZOMATO_ORDER_URL } from '../data/links'

const bites = [
  { src: '/images/veggie-burger.jpg', alt: 'Vegetarian burger with leafy greens on a seeded bun', note: 'A good excuse to stay for lunch' },
  { src: '/images/golden-fries.jpg', alt: 'Golden potato fries served with a fork', note: 'The side order with main-character energy' },
  { src: '/images/margherita.jpg', alt: 'Margherita pizza topped with tomato, melted cheese and basil', note: 'One more slice is a sensible plan' },
]

function BitesShowcase() {
  return (
    <section className="bites-section" aria-labelledby="bites-title">
      <div className="bites-heading">
        <div>
          <p className="eyebrow">The bites part</p>
          <h2 id="bites-title">Good taste.<br /><em>Questionable self-control.</em></h2>
        </div>
        <p>Your coffee may have arrived with company. These things happen.</p>
      </div>
      <div className="bites-ribbon">
        {bites.map((bite, index) => (
          <figure className={`bites-frame bites-frame-${index + 1}`} key={bite.src}>
            <img src={bite.src} alt={bite.alt} width="1100" height="733" loading="lazy" decoding="async" />
            <figcaption><span>0{index + 1}</span>{bite.note}</figcaption>
          </figure>
        ))}
      </div>
      <div className="bites-foot">
        <span>Pick your own “just one more” moment.</span>
        <a href={ZOMATO_ORDER_URL} target="_blank" rel="noopener noreferrer" className="text-link">See what’s on the menu <span aria-hidden="true">{'\u2197'}</span></a>
      </div>
    </section>
  )
}

export default BitesShowcase

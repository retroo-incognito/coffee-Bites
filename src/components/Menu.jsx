import { ZOMATO_ORDER_URL } from "../data/links";

function Menu() {
  return (
    <section
      className="menu-section"
      id="menu"
      tabIndex="-1"
      aria-labelledby="menu-title"
    >
      <div className="menu-heading">
        <div>
          <p className="eyebrow">Something for the table</p>
          <h2 id="menu-title">
            Your next
            <br />
            <em>good thing.</em>
          </h2>
        </div>
        <p className="menu-aside-note">
          For highly important coffee and bite decisions. Find the current menu
          and availability on Zomato.
        </p>
      </div>
      <div className="menu-feature">
        <figure className="menu-feature-image">
          <img
            src="/images/margherita.jpg"
            alt="Margherita pizza topped with tomato, melted cheese and basil"
            width="1100"
            height="1375"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Good things, shared around the table</figcaption>
        </figure>
        <div className="menu-feature-copy">
          <span>COFFEE / BITES / GOOD COMPANY</span>
          <p>
            Come hungry.
            <br />
            Leave a little <em>happier.</em>
          </p>
          <a
            href={ZOMATO_ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            See the current menu <span aria-hidden="true">{"\u2197"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Menu;

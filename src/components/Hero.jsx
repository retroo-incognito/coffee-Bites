import { useEffect, useRef } from "react";
import { ZOMATO_ORDER_URL } from "../data/links";

function Hero() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    if (
      !section ||
      !image ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return undefined;

    let frame = 0;
    const updateParallax = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const { top, height } = section.getBoundingClientRect();
        const progress = Math.min(
          1,
          Math.max(
            0,
            (window.innerHeight - top) / (window.innerHeight + height),
          ),
        );
        image.style.setProperty("--parallax-y", `${(progress - 0.5) * 16}px`);
      });
    };

    window.addEventListener("scroll", updateParallax, { passive: true });
    window.addEventListener("resize", updateParallax);
    updateParallax();

    return () => {
      window.removeEventListener("scroll", updateParallax);
      window.removeEventListener("resize", updateParallax);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      className="hero-section"
      id="home"
      ref={sectionRef}
      tabIndex="-1"
      aria-labelledby="hero-title"
    >
      <div className="hero-topline">
        <span>Coffee / food / a little pause</span>
        <span>
          Ludhiana, Punjab <i aria-hidden="true" />
        </span>
      </div>

      <div className="hero-composition">
        <div className="hero-title-wrap">
          <p className="eyebrow hero-eyebrow">A corner of Haibowal Kalan</p>
          <h1 id="hero-title">
            <span className="hero-word">Coffee</span>
            <span className="hero-word hero-second">
              <i aria-hidden="true">&amp;</i> Bites
            </span>
          </h1>
          <p className="hero-manifesto">
            Come for the coffee.
            <br />
            Blame us for <em>the extra pastry.</em>
          </p>
        </div>

        <figure className="hero-photo">
          <img
            ref={imageRef}
            src="/images/coffee-pastry.jpg"
            alt="Latte and fresh pastries on a wooden cafe table"
            width="1800"
            height="1207"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <figcaption className="photo-caption">
            <i aria-hidden="true" />A very reasonable coffee break
          </figcaption>
          <div className="hero-seal" aria-hidden="true">
            <span>GOOD THINGS</span>
            <strong>C&amp;B</strong>
            <span>LUDHIANA / INDIA</span>
          </div>
        </figure>
      </div>

      <div className="hero-foot">
        <div className="hero-actions">
          <a
            href={ZOMATO_ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            Order on Zomato <span aria-hidden="true">{"\u2197"}</span>
          </a>
          <a href="#menu" className="button button-secondary">
            Explore menu <span aria-hidden="true">{"\u2198"}</span>
          </a>
        </div>
        <a className="hero-scroll" href="#menu">
          <span>Scroll for the good stuff</span>
          <i aria-hidden="true">{"\u2193"}</i>
        </a>
      </div>
    </section>
  );
}

export default Hero;

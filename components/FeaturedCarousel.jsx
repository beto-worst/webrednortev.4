'use client';

import { useEffect, useRef } from 'react';
import PropertyCard from './PropertyCard';

// Ported from the legacy scrollFeaturedCarousel()/startFeaturedAutoplay().
export default function FeaturedCarousel({ properties }) {
  const trackRef = useRef(null);
  const timerRef = useRef(null);

  const step = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('.prop-card');
    const stepPx = card ? card.getBoundingClientRect().width + 24 : 340;
    const atEnd = dir > 0 && el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;
    if (atEnd) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: dir * stepPx, behavior: 'smooth' });
    }
  };

  const start = () => {
    const el = trackRef.current;
    if (!el || el.querySelectorAll('.prop-card').length < 2) return;
    stop();
    timerRef.current = setInterval(() => step(1), 4000);
  };
  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [properties]);

  if (!properties || properties.length === 0) {
    return <p className="text-muted" style={{ padding: '2rem 0' }}>No hay propiedades disponibles en este momento.</p>;
  }

  return (
    <div className="props-carousel-wrap" onMouseEnter={stop} onMouseLeave={start}>
      <button className="carousel-nav-btn prev" onClick={() => { step(-1); start(); }} aria-label="Anteriores" type="button">‹</button>
      <div className="props-carousel" id="featured-props" ref={trackRef}>
        {properties.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
      <button className="carousel-nav-btn next" onClick={() => { step(1); start(); }} aria-label="Siguientes" type="button">›</button>
    </div>
  );
}

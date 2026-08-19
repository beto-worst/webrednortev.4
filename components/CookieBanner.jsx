'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!visible) {
      document.body.style.paddingBottom = '';
      return;
    }
    const banner = document.getElementById('cookieBanner');
    const adjust = () => {
      if (banner) document.body.style.paddingBottom = banner.offsetHeight + 'px';
    };
    adjust();
    window.addEventListener('resize', adjust);
    return () => window.removeEventListener('resize', adjust);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="cookie-banner" id="cookieBanner">
      <p>
        Usamos cookies para mejorar tu experiencia. Al continuar navegando aceptas nuestra{' '}
        <Link href="/politica-de-cookies">Política de Cookies</Link>.
      </p>
      <div className="cookie-actions">
        <button className="btn-cookie-reject" onClick={() => setVisible(false)} type="button">Solo necesarias</button>
        <button className="btn-cookie-accept" onClick={() => setVisible(false)} type="button">Aceptar todas</button>
      </div>
    </div>
  );
}

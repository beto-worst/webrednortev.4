import Link from 'next/link';
import Image from 'next/image';

function propsFilterHref(operacion, tipo, categoria) {
  const params = new URLSearchParams();
  if (operacion) params.set('operacion', operacion);
  if (tipo) params.set('tipo', tipo);
  if (categoria) params.set('categoria', categoria);
  const qs = params.toString();
  return qs ? `/propiedades?${qs}` : '/propiedades';
}

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-mark">
              <Image src="/logo.png" alt="Rednorte" width={44} height={44} />
            </div>
            <div className="logo-text">
              <span className="logo-name">Rednorte</span>
              <span className="logo-sub">Inmobiliaria</span>
            </div>
          </div>
          <p className="footer-desc">Especialistas en venta, renta e inversión inmobiliaria en Monterrey y Nuevo León. Conectamos propiedades con decisiones inteligentes.</p>
          <p className="footer-address"> Av. José Vasconcelos Ote. 215, Local-7<br />Residencial San Agustín 1er Sector<br />San Pedro Garza García, N.L. 66260</p>
          <div className="footer-social">
            <a className="social-btn" href="https://www.facebook.com/rednorteinmobiliaria/" target="_blank" rel="noopener noreferrer" title="Facebook">f</a>
            <a className="social-btn" href="https://www.instagram.com/rednortemx/" target="_blank" rel="noopener noreferrer" title="Instagram">in</a>
            <a className="social-btn" href="https://www.linkedin.com/company/rednortemx/" target="_blank" rel="noopener noreferrer" title="LinkedIn">Li</a>
            <a className="social-btn" href="https://x.com/rednortemx" target="_blank" rel="noopener noreferrer" title="X">X</a>
            <a className="social-btn" href="https://www.tiktok.com/@rednortemx" target="_blank" rel="noopener noreferrer" title="TikTok">Tt</a>
            <a className="social-btn" href="https://www.youtube.com/@rednorteinmobiliaria" target="_blank" rel="noopener noreferrer" title="YouTube">Yt</a>
            <a className="social-btn" href="https://share.google/UFbLTlYjmYeX6h6zy" target="_blank" rel="noopener noreferrer" title="Google">G</a>
            <a className="social-btn" href="https://wa.me/528117783953" target="_blank" rel="noopener noreferrer" title="WhatsApp">W</a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Propiedades</h4>
          <ul className="footer-links">
            <li><Link href={propsFilterHref('Venta', 'Casa', '')}>Casas en venta</Link></li>
            <li><Link href={propsFilterHref('', 'Depto', '')}>Departamentos</Link></li>
            <li><Link href={propsFilterHref('Renta', 'Casa', '')}>Casas en renta</Link></li>
            <li><Link href={propsFilterHref('', '', 'Comercial')}>Comercial</Link></li>
            <li><Link href={propsFilterHref('', '', 'Industrial')}>Industrial</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Servicios</h4>
          <ul className="footer-links">
            <li><Link href="/servicios">Venta</Link></li>
            <li><Link href="/servicios">Renta</Link></li>
            <li><Link href="/herramientas/estimacion-de-valor">Valuación gratuita</Link></li>
            <li><Link href="/nosotros">Nosotros</Link></li>
            <li><Link href="/trabaja-con-nosotros">Bolsa de trabajo</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contacto</h4>
          <ul className="footer-links">
            <li><a href="tel:+528117783953"> (811) 778-3953</a></li>
            <li><a href="https://wa.me/528117783953" target="_blank" rel="noopener noreferrer"> WhatsApp</a></li>
            <li><Link href="/contacto">Formulario de contacto</Link></li>
          </ul>
          <h4 style={{ marginTop: '1.25rem' }}>Horario</h4>
          <ul className="footer-links">
            <li><span>Lun–Vie: 9:00 – 18:00</span></li>
            <li><span>Sáb: 10:00 – 14:00</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', maxWidth: '1200px', margin: '0 auto', padding: '1.25rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>© 2026 Rednorte Inmobiliaria. Todos los derechos reservados.</p>
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          <Link style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }} href="/aviso-de-privacidad">Aviso de privacidad</Link>
          <Link style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }} href="/terminos-y-condiciones">Términos y condiciones</Link>
          <Link style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }} href="/politica-de-cookies">Política de cookies</Link>
        </div>
      </div>
    </footer>
  );
}

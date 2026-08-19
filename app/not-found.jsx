import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="page-content">
      <div className="not-found">
        <div className="not-found-inner">
          <div className="not-found-num">404</div>
          <h1 className="not-found-title">Página no encontrada</h1>
          <p className="not-found-desc">Lo sentimos, la página que buscas no existe o fue movida. Puede que la propiedad ya no esté disponible.</p>
          <Link className="btn-primary" href="/" style={{ marginRight: '0.75rem' }}>← Ir al inicio</Link>
          <Link className="btn-outline-white" href="/propiedades" style={{ color: 'var(--cafe)', borderColor: 'var(--gris-claro)' }}>Ver propiedades</Link>
        </div>
      </div>
    </div>
  );
}

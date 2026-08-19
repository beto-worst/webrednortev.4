import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Propiedades comerciales e industriales en Monterrey y Nuevo León',
  description: 'Locales, oficinas, naves industriales y bodegas en los principales corredores comerciales e industriales de Nuevo León con Rednorte Inmobiliaria.',
  alternates: { canonical: '/servicios/comercial-industrial' },
};

export default function ComercialIndustrialPage() {
  return (
    <div className="page-content">
      <Breadcrumb items={[{ label: 'Servicios', href: '/servicios' }, { label: 'Comercial e industrial' }]} />
      <div className="nosotros-page">
        <p className="section-label">Servicio</p>
        <h1 className="section-title">Propiedades comerciales e industriales</h1>
        <p style={{ fontSize: '1rem', color: 'var(--cafe)', lineHeight: 1.8, maxWidth: '700px', marginBottom: '2rem' }}>
          Locales en planta baja, pisos de oficinas, plazas y espacios mixtos en ubicaciones estratégicas, además de naves industriales, bodegas, parques logísticos y terrenos industriales en los principales corredores de Nuevo León, incluyendo Apodaca, Escobedo, Santa Catarina y Santiago.
        </p>

        <h2 className="section-title" style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>Tipos de propiedad</h2>
        <div className="diferenciadores">
          <div className="dif-item">
            <div className="dif-title">Locales comerciales</div>
            <div className="dif-desc">Espacios en planta baja y plazas comerciales en zonas de alto tráfico.</div>
          </div>
          <div className="dif-item">
            <div className="dif-title">Oficinas</div>
            <div className="dif-desc">Pisos y espacios corporativos en los principales corredores de negocio de Monterrey.</div>
          </div>
          <div className="dif-item">
            <div className="dif-title">Naves y bodegas industriales</div>
            <div className="dif-desc">Inventario industrial en Apodaca, Escobedo, Santa Catarina y Santiago.</div>
          </div>
          <div className="dif-item">
            <div className="dif-title">Terrenos industriales</div>
            <div className="dif-desc">Terrenos para desarrollo industrial y logístico en los corredores con mayor demanda.</div>
          </div>
        </div>

        <div className="mision-box">
          <h3>Asesoría para negocios en crecimiento</h3>
          <p>Ya sea que busques rentar, comprar o vender un inmueble comercial o industrial, te acompañamos con análisis de mercado y negociación especializada.</p>
        </div>

        <div style={{ textAlign: 'center', display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="btn-contactar-nos" href={{ pathname: '/propiedades', query: { categoria: 'Comercial' } }}>Ver comercial →</Link>
          <Link className="btn-contactar-nos" href={{ pathname: '/propiedades', query: { categoria: 'Industrial' } }}>Ver industrial →</Link>
          <Link className="btn-contactar-nos" href="/contacto">Hablar con un asesor →</Link>
        </div>
      </div>
    </div>
  );
}

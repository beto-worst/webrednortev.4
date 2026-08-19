import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Asesoría en inversión inmobiliaria en Monterrey y Nuevo León',
  description: 'Análisis de mercado, identificación de oportunidades y estrategias de portafolio inmobiliario para inversionistas en Monterrey y Nuevo León.',
  alternates: { canonical: '/servicios/inversion-inmobiliaria' },
};

export default function InversionInmobiliariaPage() {
  return (
    <div className="page-content">
      <Breadcrumb items={[{ label: 'Servicios', href: '/servicios' }, { label: 'Inversión inmobiliaria' }]} />
      <div className="nosotros-page">
        <p className="section-label">Servicio</p>
        <h1 className="section-title">Asesoría para inversionistas</h1>
        <p style={{ fontSize: '1rem', color: 'var(--cafe)', lineHeight: 1.8, maxWidth: '700px', marginBottom: '2rem' }}>
          Análisis de mercado, identificación de oportunidades con alto rendimiento, estrategias de diversificación de portafolio y acompañamiento en la toma de decisiones de inversión inmobiliaria en Nuevo León.
        </p>

        <h2 className="section-title" style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>En qué te apoyamos</h2>
        <div className="diferenciadores">
          <div className="dif-item">
            <div className="dif-title">Análisis de mercado</div>
            <div className="dif-desc">Identificamos zonas y tipos de propiedad con mejor potencial de plusvalía y rendimiento.</div>
          </div>
          <div className="dif-item">
            <div className="dif-title">Oportunidades de inversión</div>
            <div className="dif-desc">Acceso a inventario residencial, comercial e industrial con potencial de renta o reventa.</div>
          </div>
          <div className="dif-item">
            <div className="dif-title">Estrategia de portafolio</div>
            <div className="dif-desc">Te acompañamos a diversificar entre distintos tipos de propiedad y zonas.</div>
          </div>
          <div className="dif-item">
            <div className="dif-title">Acompañamiento en la decisión</div>
            <div className="dif-desc">Análisis comparativo, proyecciones y seguimiento hasta el cierre de la operación.</div>
          </div>
        </div>

        <div className="mision-box">
          <h3>¿Buscas tu próxima inversión?</h3>
          <p>Cuéntanos tu objetivo de inversión y presupuesto, y un asesor te compartirá las mejores oportunidades disponibles en nuestro inventario.</p>
        </div>

        <div style={{ textAlign: 'center', display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="btn-contactar-nos" href="/propiedades">Ver inventario disponible →</Link>
          <Link className="btn-contactar-nos" href="/contacto">Hablar con un asesor →</Link>
        </div>
      </div>
    </div>
  );
}

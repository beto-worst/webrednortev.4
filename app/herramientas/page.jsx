import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Herramientas gratuitas',
  description: 'Estima el valor de tu propiedad o analiza qué tan vendible es con las herramientas gratuitas de Rednorte Inmobiliaria.',
  alternates: { canonical: '/herramientas' },
};

export default function HerramientasPage() {
  return (
    <div className="page-content">
      <Breadcrumb items={[{ label: 'Herramientas' }]} />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 2rem 5rem' }}>
        <div className="section-header center">
          <p className="section-label">Herramientas gratuitas</p>
          <h1 className="section-title">¿Qué necesitas hacer hoy?</h1>
          <p className="section-sub">Elige la herramienta que mejor se ajuste a lo que necesitas. Ambas son gratuitas y el resultado es una estimación inicial, no sustituye un avalúo profesional.</p>
        </div>
        <div className="quick-links-grid">
          <Link className="quick-link-card" href="/herramientas/estimacion-de-valor">
            <span className="quick-link-label">Valuación</span>
            <h3>Estima el valor de tu propiedad</h3>
            <p>Calcula un rango de precio de venta o renta con base en comparables de mercado, características y ubicación.</p>
            <span className="quick-link-action">Iniciar valuación →</span>
          </Link>
          <Link className="quick-link-card" href="/herramientas/reporte-de-vendibilidad">
            <span className="quick-link-label">Diagnóstico</span>
            <h3>Analiza qué tan vendible es tu propiedad</h3>
            <p>Responde 25 preguntas sobre precio, presentación, exposición y conversión para identificar qué está frenando la venta.</p>
            <span className="quick-link-action">Iniciar diagnóstico →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

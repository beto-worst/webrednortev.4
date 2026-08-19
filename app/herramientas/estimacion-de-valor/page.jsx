import Breadcrumb from '@/components/Breadcrumb';
import ValuacionTool from '@/components/valuacion/ValuacionTool';

export const metadata = {
  title: 'Estimación de Valor de Mercado',
  description: 'Calcula un rango de precio de venta o renta para tu propiedad en Monterrey y Nuevo León con base en comparables de mercado, características y ubicación.',
  alternates: { canonical: '/herramientas/estimacion-de-valor' },
};

export default function EstimacionDeValorPage() {
  return (
    <div className="page-content">
      <Breadcrumb items={[{ label: 'Herramientas', href: '/herramientas' }, { label: 'Estimación de valor' }]} />
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem 1rem 0' }}>
        <h1 style={{ fontSize: '1.5rem', color: 'var(--negro)', marginBottom: '0.5rem' }}>Estimación de Valor de Mercado</h1>
        <p style={{ color: 'var(--gris-medio)', fontSize: '14px', marginBottom: '0' }}>
          Herramienta gratuita para asesores Rednorte: calcula un rango de precio de salida, valor de mercado y precio realista de cierre a partir de comparables. El resultado es una estimación inicial y no sustituye un avalúo profesional.
        </p>
      </div>
      <ValuacionTool />
    </div>
  );
}

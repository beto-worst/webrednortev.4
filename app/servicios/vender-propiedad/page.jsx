import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Venta de propiedades en Monterrey y Nuevo León',
  description: 'Vende tu propiedad en Monterrey y Nuevo León con Rednorte Inmobiliaria: marketing digital, valuación profesional y una red de compradores calificados.',
  alternates: { canonical: '/servicios/vender-propiedad' },
};

export default function VenderPropiedadPage() {
  return (
    <div className="page-content">
      <Breadcrumb items={[{ label: 'Servicios', href: '/servicios' }, { label: 'Vender propiedad' }]} />
      <div className="nosotros-page">
        <p className="section-label">Servicio</p>
        <h1 className="section-title">Venta de propiedades</h1>
        <p style={{ fontSize: '1rem', color: 'var(--cafe)', lineHeight: 1.8, maxWidth: '700px', marginBottom: '2rem' }}>
          Comercializamos tu propiedad con una estrategia de marketing digital multicanal, valuación profesional y acceso a nuestra amplia red de compradores calificados. Nos encargamos de todo el proceso, desde la publicación hasta el cierre notarial.
        </p>

        <h2 className="section-title" style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>Cómo te ayudamos a vender</h2>
        <div className="diferenciadores">
          <div className="dif-item">
            <div className="dif-title">Valuación profesional</div>
            <div className="dif-desc">Analizamos comparables reales de mercado para fijar un precio competitivo desde el primer día.</div>
          </div>
          <div className="dif-item">
            <div className="dif-title">Marketing multicanal</div>
            <div className="dif-desc">Fotografía, publicación en portales, redes sociales y nuestra base de compradores activos.</div>
          </div>
          <div className="dif-item">
            <div className="dif-title">Filtro de prospectos</div>
            <div className="dif-desc">Calificamos a cada interesado antes de agendar una visita, para no perder tu tiempo.</div>
          </div>
          <div className="dif-item">
            <div className="dif-title">Acompañamiento hasta el cierre</div>
            <div className="dif-desc">Te apoyamos en la negociación, documentación y trámites hasta la firma notarial.</div>
          </div>
        </div>

        <div className="mision-box">
          <h3>¿Cuánto vale tu propiedad?</h3>
          <p>Obtén una estimación de valor gratuita en minutos con nuestra herramienta de valuación, o solicita un análisis a detalle con uno de nuestros asesores.</p>
        </div>

        <div style={{ textAlign: 'center', display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="btn-contactar-nos" href="/herramientas/estimacion-de-valor">Estimar el valor de mi propiedad →</Link>
          <Link className="btn-contactar-nos" href="/contacto">Hablar con un asesor →</Link>
        </div>
      </div>
    </div>
  );
}

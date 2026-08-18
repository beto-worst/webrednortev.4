import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Renta de propiedades en Monterrey y Nuevo León',
  description: 'Rentamos tu propiedad en Monterrey y Nuevo León: selección de arrendatario, contrato, depósito y administración del arrendamiento con Rednorte Inmobiliaria.',
  alternates: { canonical: '/servicios/rentar-propiedad' },
};

export default function RentarPropiedadPage() {
  return (
    <div className="page-content">
      <Breadcrumb items={[{ label: 'Servicios', href: '/servicios' }, { label: 'Rentar propiedad' }]} />
      <div className="nosotros-page">
        <p className="section-label">Servicio</p>
        <h1 className="section-title">Renta de propiedades</h1>
        <p style={{ fontSize: '1rem', color: 'var(--cafe)', lineHeight: 1.8, maxWidth: '700px', marginBottom: '2rem' }}>
          Gestionamos la renta de tu inmueble de principio a fin: selección del arrendatario, investigación de referencias, elaboración de contrato, cobro de depósito y seguimiento mensual. Tu propiedad, en las mejores manos.
        </p>

        <h2 className="section-title" style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>Qué incluye el servicio</h2>
        <div className="diferenciadores">
          <div className="dif-item">
            <div className="dif-title">Selección de arrendatario</div>
            <div className="dif-desc">Investigamos referencias y capacidad de pago antes de recomendar a un candidato.</div>
          </div>
          <div className="dif-item">
            <div className="dif-title">Contrato y garantías</div>
            <div className="dif-desc">Elaboramos el contrato de arrendamiento y gestionamos depósito y garantías.</div>
          </div>
          <div className="dif-item">
            <div className="dif-title">Publicación y difusión</div>
            <div className="dif-desc">Publicamos tu propiedad en los principales portales y en nuestra red de contactos.</div>
          </div>
          <div className="dif-item">
            <div className="dif-title">Seguimiento mensual</div>
            <div className="dif-desc">Acompañamos la relación con el arrendatario durante la vigencia del contrato.</div>
          </div>
        </div>

        <div className="mision-box">
          <h3>¿Quieres ofrecer tu propiedad en renta?</h3>
          <p>Cuéntanos sobre tu inmueble y un asesor te contactará para definir precio de renta y estrategia de promoción.</p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link className="btn-contactar-nos" href="/contacto">Ofrecer mi propiedad en renta →</Link>
        </div>
      </div>
    </div>
  );
}

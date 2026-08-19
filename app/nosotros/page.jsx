import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Nosotros',
  description: 'Conoce a Rednorte Inmobiliaria: más de 8 años conectando personas con propiedades residenciales, comerciales e industriales en Nuevo León.',
  alternates: { canonical: '/nosotros' },
};

export default function NosotrosPage() {
  return (
    <div className="page-content">
      <Breadcrumb items={[{ label: 'Nosotros' }]} />
      <div className="nosotros-page">
        <div className="nosotros-hero-img" style={{ textAlign: 'center' }}>
          <Image src="/equipo.jpg" alt="Equipo Rednorte Inmobiliaria" width={560} height={373} style={{ maxWidth: '560px', width: '100%', height: 'auto', display: 'inline-block' }} />
        </div>
        <p className="section-label">Quiénes somos</p>
        <h1 className="section-title">Rednorte Inmobiliaria</h1>
        <p style={{ fontSize: '1rem', color: 'var(--cafe)', lineHeight: 1.8, maxWidth: '700px', marginBottom: '2rem' }}>Somos una empresa inmobiliaria con más de 8 años de presencia en el mercado de Nuevo León. Nació con el propósito de conectar a las personas con el inmueble correcto, en el momento indicado y al precio justo. Hoy somos uno de los equipos de confianza en la región para compra, venta, renta e inversión de propiedades residenciales, comerciales e industriales.</p>
        <div className="stats-row">
          <div className="stat-box"><div className="stat-num">8+</div><div className="stat-label">Años de experiencia</div></div>
          <div className="stat-box"><div className="stat-num">+500</div><div className="stat-label">Propiedades en inventario</div></div>
          <div className="stat-box"><div className="stat-num">12</div><div className="stat-label">Municipios con cobertura</div></div>
          <div className="stat-box"><div className="stat-num">3</div><div className="stat-label">Tipos de mercado: Res. Com. Ind.</div></div>
        </div>
        <h2 className="section-title" style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>Nuestros diferenciadores</h2>
        <div className="diferenciadores">
          <div className="dif-item"><div className="dif-title">Inventario propio y actualizado</div><div className="dif-desc">Más de 500 propiedades activas sincronizadas directamente desde nuestro CRM en tiempo real.</div></div>
          <div className="dif-item"><div className="dif-title">Cobertura total en NL</div><div className="dif-desc">Presencia activa en los 12 municipios con mayor demanda inmobiliaria de Nuevo León.</div></div>
          <div className="dif-item"><div className="dif-title">Asesores especializados</div><div className="dif-desc">Cada asesor tiene conocimiento profundo de la zona y el tipo de propiedad que maneja.</div></div>
          <div className="dif-item"><div className="dif-title">Análisis de mercado propio</div><div className="dif-desc">Valuaciones sustentadas en datos reales, no en estimaciones genéricas o fórmulas automáticas.</div></div>
        </div>
        <div className="mision-box">
          <h3>Nuestra misión</h3>
          <p>Conectar propiedades con decisiones inteligentes. Acompañamos a nuestros clientes con información honesta, asesoría profesional y una red inmobiliaria sólida, para que cada decisión de compra, venta o inversión sea la correcta.</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link className="btn-contactar-nos" href="/contacto">Contacta al equipo →</Link>
        </div>
      </div>
    </div>
  );
}

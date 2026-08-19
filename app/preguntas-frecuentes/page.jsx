import Breadcrumb from '@/components/Breadcrumb';

// Linked from the homepage's "También puede interesarte" section (as in
// the original) but marked noindex — the original FAQ list was an empty
// container with no questions loaded yet. Kept as a real, ready route with
// the original design for when content is added.
export const metadata = {
  title: 'Preguntas frecuentes',
  robots: { index: false, follow: false },
  alternates: { canonical: '/preguntas-frecuentes' },
};

export default function PreguntasFrecuentesPage() {
  return (
    <div className="page-content">
      <Breadcrumb items={[{ label: 'Preguntas frecuentes' }]} />
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem 5rem' }}>
        <div className="section-header center">
          <p className="section-label">Resolvemos tus dudas</p>
          <h1 className="section-title">Preguntas frecuentes</h1>
          <p className="section-sub" style={{ margin: '0 auto' }}>Todo lo que necesitas saber antes de comprar, vender o rentar una propiedad con Rednorte.</p>
        </div>
        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <p className="text-muted" style={{ textAlign: 'center' }}>Estamos preparando esta sección. Mientras tanto, escríbenos directamente con tu pregunta.</p>
        </div>
        <div style={{ background: 'linear-gradient(135deg,var(--vino),var(--vino-dark))', borderRadius: '14px', padding: '2.5rem', textAlign: 'center', marginTop: '3rem' }}>
          <h3 style={{ color: 'white', fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.5rem' }}>¿No encontraste tu respuesta?</h3>
          <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '14px', marginBottom: '1.25rem' }}>Escríbenos directamente y con gusto te ayudamos.</p>
          <a className="btn-white" href="https://wa.me/528117783953" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>Preguntar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}

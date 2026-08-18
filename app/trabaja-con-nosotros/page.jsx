import Breadcrumb from '@/components/Breadcrumb';
import BolsaForm from '@/components/BolsaForm';

// Linked from the footer and homepage (as in the original) but marked
// noindex per the migration plan — the vacancy list below is still empty,
// same as the original. The spontaneous-application form IS real content
// and stays fully functional.
export const metadata = {
  title: 'Bolsa de trabajo',
  robots: { index: false, follow: false },
  alternates: { canonical: '/trabaja-con-nosotros' },
};

export default function TrabajaConNosotrosPage() {
  return (
    <div className="page-content">
      <Breadcrumb items={[{ label: 'Bolsa de trabajo' }]} />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 2rem 5rem' }}>
        <div className="section-header center">
          <p className="section-label">Únete al equipo</p>
          <h1 className="section-title">Bolsa de trabajo</h1>
          <p className="section-sub" style={{ margin: '0 auto' }}>Forma parte de uno de los equipos inmobiliarios más dinámicos de Nuevo León.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '2.5rem 0' }}>
          <p className="text-muted" style={{ textAlign: 'center' }}>Por el momento no tenemos vacantes publicadas. Déjanos tu candidatura espontánea y te contactaremos cuando abramos una posición.</p>
        </div>
        <BolsaForm />
      </div>
    </div>
  );
}

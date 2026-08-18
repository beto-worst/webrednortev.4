import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

// Not linked from the main navigation and marked noindex — the original
// site had no advisor/bio data behind this section either (it showed the
// same "not ready yet" placeholder). The route exists with its real URL and
// design so it's ready to go the moment the user provides real team content.
export const metadata = {
  title: 'Nuestro equipo',
  robots: { index: false, follow: false },
  alternates: { canonical: '/equipo' },
};

export default function EquipoPage() {
  return (
    <div className="page-content">
      <Breadcrumb items={[{ label: 'Equipo' }]} />
      <div className="not-found">
        <div className="not-found-inner">
          <h1 className="not-found-title">Nuestro equipo</h1>
          <p className="not-found-desc">Esta página aún no está lista. Muy pronto podrás conocer aquí a todo nuestro equipo.</p>
          <Link className="btn-primary" href="/">← Ir al inicio</Link>
        </div>
      </div>
    </div>
  );
}

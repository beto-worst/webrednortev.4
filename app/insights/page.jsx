import Breadcrumb from '@/components/Breadcrumb';

// Not linked from the main navigation and marked noindex — the original
// site's Insides section was an empty container with a comment noting
// articles are edited via a JS array, no real posts exist yet. Kept as a
// real, ready route with the original design for when content is added.
export const metadata = {
  title: 'Insights Rednorte',
  robots: { index: false, follow: false },
  alternates: { canonical: '/insights' },
};

export default function InsightsPage() {
  return (
    <div className="page-content">
      <Breadcrumb items={[{ label: 'Insights' }]} />
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem 5rem' }}>
        <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
          <div>
            <p className="section-label">Actualizado constantemente</p>
            <h1 className="section-title">Insights Rednorte</h1>
            <p className="section-sub">Tips, tendencias y análisis del mercado inmobiliario de Nuevo León.</p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: '1.5rem' }}>
          <p className="text-muted">Muy pronto encontrarás aquí artículos y análisis del mercado inmobiliario de Nuevo León.</p>
        </div>
      </div>
    </div>
  );
}

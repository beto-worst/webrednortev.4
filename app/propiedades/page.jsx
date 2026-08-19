import Breadcrumb from '@/components/Breadcrumb';
import PropertyFilters from '@/components/PropertyFilters';
import { fetchAllProperties } from '@/lib/properties';

export const metadata = {
  title: 'Propiedades en venta y renta en Monterrey',
  description: 'Explora casas, departamentos, locales, bodegas y terrenos en venta y renta en Monterrey y Nuevo León. Filtra por operación, zona, precio y más.',
  alternates: { canonical: '/propiedades' },
};

export default async function PropiedadesPage({ searchParams }) {
  const sp = await searchParams;
  const { properties, source } = await fetchAllProperties();

  const initialFilters = {
    operacion: sp?.operacion || '',
    tipo: sp?.tipo || '',
    categoria: sp?.categoria || '',
    zona: sp?.zona || '',
    precioMin: sp?.precioMin || '',
    precioMax: sp?.precioMax || '',
    recamaras: sp?.recamaras || '0',
    banos: sp?.banos || '0',
  };

  return (
    <div className="page-content">
      <Breadcrumb items={[{ label: 'Propiedades' }]} />
      <div className="crm-indicator" style={{ margin: '1rem 2rem 0' }}>
        <span className="crm-dot"></span> {source === 'live' ? 'Inventario actualizado' : 'Inventario no disponible en este momento'}
      </div>
      <h1 style={{ margin: '1rem 2rem 0', fontSize: '1.6rem', color: 'var(--negro)' }}>Propiedades en venta y renta en Monterrey y Nuevo León</h1>
      <PropertyFilters properties={properties} initialFilters={initialFilters} />
    </div>
  );
}

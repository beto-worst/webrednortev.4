import { permanentRedirect, notFound } from 'next/navigation';
import { fetchAllProperties, findPropertyById } from '@/lib/properties';
import { buildPropertySlug, extractCodeFromSlug } from '@/lib/slug';

// Legacy route (singular "/propiedad/{code}", used briefly right after the
// Next.js migration). Kept only as a permanent redirect to the new
// "/propiedades/{slug-descriptivo}-{codigo}" URL, so any link already
// shared or indexed under the old pattern keeps working instead of 404ing.
export default async function LegacyPropiedadRedirect({ params }) {
  const { slug } = await params;
  const code = extractCodeFromSlug(slug);
  const { properties } = await fetchAllProperties();
  const property = findPropertyById(properties, code);

  if (!property) {
    notFound();
  }

  permanentRedirect(`/propiedades/${buildPropertySlug(property)}`);
}

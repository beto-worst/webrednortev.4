// lib/slug.js
// Builds SEO-friendly, human-readable slugs for property URLs
// (/propiedades/{slug}) and — critically — extracts the property CODE back
// out of any such slug. The code is always the real lookup key; the
// descriptive words around it are purely cosmetic. This means a URL someone
// already shared keeps working forever even if the property's title,
// operation, or zone later changes in the CRM — we never re-validate the
// descriptive part, only pull the code out of the end of the string.

const TIPO_WORDS = {
  Casa: 'casa',
  Depto: 'departamento',
  Terreno: 'terreno',
  Local: 'local',
  Oficina: 'oficina',
  Bodega: 'bodega',
};

function slugifyPart(str) {
  return String(str || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Property codes look like "NN-HDU152" or "NN-LT1001051" — always a short
// letter prefix, a hyphen, then alphanumerics, at the very end of the slug.
const CODE_PATTERN = /([A-Za-z]{1,4}-[A-Za-z0-9]+)$/;

export function buildPropertySlug(property) {
  if (!property) return '';
  const tipoWord = TIPO_WORDS[property.type] || 'propiedad';
  const opWord = property.op === 'Renta' ? 'renta' : 'venta';
  const zonaSlug = slugifyPart(property.municipio || property.zone || '');
  const parts = [tipoWord, 'en', opWord];
  if (zonaSlug) parts.push('en', zonaSlug);
  const base = parts.join('-');
  const capitalized = base.charAt(0).toUpperCase() + base.slice(1);
  return `${capitalized}-${property.id}`;
}

export function extractCodeFromSlug(slug) {
  if (!slug) return '';
  const match = String(slug).match(CODE_PATTERN);
  return match ? match[1] : slug;
}

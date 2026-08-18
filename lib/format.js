// Small formatting helpers ported from the legacy inline script.

export function formatMxPhone(raw) {
  const d = String(raw || '').replace(/\D/g, '');
  const local = d.length === 12 && d.startsWith('52') ? d.slice(2) : d;
  if (local.length !== 10) return d ? '+' + d : '';
  return `+52 (${local.slice(0, 3)}) ${local.slice(3, 6)}-${local.slice(6)}`;
}

export function advisorInitials(name) {
  return (name || 'Rednorte').trim().split(/\s+/).slice(0, 2).map((w) => w[0].toUpperCase()).join('');
}

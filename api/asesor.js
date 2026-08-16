// api/asesor.js
// Trae el asesor real asignado a una propiedad. NOCNOK no expone este dato en
// su API pública, así que usamos una tabla código -> asesor exportada desde
// el CRM (api/asesores-data.json). Actualízala reemplazando ese archivo con
// una exportación más reciente cuando cambien asignaciones.

import asesoresData from './asesores-data.json';

export default async function handler(req, res) {
  const code = String(req.query.code || '').trim().toUpperCase();
  if (!code) {
    return res.status(400).json({ success: false, message: 'Falta el código de la propiedad' });
  }

  const agent = asesoresData[code];
  if (!agent || !agent.name) {
    return res.status(200).json({ success: false });
  }

  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
  return res.status(200).json({
    success: true,
    agent: {
      name: agent.name.trim(),
      phone: agent.phone || '',
      email: '',
      photo: '',
      company: 'Rednorte Inmobiliaria'
    }
  });
}

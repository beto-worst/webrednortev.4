// api/debug-detail.js
// TEMPORAL: endpoint de investigación para descubrir en qué llamada de NOCNOK
// viene el asesor/agente asignado a una propiedad. Se borra una vez resuelto.

export default async function handler(req, res) {
  const apiKey = process.env.NOCNOK_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ success: false, message: 'Falta NOCNOK_API_KEY' });
  }

  const code = req.query.code || 'NN-GZT991';
  const headers = { 'Content-Type': 'application/json', 'x-api-key': apiKey };

  const candidates = [
    { name: 'get_property_by_code', url: `https://api.nocnok.com/v1/sites/properties/${code}`, method: 'GET' },
    { name: 'get_property_plain', url: `https://api.nocnok.com/v1/properties/${code}`, method: 'GET' },
    { name: 'realtors_list', url: 'https://api.nocnok.com/v1/sites/realtors', method: 'GET' },
    { name: 'users_list', url: 'https://api.nocnok.com/v1/sites/users', method: 'GET' },
    { name: 'team_list', url: 'https://api.nocnok.com/v1/sites/team', method: 'GET' },
    { name: 'agents_list', url: 'https://api.nocnok.com/v1/sites/agents', method: 'GET' },
    { name: 'realtor_by_property', url: `https://api.nocnok.com/v1/sites/properties/${code}/realtor`, method: 'GET' },
  ];

  const results = {};
  for (const c of candidates) {
    try {
      const r = await fetch(c.url, { method: c.method, headers });
      const text = await r.text();
      let data;
      try { data = JSON.parse(text); } catch { data = text.slice(0, 300); }
      results[c.name] = { status: r.status, ok: r.ok, url: c.url, data };
    } catch (err) {
      results[c.name] = { error: String(err) };
    }
  }

  return res.status(200).json(results);
}

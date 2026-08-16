// api/debug-nocnok.js
// Endpoint temporal de diagnóstico para encontrar cómo exponer el asesor
// asignado a través de la API de NOCNOK. Se borra en cuanto encontremos
// el endpoint correcto.

export default async function handler(req, res) {
  const code = String(req.query.code || 'NN-HDM056').trim();
  const apiKey = process.env.NOCNOK_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ success: false, message: 'Falta NOCNOK_API_KEY' });
  }

  const candidates = [
    { method: 'GET', url: `https://api.nocnok.com/v1/sites/properties/${code}` },
    { method: 'GET', url: `https://api.nocnok.com/v1/sites/properties/${code}/agent` },
    { method: 'GET', url: `https://api.nocnok.com/v1/sites/agents` },
    { method: 'GET', url: `https://api.nocnok.com/v1/sites/members` },
    { method: 'GET', url: `https://api.nocnok.com/v1/agents` },
    { method: 'GET', url: `https://api.nocnok.com/v1/sites/properties/${code}/agents` }
  ];

  const results = [];
  for (const c of candidates) {
    try {
      const r = await fetch(c.url, { method: c.method, headers: { 'x-api-key': apiKey, 'Content-Type': 'application/json' } });
      const text = await r.text();
      results.push({ url: c.url, status: r.status, bodyPreview: text.slice(0, 4000) });
    } catch (err) {
      results.push({ url: c.url, error: String(err) });
    }
  }

  return res.status(200).json({ results });
}

// Temporary diagnostic endpoint — round 2, trying v2 namespace and Spanish field names.
export default async function handler(req, res) {
  const code = String(req.query.code || 'NN-GYC540').trim();
  const apiKey = process.env.NOCNOK_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ success: false, message: 'Falta NOCNOK_API_KEY' });
  }

  const candidates = [
    { url: `https://api.nocnok.com/v2/sites/properties/${code}` },
    { url: `https://api.nocnok.com/v2/sites/properties/search` , method: 'POST', body: { pageNumber: 1, pageSize: 1 } },
    { url: `https://api.nocnok.com/v1/sites/properties/${code}/responsable` },
    { url: `https://api.nocnok.com/v1/sites/properties/${code}?include=responsable` },
    { url: `https://api.nocnok.com/v1/sites/responsables` },
    { url: `https://api.nocnok.com/v1/sites/collaborators` },
    { url: `https://api.nocnok.com/v2/sites/agents` },
    { url: `https://api.nocnok.com/v2/sites/members` },
    { url: `https://api.nocnok.com/v2/accounts/lookup/members` },
    { url: `https://api.nocnok.com/v2/crm/163221/members` }
  ];

  const results = [];
  for (const c of candidates) {
    try {
      const opts = { method: c.method || 'GET', headers: { 'x-api-key': apiKey, 'Content-Type': 'application/json' } };
      if (c.body) opts.body = JSON.stringify(c.body);
      const r = await fetch(c.url, opts);
      const text = await r.text();
      results.push({ url: c.url, status: r.status, bodyPreview: text.slice(0, 800) });
    } catch (err) {
      results.push({ url: c.url, error: String(err) });
    }
  }

  return res.status(200).json({ results });
}

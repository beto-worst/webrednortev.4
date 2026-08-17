// api/contactar-agente.js
// Reenvía un lead de contacto al endpoint oficial de NOCNOK
// (POST /v1/sites/contacts/agents), que internamente lo enruta al
// asesor asignado a la propiedad sin que nosotros necesitemos saberlo.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: 'Método no permitido' });
  }

  const apiKey = process.env.NOCNOK_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ success: false, message: 'Falta configurar NOCNOK_API_KEY en las variables de entorno de Vercel' });
  }

  const { propertyCode, client, utms } = req.body || {};
  if (!propertyCode || !client || !client.name || !client.phone) {
    return res.status(400).json({ success: false, message: 'Faltan datos requeridos (propertyCode, client.name, client.phone)' });
  }

  try {
    const nocnokRes = await fetch('https://api.nocnok.com/v1/sites/contacts/agents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
      },
      body: JSON.stringify({
        propertyCode,
        client: {
          name: client.name,
          email: client.email || '',
          phone: client.phone,
          message: client.message || ''
        },
        utms: utms || { source: 'rednorte.mx', medium: 'web', campaign: '', content: '', term: '' }
      })
    });

    if (!nocnokRes.ok) {
      const detail = await nocnokRes.text();
      return res.status(nocnokRes.status).json({ success: false, message: 'Error desde NOCNOK', detail });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Error al conectar con NOCNOK', detail: String(err) });
  }
}

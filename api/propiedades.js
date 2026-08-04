// api/propiedades.js
// Función serverless de Vercel: hace de intermediario (proxy) entre el
// sitio y la API de NOCNOK, para que la API key nunca quede expuesta
// en el navegador. Se ejecuta en el servidor de Vercel, no en el cliente.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: 'Método no permitido' });
  }

  const apiKey = process.env.NOCNOK_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ success: false, message: 'Falta configurar NOCNOK_API_KEY en las variables de entorno de Vercel' });
  }

  try {
    const body = req.body && Object.keys(req.body).length > 0 ? req.body : { pageNumber: 1, pageSize: 20 };

    const nocnokRes = await fetch('https://api.nocnok.com/v1/sites/properties/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
      },
      body: JSON.stringify(body)
    });

    const data = await nocnokRes.json();

    if (!nocnokRes.ok) {
      return res.status(nocnokRes.status).json({ success: false, message: 'Error desde NOCNOK', detail: data });
    }

    // Cache breve para no saturar el API de NOCNOK en visitas seguidas
    res.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=300');
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Error al conectar con NOCNOK', detail: String(err) });
  }
}

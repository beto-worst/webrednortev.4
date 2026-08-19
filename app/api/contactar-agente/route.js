// app/api/contactar-agente/route.js
// Port of the legacy api/contactar-agente.js. Forwards a contact lead to
// NOCNOK's official contacts/agents endpoint, which internally routes it to
// the property's assigned advisor.
import { NextResponse } from 'next/server';

export async function POST(req) {
  const apiKey = process.env.NOCNOK_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { success: false, message: 'Falta configurar NOCNOK_API_KEY en las variables de entorno de Vercel' },
      { status: 500 }
    );
  }

  let body = {};
  try {
    body = await req.json();
  } catch {
    body = {};
  }
  const { propertyCode, client, utms } = body || {};
  if (!propertyCode || !client || !client.name || !client.phone) {
    return NextResponse.json(
      { success: false, message: 'Faltan datos requeridos (propertyCode, client.name, client.phone)' },
      { status: 400 }
    );
  }

  try {
    const nocnokRes = await fetch('https://api.nocnok.com/v1/sites/contacts/agents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify({
        propertyCode,
        client: {
          name: client.name,
          email: client.email || '',
          phone: client.phone,
          message: client.message || '',
        },
        utms: utms || { source: 'rednorte.mx', medium: 'web', campaign: '', content: '', term: '' },
      }),
    });

    if (!nocnokRes.ok) {
      const detail = await nocnokRes.text();
      return NextResponse.json({ success: false, message: 'Error desde NOCNOK', detail }, { status: nocnokRes.status });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: 'Error al conectar con NOCNOK', detail: String(err) },
      { status: 500 }
    );
  }
}

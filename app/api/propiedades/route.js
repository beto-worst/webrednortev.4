// app/api/propiedades/route.js
// Port of the legacy api/propiedades.js Vercel serverless function to a
// Next.js App Router route handler. Same logic: proxies to NOCNOK's
// properties search endpoint so the API key never reaches the browser.
import { NextResponse } from 'next/server';

export async function POST(req) {
  const apiKey = process.env.NOCNOK_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { success: false, message: 'Falta configurar NOCNOK_API_KEY en las variables de entorno de Vercel' },
      { status: 500 }
    );
  }

  try {
    let body = {};
    try {
      body = await req.json();
    } catch {
      body = {};
    }
    if (!body || Object.keys(body).length === 0) {
      body = { pageNumber: 1, pageSize: 20 };
    }

    const nocnokRes = await fetch('https://api.nocnok.com/v1/sites/properties/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify(body),
    });

    const data = await nocnokRes.json();

    if (!nocnokRes.ok) {
      return NextResponse.json(
        { success: false, message: 'Error desde NOCNOK', detail: data },
        { status: nocnokRes.status }
      );
    }

    return NextResponse.json(data, {
      headers: { 'Cache-Control': 's-maxage=120, stale-while-revalidate=300' },
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: 'Error al conectar con NOCNOK', detail: String(err) },
      { status: 500 }
    );
  }
}

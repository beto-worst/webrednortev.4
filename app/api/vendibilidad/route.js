// app/api/vendibilidad/route.js
// NEW route added during the Next.js migration as a security fix: the
// legacy vendibilidad tool POSTed straight from the browser to a hardcoded
// Google Apps Script webhook URL that was visible in the page source. That
// URL now lives server-side only, in the VENDIBILIDAD_WEBHOOK_URL env var
// (set it in Vercel to the same Apps Script /exec URL that used to be
// hardcoded as WEBHOOK_URL in index.html). The browser now posts here
// instead, and this route forwards the payload to the real webhook.
import { NextResponse } from 'next/server';

export async function POST(req) {
  const webhookUrl = process.env.VENDIBILIDAD_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { success: false, message: 'Falta configurar VENDIBILIDAD_WEBHOOK_URL en las variables de entorno de Vercel' },
      { status: 500 }
    );
  }

  let payload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Cuerpo inválido' }, { status: 400 });
  }

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    });
    // El Apps Script original tampoco garantiza una respuesta útil ni CORS;
    // el sitio legado ya ignoraba el resultado del fetch (comportamiento
    // "fire and forget"), así que replicamos eso aquí.
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, message: String(err) }, { status: 500 });
  }
}

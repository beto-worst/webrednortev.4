// app/api/asesor/route.js
// Port of the legacy api/asesor.js, now delegating to lib/advisor.js so the
// same lookup logic can also be used server-side by the property detail page.
import { NextResponse } from 'next/server';
import { getAdvisorForProperty } from '@/lib/advisor';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = String(searchParams.get('code') || '').trim();
  if (!code) {
    return NextResponse.json({ success: false, message: 'Falta el código de la propiedad' }, { status: 400 });
  }

  const agent = await getAdvisorForProperty(code);
  if (agent) {
    return NextResponse.json(
      { success: true, agent },
      { headers: { 'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400' } }
    );
  }

  return NextResponse.json({ success: false });
}

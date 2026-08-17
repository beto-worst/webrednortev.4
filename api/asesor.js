// api/asesor.js
// Trae el asesor real asignado a una propiedad. NOCNOK no expone este dato en
// su API pública (/v1/sites/properties), pero sí lo publica en el HTML de la
// ficha pública de cada propiedad en admin3.nocnok.com (el sitio nativo de
// NOCNOK para esta cuenta, independiente del dominio propio rednorte.mx).
// Si esa consulta falla, caemos a la tabla estática asesores-data.json
// (exportada del CRM) como respaldo.

import asesoresData from './asesores-data.json';

function extractField(html, key) {
  const match = html.match(new RegExp('"' + key + '":"([^"]*)"'));
  return match ? match[1] : '';
}

// El campo agentLogoUrl no trae el sufijo de tamaño ("l" = large) que sí usa
// NOCNOK al renderizar la imagen en su propio sitio; sin él, S3 responde 403.
function toDisplayableImageUrl(url) {
  if (!url) return '';
  const dot = url.lastIndexOf('.');
  if (dot === -1) return url;
  return url.slice(0, dot) + 'l' + url.slice(dot);
}

function fromStaticTable(code) {
  const agent = asesoresData[code];
  if (!agent || !agent.name) return null;
  return {
    name: agent.name.trim(),
    phone: agent.phone || '',
    email: '',
    photo: '',
    company: 'Rednorte Inmobiliaria'
  };
}

export default async function handler(req, res) {
  const code = String(req.query.code || '').trim().toUpperCase();
  if (!code) {
    return res.status(400).json({ success: false, message: 'Falta el código de la propiedad' });
  }

  try {
    const pageRes = await fetch(`https://admin3.nocnok.com/propiedad/${code.toLowerCase()}`);
    if (pageRes.ok) {
      const html = (await pageRes.text()).replace(/\\"/g, '"');
      const name = extractField(html, 'agentName');
      if (name) {
        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
        return res.status(200).json({
          success: true,
          agent: {
            name,
            phone: extractField(html, 'agentPhoneNumber'),
            email: extractField(html, 'agentEmail'),
            photo: toDisplayableImageUrl(extractField(html, 'agentLogoUrl')),
            company: extractField(html, 'companyName') || 'Rednorte Inmobiliaria'
          }
        });
      }
    }
  } catch (err) {
    // sigue al respaldo estático
  }

  const fallback = fromStaticTable(code);
  if (fallback) {
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    return res.status(200).json({ success: true, agent: fallback });
  }

  return res.status(200).json({ success: false });
}

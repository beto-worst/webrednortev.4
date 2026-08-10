// api/asesor.js
// Trae el asesor real asignado a una propiedad. NOCNOK no expone este dato en su
// API pública (/v1/sites/properties), pero sí lo publica en el HTML de la ficha
// pública de cada propiedad en rednorte.mx (que corre sobre NOCNOK). Este endpoint
// lee esa página y extrae el bloque de asesor ya usado ahí.

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

export default async function handler(req, res) {
  const code = String(req.query.code || '').trim();
  if (!code) {
    return res.status(400).json({ success: false, message: 'Falta el código de la propiedad' });
  }

  try {
    const pageRes = await fetch(`https://www.rednorte.mx/propiedad/${code.toLowerCase()}`);
    if (!pageRes.ok) {
      return res.status(200).json({ success: false });
    }
    const html = pageRes.text ? (await pageRes.text()).replace(/\\"/g, '"') : '';

    const name = extractField(html, 'agentName');
    if (!name) {
      return res.status(200).json({ success: false });
    }

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    return res.status(200).json({
      success: true,
      agent: {
        name,
        phone: extractField(html, 'agentPhoneNumber'),
        email: extractField(html, 'agentEmail'),
        photo: toDisplayableImageUrl(extractField(html, 'agentLogoUrl')),
        company: extractField(html, 'companyName')
      }
    });
  } catch (err) {
    return res.status(200).json({ success: false, message: String(err) });
  }
}

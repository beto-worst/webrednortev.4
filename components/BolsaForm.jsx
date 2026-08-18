'use client';

import { useState } from 'react';
import { openModal } from '@/lib/modal';

// Ported from the legacy enviarBolsaWA() — the spontaneous-application
// form is real content (unlike the empty vacancy list on this page).
export default function BolsaForm() {
  const [nombre, setNombre] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [puesto, setPuesto] = useState('Asesor inmobiliario');
  const [mensaje, setMensaje] = useState('');

  const enviar = () => {
    if (!nombre || !tel || !email) {
      alert('Por favor completa nombre, teléfono y correo electrónico.');
      return;
    }

    const lines = ['Hola, quiero postularme a Rednorte.', ''];
    if (puesto) lines.push(`Puesto de interés: ${puesto}`);
    lines.push(`Nombre: ${nombre}`, `Teléfono: ${tel}`, `Correo: ${email}`);
    if (mensaje) lines.push('', `¿Por qué quiere unirse?: ${mensaje}`);

    window.open('https://wa.me/528117783953?text=' + encodeURIComponent(lines.join('\n')), '_blank');
    openModal('successModal');
  };

  return (
    <div style={{ background: 'white', borderRadius: '14px', border: '1px solid var(--gris-claro)', padding: '2rem', marginTop: '2rem' }}>
      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--negro)', marginBottom: '1.25rem' }}>Enviar candidatura espontánea</h3>
      <div className="form-row">
        <div className="form-group"><label>Nombre completo *</label><input type="text" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} /></div>
        <div className="form-group"><label>Teléfono *</label><input type="tel" placeholder="+52 (81)" value={tel} onChange={(e) => setTel(e.target.value)} /></div>
      </div>
      <div className="form-group"><label>Correo electrónico *</label><input type="email" placeholder="correo@ejemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
      <div className="form-group"><label>Puesto de interés</label>
        <select value={puesto} onChange={(e) => setPuesto(e.target.value)}>
          <option>Asesor inmobiliario</option>
          <option>Coordinador de ventas</option>
          <option>Marketing digital</option>
          <option>Administración</option>
          <option>Otro</option>
        </select>
      </div>
      <div className="form-group"><label>¿Por qué quieres unirte a Rednorte?</label>
        <textarea rows="4" placeholder="Cuéntanos sobre ti..." value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
      </div>
      <button className="btn-primary-full" type="button" onClick={enviar}>Enviar solicitud</button>
    </div>
  );
}

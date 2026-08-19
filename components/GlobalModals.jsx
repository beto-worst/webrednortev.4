'use client';

import { useEffect, useState } from 'react';

// Mounts the two site-wide modals (success confirmation + "AI search, coming
// soon") once in the root layout. Any client component can open/close them
// via lib/modal.js's openModal(id)/closeModal(id), which dispatch a 'rn:modal'
// CustomEvent this component listens for — same idea as the legacy
// openModal()/closeModal() globals, without needing React context everywhere.
export default function GlobalModals() {
  const [open, setOpen] = useState({ successModal: false, aiModal: false });

  useEffect(() => {
    const handler = (e) => {
      const { id, open: isOpen } = e.detail || {};
      if (!id) return;
      setOpen((prev) => ({ ...prev, [id]: isOpen }));
    };
    window.addEventListener('rn:modal', handler);
    return () => window.removeEventListener('rn:modal', handler);
  }, []);

  const close = (id) => setOpen((prev) => ({ ...prev, [id]: false }));

  const onOverlayClick = (id) => (e) => {
    if (e.target === e.currentTarget) close(id);
  };

  return (
    <>
      <div className={`modal-overlay${open.successModal ? ' open' : ''}`} id="successModal" onClick={onOverlayClick('successModal')}>
        <div className="modal-box">
          <div className="modal-icon"></div>
          <h3>¡Mensaje enviado!</h3>
          <p>Recibimos tu solicitud. Uno de nuestros asesores se comunicará contigo en menos de 24 horas.</p>
          <button className="btn-modal-close" onClick={() => close('successModal')} type="button">Aceptar</button>
        </div>
      </div>

      <div className={`modal-overlay${open.aiModal ? ' open' : ''}`} id="aiModal" onClick={onOverlayClick('aiModal')}>
        <div className="modal-box" style={{ background: 'none', padding: 0, maxWidth: '440px' }}>
          <div className="ai-modal-box">
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}></div>
            <div className="coming-soon-badge">PRÓXIMAMENTE</div>
            <h3>Buscar con Inteligencia Artificial</h3>
            <p>Pronto podrás describir en lenguaje natural la propiedad que buscas y nuestra IA encontrará las mejores opciones del inventario para ti.</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>Ej: &quot;Busco casa en San Pedro con alberca, 3 recámaras y menos de 8 millones&quot;</p>
            <button className="btn-modal-close-dark" onClick={() => close('aiModal')} type="button">Cerrar</button>
          </div>
        </div>
      </div>
    </>
  );
}

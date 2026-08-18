'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

// Ported from the legacy setSearchTab()/searchHeroProperties(). On submit it
// now navigates to a real, filterable /propiedades?... URL instead of just
// toggling hidden filter <select>s and calling navTo('propiedades').
export default function HeroSearch() {
  const router = useRouter();
  const [op, setOp] = useState('Venta');
  const tipoRef = useRef(null);
  const zonaRef = useRef(null);
  const precioRef = useRef(null);
  const recamarasRef = useRef(null);

  const submit = () => {
    const params = new URLSearchParams();
    if (op) params.set('operacion', op);
    if (tipoRef.current?.value) params.set('tipo', tipoRef.current.value);
    if (zonaRef.current?.value) params.set('zona', zonaRef.current.value);
    if (precioRef.current?.value) params.set('precioMax', precioRef.current.value);
    if (recamarasRef.current?.value && recamarasRef.current.value !== '0') params.set('recamaras', recamarasRef.current.value);
    router.push(`/propiedades?${params.toString()}`);
  };

  return (
    <div className="hero-search">
      <h3> Encuentra propiedades en Monterrey y Nuevo León</h3>
      <p style={{ fontSize: '13px', color: 'var(--gris-medio)', lineHeight: 1.5, margin: '0 0 1.5rem' }}>Consulta nuestro inventario residencial, comercial e industrial en venta y renta.</p>
      <div className="search-tabs">
        <button type="button" className={`search-tab${op === 'Venta' ? ' active' : ''}`} onClick={() => setOp('Venta')}>Comprar</button>
        <button type="button" className={`search-tab${op === 'Renta' ? ' active' : ''}`} onClick={() => setOp('Renta')}>Rentar</button>
      </div>
      <div className="search-grid">
        <div className="search-field">
          <label>Tipo de propiedad</label>
          <select ref={tipoRef} defaultValue="">
            <option value="">Todos</option>
            <option value="Casa">Casa</option>
            <option value="Depto">Departamento</option>
            <option value="Local">Local comercial</option>
            <option value="Bodega">Bodega industrial</option>
            <option value="Terreno">Terreno</option>
          </select>
        </div>
        <div className="search-field">
          <label>Municipio / Zona</label>
          <select ref={zonaRef} defaultValue="">
            <option value="">Todos</option>
            <option value="San Pedro Garza García">San Pedro Garza García</option>
            <option value="Monterrey">Monterrey Centro</option>
            <option value="San Nicolás">San Nicolás</option>
            <option value="Guadalupe">Guadalupe</option>
            <option value="Santa Catarina">Santa Catarina</option>
          </select>
        </div>
        <div className="search-field">
          <label>Precio máximo</label>
          <select ref={precioRef} defaultValue="">
            <option value="">Sin límite</option>
            <option value="2000000">Hasta $2M</option>
            <option value="5000000">Hasta $5M</option>
            <option value="10000000">Hasta $10M</option>
            <option value="20000000">Hasta $20M</option>
          </select>
        </div>
        <div className="search-field">
          <label>Recámaras</label>
          <select ref={recamarasRef} defaultValue="0">
            <option value="0">Cualquiera</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>
      </div>
      <button className="btn-search" type="button" onClick={submit}>Ver propiedades disponibles</button>
    </div>
  );
}

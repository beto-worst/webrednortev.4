'use client';

import { useEffect, useRef } from 'react';
import './vendibilidad.css';
import { vendibilidadShellHtml } from './vendibilidadShell';
import { vendibilidadScriptSrc } from './vendibilidadScript';

// Client Component wrapper for the legacy "Reporte de Vendibilidad"
// diagnostic quiz. Same approach as ValuacionTool: ported HTML shell via
// dangerouslySetInnerHTML + the ported script injected as a real classic
// <script> so window.VD.* keeps driving it exactly like before. Includes
// the webhook security fix — see vendibilidadScript.js.
export default function VendibilidadTool() {
  const containerRef = useRef(null);
  const scriptRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.textContent = vendibilidadScriptSrc;
    document.body.appendChild(script);
    scriptRef.current = script;

    return () => {
      if (scriptRef.current) {
        scriptRef.current.remove();
        scriptRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: vendibilidadShellHtml }} />;
}

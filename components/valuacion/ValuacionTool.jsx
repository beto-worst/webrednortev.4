'use client';

import { useEffect, useRef } from 'react';
import { valuacionShellHtml } from './valuacionShell';
import { valuacionScriptSrc } from './valuacionScript';

// Client Component wrapper for the legacy "Estimación de Valor de Mercado"
// calculator. Renders the ported HTML shell via dangerouslySetInnerHTML and
// then injects the ported script as a real classic <script> so its
// document.getElementById()-driven logic runs exactly like it did in the
// old index.html. See valuacionShell.js / valuacionScript.js for details on
// what changed (h1->h2 downgrade, IIFE wrap) and why.
export default function ValuacionTool() {
  const containerRef = useRef(null);
  const scriptRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.textContent = valuacionScriptSrc;
    document.body.appendChild(script);
    scriptRef.current = script;

    // The legacy script waits for 'DOMContentLoaded' to run its init
    // (populate today's date, add the first 4 comparable rows, etc). That
    // real browser event already fired long before this component mounted,
    // so we dispatch a synthetic one — addEventListener doesn't care
    // whether the event was "real", only its type.
    document.dispatchEvent(new Event('DOMContentLoaded'));

    return () => {
      if (scriptRef.current) {
        scriptRef.current.remove();
        scriptRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: valuacionShellHtml }} />;
}

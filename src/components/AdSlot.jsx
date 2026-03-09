import { useEffect, useRef } from 'react';

let adQueue = Promise.resolve();

export function AdSlot({ adKey, width, height, scriptSrc }) {
  const containerRef = useRef(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || loadedRef.current) return;
    loadedRef.current = true;

    // Queue ad loads sequentially so atOptions doesn't get overwritten
    adQueue = adQueue.then(() => {
      return new Promise((resolve) => {
        if (!containerRef.current) { resolve(); return; }

        // Set global atOptions
        window.atOptions = {
          'key': adKey,
          'format': 'iframe',
          'height': height,
          'width': width,
          'params': {}
        };

        // Load the invoke script
        const invokeScript = document.createElement('script');
        invokeScript.type = 'text/javascript';
        invokeScript.src = scriptSrc;
        invokeScript.onload = () => setTimeout(resolve, 500);
        invokeScript.onerror = () => resolve();
        containerRef.current.appendChild(invokeScript);
      });
    });

    return () => {
      // Don't clear on unmount to keep ads alive
    };
  }, [adKey, width, height, scriptSrc]);

  return (
    <div
      ref={containerRef}
      style={{ width: `${width}px`, height: `${height}px`, overflow: 'hidden' }}
    />
  );
}

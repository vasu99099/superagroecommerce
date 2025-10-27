'use client';

import * as React from 'react';

/**
 * Detects if the current viewport is considered "mobile"
 * (matches the same breakpoint as Tailwind's md).
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    // Initial value
    setIsMobile(mediaQuery.matches);

    // Listen for changes
    const handler = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return isMobile;
}

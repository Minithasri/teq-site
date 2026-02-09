'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable smooth scrolling temporarily to force instant jump to top
    document.documentElement.style.scrollBehavior = 'auto';

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });

    // Re-enable smooth scrolling after a small delay
    // This timeout ensures the browser has rendered the new page at the top
    const timeoutId = setTimeout(() => {
      document.documentElement.style.scrollBehavior = '';
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}

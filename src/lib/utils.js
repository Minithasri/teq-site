import clsx from 'clsx';

export function cn(...inputs) {
  return clsx(inputs);
}

export function formatDate(date) {
  try {
    const d = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(d);
    // eslint-disable-next-line unused-imports/no-unused-vars
  } catch (_e) {
    return '';
  }
}

export function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
}

export function isBrowser() {
  return typeof window !== 'undefined';
}

/**
 * Analytics stub
 */
export const trackEvent = (event, properties = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, properties);
  }
};

/**
 * Generate structured data for JSON-LD
 */
export function generateStructuredData({
  type = 'Website',
  name,
  description,
  url,
  logo,
  sameAs = [],
}) {
  const baseUrl = getBaseUrl();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: name || 'GWC Data AI',
    description: description || 'Agentic AI and Data Analytics Solutions',
    url: url || baseUrl,
    logo: logo || `${baseUrl}/icons/icon-512.png`,
    sameAs: sameAs,
  };

  return structuredData;
}

/**
 * Debounce function for performance
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for performance
 */
export function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

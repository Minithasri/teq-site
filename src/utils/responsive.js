/**
 * Responsive breakpoint utilities
 */

export const breakpoints = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

/**
 * Check if current viewport is mobile
 */
export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < breakpoints.md;
};

/**
 * Check if current viewport is tablet
 */
export const isTablet = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= breakpoints.md && window.innerWidth < breakpoints.lg;
};

/**
 * Check if current viewport is desktop
 */
export const isDesktop = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= breakpoints.lg;
};

/**
 * Check if current viewport is large desktop
 */
export const isLargeDesktop = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= breakpoints.xl;
};

/**
 * Get current device type
 */
export const getDeviceType = () => {
  if (typeof window === 'undefined') return 'desktop';

  const width = window.innerWidth;
  if (width < breakpoints.md) return 'mobile';
  if (width < breakpoints.lg) return 'tablet';
  if (width < breakpoints.xl) return 'desktop';
  return 'large-desktop';
};

/**
 * Check if device is touch capable
 */
export const isTouchDevice = () => {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

/**
 * Responsive image sizes helper
 */
export const getImageSizes = (breakpointSizes = {}) => {
  const defaultSizes = {
    mobile: '100vw',
    tablet: '100vw',
    desktop: '100vw',
    default: '100vw',
  };

  const sizes = { ...defaultSizes, ...breakpointSizes };

  return `(max-width: ${breakpoints.md - 1}px) ${sizes.mobile}, 
          (max-width: ${breakpoints.lg - 1}px) ${sizes.tablet}, 
          ${sizes.desktop}`;
};

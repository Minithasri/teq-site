'use client';

import { useEffect, useState } from 'react';
import { breakpoints } from '../utils/responsive';

/**
 * Hook to detect if the current viewport is mobile
 * @returns {boolean} True if viewport is mobile size
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < breakpoints.md);
    };

    // Initial check
    checkDevice();

    // Add event listener
    window.addEventListener('resize', checkDevice);

    // Cleanup
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return isMobile;
}

/**
 * Hook to get current device type
 * @returns {'mobile' | 'tablet' | 'desktop' | 'large-desktop'} Current device type
 */
export function useDeviceType() {
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      if (width < breakpoints.md) setDeviceType('mobile');
      else if (width < breakpoints.lg) setDeviceType('tablet');
      else if (width < breakpoints.xl) setDeviceType('desktop');
      else setDeviceType('large-desktop');
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);

    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  return deviceType;
}

/**
 * Hook to get current viewport width
 * @returns {number} Current viewport width
 */
export function useViewportWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return width;
}

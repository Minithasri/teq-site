'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to get window dimensions
 * @returns {Object} { width, height }
 */
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

/**
 * Hook to get responsive breakpoint information
 * @returns {Object} Breakpoint information
 */
export function useBreakpoint() {
  const { width } = useWindowSize();

  const breakpoints = {
    isXs: width < 640,
    isSm: width >= 640 && width < 768,
    isMd: width >= 768 && width < 1024,
    isLg: width >= 1024 && width < 1280,
    isXl: width >= 1280 && width < 1536,
    is2Xl: width >= 1536,
  };

  return {
    width,
    ...breakpoints,
    current: !width
      ? 'ssr'
      : breakpoints.is2Xl
        ? '2xl'
        : breakpoints.isXl
          ? 'xl'
          : breakpoints.isLg
            ? 'lg'
            : breakpoints.isMd
              ? 'md'
              : breakpoints.isSm
                ? 'sm'
                : 'xs',
  };
}

/**
 * Hook to detect if window is in landscape or portrait mode
 * @returns {'landscape' | 'portrait'} Orientation
 */
export function useOrientation() {
  const [orientation, setOrientation] = useState(
    typeof window !== 'undefined' && window.innerHeight > window.innerWidth
      ? 'portrait'
      : 'landscape'
  );

  useEffect(() => {
    const handleResize = () => {
      setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return orientation;
}

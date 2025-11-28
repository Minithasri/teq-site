'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Hook to detect scroll direction
 * @param {number} threshold - Scroll threshold in pixels
 * @returns {'up' | 'down' | null} Scroll direction
 */
export function useScrollDirection(threshold = 10) {
  const [scrollDirection, setScrollDirection] = useState(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      if (Math.abs(scrollY - lastScrollY.current) < threshold) {
        ticking.current = false;
        return;
      }

      const direction = scrollY > lastScrollY.current ? 'down' : 'up';
      if (direction !== scrollDirection) {
        setScrollDirection(direction);
      }

      lastScrollY.current = scrollY > 0 ? scrollY : 0;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDirection, threshold]);

  return scrollDirection;
}

/**
 * Hook to detect if page is scrolled
 */
export function useIsScrolled(threshold = 50) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkScroll = () => setIsScrolled(window.pageYOffset > threshold);

    checkScroll();
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, [threshold]);

  return isScrolled;
}

/**
 * Hook to get current scroll position
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updatePosition = () => setScrollPosition(window.pageYOffset);

    updatePosition();
    window.addEventListener('scroll', updatePosition, { passive: true });
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
}

/**
 * Hook for smooth scroll behavior
 */
export function useSmoothScroll(enabled = true, scrollSpeed = 1, smoothness = 0.5) {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined' || typeof document === 'undefined') return;

    const originalScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';

    let isScrolling = false;
    let targetScroll = window.scrollY;
    let currentScroll = window.scrollY;

    const smoothScrollHandler = e => {
      e.preventDefault();
      const delta = e.deltaY || e.detail || -e.wheelDelta || 0;
      const scrollAmount = delta * scrollSpeed;

      targetScroll += scrollAmount;
      targetScroll = Math.max(
        0,
        Math.min(targetScroll, document.documentElement.scrollHeight - window.innerHeight)
      );

      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(animate);
      }
    };

    const animate = () => {
      currentScroll += (targetScroll - currentScroll) * smoothness;
      if (Math.abs(targetScroll - currentScroll) > 0.5) {
        window.scrollTo(0, currentScroll);
        requestAnimationFrame(animate);
      } else {
        window.scrollTo(0, targetScroll);
        currentScroll = targetScroll;
        isScrolling = false;
      }
    };

    const events = [
      ['wheel', smoothScrollHandler, { passive: false }],
      ['mousewheel', smoothScrollHandler, { passive: false }],
      ['DOMMouseScroll', smoothScrollHandler, { passive: false }],
    ];

    events.forEach(([event, handler, options]) => window.addEventListener(event, handler, options));

    return () => {
      events.forEach(([event, handler]) => window.removeEventListener(event, handler));
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
    };
  }, [enabled, scrollSpeed, smoothness]);
}

/**
 * Enhanced hook that combines smooth scroll with scroll position tracking
 */
export function useEnhancedScroll(enabled = true, options = {}) {
  const { scrollSpeed = 0.8, smoothness = 0.1, threshold = 50 } = options;

  const scrollPosition = useScrollPosition();
  const isScrolled = useIsScrolled(threshold);
  const scrollDirection = useScrollDirection();
  useSmoothScroll(enabled, scrollSpeed, smoothness);

  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const handleScroll = () => {
      const atBottom =
        window.scrollY >= document.documentElement.scrollHeight - window.innerHeight - 1;
      setIsAtBottom(atBottom);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    scrollPosition,
    isScrolled,
    scrollDirection,
    isAtTop: scrollPosition === 0,
    isAtBottom,
  };
}

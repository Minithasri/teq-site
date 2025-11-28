'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * Hook to observe element intersection with viewport
 * @param {Object} options - IntersectionObserver options
 * @returns {[React.Ref, boolean]} [ref, isIntersecting]
 */
export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);

        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options, hasIntersected]);

  return [elementRef, isIntersecting, hasIntersected];
}

/**
 * Hook to observe multiple elements intersection
 * @param {Object} options - IntersectionObserver options
 * @returns {[React.Ref, Map<Element, boolean>]} [ref, intersectionsMap]
 */
export function useMultipleIntersectionObserver(options = {}) {
  const [intersections, setIntersections] = useState(new Map());
  const elementsRef = useRef(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIntersections((prev) => new Map(prev).set(entry.target, entry.isIntersecting));
        });
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    // Observe all current elements
    elementsRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [options]);

  const getRef = (key) => (element) => {
    if (element) {
      elementsRef.current.set(key, element);
    } else {
      elementsRef.current.delete(key);
    }
  };

  return [getRef, intersections];
}

/**
 * Hook for lazy loading images with intersection observer
 * @param {string} src - Image source
 * @param {string} placeholder - Placeholder image source
 * @returns {[string, boolean, React.Ref]} [imageSrc, isLoaded, ref]
 */
export function useLazyImage(src, placeholder = '/images/placeholder.jpg') {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, isIntersecting] = useIntersectionObserver();

  useEffect(() => {
    if (!isIntersecting || imageSrc === src) return;

    const img = new Image();
    img.src = src;

    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };

    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
    };
  }, [src, isIntersecting, imageSrc]);

  return [imageSrc, isLoaded, ref];
}

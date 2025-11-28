'use client';

import { useEffect, useRef } from 'react';

/**
 * Hook to detect clicks outside of an element
 * @param {Function} callback - Callback function when click outside occurs
 * @returns {React.Ref} Ref to attach to the element
 */
export function useClickOutside(callback) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(event);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [callback]);

  return ref;
}

/**
 * Hook to detect escape key press
 * @param {Function} callback - Callback function when escape key is pressed
 */
export function useEscapeKey(callback) {
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === 'Escape') {
        callback(event);
      }
    }

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [callback]);
}

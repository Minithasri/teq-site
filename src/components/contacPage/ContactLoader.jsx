'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactLoader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hold the orange screen for a moment, then trigger exit
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    if (!isVisible) {
      onComplete();
    }
  };

  return (
    <AnimatePresence onExitComplete={handleAnimationComplete}>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '100%' }} // Wipes downwards (top to bottom wipe)
          transition={{ duration: 1.6, ease: [0.83, 0, 0.17, 1] }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: '#DE896A', // Orange color
            zIndex: 99999,
          }}
        />
      )}
    </AnimatePresence>
  );
}

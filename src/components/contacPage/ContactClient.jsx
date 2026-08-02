'use client';

import { useState } from 'react';
import Navbar from '@/components/claude-course/Navbar';
import ContactLoader from '@/components/contacPage/ContactLoader';
import ContactLayout from '@/components/contacPage/ContactLayout';

export default function ContactClient() {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <>
      {/* Orange wipe loader */}
      {!loaderDone && <ContactLoader onComplete={() => setLoaderDone(true)} />}

      {/* Main page content (only visible after loader completes for a smoother reveal) */}
      <main
        style={{
          minHeight: '100vh',
          backgroundColor: '#FFFFFF',
          position: 'relative',
          opacity: loaderDone ? 1 : 0,
          transition: 'opacity 0.6s ease-in',
        }}
      >
        <Navbar />

        {/* We add some top padding so it clears the absolute Navbar */}
        <div style={{ paddingTop: '90px' }}>
          <ContactLayout />
        </div>
      </main>
    </>
  );
}

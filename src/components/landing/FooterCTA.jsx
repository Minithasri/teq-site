'use client';

import React, { useRef, useEffect } from 'react';

export default function FooterCTA() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.play().catch(error => {
        console.error('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <section
      id='footer-cta'
      style={{
        position: 'relative',
        width: '100%',
        height: '600px',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Outfit', sans-serif",
        overflow: 'hidden',
      }}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        src='/Video/landing_page_background.mp4'
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          opacity: 0.6,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Overlay to soften the video */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 85% 85% at 50% 50%, rgba(235,237,237,0.2) 0%, rgba(235,237,237,0.65) 100%)',
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '600px',
        }}
      >
        <h2
          style={{
            fontSize: '48px',
            fontWeight: 500,
            color: '#de8263',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '4px',
          }}
        >
          The next cohort is filling.
        </h2>
        <div
          style={{
            fontSize: '48px',
            fontWeight: 600,
            color: '#1a1a1a',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '24px',
          }}
        >
          Start with the diagnostic.
        </div>
        <p
          style={{
            fontSize: '12px',
            color: '#666',
            lineHeight: 1.6,
            marginBottom: '40px',
            maxWidth: '480px',
          }}
        >
          TeqCertify is an independent training provider. Claude is a trademark of Anthropic, PBC.
          TeqCertify is not affiliated with, sponsored by, or endorsed by Anthropic.
        </p>

        <button
          style={{
            backgroundColor: '#de8263',
            color: '#ffffff',
            padding: '16px 32px',
            borderRadius: '100px', // pill shape
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '0.05em',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(222,130,99,0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          {/* A simple document/book icon */}
          <svg
            width='18'
            height='18'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'></path>
            <path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'></path>
          </svg>
          Book your assessment
        </button>
      </div>
    </section>
  );
}

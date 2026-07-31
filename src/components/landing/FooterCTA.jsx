import React from 'react';

export default function FooterCTA() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '600px',
        backgroundColor: '#f2f4f8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Outfit', sans-serif",
        overflow: 'hidden',
      }}
    >
      {/* CSS-based sunburst animation placeholder for the background */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '150%',
          height: '150%',
          transform: 'translate(-50%, -50%)',
          background:
            'repeating-conic-gradient(from 0deg, transparent 0deg 15deg, rgba(255,255,255,0.6) 15deg 30deg)',
          animation: 'spin 60s linear infinite',
          zIndex: 0,
        }}
      />
      <style>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>

      {/* Overlay to soften the sunburst */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle, rgba(242,244,248,0.7) 0%, rgba(242,244,248,1) 100%)',
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

'use client';

import { MonitorPlay } from 'lucide-react';

export default function CtaSection() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Outfit, sans-serif',
        overflow: 'hidden',
        padding: '120px 20px',
      }}
    >
      {/* Background Video */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src='/Video/landing_page_background.mp4' type='video/mp4' />
        </video>

        {/* Soft white overlay to ensure text readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(255,255,255,0.4)',
          }}
        />

        {/* Top Fade */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '150px',
            background:
              'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
          }}
        />

        {/* Bottom Fade */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '150px',
            background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: '48px',
            fontWeight: 600,
            lineHeight: '1.2',
            letterSpacing: '-1.5px',
          }}
        >
          <span style={{ color: '#DE896A' }}>The next cohort is filling.</span>
          <br />
          <span style={{ color: '#2C2C2C' }}>Start with the diagnostic.</span>
        </h2>

        <p
          style={{
            margin: 0,
            fontSize: '13px',
            color: '#4B5563',
            maxWidth: '650px',
            lineHeight: '1.5',
            fontWeight: 400,
          }}
        >
          TeqCertify is an independent training provider. Claude and Anthropic are trademarks of
          Anthropic, PBC.
          <br />
          TeqCertify is not affiliated with, sponsored by, or endorsed by Anthropic.
        </p>

        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: '#DE896A',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '32px',
            padding: '14px 28px',
            fontSize: '15px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'transform 0.2s',
            marginTop: '8px',
          }}
          onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <MonitorPlay size={18} />
          Book your assessment
        </button>
      </div>
    </section>
  );
}

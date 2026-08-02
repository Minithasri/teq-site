'use client';

import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        fontFamily: 'Outfit, sans-serif',
        display: 'flex',
        alignItems: 'flex-start',
      }}
    >
      {/* ── VIDEO BACKGROUND ── */}
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
            objectPosition: 'center center',
            transform: 'scale(1.15)',
            transformOrigin: 'center center',
          }}
        >
          <source src='/Video/0_Abstract_Render_3840x2160.mp4' type='video/mp4' />
        </video>

        {/* Softening overlay — video stays clear up top, fades to white toward the bottom */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.85) 80%, rgba(255, 255, 255, 1) 100%)',
          }}
        />
      </div>

      {/* ── CONTENT ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1600px',
          marginLeft: 0,
          marginRight: 'auto',
          padding: '110px 72px 80px 72px',
          boxSizing: 'border-box',
        }}
      >
        {/* Main heading — Outfit 600, 79px, #FFFFFF, ls -2.622px */}
        <h1
          style={{
            color: '#FFFFFF',
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'clamp(40px, 4.4vw, 80px)',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '1.05',
            letterSpacing: '-0.033em',
            margin: 0,
            padding: 0,
          }}
        >
          The Claude Professional Program
        </h1>

        {/* Sub-heading — Outfit 400, 50px, lh 66px, ls -1.62px, #404040 */}
        <p
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '22px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '1.5',
            letterSpacing: '-0.5px',
            color: '#404040',
            maxWidth: '850px',
            margin: '24px 0 32px 0',
            padding: 0,
          }}
        >
          One program, three levels,
          <br />
          and an honest answer about where you actually stand.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
          <button
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              fontSize: '15px',
              color: '#FFFFFF',
              backgroundColor: '#DE896A',
              border: 'none',
              borderRadius: '999px',
              padding: '12px 28px',
              cursor: 'pointer',
              transition: 'transform 0.2s, background-color 0.2s',
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'scale(1.04)';
              e.currentTarget.style.backgroundColor = '#c97960';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = '#DE896A';
            }}
          >
            Explore course
          </button>

          <button
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              fontSize: '15px',
              color: '#1a1a1a',
              backgroundColor: 'transparent',
              border: 'none',
              padding: '12px 8px',
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseOver={e => (e.currentTarget.style.opacity = '0.7')}
            onMouseOut={e => (e.currentTarget.style.opacity = '1')}
          >
            Talk to Us
          </button>
        </div>

        {/* Down arrow */}
        <ArrowDown size={24} strokeWidth={1.5} style={{ color: '#DE896A' }} />
      </div>

      {/* ── BOTTOM TICKER BAR ── */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          borderTop: '1px solid rgba(222, 137, 106, 0.15)',
          borderBottom: '1px solid rgba(222, 137, 106, 0.15)',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(4px)',
          padding: '20px 0',
          display: 'flex',
          alignItems: 'center',
          zIndex: 20,
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '40px',
            padding: '4px',
          }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} style={{ display: 'flex', gap: '40px' }}>
              {[
                'Prompt Engineering',
                'AI Workflows',
                'Claude Code',
                'MCP Integration',
                'Automation',
              ].map((text, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                  <span
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontWeight: 400,
                      padding: '0 10px',
                      fontSize: '18px',
                      color: '#DE896A',
                    }}
                  >
                    {text}
                  </span>
                  <span style={{ color: '#374151', fontSize: '12px' }}>✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

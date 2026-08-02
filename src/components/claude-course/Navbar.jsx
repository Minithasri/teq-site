'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '90px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 60px',
        zIndex: 60,
        backgroundColor: 'transparent',
      }}
    >
      {/* Top Left Logo */}
      <Link
        href='/'
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          textDecoration: 'none',
        }}
      >
        <div
          style={{
            width: '44px',
            height: '44px',
            position: 'relative',
            flexShrink: 0,
          }}
        >
          <Image
            src='/images/landing_logo.png'
            alt='TeqCertify Logo'
            width={44}
            height={44}
            priority
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#1a1a1a',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            TeqCertify
          </span>
          <span
            style={{
              fontSize: '9.5px',
              fontWeight: 500,
              color: '#666666',
              letterSpacing: '0.01em',
              fontFamily: "'Outfit', sans-serif",
              marginTop: '1px',
            }}
          >
            Elevate Your Data Journey
          </span>
        </div>
      </Link>

      {/* Top Right Buttons */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
        }}
      >
        <Link
          href='/claude-course'
          style={{
            backgroundColor: '#ffffff',
            color: '#333333',
            padding: '9px 24px',
            borderRadius: '999px',
            fontSize: '13.5px',
            fontWeight: 500,
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            border: '1px solid rgba(0,0,0,0.06)',
            transition: 'all 0.2s ease',
            fontFamily: "'Outfit', sans-serif",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#f8f8f8';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#ffffff';
          }}
        >
          Claude Course
        </Link>
        <Link
          href='/contact'
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#DE896A',
            color: '#ffffff',
            padding: '9px 24px',
            borderRadius: '999px',
            fontSize: '13.5px',
            fontWeight: 500,
            textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(222, 130, 99, 0.3)',
            transition: 'all 0.2s ease',
            fontFamily: "'Outfit', sans-serif",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#cd7355';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#DE896A';
          }}
        >
          <Phone size={14} /> Contact us
        </Link>
      </div>
    </header>
  );
}

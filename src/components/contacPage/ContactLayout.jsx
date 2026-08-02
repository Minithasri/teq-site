'use client';

import React from 'react';
import { motion } from 'framer-motion';

const VIDEO_SRC = encodeURI('/images/ContactUs/Frame 1566663877.mp4');

export default function ContactLayout() {
  const categories = [
    { name: 'NAVIGATE' },
    { name: 'LINKS' },
    { name: 'EXPLORE' },
    { name: 'RESOURCES' },
    { name: 'CONNECT' },
    { name: 'CONTACTS' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        padding: '120px 40px',
        fontFamily: "'Outfit', sans-serif",
        gap: '80px',
        alignItems: 'stretch',
      }}
    >
      {/* Left Column */}
      <div
        style={{
          flex: '1',
          backgroundColor: '#FAFAFA',
          borderRadius: '24px',
          padding: '60px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '48px',
              fontWeight: 600,
              color: '#DE896A',
              lineHeight: '1.1',
              margin: '0 0 16px 0',
              letterSpacing: '-1.5px',
            }}
          >
            Book your diagnostic.
          </h1>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 500,
              color: '#6B7280', // Grey color
              lineHeight: '1.2',
              margin: '0 0 24px 0',
              letterSpacing: '-0.5px',
            }}
          >
            It is free, and it decides your level.
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: '#888888',
              lineHeight: '1.6',
              margin: '0',
            }}
          >
            <span style={{ marginRight: '8px' }}>——</span>
            Explore the most common questions about working with
            <br />
            Create, all in one place.
          </p>
        </div>

        {/* Teddy Bear Video at bottom left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          style={{
            marginTop: '60px',
            alignSelf: 'flex-start',
            width: '300px',
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '12px',
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '14px',
              display: 'block',
            }}
          >
            <source src={VIDEO_SRC} type='video/mp4' />
          </video>
        </motion.div>
      </div>

      {/* Right Column */}
      <div
        style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '40px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            columnGap: '60px',
            rowGap: '40px',
          }}
        >
          {categories.map((cat, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#9CA3AF',
                  marginBottom: '12px',
                  letterSpacing: '0.5px',
                }}
              >
                {cat.name}
              </span>
              <div style={{ height: '1px', backgroundColor: '#E5E7EB', width: '100%' }} />
              {/* This space mimics the empty lines under the categories in the screenshot */}
              <div style={{ height: '40px' }} />
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '20px',
          }}
        >
          <button
            style={{
              width: '100%',
              backgroundColor: '#DE896A',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              padding: '20px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              letterSpacing: '0.5px',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#cd7355')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#DE896A')}
          >
            START YOUR CLAUDE LEARNING JOURNEY &rarr;
          </button>

          <p
            style={{
              marginTop: '16px',
              fontSize: '12px',
              color: '#4B5563',
            }}
          >
            By submitting, you agree to our{' '}
            <span style={{ color: '#DE896A', cursor: 'pointer' }}>Terms & Service.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

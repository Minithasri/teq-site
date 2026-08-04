'use client';

import React from 'react';

const FAQ_IMAGE = '/images/ContactUs/Frame%201566663913.png';

export default function FaqSection() {
  const faqs = [
    'Faq questions will come here and make sure to be free',
    'Faq questions will come here and make sure to be free',
    'Faq questions will come here and make sure to be free',
    'Faq questions will come here and make sure to be free',
    'Faq questions will come here and make sure to be free',
  ];

  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        fontFamily: 'Outfit, sans-serif',
        padding: '120px 72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '320px 1fr',
          alignItems: 'start',
          maxWidth: '1200px',
          width: '100%',
          gap: '40px',
        }}
      >
        {/* Left Side: Image */}
        <img
          src={FAQ_IMAGE}
          alt='FAQ Illustration'
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            display: 'block',
            marginTop: '12px',
          }}
        />

        {/* Right Side: Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h2
            style={{
              fontSize: '48px',
              fontWeight: 600,
              color: '#de896a',
              margin: 0,
              letterSpacing: '-1.5px',
              lineHeight: 1,
            }}
          >
            Clearing doubts and concerns
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#888888',
              lineHeight: '1.6',
              margin: 0,
              fontWeight: 400,
            }}
          >
            <span style={{ marginRight: '8px' }}>——</span>
            Explore the most common questions about working with
            <br />
            Create, all in one place.
          </p>

          {/* FAQ List */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: index % 2 !== 0 ? '#FCFCFC' : 'transparent',
                  padding: '16px 24px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                }}
              >
                <span style={{ fontSize: '15px', color: '#555555', fontWeight: 500 }}>{faq}</span>
                <span
                  style={{
                    fontSize: '24px',
                    color: '#de896a',
                    fontWeight: 300,
                    lineHeight: '1',
                  }}
                >
                  +
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

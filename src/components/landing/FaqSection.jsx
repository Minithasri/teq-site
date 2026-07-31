'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Five questions will come here and make sure to be free',
    a: 'Here is the answer to the first question. It provides clarity on the topic mentioned.',
  },
  {
    q: 'Five questions will come here and make sure to be free',
    a: 'Here is the answer to the second question. It provides clarity on the topic mentioned.',
  },
  {
    q: 'Five questions will come here and make sure to be free',
    a: 'Here is the answer to the third question. It provides clarity on the topic mentioned.',
  },
  {
    q: 'Five questions will come here and make sure to be free',
    a: 'Here is the answer to the fourth question. It provides clarity on the topic mentioned.',
  },
  {
    q: 'Five questions will come here and make sure to be free',
    a: 'Here is the answer to the fifth question. It provides clarity on the topic mentioned.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#ffffff',
        display: 'flex',
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      {/* Local Sidebar Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '200px',
          height: '100%',
          backgroundColor: '#ffffff',
          zIndex: 1,
          borderRight: '1px solid rgba(0,0,0,0.04)',
        }}
      />

      {/* Coral Ribbon */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '200px',
          width: '16px',
          height: '100%',
          backgroundColor: '#DE896A',
          zIndex: 1,
        }}
      />

      {/* ── Content Wrapper ──────────────── */}
      <div
        style={{
          position: 'relative',
          width: 'calc(100% - 216px)',
          marginLeft: '216px',
          display: 'flex',
          padding: '120px 80px',
        }}
      >
        {/* ── Left column ──────────────── */}
        <div style={{ width: '40%', paddingRight: '60px' }}>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 600,
              color: '#DE896A',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              maxWidth: '300px',
            }}
          >
            Clearing doubts and concerns
          </h2>
          <p
            style={{
              fontSize: '14px',
              fontWeight: 400,
              color: '#777',
              lineHeight: 1.6,
              display: 'flex',
              gap: '8px',
            }}
          >
            <span style={{ color: '#ccc' }}>——</span>
            Explore the most common questions about working with Claude, all in one place.
          </p>
        </div>

        {/* ── Right column ──────────────── */}
        <div style={{ width: '60%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => toggle(idx)}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    padding: '20px 24px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                    border: '1px solid rgba(0,0,0,0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ fontSize: '14px', fontWeight: 500, color: '#444' }}>
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <Minus size={18} color='#DE896A' />
                    ) : (
                      <Plus size={18} color='#DE896A' />
                    )}
                  </div>
                  {isOpen && (
                    <div
                      style={{
                        marginTop: '16px',
                        fontSize: '14px',
                        color: '#666',
                        lineHeight: 1.6,
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

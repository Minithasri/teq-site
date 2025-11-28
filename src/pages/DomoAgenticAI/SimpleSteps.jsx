'use client';
import React from 'react';
import Image from 'next/image';

const SimpleSteps = () => {
  return (
    <section className='w-full overflow-hidden bg-white py-16 md:py-20 lg:py-24'>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='relative w-full flex flex-col items-center'>

          {/* Heading */}
          <h2
            className='font-medium text-center'
            style={{
              fontSize: '32px',
              lineHeight: '44px',
              fontWeight: 500,
              color: '#000',
            }}
          >
            Know how it works in
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #7030B1 0%, #B56DD3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 500,
              }}
            >
              4 simple steps
            </span>
          </h2>

          {/* Image Under Heading with 100px Gap */}
          <div
            style={{
              marginTop: '100px',
            }}
          >
            <Image
              src="/images/Steps.svg"
              alt="Steps"
              width={1200}
              height={380}
            />
          </div>

          {/* Contact Us Button */}
          <button
            style={{
              marginTop: '50px',
              width: '150px',
              height: '45px',
              borderRadius: '25px',
              background: 'linear-gradient(135deg, #7030B1 0%, #B56DD3 100%)',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              border: 'none',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.07)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Contact us
            <span style={{ fontSize: '18px' }}>→</span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default SimpleSteps;

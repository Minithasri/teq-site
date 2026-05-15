'use client';

import React from 'react';

const DrivingTransformation = () => {
  return (
    <section className='bg-[#F0F1F5] pb-6 md:pb-10'>
      <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-24'>
        <div
          className='relative p-8 md:p-16 lg:p-20 rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl'
          style={{ background: 'linear-gradient(120.29deg, #0E121B 0%, #152432 100%)' }}
        >
          {/* Subtle Glow Effect */}
          <div className='absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#2BD4BD]/10 blur-[80px] md:blur-[120px] rounded-full -mr-32 md:-mr-64 -mt-32 md:-mt-64' />

          <div className='relative z-10 max-w-5xl'>
            <h2 className='text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-white'>
              Driving Sustainable Transformation
            </h2>

            <div className='space-y-6 md:space-y-8'>
              <p className='text-sm md:text-lg leading-relaxed' style={{ color: '#FFFFFFCC' }}>
                This engagement demonstrates the power of strategic digitization in complex
                manufacturing environments. By replacing fragmented manual processes with an
                integrated, governed platform, we delivered a solution that not only addresses
                today's operational challenges but scales to support future growth.
              </p>

              <p className='text-sm md:text-lg leading-relaxed' style={{ color: '#FFFFFFCC' }}>
                The platform establishes a{' '}
                <span className='text-white font-bold'>single source of truth</span> for tooling
                operations, enabling the organization to move from reactive management to{' '}
                <span className='text-white font-bold'>proactive, data-driven decision-making</span>{' '}
                with full traceability, compliance, and cross-departmental transparency.
              </p>

              <p
                className='text-sm md:text-lg font-bold leading-relaxed pt-4'
                style={{ color: '#2BD4BD' }}
              >
                The result: measurable efficiency gains, stronger governance, and a future-ready
                digital foundation for continued operational excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrivingTransformation;

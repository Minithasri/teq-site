'use client';

import Image from 'next/image';

export default function SalesPerformanceHero() {
  return (
    <section
      className='relative overflow-hidden flex flex-col items-center justify-center w-full px-4'
      style={{
        width: '100%',
        height: '425px',
        background: '#595CDFEB', // Purple base color from specs
      }}
    >
      {/* Background Image & Overlay */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/templatez/csperformance/cspbg.jpg' // Ensure this path is correct
          alt='Dashboard Background'
          fill
          priority
          className='object-cover opacity-30'
        />
        {/* Color Tint Overlay to match the blue/purple blend */}
        <div
          className='absolute inset-0'
          style={{
            background: 'rgba(89, 92, 223, 0.92)',
            mixBlendMode: 'multiply',
          }}
        />
      </div>

      {/* Content Container */}
      <div className='relative z-20 w-full max-w-[1100px] mt-20 flex flex-col items-center text-center'>
        {/* Main Heading */}
        <h1
          className='text-white font-bold'
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: '60px',
            lineHeight: '78px',
            letterSpacing: '-1.5px',
            marginBottom: '20px',
          }}
        >
          Centralizing Sales Performance with Real-Time Dashboards
        </h1>

        {/* Description Subtext */}
        <p
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: '24px',
            lineHeight: '43px',
            letterSpacing: '0%',
            color: '#FFFFFF',
            width: '1379px',
            opacity: 0.9,
          }}
        >
          How GWC transformed a retail organization's reporting from manual Excel workflows to
          automated, real-time analytics enabling leadership to make proactive, data-driven
          decisions at every level.
        </p>
      </div>
    </section>
  );
}

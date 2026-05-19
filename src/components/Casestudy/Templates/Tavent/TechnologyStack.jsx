'use client';

import React, { useState } from 'react';

export default function TechnologyStack() {
  const [isHovered, setIsHovered] = useState(false);

  const pillStyle = {
    backgroundColor: '#FFFFFF',
    borderColor: '#DFE5ED',
  };

  const cardStyle = {
    background: 'linear-gradient(180deg, #F9FCFF 0%, #EDF2F8 100%)',
    borderColor: '#DFE5ED',
    boxShadow: isHovered
      ? '0px 24px 48px -16px rgba(4, 14, 26, 0.16)'
      : '0px 4px 12px -2px rgba(4, 14, 26, 0.08)',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const glowStyle = {
    background: 'linear-gradient(135deg, #002F72 0%, #005FC6 100%)',
    filter: 'blur(64px)',
  };

  return (
    <>
      {/* ── TECHNOLOGY STACK SECTION ── */}
      <section className='w-full py-12 md:py-16 bg-[#F0F6FC66]'>
        <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
          <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12 w-full'>
            {/* Left side text and pills */}
            <div className='flex-grow'>
              <h2
                className='text-2xl md:text-3xl font-extrabold uppercase mb-4 tracking-wide'
                style={{ color: '#002F72', fontFamily: 'Poppins, sans-serif' }}
              >
                TECHNOLOGY STACK
              </h2>
              <h3
                className='text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-bold mb-6 leading-tight'
                style={{ color: '#040E1A', fontFamily: 'Poppins, sans-serif' }}
              >
                Engineered with proven enterprise tools
              </h3>

              {/* Pills Container */}
              <div className='flex flex-wrap gap-3 sm:gap-4'>
                {['Tableau Desktop', 'Tableau Cloud', 'SQL Server'].map((tech, idx) => (
                  <div
                    key={idx}
                    className='flex items-center gap-2.5 px-5 py-2.5 rounded-full border text-sm font-semibold shadow-sm whitespace-nowrap'
                    style={pillStyle}
                  >
                    <img
                      src='/images/Templates/tavent/tav13.svg'
                      alt='Database icon'
                      className='w-5 h-5 object-contain flex-shrink-0'
                    />
                    <span style={{ color: '#040E1A', fontFamily: 'Poppins, sans-serif' }}>
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side logos */}
            <div className='flex items-center justify-center lg:justify-end gap-6 md:gap-8 flex-wrap lg:flex-nowrap flex-shrink-0'>
              {[
                { src: '/images/Templates/tavent/tav10.svg', alt: 'Tableau logo' },
                { src: '/images/Templates/tavent/tav11.svg', alt: 'SQL Server logo' },
                { src: '/images/Templates/tavent/tav12.svg', alt: 'Tableau Cloud logo' },
              ].map((logo, idx) => (
                <div
                  key={idx}
                  className='relative h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48 flex items-center justify-center'
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className='h-full max-w-full object-contain transition-transform duration-300 hover:scale-105'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUE DELIVERED SECTION ── */}
      <section className='w-full py-12 md:py-16 bg-[#FFFFFF]'>
        <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
          <div
            className='relative overflow-hidden p-8 sm:p-12 md:p-16 rounded-[32px] border-2 cursor-default'
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Glowing blur background blob at top right */}
            <div
              className='absolute top-[-100px] right-[-100px] w-[260px] sm:w-[320px] h-[260px] sm:h-[320px] rounded-full opacity-[0.12] pointer-events-none'
              style={glowStyle}
            />

            {/* Card Content */}
            <div className='relative z-10 max-w-7xl'>
              <h2
                className='text-2xl md:text-3xl font-extrabold uppercase mb-4 tracking-wide'
                style={{ color: '#002F72', fontFamily: 'Poppins, sans-serif' }}
              >
                VALUE DELIVERED
              </h2>
              <h3
                className='text-lg sm:text-xl md:text-[20px] lg:text-[24px] font-bold mb-4 leading-tight'
                style={{ color: '#040E1A', fontFamily: 'Poppins, sans-serif' }}
              >
                A scalable analytics platform that transformed banking operations.
              </h3>
              <p
                className='text-sm sm:text-base md:text-[17px] leading-relaxed font-normal'
                style={{ color: '#586474', fontFamily: 'Poppins, sans-serif' }}
              >
                Delivered an interactive analytics platform that enabled real-time insights,
                accelerated decision-making, and empowered business users with self-service
                capabilities — turning data into a daily operational advantage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

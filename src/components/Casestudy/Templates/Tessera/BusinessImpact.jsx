'use client';

import React from 'react';
import Image from 'next/image';

const impactCards = [
  {
    value: '~60%',
    description: 'Reduction in manual data handling effort',
  },
  {
    value: '40–50%',
    description: 'Faster forecasting and budgeting processes',
  },
  {
    value: '100%',
    description: 'Automated data synchronization across platforms',
  },
  {
    value: 'Enterprise',
    description: 'Scalable and agile integration architecture',
  },
];

const bullets = [
  'Improved data accuracy and consistency across all enterprise systems',
  'Enhanced financial reporting reliability and stakeholder confidence',
  'Enabled a scalable, agile integration architecture for future growth',
];

const techPills = ['Boomi', 'SAP', 'Coupa', 'UKG'];

const techLogos = [
  '/images/Templates/tessera/tesssvg8.svg',
  '/images/Templates/tessera/tesssvg9.svg',
  '/images/Templates/tessera/tesssvg10.svg',
  '/images/Templates/tessera/tesssvg11.svg',
];

export default function BusinessImpact() {
  return (
    <section className='w-full py-16 md:py-8 lg:py-10' style={{ backgroundColor: '#F6F7F9' }}>
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
        {/* ── BUSINESS IMPACT HEADER ── */}
        <h2
          className='text-2xl md:text-3xl font-bold mb-8 tracking-wide'
          style={{ color: '#262626' }}
        >
          Business Impact
        </h2>

        {/* ── 4-CARD METRIC GRID ── */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
          {impactCards.map((card, i) => (
            <div
              key={i}
              className='p-6 md:p-8 rounded-[20px] transition-all duration-300 shadow-md hover:shadow-xl text-center flex flex-col justify-center items-center min-h-[140px] md:min-h-[160px]'
              style={{
                border: '2px solid #F5F5F5',
                backgroundColor: '#FFFFFF',
              }}
            >
              {/* Value Highlight */}
              <span className='text-3xl md:text-4xl font-bold mb-3' style={{ color: '#262626' }}>
                {card.value}
              </span>

              {/* Description */}
              <p
                className='text-sm md:text-[15px] leading-snug font-medium'
                style={{ color: '#000000' }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── LOWER SECTION (Bullets, Tech Pills, Logos & Lab Image) ── */}
        <div className='grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 xl:gap-16 items-start'>
          {/* Left Column: Bullet Points & Tech Stack pills */}
          <div>
            {/* Impact Bullets */}
            <ul className='space-y-4 mb-12'>
              {bullets.map((bullet, i) => (
                <li key={i} className='flex items-start gap-3'>
                  {/* Lime-Green Circular Bullet Dot (#62EE17) */}
                  <span
                    className='flex-shrink-0 w-2.5 h-2.5 rounded-full mt-2'
                    style={{ backgroundColor: '#62EE17' }}
                  />
                  <span
                    className='text-sm sm:text-base md:text-[17px] leading-snug font-medium'
                    style={{ color: '#6A7181' }}
                  >
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            {/* Technology Stack Sub-Section */}
            <div>
              <h2
                className='text-2xl md:text-3xl font-bold mb-6 tracking-wide'
                style={{ color: '#262626' }}
              >
                Technology Stack
              </h2>

              <div className='flex flex-wrap gap-4'>
                {techPills.map((pill, i) => (
                  <div
                    key={i}
                    className='px-6 py-2.5 rounded-full text-sm md:text-base font-bold shadow-sm transition-all duration-300 hover:scale-105 border-2 bg-white'
                    style={{
                      color: '#151C28',
                      borderColor: '#1791CF',
                    }}
                  >
                    {pill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Technology Brand Logos & Lab Scientist VR Image */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 items-center w-full mt-6 lg:mt-0'>
            {/* 2x2 Grid of Brand Logos */}
            <div className='grid grid-cols-2 gap-4 w-full justify-items-center items-center p-6 min-h-[180px]'>
              {techLogos.map((logo, i) => (
                <div
                  key={i}
                  className='relative w-[80px] h-[40px] flex items-center justify-center'
                >
                  <Image
                    src={logo}
                    alt={`Tech logo ${i + 8}`}
                    fill
                    className='object-contain'
                    priority
                  />
                </div>
              ))}
            </div>

            {/* VR Scientist Greenhouse Image (tessera4.png) */}
            <div className='relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-black/10 shadow-lg hover:scale-[1.02] transition-transform duration-300 min-h-[180px]'>
              <Image
                src='/images/Templates/tessera/tessera4.png'
                alt='Scientist wearing VR goggles in biotechnology greenhouse'
                fill
                className='object-cover object-center'
                priority
              />
            </div>
          </div>
        </div>

        {/* ── VALUE DELIVERED ── */}
        <div className='w-full lg:mt-20'>
          <h2
            className='text-2xl md:text-3xl font-bold mb-4 tracking-wide'
            style={{ color: '#262626' }}
          >
            Value Delivered
          </h2>
          <h3
            className='text-lg sm:text-xl md:text-[22px] font-bold mb-6'
            style={{ color: '#151C28' }}
          >
            From Silos to Synergy
          </h3>
          <div className='space-y-6 max-w-7xl'>
            <p
              className='text-sm sm:text-base md:text-[17px] leading-relaxed font-medium'
              style={{ color: '#6A7181' }}
            >
              By implementing a real-time, Boomi-powered integration framework, the organization
              transformed its disconnected enterprise landscape into a unified, automated data
              ecosystem. The solution delivered measurable reductions in manual effort, dramatically
              faster forecasting cycles, and enterprise-grade data governance.
            </p>
            <p
              className='text-sm sm:text-base md:text-[17px] leading-relaxed font-medium'
              style={{ color: '#6A7181' }}
            >
              With a scalable architecture built for growth, the organization is now positioned to
              onboard new systems, expand into new markets, and make data-driven decisions with
              confidence—powered by real-time insights and seamless enterprise connectivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

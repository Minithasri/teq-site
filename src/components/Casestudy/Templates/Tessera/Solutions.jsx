'use client';

import React from 'react';
import Image from 'next/image';

const bullets = [
  'Designed and implemented real-time integration workflows using Boomi',
  'Extracted data from SAP systems and performed transformation and mapping within Boomi',
  'Integrated data into Coupa and other enterprise platforms',
  'Enabled synchronization of financial transactions and user data across systems',
  'Automated data exchange to eliminate manual intervention',
  'Ensured data consistency, accuracy, and governance across platforms',
  'Built a scalable integration framework to support future growth',
];

const cards = [
  {
    icon: '/images/Templates/tessera/tesssvg2.svg',
    title: 'Real-Time Integration Workflows',
    description:
      'Designed and implemented event-driven integration workflows using Boomi to enable seamless, real-time data exchange across enterprise systems.',
  },
  {
    icon: '/images/Templates/tessera/tesssvg3.svg',
    title: 'SAP Data Extraction & Transformation',
    description:
      'Extracted critical business data from SAP systems with advanced transformation and field-level mapping within the Boomi platform.',
  },
  {
    icon: '/images/Templates/tessera/tesssvg4.svg',
    title: 'Multi-Platform Synchronization',
    description:
      'Integrated transformed data into Coupa and other enterprise platforms, enabling unified financial transactions and user data synchronization.',
  },
  {
    icon: '/images/Templates/tessera/tesssvg5.svg',
    title: 'Automated Data Exchange',
    description:
      'Eliminated manual intervention through fully automated data pipelines, reducing processing time and human error significantly.',
  },
  {
    icon: '/images/Templates/tessera/tesssvg6.svg',
    title: 'Data Governance & Accuracy',
    description:
      'Ensured enterprise-grade data consistency, accuracy, and governance across all connected platforms with validation rules and audit trails.',
  },
  {
    icon: '/images/Templates/tessera/tesssvg7.svg',
    title: 'Scalable Integration Framework',
    description:
      'Built a future-ready, modular integration architecture designed to accommodate new systems and growing data volumes seamlessly.',
  },
];

export default function Solutions() {
  return (
    <section className='w-full py-8 md:py-10 lg:py-10' style={{ backgroundColor: '#F6F7F9' }}>
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
        {/* ── OUR SOLUTION (Full Width Header & Intro) ── */}
        <div className='w-full mb-8'>
          <h2
            className='text-2xl md:text-3xl font-bold mb-4 tracking-wide'
            style={{ color: '#262626' }}
          >
            Our Solution
          </h2>
          <p
            className='text-sm sm:text-base md:text-[17px] leading-relaxed w-full'
            style={{ color: '#6A7181' }}
          >
            We designed and deployed a comprehensive, real-time data integration solution leveraging
            Dell Boomi's iPaaS platform—connecting SAP, Coupa, and UKG into a unified, automated
            data ecosystem.
          </p>
        </div>

        {/* ── TOP SECTION (Text Bullets + Overlapping Images Grid) ── */}
        <div className='grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 xl:gap-16 items-start mb-16 md:mb-20'>
          {/* Left Column: Bullets */}
          <div>
            {/* Custom Bullet List */}
            <ul className='space-y-4'>
              {bullets.map((bullet, i) => (
                <li key={i} className='flex items-start gap-4'>
                  {/* Custom Blue Circle Bullet Dot (#1791CF) */}
                  <span
                    className='flex-shrink-0 w-2 h-2 rounded-full mt-2.5'
                    style={{ backgroundColor: '#1791CF' }}
                  />
                  <span
                    className='text-sm sm:text-base md:text-[16px] leading-snug font-medium'
                    style={{ color: '#151C28E5' }}
                  >
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Layered Overlapping Images */}
          <div className='relative flex justify-center items-center -right-[140px] top-[20px] h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] xl:h-[240px] w-full mt-6 lg:mt-0'>
            <div className='relative w-[85%] sm:w-[75%] md:w-[70%] lg:w-[90%] xl:w-[85%] h-full'>
              {/* Back Image (Opacity 0.4, Shifted down-left) */}
              <div className='absolute left-[-20px] bottom-[-20px] w-full h-[90%] rounded-3xl overflow-hidden border border-black/10 opacity-40 shadow-sm transition-transform duration-300 hover:scale-[1.02]'>
                <Image
                  src='/images/Templates/tessera/tessera3.png'
                  alt='Tessera Layered Graphic Back'
                  fill
                  className='object-cover object-center'
                  priority
                />
              </div>

              {/* Front Image (Opacity 1.0, Shifted up-right, Foreground) */}
              <div className='absolute right-0 top-0 w-full h-[90%] rounded-3xl overflow-hidden border border-black/10 shadow-xl transition-transform duration-300 hover:scale-[1.02] z-10'>
                <Image
                  src='/images/Templates/tessera/tessera3.png'
                  alt='Tessera Layered Graphic Front'
                  fill
                  className='object-cover object-center'
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM SECTION (Cards Grid) ── */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full'>
          {cards.map((card, i) => (
            <div
              key={i}
              className='bg-white p-6 md:p-8 rounded-[20px] transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between'
              style={{
                border: '2px solid #F5F5F5',
              }}
            >
              <div>
                {/* Icon Box with specific styling */}
                <div className='flex items-center gap-4 mb-5'>
                  <div
                    className='flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border'
                    style={{
                      borderColor: '#F5F5F5',
                      backgroundColor: '#1791CF1A',
                    }}
                  >
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={22}
                      height={22}
                      className='object-contain'
                    />
                  </div>

                  {/* Card Title */}
                  <h3
                    className='text-base md:text-[18px] font-bold leading-snug'
                    style={{ color: '#262626' }}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Card Description */}
                <p className='text-sm md:text-[15px] leading-relaxed' style={{ color: '#6A7181' }}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

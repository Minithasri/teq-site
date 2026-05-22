'use client';

import React from 'react';
import Image from 'next/image';

const challengeCards = [
  {
    num: '01',
    title: 'Fragmented Reporting Systems',
    desc: 'Data spread across multiple sources with no unified view.',
    icon: '/images/Templates/tavent/tav1.svg',
  },
  {
    num: '02',
    title: 'Manual Reporting Effort',
    desc: 'Time-consuming processes impacted operational efficiency.',
    icon: '/images/Templates/tavent/tav2.svg',
  },
  {
    num: '03',
    title: 'Limited Interactivity',
    desc: 'Static reports restricted deeper exploratory analysis.',
    icon: '/images/Templates/tavent/tav3.svg',
  },
  {
    num: '04',
    title: 'Delayed Insights',
    desc: 'Slow reporting cycles affected timely decision-making.',
    icon: '/images/Templates/tavent/tav4.svg',
  },
  {
    num: '05',
    title: 'Lack of Self-Service Analytics',
    desc: 'Heavy dependency on technical teams for every request.',
    icon: '/images/Templates/tavent/tav5.svg',
  },
];

export default function ClientOverview() {
  return (
    <section className='w-full'>
      {/* ── CLIENT CONTEXT ─────────────────────────────────────────── */}
      <div className='w-full bg-[#FFFFFF] pt-8 pb-16 md:pt-14 md:pb-10'>
        <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
          <h2
            className='text-2xl md:text-3xl font-extrabold mb-5 tracking-wide'
            style={{ color: '#262626' }}
          >
            Client Context
          </h2>
          <p
            className='text-sm sm:text-[16px] md:text-[18px] leading-relaxed max-w-7xl font-normal'
            style={{ color: '#586474', fontFamily: 'Poppins, sans-serif' }}
          >
            A leading banking organization required a centralized analytics solution to monitor
            critical operations such as{' '}
            <strong>loan delinquency, deposit trends, and teller performance</strong>. Existing
            reporting processes were fragmented and time-consuming, limiting visibility and delaying
            decision-making. The organization needed a scalable BI platform to enable real-time
            insights and empower business users with self-service analytics.
          </p>
        </div>
      </div>

      {/* ── BUSINESS CHALLENGES ─────────────────────────────────────── */}
      <div
        className='relative w-full py-8 md:py-10 overflow-visible'
        style={{
          background: 'linear-gradient(180deg, #F9FCFF 0%, #EDF2F8 100%)',
        }}
      >
        <div className='relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
          {/* Section Header */}
          <h2
            className='text-2xl md:text-3xl font-extrabold mb-4 tracking-wide'
            style={{ color: '#262626' }}
          >
            Business Challenges
          </h2>

          {/* Subheading */}
          <h3
            className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-bold mb-3 leading-tight'
            style={{ color: '#1C2230' }}
          >
            Reporting friction was slowing the business down
          </h3>

          {/* Paragraph description */}
          <p
            className='text-sm sm:text-base md:text-[17px] leading-relaxed mb-12 font-medium'
            style={{ color: '#586474', fontFamily: 'Poppins, sans-serif' }}
          >
            Five compounding challenges limited the organization's ability to act on its own data.
          </p>

          {/* 5-Card Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 lg:mb-20 max-w-[1200px]'>
            {challengeCards.map((card, i) => (
              <div
                key={i}
                className='relative p-6 sm:p-8 rounded-[24px] bg-[#FFFFFF] flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:scale-[1.01]'
                style={{
                  border: '2px solid #F5F5F5',
                }}
              >
                {/* Card Number on top right */}
                <span
                  className='absolute top-6 right-8 text-xs font-bold'
                  style={{ color: '#262626', fontFamily: 'Poppins, sans-serif' }}
                >
                  {card.num}
                </span>

                <div>
                  {/* Header Row: Rounded Icon Box + Title */}
                  <div className='flex items-center gap-4 mb-4 pr-6'>
                    <div className='w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#f27474]'>
                      <img
                        src={card.icon}
                        alt={card.title}
                        className='w-5 h-5 object-contain'
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>

                    {/* Card Title */}
                    <h4
                      className='text-base sm:text-[18px] font-bold'
                      style={{
                        color: '#262626',
                        fontFamily: 'Poppins, sans-serif',
                      }}
                    >
                      {card.title}
                    </h4>
                  </div>

                  {/* Card Description */}
                  <p
                    className='text-sm sm:text-[15px] leading-relaxed font-normal'
                    style={{
                      color: '#586474',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Mobile & Tablet Bottom Image Placeholder (flows inline, hidden on desktop) */}
            <div className='block lg:hidden w-full max-w-md mx-auto aspect-[1.6] relative rounded-2xl overflow-hidden shadow-lg border-2 border-white/20 mt-6'>
              <Image
                src='/images/Templates/tavent/t3.png'
                alt='Banking analytics performance'
                fill
                className='object-cover'
              />
            </div>
          </div>
        </div>

        {/* Overlapping Right Image - Absolute on Desktop, overlaps next section */}
        <div className='hidden lg:block absolute bottom-[-100px] right-6 xl:right-16 z-30 w-[420px] xl:w-[480px]'>
          <div className='relative w-full aspect-[1.6] rounded-[24px] overflow-hidden  transition-transform duration-300 hover:scale-[1.02]'>
            <Image
              src='/images/Templates/tavent/t3.png'
              alt='Banking analytics globe representation'
              fill
              className='object-cover'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

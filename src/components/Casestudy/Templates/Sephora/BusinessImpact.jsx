'use client';

import React from 'react';
import Image from 'next/image';

const topMetricCards = [
  {
    value: '70–80%',
    label: 'Reduction in Manual Scheduling Effort',
    icon: '/images/Templates/sephora/sepsvg9.svg',
  },
  {
    value: '30–40%',
    label: 'Improvement in Workforce Utilization',
    icon: '/images/Templates/sephora/sepsvg10.svg',
  },
];

const bottomListCards = [
  {
    text: 'Minimized scheduling errors and conflicts across all store locations',
    icon: '/images/Templates/sephora/sepsvg11.svg',
  },
  {
    text: 'Improved operational efficiency with real-time, data-driven scheduling',
    icon: '/images/Templates/sephora/sepsvg12.svg',
  },
  {
    text: 'Enhanced team productivity through intelligent automation',
    icon: '/images/Templates/sephora/sepsvg13.svg',
  },
];

const techStackCards = [
  {
    title: 'React.js',
    subtext: 'Custom front-end application',
  },
  {
    title: 'Domo App Studio',
    subtext: 'Platform for AI agent development',
  },
  {
    title: 'Domo APP_DB',
    subtext: 'Centralized data storage',
  },
  {
    title: 'Domo Datasets',
    subtext: 'Data integration & management',
  },
];

export default function BusinessImpact() {
  return (
    <div className='w-full'>
      {/* ── SECTION 1: BUSINESS IMPACT HEADER (Plain Off-White Background) ── */}
      <section className='w-full pt-8 md:pt-10 bg-[#F6F7F9]'>
        <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
          {/* Business Impact Header */}
          <h2
            className='text-2xl md:text-3xl font-bold uppercase mb-4 tracking-wide'
            style={{ color: '#1CC80C' }}
          >
            Business Impact
          </h2>

          {/* Subtitle */}
          <h3
            className='mb-8'
            style={{
              color: '#151C28',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '400',
              fontSize: '20px',
              lineHeight: '26px',
              letterSpacing: '0%',
              verticalAlign: 'middle',
            }}
          >
            Measurable outcomes that drive business value
          </h3>
        </div>
      </section>

      {/* ── SECTION 2: BUSINESS IMPACT CARDS (Full-Width sep3.png Background) ── */}
      <section className='relative w-full py-16 md:py-20 overflow-hidden bg-[#F6F7F9]'>
        {/* Background image constrained to this cards block, stretching full width */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Templates/sephora/sep3.png'
            alt='Sephora Cosmetics Bottles Background'
            fill
            className='object-cover object-center opacity-85'
            priority
          />
          {/* Soft translucent mask for maximum contrast */}
          <div className='absolute inset-0 bg-white/20 backdrop-blur-[2px]' />
        </div>

        <div className='relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
          <div className='w-full flex flex-col gap-8'>
            {/* Top Row: 2 Metric Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {topMetricCards.map((card, i) => (
                <div
                  key={i}
                  className='p-8 rounded-3xl bg-white shadow-lg flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl min-h-[180px] hover:scale-[1.01]'
                  style={{
                    border: '2px solid #1CC80C',
                  }}
                >
                  {/* Top Arrow/User Icon */}
                  <div className='relative w-8 h-8 mb-4 flex items-center justify-center'>
                    <Image
                      src={card.icon}
                      alt='Metric Icon'
                      width={32}
                      height={32}
                      className='object-contain'
                      priority
                    />
                  </div>

                  {/* Percentage Value */}
                  <span
                    className='text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight'
                    style={{ color: '#1CC80C' }}
                  >
                    {card.value}
                  </span>

                  {/* Label */}
                  <p
                    style={{
                      color: '#151C28',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '26px',
                      letterSpacing: '0%',
                      verticalAlign: 'middle',
                    }}
                  >
                    {card.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Row: 3 Long Horizontal Cards Stacked */}
            <div className='flex flex-col gap-4 w-full'>
              {bottomListCards.map((card, i) => (
                <div
                  key={i}
                  className='flex items-center gap-5 px-6 py-5 rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-lg min-h-[72px] hover:scale-[1.005]'
                  style={{
                    border: '2px solid #1CC80C',
                  }}
                >
                  {/* Icon Box with translucent green bg (#1FAD7E1A) */}
                  <div
                    className='flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center'
                    style={{ backgroundColor: '#1FAD7E1A' }}
                  >
                    <Image
                      src={card.icon}
                      alt='Outcome Icon'
                      width={22}
                      height={22}
                      className='object-contain'
                      priority
                    />
                  </div>

                  {/* Text */}
                  <span
                    style={{
                      color: '#151C28',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '26px',
                      letterSpacing: '0%',
                      verticalAlign: 'middle',
                    }}
                  >
                    {card.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: TECHNOLOGY STACK (Plain White Background) ── */}
      <section className='w-full pb-16 md:py-10 lg:py-16 bg-white'>
        <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
          {/* Technology Stack Header */}
          <h2
            className='text-2xl md:text-3xl font-bold uppercase mb-8 tracking-wide'
            style={{ color: '#0B95DA' }}
          >
            Technology Stack
          </h2>

          {/* 4-Card Tech Stack Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
            {techStackCards.map((card, i) => (
              <div
                key={i}
                className='p-6 md:p-8 rounded-[20px] bg-[#FFFFFF] transition-all duration-300 hover:shadow-lg hover:scale-[1.01] flex flex-col justify-center min-h-[120px] md:min-h-[140px]'
                style={{
                  border: '3px solid #C8E1FF',
                }}
              >
                {/* Tech Title */}
                <h3
                  className='text-base md:text-[18px] font-bold mb-2'
                  style={{ color: '#151C28' }}
                >
                  {card.title}
                </h3>

                {/* Tech Subtext */}
                <p
                  className='text-xs sm:text-sm md:text-[15px] font-medium leading-relaxed'
                  style={{ color: '#6C7C93' }}
                >
                  {card.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: VALUE DELIVERED (Deep Teal full width) ── */}
      <section className='w-full py-16 md:py-20 lg:py-24' style={{ backgroundColor: '#095F5A' }}>
        <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
          {/* Header */}
          <h2
            className='text-2xl md:text-3xl font-bold uppercase mb-4 tracking-wide'
            style={{ color: '#47B9F2' }}
          >
            Value Delivered
          </h2>

          {/* Subtitle */}
          <h3
            className='text-lg sm:text-xl md:text-[24px] lg:text-[28px] mb-6 md:mb-8'
            style={{
              color: '#FFFFFF',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '300',
            }}
          >
            From manual rostering to intelligent, scalable workforce automation
          </h3>

          {/* Paragraph copy */}
          <p
            className='text-sm sm:text-base md:text-[17px] lg:text-[18px] leading-relaxed max-w-7xl'
            style={{
              color: '#FFFFFF',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '400',
            }}
          >
            By combining AI-driven scheduling with a modern, intuitive interface, we enabled the
            organization to dramatically reduce manual effort, eliminate scheduling conflicts, and
            unlock data-driven workforce planning at scale. The platform positions the client for
            continued growth — with a scheduling infrastructure that adapts as operations expand.
          </p>
        </div>
      </section>
    </div>
  );
}

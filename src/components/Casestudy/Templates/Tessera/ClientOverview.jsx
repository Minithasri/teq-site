'use client';

import React from 'react';
import Image from 'next/image';

const challenges = [
  'Disconnected enterprise systems (SAP, Coupa, UKG) operating in silos',
  'Manual data handling causing delays and inefficiencies',
  'Inconsistent user and financial data across platforms',
  'Lack of real-time visibility into transactions and operations',
  'Inefficiencies in forecasting and budgeting processes',
  'Limited scalability in integration architecture',
];

export default function ClientOverview() {
  return (
    <section className='w-full'>
      {/* ── CLIENT OVERVIEW ─────────────────────────────────────────── */}
      <div className='w-full bg-white py-8 md:py-10'>
        <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
          <h2
            className='text-2xl md:text-3xl font-bold uppercase mb-5 tracking-wide'
            style={{ color: '#1791CF' }}
          >
            Client Overview
          </h2>
          <p
            className='text-sm sm:text-[16px] md:text-[18px] leading-relaxed max-w-7xl font-normal'
            style={{ color: '#6A7181' }}
          >
            A leading biotechnology organization operating multiple enterprise systems across
            finance, procurement, and workforce management. The organization required a robust,
            scalable integration solution to unify its data landscape, improve operational
            efficiency, enhance financial accuracy, and empower faster, data-driven decision-making.
          </p>
        </div>
      </div>

      {/* ── BUSINESS CHALLENGES ─────────────────────────────────────── */}
      <div className='relative w-full py-8 md:py-10 overflow-hidden'>
        {/* Background Image tessera2 — restricted only to this section */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Templates/tessera/tessera2.png'
            alt='Biotechnology Lab Background'
            fill
            className='object-cover object-center'
            priority
          />
          {/* Light-blue/white overlay for premium readability */}
          <div className='absolute inset-0 bg-white/85 backdrop-blur-[2px]' />
        </div>

        <div className='relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
          {/* Section Header */}
          <h2
            className='text-2xl md:text-3xl font-bold uppercase mb-4 tracking-wide'
            style={{ color: '#CB0707' }}
          >
            Business Challenges
          </h2>

          {/* Subheading */}
          <h3
            className='text-lg sm:text-xl md:text-[24px] lg:text-[28px] font-semibold mb-8 md:mb-10 leading-tight'
            style={{ color: '#151C28' }}
          >
            Fragmented Systems. Manual Processes. Limited Visibility.
          </h3>

          {/* 2-Column Challenge Cards Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
            {challenges.map((item, i) => (
              <div
                key={i}
                className='flex items-start gap-4 px-6 py-5 bg-white rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md'
                style={{
                  border: '2px solid #EB2B2B',
                }}
              >
                {/* Custom arrow icon (tesssvg1) */}
                <div className='flex-shrink-0 mt-1 w-4 h-4 relative flex items-center justify-center'>
                  <Image
                    src='/images/Templates/tessera/tesssvg1.svg'
                    alt='Arrow'
                    fill
                    className='object-contain'
                  />
                </div>

                {/* Challenge Text */}
                <span
                  className='text-sm sm:text-base md:text-[17px] leading-snug font-medium'
                  style={{ color: '#151C28E5' }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

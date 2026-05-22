'use client';

import React from 'react';
import Image from 'next/image';

const challenges = [
  'Manual and time-consuming rostering process across multiple store locations',
  'High dependency on store managers for schedule coordination and conflict resolution',
  'Frequent scheduling conflicts and errors leading to operational disruptions',
  'Inefficient workforce utilization across stores with uneven shift coverage',
  'Difficulty in scaling scheduling operations as the business expanded',
  'Lack of data-driven insights for strategic workforce planning',
];

export default function ClientOverview() {
  return (
    <section className='w-full bg-white'>
      {/* ── CLIENT OVERVIEW ─────────────────────────────────────────── */}
      <div className='w-full py-12 md:py-16'>
        <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
          <h2
            className='text-2xl md:text-3xl font-bold mb-5 tracking-wide'
            style={{ color: '#262626' }}
          >
            Client Overview
          </h2>

          <p
            className='text-sm sm:text-base md:text-[16px] lg:text-[17px] leading-relaxed max-w-7xl font-medium'
            style={{ color: '#6C7C93' }}
          >
            A leading retail organization in the beauty and personal care segment, operating
            multiple store locations nationwide. The organization required a scalable, intelligent
            approach to workforce planning and scheduling to ensure smooth day-to-day store
            operations while reducing the administrative burden on store managers.
          </p>
        </div>
      </div>

      {/* ── BUSINESS CHALLENGES HEADER (Plain White Background) ──────── */}
      <div className='w-full pb-8 md:pb-12 bg-white'>
        <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
          {/* Section Header */}
          <h2
            className='text-2xl md:text-3xl font-bold mb-4 tracking-wide'
            style={{ color: '#262626' }}
          >
            Business Challenges
          </h2>

          {/* Subheading */}
          <h3
            className='text-lg sm:text-xl md:text-[24px] lg:text-[28px] font-semibold leading-tight'
            style={{ color: '#151C28' }}
          >
            The obstacles hindering operational excellence
          </h3>
        </div>
      </div>

      {/* ── BUSINESS CHALLENGES CARDS GRID (With constrained sep3.png bg) ── */}
      <div className='relative w-full py-16 md:py-20 overflow-hidden min-h-[350px]'>
        {/* Background Image sep3.png — restricted strictly to the cards grid container */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Templates/sephora/sep3.png'
            alt='Sephora Challenges Background'
            fill
            className='object-cover object-center'
            priority
          />
          {/* Subtle overlay to guarantee maximum legibility of cards */}
          <div className='absolute inset-0 bg-[#30352E91]/10 backdrop-blur-[2px]' />
        </div>

        <div className='relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
          {/* 3x2 Responsive Challenges Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
            {challenges.map((challenge, i) => (
              <div
                key={i}
                className='flex items-center gap-4 px-6 py-5 rounded-2xl shadow-lg border-2  transition-all duration-300 min-h-[84px] hover:scale-[1.01]'
                style={{
                  borderColor: '#F5F5F5',
                  backgroundColor: '#FFFFFF',
                }}
              >
                {/* Warning Triangle Icon (sepsvg1) */}
                <div className='relative flex-shrink-0 w-6 h-6 flex items-center justify-center'>
                  <Image
                    src='/images/Templates/sephora/sepsvg1.svg'
                    alt='Warning Icon'
                    width={24}
                    height={24}
                    className='object-contain'
                    priority
                  />
                </div>

                {/* Challenge Description */}
                <span
                  className='text-sm sm:text-base md:text-[16px] leading-snug font-semibold'
                  style={{ color: '#151C28' }}
                >
                  {challenge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

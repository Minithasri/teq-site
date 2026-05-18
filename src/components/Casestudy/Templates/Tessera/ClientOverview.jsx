'use client';

import React from 'react';
import Image from 'next/image';

const challenges = [
  'Legacy middleware causing high latency and delayed synchronization of critical biotechnology datasets.',
  'Lack of end-to-end data lineage and visibility for compliance auditing in sensitive R&D pipelines.',
  'Manual data mapping errors leading to data inconsistencies across multi-cloud enterprise systems.',
  'High maintenance costs and operational overhead associated with legacy custom-coded ESB systems.',
  'Inability to scale data operations to support real-time data delivery to business stakeholders.',
  'Strict regulatory guidelines (FDA, GxP) requiring absolute data integrity and comprehensive audit trails.',
];

export default function ClientOverview() {
  return (
    <section className='w-full' style={{ backgroundColor: '#F3F4F7' }}>
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
        {/* ── CLIENT OVERVIEW ─────────────────────────────────────────── */}
        <div className='pt-20 md:pt-24 lg:pt-20 pb-8 md:pb-10'>
          <h2 className='text-2xl md:text-3xl font-bold mb-5' style={{ color: '#151C28' }}>
            Client Overview
          </h2>
          <p
            className='text-sm sm:text-[15px] md:text-[17px] leading-relaxed max-w-7xl'
            style={{ color: '#6A7181' }}
          >
            A leading biotechnology and pharmaceutical organization required a modern, highly
            scalable data integration platform to synchronize complex R&D databases, patient
            registries, and operational enterprise applications. Dealing with strict FDA compliance
            requirements and the need for zero-latency data synchronization, the client aimed to
            replace legacy ESB platforms with a state-of-the-art Boomi iPaaS integration engine.
          </p>
        </div>

        {/* ── BUSINESS CHALLENGES ─────────────────────────────────────── */}
        <div className='relative pb-10 md:pb-14'>
          {/* tessera2 image — absolutely positioned on the right */}
          <div className='hidden lg:block absolute right-[-96px] top-0 bottom-[-60px] w-[260px] xl:w-[300px] z-10'>
            <div className='relative w-full h-full'>
              <Image
                src='/images/Templates/tessera/tessera2.png'
                alt='Biotechnology Lab'
                fill
                className='object-cover object-center rounded-l-3xl'
                priority
              />
            </div>
          </div>

          {/* Title */}
          <h2 className='text-2xl md:text-3xl font-bold mb-6 md:mb-8' style={{ color: '#FF3B30' }}>
            Business Challenges
          </h2>

          {/* Numbered challenge cards — leave right space for the image */}
          <div className='flex flex-col gap-3 lg:pr-[280px] xl:pr-[320px]'>
            {challenges.map((item, i) => (
              <div
                key={i}
                className='flex items-center gap-4 px-4 py-3 bg-white border border-[#E2E4E9] rounded-xl hover:shadow-sm transition-all duration-300'
              >
                {/* Number badge */}
                <span
                  className='flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold'
                  style={{
                    backgroundColor: '#FF3B301A',
                    color: '#FF3B30',
                  }}
                >
                  {i + 1}
                </span>

                {/* Challenge text */}
                <span
                  className='text-sm md:text-[17px] leading-snug'
                  style={{ color: 'rgba(21, 28, 40, 0.85)' }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile image */}
          <div className='lg:hidden relative w-full aspect-[4/3] rounded-2xl overflow-hidden mt-8'>
            <Image
              src='/images/Templates/tessera/tessera2.png'
              alt='Biotechnology Lab'
              fill
              className='object-cover object-center'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

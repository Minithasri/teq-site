'use client';

import Image from 'next/image';

const challenges = [
  'Existing Azure-based system facing scalability and performance limitations',
  'Lack of standardized data models across payer projects',
  'High development effort for building new data pipelines',
  'Inefficient ETL processes impacting delivery timelines',
  'Limited modularity and reusability in data transformations',
  'Need for cloud migration to improve performance and scalability',
];

export default function ClientOverview() {
  return (
    <section className='w-full' style={{ backgroundColor: '#F3F4F7' }}>
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
        {/* ── CLIENT OVERVIEW ─────────────────────────────────────────── */}
        {/* Extra top padding to clear the overlapping care1 image from HeroSection */}
        <div className='pt-20 md:pt-24 lg:pt-20 pb-8 md:pb-10'>
          <h2
            className='text-2xl md:text-3xl font-bold mb-5'
            style={{ color: 'rgba(21, 28, 40, 0.88)' }}
          >
            Client Overview
          </h2>
          <p
            className='text-sm sm:text-[15px] md:text-[17px] leading-relaxed max-w-7xl'
            style={{ color: '#6A7181' }}
          >
            A leading healthcare organization managing multiple payer projects required a scalable,
            high performance data platform to support analytics, reporting, and data standardization
            across business units. With growing data complexity and increasing demand for real-time
            insights, the organization needed a modern cloud-native architecture to replace its
            legacy infrastructure.
          </p>
        </div>

        {/* ── BUSINESS CHALLENGES ─────────────────────────────────────── */}
        <div className='relative pb-10 md:pb-14'>
          {/* care2 image — absolutely positioned on the right */}
          <div className='hidden lg:block absolute right-[-96px] top-0 bottom-[-60px] w-[240px] xl:w-[280px] z-10'>
            <div className='relative w-full h-full'>
              <Image
                src='/images/Templates/careabout/care2.png'
                alt='Healthcare professional'
                fill
                className='object-cover object-top'
                priority
              />
            </div>
          </div>

          {/* Title */}
          <h2 className='text-2xl md:text-3xl font-bold mb-6 md:mb-8' style={{ color: '#EF4444' }}>
            Business Challenges
          </h2>

          {/* Numbered challenge cards — leave right space for the image */}
          <div className='flex flex-col gap-3 lg:pr-[260px] xl:pr-[300px]'>
            {challenges.map((item, i) => (
              <div
                key={i}
                className='flex items-center gap-4 px-4 py-3 rounded-xl'
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E4E9',
                }}
              >
                {/* Number badge */}
                <span
                  className='flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold'
                  style={{
                    backgroundColor: '#EF44441A',
                    color: '#EF4444',
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
              src='/images/Templates/careabout/care2.png'
              alt='Healthcare professional'
              fill
              className='object-cover object-top'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

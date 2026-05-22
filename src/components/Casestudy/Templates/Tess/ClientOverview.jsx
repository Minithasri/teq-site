'use client';

import Image from 'next/image';

const challenges = [
  'Fragmented data across multiple systems and manual records',
  'Lack of real-time visibility into production, quality, and supply chain operations',
  'Difficulty in consolidating data for decision-making',
  'Delayed insights impacting operational efficiency',
  'Challenges in maintaining product quality and process control',
  'Inefficient workflows and dependency on manual processes',
];

export default function ClientOverview() {
  return (
    <section className='w-full bg-white'>
      {/* ── CLIENT OVERVIEW ───────────────────────────────────────────── */}
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 pt-10 md:pt-14 pb-10 md:pb-12'>
        <h2
          className='text-xl md:text-2xl lg:text-3xl font-bold tracking-wide mb-4'
          style={{ color: '#262626' }}
        >
          Client Overview
        </h2>
        <p
          className='text-sm sm:text-[15px] md:text-[17px] leading-relaxed max-w-7xl'
          style={{ color: '#6A7181' }}
        >
          A leading manufacturing organization operating across multiple business functions
          including production, quality, and supply chain requiring seamless coordination, real-time
          monitoring, and high operational efficiency to stay competitive in an evolving market
          landscape.
        </p>
      </div>

      {/* ── THE CHALLENGE ─────────────────────────────────────────────── */}
      <div className='w-full' style={{ backgroundColor: '#F0F1F5' }}>
        <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-10 md:py-14'>
          <div className='flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16'>
            {/* Left — title + sub text + bullets */}
            <div className='flex-1 min-w-0'>
              <h2
                className='text-xl md:text-2xl lg:text-3xl font-bold tracking-wide mb-5'
                style={{ color: '#262626' }}
              >
                The Challenge
              </h2>

              <p
                className='text-sm sm:text-[17px] leading-relaxed mb-6 max-w-7xl'
                style={{ color: '#6A7181' }}
              >
                The organization faced significant hurdles in unifying its operational data and
                enabling real-time decision-making across departments.
              </p>

              <ul className='space-y-3'>
                {challenges.map((item, i) => (
                  <li key={i} className='flex items-start gap-3'>
                    {/* Blue filled circle bullet */}
                    <span
                      className='flex-shrink-0 w-2.5 h-2.5 rounded-full mt-1.5'
                      style={{ backgroundColor: '#0B64F4' }}
                    />
                    <span
                      className='text-sm md:text-[15px] lg:text-[17px] leading-snug'
                      style={{ color: '#131720' }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — tess2 image */}
            <div className='hidden lg:block flex-shrink-0 w-[280px] xl:w-[340px]'>
              <div className='relative w-full h-[320px] xl:h-[340px] -right-[150px] rounded-xl overflow-hidden'>
                <Image
                  src='/images/Templates/tess/tess2.png'
                  alt='Manufacturing operations'
                  fill
                  className='object-cover object-center'
                  priority
                />
              </div>
            </div>

            {/* Mobile image */}
            <div className='lg:hidden relative w-full aspect-[4/3] rounded-xl overflow-hidden'>
              <Image
                src='/images/Templates/tess/tess2.png'
                alt='Manufacturing operations'
                fill
                className='object-cover object-center'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

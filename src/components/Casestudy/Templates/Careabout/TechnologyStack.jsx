'use client';

import Image from 'next/image';

const techIcons = [
  { src: '/images/Templates/careabout/csvg9.svg', alt: 'AWS' },
  { src: '/images/Templates/careabout/csvg10.svg', alt: 'Snowflake' },
  { src: '/images/Templates/careabout/csvg11.svg', alt: 'dbt' },
  { src: '/images/Templates/careabout/csvg12.svg', alt: 'Python' },
  { src: '/images/Templates/careabout/csvg13.svg', alt: 'Dagster' },
  { src: '/images/Templates/careabout/csvg14.svg', alt: 'Domo' },
  { src: '/images/Templates/careabout/csvg15.svg', alt: 'Node.js' },
];

const techTags = ['AWS (S3)', 'Snowflake', 'DBT', 'Python', 'Dagster', 'Domo', 'Node.js'];

export default function TechnologyStack() {
  return (
    <>
      {/* ── Technology Stack ─────────────────────────────────────────── */}
      <section className='w-full' style={{ backgroundColor: '#F6F7F9' }}>
        <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-10 md:py-12'>
          {/* Title row + inline tech icons */}
          <div className='flex flex-wrap items-center gap-5 mb-5'>
            <h2
              className='text-2xl md:text-3xl font-bold whitespace-nowrap'
              style={{ color: '#1452BC' }}
            >
              Technology Stack
            </h2>

            {/* Inline icons */}
            <div className='flex items-center gap-4 flex-wrap'>
              {techIcons.map((icon, i) => (
                <div
                  key={i}
                  className='w-12 h-12 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0'
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={64}
                    height={64}
                    className='object-contain'
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Pill tags */}
          <div className='flex flex-wrap gap-3'>
            {techTags.map((tag, i) => (
              <span
                key={i}
                className='px-5 py-1.5 rounded-full text-sm md:text-[14px] font-medium whitespace-nowrap'
                style={{
                  border: '2px solid #4F7FF8',
                  color: '#1452BC',
                  backgroundColor: '#FFFFFF',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Value Delivered ───────────────────────────────────────────── */}
      <section className='w-full bg-white'>
        <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-10 md:py-12'>
          {/* Title */}
          <h2 className='text-2xl md:text-3xl font-bold mb-5' style={{ color: '#1452BC' }}>
            Value Delivered
          </h2>

          {/* Body */}
          <div className='space-y-4 max-w-7xl'>
            <p
              className='text-sm sm:text-[15px] md:text-[17px] leading-relaxed'
              style={{ color: '#6A7181' }}
            >
              Through a strategic combination of cloud migration, data standardization, and modern
              ETL frameworks, we transformed the client&apos;s data infrastructure into a scalable,
              efficient, and future-ready platform. The new architecture significantly reduced
              development timelines, improved data quality, and empowered business teams with
              real-time analytics capabilities.
            </p>
            <p
              className='text-sm sm:text-[15px] md:text-[17px] leading-relaxed'
              style={{ color: '#6A7181' }}
            >
              This engagement exemplifies how thoughtful cloud transformation and engineering
              excellence can drive measurable business outcomes from{' '}
              <span style={{ color: '#56D73C' }}>reduced costs</span> and{' '}
              <span style={{ color: '#56D73C' }}>
                faster delivery to scalable, standardized data operations.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

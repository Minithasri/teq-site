'use client';

import Image from 'next/image';

const techIcons = [
  '/images/Templates/tess/ttsvg9.svg',
  '/images/Templates/tess/ttsvg10.svg',
  '/images/Templates/tess/ttsvg11.svg',
  '/images/Templates/tess/ttsvg12.svg',
];

const techTags = ['Power BI', 'Power Apps', 'SQL Server', 'Oracle', 'Full-Stack Applications'];

export default function TechnologyStack() {
  return (
    <>
      {/* ── Technology Stack ─────────────────────────────────────────── */}
      <section className='w-full' style={{ backgroundColor: '#F0F1F5' }}>
        <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-10 md:py-14'>
          {/* Title row + inline icons */}
          <div className='flex flex-wrap items-center gap-6 mb-6'>
            <h2
              className='text-xl md:text-2xl lg:text-3xl font-bold tracking-wide whitespace-nowrap'
              style={{ color: '#262626' }}
            >
              Technology Stack
            </h2>

            {/* Inline tech icons */}
            <div className='flex items-center gap-8 flex-wrap'>
              {techIcons.map((src, i) => (
                <div
                  key={i}
                  className='w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0'
                >
                  <Image
                    src={src}
                    alt={`tech ${i + 9}`}
                    width={64}
                    height={64}
                    className='object-contain'
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Category pills */}
          <div className='flex flex-wrap gap-3'>
            {techTags.map((tag, i) => (
              <span
                key={i}
                className='px-5 py-2 rounded-full text-sm md:text-[14px] font-medium whitespace-nowrap'
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  color: '#131720',
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
        <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-10 md:py-14'>
          {/* Title */}
          <h2
            className='text-xl md:text-2xl lg:text-3xl font-bold tracking-wide mb-5'
            style={{ color: '#262626' }}
          >
            Value Delivered
          </h2>

          {/* Body paragraphs */}
          <div className='space-y-4 max-w-7xl'>
            <p
              className='text-sm sm:text-[16px] md:text-[17px] leading-relaxed'
              style={{ color: '#6A7181' }}
            >
              This engagement transformed a fragmented, manually-driven operational environment into
              a unified, data-driven digital ecosystem. By centralizing information, automating
              critical workflows, and delivering real-time analytics, the organization is now
              equipped to make faster, more informed decisions at every level.
            </p>
            <p
              className='text-sm sm:text-[15px] md:text-[17px] leading-relaxed'
              style={{ color: '#6A7181' }}
            >
              The platform provides a scalable foundation that grows with the business enabling
              continuous improvement in efficiency, quality, and competitive advantage. What began
              as a digital transformation initiative has become the backbone of operational
              excellence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import Image from 'next/image';

const techIcons = [
  '/images/Templates/gsk/gsvg13.svg',
  '/images/Templates/gsk/gsvg14.svg',
  '/images/Templates/gsk/gsvg15.svg',
  '/images/Templates/gsk/gsvg16.svg',
  '/images/Templates/gsk/gsvg17.svg',
];

const techTags = [
  'Azure Data Factory',
  'Azure SQL Database',
  'Power BI',
  'PowerShell',
  'SQL Server',
];

export default function TechnologyStack() {
  return (
    <>
      {/* ── Technology Stack ─────────────────────────────────────────── */}
      <section className='w-full bg-white'>
        <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-12 md:py-16'>
          <h2 className='text-2xl md:text-3xl font-bold whitespace-nowrap text-center'>
            Technology Stack
          </h2>
          {/* Title row with icons */}
          <div className='mt-6 flex flex-wrap items-center justify-center gap-4 mb-8'>
            {/* Inline tech icons */}
            <div className='flex items-center gap-12 flex-wrap'>
              {techIcons.map((src, i) => (
                <div key={i} className='w-14 h-14 flex items-center justify-center flex-shrink-0'>
                  <Image
                    src={src}
                    alt={`tech icon ${i + 13}`}
                    width={56}
                    height={56}
                    className='object-contain'
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tag pills */}
          <div className='flex flex-wrap items-center justify-center gap-3'>
            {techTags.map((tag, i) => (
              <span
                key={i}
                className='px-5 py-2 rounded-[10px] text-sm md:text-[14px] font-medium whitespace-nowrap border-2 border-[#F5F5F5] shadow-[0px_8px_22px_rgba(0,0,0,0.08)]'
                style={{
                  backgroundColor: 'rgba(236, 240, 244, 0.37)',
                  color: '#303D50',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Value Delivered ───────────────────────────────────────────── */}
      <section
        className='w-full'
        style={{
          background: 'linear-gradient(103.92deg, #D37E22 0%, #DF9F2A 50%, #C57D21 100%)',
        }}
      >
        <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-8 md:py-10 text-center'>
          {/* Title */}
          <h2 className='text-2xl md:text-3xl font-bold mb-6' style={{ color: '#F3F5F7' }}>
            Value Delivered
          </h2>

          {/* Body paragraphs */}
          <div className='space-y-4 max-w-7xl'>
            <p className='text-sm sm:text-[16px] leading-relaxed' style={{ color: '#FFFFFF' }}>
              By implementing a scalable, automated data engineering solution, we empowered a
              leading pharmaceutical organization to transform its identity access and license
              management capabilities — shifting from reactive, manual processes to a proactive,
              data-driven operating model.
            </p>
            <p className='text-sm sm:text-[16px] leading-relaxed' style={{ color: '#FFFFFF' }}>
              The engagement delivered tangible cost savings of <strong>~25%</strong>, reduced
              manual effort by <strong>~40%</strong>, and established a robust governance framework
              positioning the organization for sustained compliance, operational efficiency, and
              scalable growth.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

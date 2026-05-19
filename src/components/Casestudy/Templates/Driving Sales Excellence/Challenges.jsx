'use client';

import Image from 'next/image';

const problemItems = [
  'Sales data came from multiple sources, with inconsistencies in accuracy',
  'Reports were delayed and reactive, not aligned with real-time needs',
  'Leadership lacked consolidated executive summaries to track KPIs',
  'No system to validate sales data before it reached decision-makers',
  'Limited ability to monitor channel-wise and region-wise sales performance',
];

export default function ExecutiveSummaryAndProblem() {
  return (
    <div className='w-full bg-white select-none'>
      {/* SECTION 1: EXECUTIVE SUMMARY */}
      <section className='w-full relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-28 pt-12 sm:pt-14 md:pt-16 pb-16 sm:pb-18 md:pb-20 flex flex-col md:flex-row items-start justify-between gap-10 md:gap-12'>
        <div className='max-w-[840px] z-10'>
          {/* Header Title */}
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              lineHeight: '120%',
              color: '#0F1729',
            }}
            className='mb-5 md:mb-6 tracking-tight text-[28px] sm:text-[30px] md:text-[34px]'
          >
            Executive Summary
          </h2>

          {/* Paragraphs */}
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              color: '#334155',
            }}
            className='flex flex-col gap-4 sm:gap-5 text-[15px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[25px] md:leading-[26px]'
          >
            <p>
              A retail brand, faced challenges in tracking sales performance and validating data
              accuracy across multiple channels. Existing reporting methods lacked real-time
              visibility, making it difficult for leadership to make confident, data-driven
              decisions.
            </p>

            <p className='w-[1250px]'>
              GWC partnered with the client to develop executive summaries, validated data reports,
              and interactive sales dashboards. The solution provided real-time insights into sales
              trends, data accuracy checks, and leadership-level reporting, enabling faster and more
              reliable decision-making.
            </p>
          </div>
        </div>

        {/* Floating Basketball Graphic Component */}
        <div className='relative md:absolute top-0 right-0 md:right-2 w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[350px] lg:h-[350px] mx-auto md:mx-0'>
          <Image
            src='/images/Templates/templatez/drivingsales/basket.png'
            alt='Basketball Goal Layout Visual'
            fill
            priority
            className='object-contain object-top'
          />
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM */}
      <section
        className='w-full px-4 py-12 sm:py-14 md:py-16 flex flex-col items-center justify-center'
        style={{
          background: '#FFF1F1',
        }}
      >
        <div className='w-full max-w-[1440px] flex flex-col items-center'>
          {/* Section Main Title */}
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              lineHeight: '120%',
              color: '#0F1729',
            }}
            className='text-center mb-3 md:mb-4 tracking-tight text-[28px] sm:text-[30px] md:text-[34px]'
          >
            The Problem
          </h2>

          {/* Subtitle Description */}
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              color: '#64748B',
            }}
            className='text-center mb-8 sm:mb-9 md:mb-10 text-[18px] sm:text-[20px] md:text-[22px] leading-[26px] sm:leading-[27px] md:leading-[28px]'
          >
            Fragmented and Unverified Sales Data
          </p>

          {/* White Card Bullet Container */}
          <div
            className='w-full max-w-[820px] px-5 sm:px-8 md:px-12 py-8 sm:py-9 md:py-10 bg-white'
            style={{
              borderRadius: '16px',
              boxShadow:
                '0px 10px 30px 5px rgba(0, 0, 0, 0.06), 0px 4px 12px 2px rgba(0, 0, 0, 0.04)',
            }}
          >
            <ul className='flex flex-col gap-4 sm:gap-5 m-0 p-0 list-none'>
              {problemItems.map((item, index) => (
                <li key={index} className='flex items-start gap-3 sm:gap-4'>
                  {/* Bullet */}
                  <span
                    className='flex-shrink-0 w-[8px] h-[8px] sm:w-[9px] sm:h-[9px] rounded-full mt-[8px] sm:mt-[10px]'
                    style={{ backgroundColor: '#F6352F' }}
                  />

                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      color: '#1E293B',
                    }}
                    className='text-[15px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[23px] md:leading-[24px]'
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

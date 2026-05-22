'use client';

import Image from 'next/image';

const challengeCards = [
  {
    icon: '/images/Templates/z-hy-24/excel.svg',
    title: 'Excel Dependency',
    desc: 'Heavy reliance on Excel with complex formulas created fragile, error-prone reporting workflows across the organization.',
    note: '→ Single point of failure',
  },
  {
    icon: '/images/Templates/z-hy-24/manual.svg',
    title: 'Manual Consolidation',
    desc: 'Manual consolidation across five separate reports consumed significant analyst time and introduced data synchronization risks.',
    note: '→ 5 reports merged manually',
  },
  {
    icon: '/images/Templates/z-hy-24/calculation.svg',
    title: 'Calculation Errors',
    desc: 'High risk of calculation errors and inconsistencies due to complex nested formulas and manual data entry across spreadsheets.',
    note: '→ Undetected discrepancies',
  },
  {
    icon: '/images/Templates/z-hy-24/time.svg',
    title: 'Time-Consuming Updates',
    desc: 'Time-consuming updates and validation processes delayed critical investment decisions and quarterly reporting cycles.',
    note: '→ Days of manual validation',
  },
  {
    icon: '/images/Templates/z-hy-24/lack.svg',
    title: 'Lack of Visibility',
    desc: 'No centralized visibility across assets and projects made it impossible to get a unified view of portfolio performance.',
    note: '→ Siloed data views',
  },
  {
    icon: '/images/Templates/z-hy-24/portfolio.svg',
    title: 'Portfolio Tracking Gaps',
    desc: 'Difficulty in tracking portfolio-level performance metrics across diverse clean energy assets and investment projects.',
    note: '→ Incomplete portfolio view',
  },
];

const HeroSection = () => {
  return (
    <section className='w-full overflow-hidden bg-[#F5F5F5]'>
      {/* TOP BLUE SECTION */}
      <div className='bg-[#477DDA]'>
        <div className='mx-auto max-w-7xl px-4 md:px-6 pt-24 pb-10 md:pb-12'>
          {/* TITLE */}
          <h1 className='max-w-6xl text-3xl md:text-5xl leading-[1.05] font-semibold tracking-[-2px] text-white'>
            Automated Asset & Project Reporting Platform
          </h1>

          {/* SUBTITLE */}
          <p className='mt-6 max-w-5xl text-lg md:text-xl leading-[1.4] font-medium text-white'>
            Transforming Clean Energy Investment Reporting with Automation & Real-Time Insights
          </p>

          {/* DESCRIPTION */}
          <p className='mt-6 max-w-6xl text-sm md:text-lg leading-[1.5] text-white'>
            A global clean energy investment firm transformed its reporting ecosystem by replacing
            complex Excel-based processes with an automated, centralized BI platform enabling
            real-time portfolio insights, improved accuracy, and scalable decision-making.
          </p>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className='relative mx-auto max-w-7xl px-4 md:px-6 pt-8 md:pt-10 pb-10 md:pb-12'>
        {/* TOP CONTENT */}
        {/* LABEL */}
        <h2 className='font-poppins text-[28px] md:text-[42px] leading-none font-bold tracking-tight text-center'>
          The Challenge
        </h2>
        <div className='flex items-start justify-between'>
          {/* LEFT SIDE */}
          <div>
            {/* HEADING */}
            <h3 className='mt-6 font-poppins max-w-4xl text-2xl md:text-4xl leading-[1.1] tracking-[-2px] text-[#111827]'>
              From Spreadsheet Complexity to Portfolio Intelligence
            </h3>
          </div>

          {/* DESKTOP IMAGE */}
          <div className='relative hidden md:block w-[320px] flex-shrink-0'>
            {/* BACK IMAGE */}
            <div className='absolute -top-20 -right-48 overflow-hidden opacity-90'>
              <Image
                src='/images/Templates/z-hy-24/sunset-sky-powers-wind.png'
                alt='Background Energy'
                width={260}
                height={150}
                priority
                className='h-[150px] w-[260px] object-cover'
              />
            </div>

            {/* FRONT IMAGE */}
            <div className='relative -top-10 -right-[200px] overflow-hidden rounded-2xl'>
              <Image
                src='/images/Templates/z-hy-24/sunset-sky-powers-wind.png'
                alt='Energy'
                width={260}
                height={150}
                priority
                className='h-[150px] w-[260px] object-cover'
              />
            </div>
          </div>
        </div>

        {/* MOBILE IMAGE */}
        <div className='mt-6 md:hidden'>
          <div className='overflow-hidden rounded-3xl'>
            <Image
              src='/images/Templates/z-hy-24/sunset-sky-powers-wind.png'
              alt='Energy'
              width={1200}
              height={800}
              priority
              className='h-52 w-full object-cover'
            />
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className='font-poppins leading-[1.6] text-[#7A7F8C] text-center'>
          The firm&apos;s reporting infrastructure relied on fragile Excel-based workflows, creating
          systemic risks across its clean energy investment portfolio.
        </p>

        {/* CHALLENGE CARDS */}
        <div className='mt-10 grid grid-cols-1 gap-5 md:grid-cols-3'>
          {challengeCards.map((card, index) => (
            <div
              key={index}
              className='rounded-[16px] border-l-[3px] border-[#FF4B4B] shadow-[0_4px_12px_0px_rgba(0,0,0,0.08)] px-6 py-5'
            >
              {/* HEADER */}
              <div className='flex items-center gap-3'>
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={28}
                  height={28}
                  className='h-6 w-6 md:h-8 md:w-8 object-contain'
                />

                <h4 className='text-[16px] md:text-[18px] font-semibold text-[#0F1729]/80'>
                  {card.title}
                </h4>
              </div>

              {/* DESCRIPTION */}
              <p className='mt-5 text-[14px] md:text-[15px] leading-[1.8] text-[#74798B]'>
                {card.desc}
              </p>

              {/* FOOT NOTE */}
              <p className='mt-8 text-[13px] text-[#0F1729]/80'>{card.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

'use client';

import Image from 'next/image';

/* SVG ICONS */
const ExcelIcon = () => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='#FF4B4B'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    {/* FILE */}
    <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
    <path d='M14 2v6h6' />

    {/* THREE COLUMN DOTS */}
    <circle cx='9' cy='12' r='0.8' fill='#FF4B4B' stroke='none' />
    <circle cx='12' cy='12' r='0.8' fill='#FF4B4B' stroke='none' />

    <circle cx='9' cy='15' r='0.8' fill='#FF4B4B' stroke='none' />
    <circle cx='12' cy='15' r='0.8' fill='#FF4B4B' stroke='none' />
  </svg>
);

const LayerIcon = () => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='#FF4B4B'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <polygon points='12 2 3 7 12 12 21 7 12 2' />
    <polyline points='3 12 12 17 21 12' />
    <polyline points='3 17 12 22 21 17' />
  </svg>
);

const AlertIcon = () => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='#FF4B4B'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z' />
    <line x1='12' y1='9' x2='12' y2='13' />
    <line x1='12' y1='17' x2='12.01' y2='17' />
  </svg>
);

const ClockIcon = () => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='#FF4B4B'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='12' cy='12' r='9' />
    <polyline points='12 7 12 12 15 15' />
  </svg>
);

const EyeIcon = () => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='#FF4B4B'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z' />
    <circle cx='12' cy='12' r='3' />
  </svg>
);

const GraphIcon = () => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='#FF4B4B'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <polyline points='3 7 9 13 13 9 21 17' />
    <polyline points='14 17 21 17 21 10' />
  </svg>
);

const challengeCards = [
  {
    icon: <ExcelIcon />,
    title: 'Excel Dependency',
    desc: 'Heavy reliance on Excel with complex formulas created fragile, error-prone reporting workflows across the organization.',
    note: '→ Single point of failure',
  },
  {
    icon: <LayerIcon />,
    title: 'Manual Consolidation',
    desc: 'Manual consolidation across five separate reports consumed significant analyst time and introduced data synchronization risks.',
    note: '→ 5 reports merged manually',
  },
  {
    icon: <AlertIcon />,
    title: 'Calculation Errors',
    desc: 'High risk of calculation errors and inconsistencies due to complex nested formulas and manual data entry across spreadsheets.',
    note: '→ Undetected discrepancies',
  },
  {
    icon: <ClockIcon />,
    title: 'Time-Consuming Updates',
    desc: 'Time-consuming updates and validation processes delayed critical investment decisions and quarterly reporting cycles.',
    note: '→ Days of manual validation',
  },
  {
    icon: <EyeIcon />,
    title: 'Lack of Visibility',
    desc: 'No centralized visibility across assets and projects made it impossible to get a unified view of portfolio performance.',
    note: '→ Siloed data views',
  },
  {
    icon: <GraphIcon />,
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
          <h1 className='max-w-6xl text-3xl md:text-5xl leading-[1.05] font-semibold tracking-[-2px] text-[#0B1020]'>
            Automated <span className='text-[#7DF45B]'>Asset & Project Reporting</span> Platform
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
        <div className='flex items-start justify-between'>
          {/* LEFT SIDE */}
          <div>
            {/* LABEL */}
            <h2 className='font-poppins text-[28px] md:text-[42px] leading-none font-bold uppercase tracking-tight text-[#FF2020]'>
              THE CHALLENGE
            </h2>

            {/* HEADING */}
            <h3 className='mt-6 font-poppins max-w-4xl text-2xl md:text-4xl leading-[1.1] tracking-[-2px] text-[#111827]'>
              From Spreadsheet Complexity to Portfolio Intelligence
            </h3>
          </div>

          {/* DESKTOP IMAGE */}
          <div className='relative hidden md:block w-[320px] flex-shrink-0'>
            {/* BACK IMAGE */}
            <div className='absolute -top-10 -right-48 overflow-hidden opacity-90'>
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
            <div className='relative -top-6 -right-[200px] overflow-hidden rounded-2xl'>
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
        <p className='font-poppins leading-[1.6] text-[#7A7F8C]'>
          The firm&apos;s reporting infrastructure relied on fragile Excel-based workflows, creating
          systemic risks across its clean energy investment portfolio.
        </p>

        {/* CHALLENGE CARDS */}
        <div className='mt-10 grid grid-cols-1 gap-5 md:grid-cols-3'>
          {challengeCards.map((card, index) => (
            <div
              key={index}
              className='rounded-[16px] border-l-[3px] border-[#FF4B4B] bg-[#FAFAFA] px-6 py-5'
            >
              {/* HEADER */}
              <div className='flex items-center gap-3'>
                {card.icon}

                <h4 className='text-[16px] md:text-[18px] font-semibold text-[#FF4B4B]'>
                  {card.title}
                </h4>
              </div>

              {/* DESCRIPTION */}
              <p className='mt-5 text-[14px] md:text-[15px] leading-[1.8] text-[#74798B]'>
                {card.desc}
              </p>

              {/* FOOT NOTE */}
              <p className='mt-8 text-[13px] text-[#FF4B4B]'>{card.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

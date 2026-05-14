'use client';

import Image from 'next/image';

const solutionSteps = [
  'Data Inputs',
  'App Studio',
  'ETL Pipelines',
  'Metrics Engine',
  'Dashboards',
];

const solutionCards = [
  {
    number: '01',
    title: 'Centralized BI Platform',
    description:
      'Built a centralized BI platform using Domo, consolidating all reporting into a single source of truth for the investment portfolio.',
    tag: 'Domo Platform',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <ellipse cx='12' cy='6' rx='5' ry='2.5' stroke='white' strokeWidth='1.8' />
        <path
          d='M7 6v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V6'
          stroke='white'
          strokeWidth='1.8'
          strokeLinecap='round'
        />
        <path
          d='M7 10v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4'
          stroke='white'
          strokeWidth='1.8'
          strokeLinecap='round'
        />
      </svg>
    ),
  },

  {
    number: '02',
    title: 'Dynamic Data Input Interface',
    description:
      'Developed a dynamic data input interface using JavaScript (Domo App Studio), enabling structured data capture with validation.',
    tag: 'Domo App Studio',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        {/* LEFT BRACKET */}
        <path
          d='M10 8L6 12L10 16'
          stroke='white'
          strokeWidth='1.8'
          strokeLinecap='round'
          strokeLinejoin='round'
        />

        {/* BACKWARD SLASH */}
        <path d='M13 7L11 17' stroke='white' strokeWidth='1.8' strokeLinecap='round' />

        {/* RIGHT BRACKET */}
        <path
          d='M14 8L18 12L14 16'
          stroke='white'
          strokeWidth='1.8'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },

  {
    number: '03',
    title: 'Structured Questionnaire Capture',
    description:
      'Captured structured project and asset-level inputs via a guided questionnaire, replacing unstructured spreadsheet submissions.',
    tag: 'Standardized inputs',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <path
          d='M12 5L6 8L12 11L18 8L12 5Z'
          stroke='white'
          strokeWidth='1.8'
          strokeLinejoin='round'
        />
        <path
          d='M6 12L12 15L18 12'
          stroke='white'
          strokeWidth='1.8'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M6 16L12 19L18 16'
          stroke='white'
          strokeWidth='1.8'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },

  {
    number: '04',
    title: 'API-Based Data Integration',
    description:
      'Integrated with Domo Jupyter (Python) to fetch API-based JSON data from external systems, automating data collection.',
    tag: 'Python + Jupyter',
    icon: (
      <svg
        viewBox='0 0 24 24'
        className='h-5 w-5'
        fill='none'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        {/* FILE */}
        <path d='M14 3H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9z' />
        <path d='M14 3v6h6' />

        {/* CODE BRACES */}
        <path d='M10 13l-1.5 1.5L10 16' />
        <path d='M14 13l1.5 1.5L14 16' />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'ETL Pipeline Design',
    description:
      'Designed ETL pipelines to cleanse and transform data, standardize calculations, and compute asset, project, and portfolio-level metrics.',
    tag: 'Magic ETL',
    icon: (
      <svg
        viewBox='0 0 24 24'
        className='h-4 w-4 rotate-180'
        fill='none'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <circle cx='7' cy='7' r='3' />
        <circle cx='17' cy='17' r='3' />
        <path d='M10 7h4a3 3 0 0 1 3 3v4' />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Automated Dashboard Delivery',
    description:
      'Delivered 5 automated dashboards for unified reporting with real-time data flow, eliminating all manual dependencies.',
    tag: '5 dashboards deployed',
    icon: (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <rect x='5' y='5' width='5' height='5' rx='1' stroke='white' strokeWidth='1.8' />
        <rect x='14' y='5' width='5' height='5' rx='1' stroke='white' strokeWidth='1.8' />
        <rect x='5' y='14' width='5' height='5' rx='1' stroke='white' strokeWidth='1.8' />
        <rect x='14' y='14' width='5' height='5' rx='1' stroke='white' strokeWidth='1.8' />
      </svg>
    ),
  },
];

const SolutionSection = () => {
  return (
    <section className='w-full overflow-hidden bg-[#F5F5F5]'>
      <div className='mx-auto max-w-7xl mx-auto max-w-7xl px-4 md:px-6 pt-8 md:pt-10 pb-10 md:pb-12'>
        {/* TOP CONTENT */}
        <div className='flex items-start justify-between gap-8'>
          {/* LEFT CONTENT */}
          <div>
            {/* LABEL */}
            <h2 className='text-2xl md:text-5xl leading-none font-semibold uppercase tracking-tight text-[#3E43F0]'>
              THE SOLUTION
            </h2>

            {/* HEADING */}
            <h3 className='mt-5 text-2xl md:text-5xl leading-[1.1] tracking-[-2px] text-[#111827]'>
              Solution Architecture
            </h3>

            {/* DESCRIPTION */}
            <p className='mt-5 text-[14px] md:text-[18px] leading-[1.6] text-[#7A7F8C]'>
              An end-to-end automated reporting platform replacing fragile spreadsheets with
              real-time portfolio intelligence.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className='hidden md:block -top-20'>
            <Image
              src='/images/Templates/z-hy-24/lamp.png'
              alt='Solution'
              width={180}
              height={220}
              priority
              className='h-[220px] w-[180px] object-contain'
            />
          </div>
        </div>

        {/* MOBILE IMAGE */}
        <div className='mt-6 flex justify-center md:hidden'>
          <Image
            src='/images/Templates/z-hy-24/lamp.png'
            alt='Solution'
            width={140}
            height={180}
            priority
            className='h-[180px] w-[140px] object-contain'
          />
        </div>

        {/* FLOW BOX */}
        <div className='rounded-2xl border border-[#4D56E2] bg-[#F8F8F8] px-5 md:px-10 py-5 md:py-7'>
          <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
            {solutionSteps.map((step, index) => (
              <div key={step} className='flex items-center gap-4'>
                {/* STEP BOX */}
                <div
                  className={`min-w-[150px] rounded-[12px] px-6 py-4 text-center text-[14px] md:text-[15px] ${step === 'ETL Pipelines' ? 'bg-[#DDF2FF] text-[#27A5F9]' : step === 'Dashboards' ? 'bg-[#E5F5F1] text-[#43B8A3]' : 'bg-[#EAEAEA] text-[#3C3C3C]'}`}
                >
                  {step}
                </div>

                {/* ARROW */}
                {index !== solutionSteps.length - 1 && (
                  <div className='hidden md:block text-3xl font-light text-[#74798B]'>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* SOLUTION IMPLEMENTATION CARDS */}
      <div className='relative mt-10 overflow-hidden rounded-[28px]'>
        {/* BACKGROUND IMAGE */}
        <div className='absolute inset-0'>
          <Image
            src='/images/Templates/z-hy-24/wind-turbines.png'
            alt='Background'
            fill
            priority
            className='object-cover'
          />

          {/* OVERLAY */}
          <div className='absolute inset-0 bg-[#D8E7F4]/75' />
        </div>

        {/* CONTENT */}
        <div className='relative max-w-7xl mx-auto px-4 md:px-6 py-5 md:py-7'>
          <div className='space-y-3'>
            {solutionCards.map(card => (
              <div
                key={card.number}
                className='rounded-2xl border border-[#4A5BFF] bg-white px-4 md:px-5 py-4 md:py-5'
              >
                <div className='flex items-start gap-4 md:gap-5'>
                  {/* NUMBER */}
                  <div className='pt-1 text-2xl md:text-[38px] font-semibold leading-none text-[#3E78F0]'>
                    {card.number}
                  </div>

                  {/* ICON */}
                  <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#5146E5]'>
                    {card.icon}
                  </div>

                  {/* CONTENT */}
                  <div className='flex-1'>
                    {/* TITLE */}
                    <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
                      <h3 className='text-[15px] md:text-[18px] font-semibold text-[#2451D1]'>
                        {card.title}
                      </h3>

                      <p className='text-[11px] md:text-[12px] text-[#44B9A7]'>{card.tag}</p>
                    </div>

                    {/* DESCRIPTION */}
                    <p className='mt-2 max-w-5xl text-[12px] md:text-[14px] leading-[1.7] text-[#7A7F8C]'>
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

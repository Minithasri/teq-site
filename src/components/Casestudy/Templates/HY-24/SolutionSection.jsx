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
    icon: '/images/Templates/z-hy-24/centralized.svg',
  },

  {
    number: '02',
    title: 'Dynamic Data Input Interface',
    description:
      'Developed a dynamic data input interface using JavaScript (Domo App Studio), enabling structured data capture with validation.',
    tag: 'Domo App Studio',
    icon: '/images/Templates/z-hy-24/dynamic.svg',
  },

  {
    number: '03',
    title: 'Structured Questionnaire Capture',
    description:
      'Captured structured project and asset-level inputs via a guided questionnaire, replacing unstructured spreadsheet submissions.',
    tag: 'Standardized inputs',
    icon: '/images/Templates/z-hy-24/structured.svg',
  },

  {
    number: '04',
    title: 'API-Based Data Integration',
    description:
      'Integrated with Domo Jupyter (Python) to fetch API-based JSON data from external systems, automating data collection.',
    tag: 'Python + Jupyter',
    icon: '/images/Templates/z-hy-24/api.svg',
  },
  {
    number: '05',
    title: 'ETL Pipeline Design',
    description:
      'Designed ETL pipelines to cleanse and transform data, standardize calculations, and compute asset, project, and portfolio-level metrics.',
    tag: 'Magic ETL',
    icon: '/images/Templates/z-hy-24/etl.svg',
  },
  {
    number: '06',
    title: 'Automated Dashboard Delivery',
    description:
      'Delivered 5 automated dashboards for unified reporting with real-time data flow, eliminating all manual dependencies.',
    tag: '5 dashboards deployed',
    icon: '/images/Templates/z-hy-24/automated.svg',
  },
];

const SolutionSection = () => {
  return (
    <section className='w-full overflow-hidden bg-[#F5F5F5]'>
      <div className='mx-auto max-w-7xl mx-auto max-w-7xl px-4 md:px-6 pt-8 md:pt-10 pb-10 md:pb-12'>
        {/* LABEL */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-tight text-center'>
          The Solution
        </h2>
        {/* TOP CONTENT */}
        <div className='flex items-start justify-between gap-8'>
          {/* LEFT CONTENT */}
          <div>
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
              className='h-[180px] w-[180px] object-contain'
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
        <div className='rounded-2xl border-2 border-[#F5F5F5] shadow-[0_4px_12px_0px_rgba(0,0,0,0.08)] px-5 md:px-10 py-5 md:py-7'>
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
                className='rounded-2xl border-2 border-[#F5F5F5] shadow-[0_4px_12px_0px_rgba(0,0,0,0.08)] bg-white px-4 md:px-5 py-4 md:py-5'
              >
                <div className='flex items-start gap-4 md:gap-5'>
                  {/* NUMBER */}
                  <div className='pt-1 text-2xl md:text-[38px] font-semibold leading-none text-[#0846AA]'>
                    {card.number}
                  </div>

                  {/* ICON */}
                  <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#0846AA]/60'>
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={28}
                      height={28}
                      className='h-6 w-6 md:h-8 md:w-8 object-contain'
                    />
                  </div>

                  {/* CONTENT */}
                  <div className='flex-1'>
                    {/* TITLE */}
                    <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
                      <h3 className='text-[15px] md:text-[18px] font-semibold text-[#0F1729]/80'>
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

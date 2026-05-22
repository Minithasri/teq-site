'use client';

import Image from 'next/image';

const challengeCards = [
  {
    title: 'Fragmented Data Sources',
    desc: 'Multiple APIs and systems',
    icon: '/images/Templates/take2eton-1/warning.svg',
  },
  {
    title: 'Lack of Standard Formats',
    desc: 'Inconsistent structures',
    icon: '/images/Templates/take2eton-1/warning.svg',
  },
  {
    title: 'Delayed Processing',
    desc: 'Slow data updates',
    icon: '/images/Templates/take2eton-1/warning.svg',
  },
  {
    title: 'Data Quality Issues',
    desc: 'Inconsistent and duplicate data',
    icon: '/images/Templates/take2eton-1/warning.svg',
  },
  {
    title: 'Manual ETL Effort',
    desc: 'High dependency on manual workflows',
    icon: '/images/Templates/take2eton-1/warning.svg',
  },
];

const solutionCards = [
  {
    title: 'API & Webhook Integration',
    desc: 'Automated multi-source ingestion',
    icon: '/images/Templates/take2eton-1/tick.svg',
  },
  {
    title: 'ETL Pipeline Automation',
    desc: 'Built using Magic ETL and Python',
    icon: '/images/Templates/take2eton-1/tick.svg',
  },
  {
    title: 'Centralized Data Layer',
    desc: 'Maintained structured datasets',
    icon: '/images/Templates/take2eton-1/tick.svg',
  },
  {
    title: 'Data Validation and Deduplication',
    desc: 'Ensured quality and accuracy',
    icon: '/images/Templates/take2eton-1/tick.svg',
  },
  {
    title: 'XML Transformation Workflows',
    desc: 'Delivered structured outputs',
    icon: '/images/Templates/take2eton-1/tick.svg',
  },
];

const ChallengesSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      {/* FLOATING IMAGE */}
      <div className='absolute right-0 bottom-0 hidden md:block z-10'>
        <Image
          src='/images/Templates/take2eton-5/challenge.png'
          alt='Travel AI'
          width={350}
          height={240}
          priority
          className='
          h-[240px]
          w-[350px]
          object-contain
        '
        />
      </div>

      <div className='relative mx-auto max-w-7xl px-4 md:px-6 pt-24 pb-8'>
        {/* ================= TOP HEADING ================= */}
        <div className='flex flex-col gap-3 md:flex-row md:items-start md:gap-6'>
          {/* NUMBER */}
          <div className='text-[58px] md:text-[82px] leading-none font-bold tracking-[-4px] text-[262626]'>
            05
          </div>

          {/* TITLE */}
          <h1 className='max-w-6xl text-[28px] md:text-[42px] leading-[1.1] font-semibold tracking-[-1.5px] text-[#262626]'>
            Multi-Source Data Integration & ETL Automation Platform
          </h1>
        </div>

        {/* ================= BUSINESS CHALLENGES ================= */}
        <div className='mt-10'>
          {/* TITLE */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[2px] text-[#262626]'>
            Business Challenges
          </h2>

          {/* CONTENT */}
          <div className='relative mt-12'>
            {/* GRID */}
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5'>
              {challengeCards.map((item, index) => (
                <div
                  key={index}
                  className='
                    rounded-[16px]
                    border-2
                    border-[#F5F5F5]
                    bg-white
                    px-5
                    md:px-6
                    py-5
                    shadow-md
                  '
                >
                  {/* HEADER */}
                  <div className='flex items-center gap-3'>
                    {/* ICON */}
                    <div className='flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] bg-[#FFE7E7]'>
                      <Image
                        src={item.icon}
                        alt='Warning'
                        width={16}
                        height={16}
                        className='h-[16px] w-[16px] object-contain'
                      />
                    </div>

                    {/* TITLE */}
                    <h3 className='text-[15px] md:text-[18px] leading-[1.35] font-semibold text-[#262626]'>
                      {item.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <p className='mt-6 text-[14px] md:text-[16px] leading-[1.7] text-[#666D7D]'>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE IMAGE */}
        <div className='mt-8 flex justify-center md:hidden'>
          <Image
            src='/images/Templates/take2eton-5/challenge.png'
            alt='Travel AI'
            width={260}
            height={220}
            priority
            className='h-[220px] w-[260px] object-contain'
          />
        </div>

        {/* ================= SOLUTION IMPLEMENTED ================= */}
        <div className='mt-14'>
          {/* TITLE */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[2px] text-[#262626]'>
            Solution Implemented
          </h2>

          {/* GRID */}
          <div className='mt-8 md:mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5'>
            {solutionCards.map((item, index) => (
              <div
                key={index}
                className='
                  min-h-[150px]
                  rounded-[16px]
                  border-2
                  border-[#F5F5F5]
                  bg-[#EFF2F5]
                  px-5
                  md:px-6
                  py-5
                  shadow-lg
                '
              >
                {/* HEADER */}
                <div className='flex items-center gap-3'>
                  {/* ICON */}
                  <div className='flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] bg-[#E8E9FF]'>
                    <Image
                      src={item.icon}
                      alt='Check'
                      width={16}
                      height={16}
                      className='h-[16px] w-[16px] object-contain'
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className='text-[15px] md:text-[18px] leading-[1.35] font-semibold text-[#262626]'>
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className='mt-6 text-[14px] md:text-[16px] leading-[1.7] text-[#666D7D]'>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;

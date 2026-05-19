'use client';

import Image from 'next/image';

const challengeCards = [
  {
    icon: '/images/Templates/wellstat/fragmented.svg',
    title: 'Fragmented Data Ecosystem',
    desc: 'Business data was distributed across multiple platforms, leading to siloed insights and limited cross-functional visibility.',
  },
  {
    icon: '/images/Templates/wellstat/manual.svg',
    title: 'Manual Reporting Dependency',
    desc: 'Heavy reliance on Excel-based processes increased effort and reduced operational efficiency across teams.',
  },
  {
    icon: '/images/Templates/wellstat/inconsistent.svg',
    title: 'Inconsistent Data Structures',
    desc: 'Lack of a unified data model resulted in discrepancies, duplications, and unreliable reporting outputs.',
  },
  {
    icon: '/images/Templates/wellstat/delayed.svg',
    title: 'Delayed Decision-Making',
    desc: 'Slow data consolidation caused significant delays in accessing critical business insights for leadership.',
  },
  {
    icon: '/images/Templates/wellstat/limited.svg',
    title: 'Limited Real-Time Visibility',
    desc: 'Absence of live reporting restricted proactive monitoring of operations and performance metrics.',
  },
  {
    icon: '/images/Templates/wellstat/high.svg',
    title: 'High Data Processing Effort',
    desc: 'Significant manual effort was required for data validation, reconciliation, and consolidation workflows.',
  },
];

const solutionCards = [
  {
    icon: '/images/Templates/wellstat/unified.svg',
    title: 'Unified Data Integration',
    desc: 'Integrated multiple enterprise systems using Boomi to enable seamless and consistent data flow across the organization.',
  },
  {
    icon: '/images/Templates/wellstat/automated.svg',
    title: 'Automated ETL Pipelines',
    desc: 'Leveraged Azure Data Factory to extract, transform, and standardize data efficiently — eliminating manual processing.',
  },
  {
    icon: '/images/Templates/wellstat/centralized.svg',
    title: 'Centralized Data Warehouse',
    desc: 'Built Azure SQL as a single source of truth for reliable, governed, and auditable data access across all teams.',
  },
  {
    icon: '/images/Templates/wellstat/standardized.svg',
    title: 'Standardized Data Model',
    desc: 'Designed a unified structure to ensure consistency, eliminate discrepancies, and support scalable analytics.',
  },
  {
    icon: '/images/Templates/wellstat/real-time.svg',
    title: 'Real-Time Reporting Layer',
    desc: 'Developed Power BI dashboards to provide automated, real-time business insights with drill-down capabilities.',
  },
  {
    icon: '/images/Templates/wellstat/scalable.svg',
    title: 'Scalable Data Architecture',
    desc: 'Enabled a flexible and scalable platform to support future data growth, new integrations, and evolving needs.',
  },
];

const ChallengesAndSolutionSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      <div className='mx-auto max-w-7xl px-4 md:px-6 py-4'>
        {/* ================= THE CHALLENGE ================= */}
        <div>
          {/* TITLE */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#FF2B2B]'>
            THE CHALLENGE
          </h2>

          {/* CHALLENGE GRID */}
          <div className='mt-10 grid grid-cols-1 gap-5 md:grid-cols-3'>
            {challengeCards.map((item, index) => (
              <div
                key={index}
                className='
                  rounded-[18px]
                  border-2
                  border-[#FF4545]
                  bg-white
                  px-5
                  md:px-6
                  py-5
                  md:py-6
                '
              >
                {/* HEADER */}
                <div className='flex items-center gap-4'>
                  {/* ICON */}
                  <div className='flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[12px] bg-[#FFF1F1]'>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={20}
                      height={20}
                      className='h-[20px] w-[20px] object-contain'
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className='text-[12px] md:text-[18px] leading-[1.4] font-semibold tracking-[-0.5px] text-[#FF2B2B]'>
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className='mt-2 text-[13px] md:text-[15px] leading-[1.8] text-[#727C8F]'>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SOLUTION IMPLEMENTED ================= */}
        <div className='mt-16'>
          {/* TITLE */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#2C63F0]'>
            Solution Implemented
          </h2>

          {/* DESCRIPTION */}
          <p className='mt-5 text-[10px] md:text-[14px] leading-[1.8] text-[#7D8797]'>
            We designed and delivered an end-to-end data integration and reporting platform —
            consolidating fragmented systems into a unified, automated, and scalable architecture.
          </p>
        </div>
      </div>

      {/* ================= SOLUTION GRID SECTION ================= */}
      <div className='relative overflow-hidden'>
        {/* BACKGROUND IMAGE */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Templates/wellstat/solution.png'
            alt='Enterprise'
            fill
            priority
            className='object-fit'
          />
        </div>

        {/* OVERLAY */}
        <div className='absolute inset-0 bg-white/5 z-0' />

        {/* CONTENT */}
        <div className='relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-12'>
          {/* GRID */}
          <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
            {solutionCards.map((item, index) => (
              <div
                key={index}
                className='
                  rounded-[18px]
                  border-2
                  border-[#2C63F0]
                  bg-white
                  px-5
                  md:px-6
                  py-5
                  md:py-6
                  shadow-[0px_8px_20px_rgba(0,0,0,0.08)]
                '
              >
                {/* HEADER */}
                <div className='flex items-center gap-4'>
                  {/* ICON */}
                  <div className='flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[12px] border border-[#2C63F0] bg-[#F5F8FF]'>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={20}
                      height={20}
                      className='h-[20px] w-[20px] object-contain'
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className='text-[14px] md:text-[20px] leading-[1.4] font-semibold tracking-[-0.5px] text-[#2C63F0]'>
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className='mt-6 text-[11px] md:text-[13px] leading-[1.8] text-[#727C8F]'>
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

export default ChallengesAndSolutionSection;

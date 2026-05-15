'use client';

import Image from 'next/image';

const challengeCards = [
  {
    title: 'Single BI Tool Dependency',
    desc: 'Heavy reliance on Power BI created vendor lock-in risks and limited flexibility for evolving analytics needs.',
    point: 'Single point of failure',
  },
  {
    title: 'Data Loading Delays',
    desc: 'Performance bottlenecks caused significant delays in data loading and report generation across regions.',
    point: 'Hours of downtime weekly',
  },
  {
    title: 'Limited Global Scalability',
    desc: 'The existing architecture couldn’t scale efficiently to support distributed teams across multiple geographies.',
    point: 'Regional data silos',
  },
  {
    title: 'Restricted User Access',
    desc: 'Licensing constraints and infrastructure limitations prevented distributed users from accessing critical reports.',
    point: 'Low adoption rates',
  },
  {
    title: 'Manual Data Preparation',
    desc: 'Manual data preparation from multiple sources consumed significant analyst time and introduced human error.',
    point: '12+ hours lost weekly',
  },
  {
    title: 'Reporting Inconsistencies',
    desc: 'Lack of standardized data models led to discrepancies across reports, eroding trust in analytics outputs.',
    point: 'Decision-making delays',
  },
];

const flowItems = ['Excel / TMS', 'Magic ETL', 'Unified Model', 'Dashboards'];

const cards = [
  { icon: '/images/Templates/z-john-good-groups/single-bi.svg', ...challengeCards[0] },
  { icon: '/images/Templates/z-john-good-groups/data-loading.svg', ...challengeCards[1] },
  { icon: '/images/Templates/z-john-good-groups/limited-global.svg', ...challengeCards[2] },
  { icon: '/images/Templates/z-john-good-groups/lock.svg', ...challengeCards[3] },
  { icon: '/images/Templates/z-john-good-groups/data-preperation.svg', ...challengeCards[4] },
  { icon: '/images/Templates/z-john-good-groups/single-bi.svg', ...challengeCards[5] },
];

const ChallengeSolutionSection = () => {
  return (
    <section className='overflow-visible bg-[#F7F7F8]'>
      <div className='mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16'>
        {/* CHALLENGE HEADER */}
        <div className='relative'>
          {/* RIGHT IMAGE */}
          <div className='absolute -right-10 -top-28 z-10 hidden lg:block'>
            <div className='relative h-80 w-80'>
              <Image
                src='/images/Templates/z-john-good-groups/tourist-people-earth.png'
                alt=''
                fill
                className='object-contain'
              />
            </div>
          </div>

          <p className='text-2xl font-semibold uppercase tracking-wide text-[#FF1F1F] md:text-3xl'>
            The Challenge
          </p>

          <h2 className='mt-4 max-w-4xl text-3xl font-medium leading-tight text-[#111827] md:text-3xl'>
            From Fragmented Data to Global Intelligence
          </h2>

          <p className='mt-6 max-w-4xl text-[#737887]'>
            The organization faced critical bottlenecks that hindered data-driven decision making
            across its global operations.
          </p>
        </div>

        {/* CHALLENGE CARDS */}
        <div className='mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
          {cards.map((card, index) => (
            <div key={index} className='rounded-2xl border-l-4 border-[#FF6B6B] bg-white p-5'>
              {/* TOP */}
              <div className='flex items-start gap-3'>
                <div className='mt-1'>
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={28}
                    height={28}
                    className='h-6 w-6 md:h-8 md:w-8 object-contain'
                  />
                </div>
                <h3 className='text-lg font-semibold leading-snug text-[#FF3B30]'>{card.title}</h3>
              </div>

              {/* DESC */}
              <p className='mt-5 text-sm leading-7 text-[#737887]'>{card.desc}</p>

              {/* POINT */}
              <p className='mt-4 flex items-center gap-2 text-sm text-[#FF3B30]'>
                <span>→</span>
                {card.point}
              </p>
            </div>
          ))}
        </div>

        {/* DATA SOURCES */}
        <div className='mt-10 flex flex-col gap-4 md:flex-row md:items-center'>
          <p className='text-sm text-[#737887]'>Data Sources:</p>
          <div className='flex flex-wrap gap-3'>
            {['Travel management systems', 'Excel files', 'Existing report extracts'].map(item => (
              <div
                key={item}
                className='rounded-full border border-[#FF6B6B] bg-white px-5 py-2 text-sm text-[#737887]'
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* SOLUTION SECTION */}
        <div className='relative mt-10'>
          {/* IMAGE */}
          <div className='absolute right-36 -top-28 hidden lg:block'>
            <div className='relative h-48 w-72'>
              <Image
                src='/images/Templates/z-john-good-groups/earthAndPlane.png'
                alt=''
                fill
                className='object-contain'
              />
            </div>
          </div>

          <p className='text-2xl font-semibold uppercase tracking-wide text-[#2F45FF] md:text-4xl'>
            The Solution
          </p>

          <h2 className='mt-4 text-xl font-medium text-[#111827] md:text-3xl'>
            Architecture & Transformation
          </h2>

          <p className='mt-6 leading-relaxed text-[#737887]'>
            A phased migration approach ensuring zero disruption to ongoing operations while
            systematically rebuilding the analytics foundation.
          </p>

          {/* FLOW */}
          <div className='mt-12 rounded-xl border border-[#2023F0] bg-white p-5'>
            <div className='grid gap-5 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center'>
              {flowItems.map((item, index) => (
                <div key={item} className='contents'>
                  <div
                    className={`
                      rounded-xl
                      px-5
                      py-4
                      text-center
                      text-sm
                      font-medium
                      text-[#4B5563]

                      ${index === 1 ? 'text-[#0DA2E7] bg-[#0DA2E714]' : ''}
                      ${index === 3 ? 'text-[#26A699] bg-[#26A69914]' : ''}

                      ${index !== 1 && index !== 3 ? 'bg-[#EEF2F7]' : ''}
                    `}
                  >
                    {item}
                  </div>

                  {index !== flowItems.length - 1 && (
                    <div className='hidden md:flex items-center justify-center text-2xl text-[#737887]'>
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* IMPLEMENTATION STEPS */}
      <div className='relative overflow-hidden rounded-[2rem]'>
        {/* BACKGROUND IMAGE */}
        <div className='absolute inset-0'>
          <Image
            src='/images/Templates/z-john-good-groups/solution-bg.png'
            alt=''
            fill
            className='object-cover'
          />
        </div>

        {/* OVERLAY */}
        <div className='absolute inset-0 bg-white/10 ' />

        {/* CONTENT */}
        <div className='relative z-10 p-4 md:p-6'>
          {[
            {
              id: '1',
              icon: '/images/Templates/z-john-good-groups/db.svg',
              title: 'Report & Data Model Migration',
              desc: 'Systematic migration of Power BI reports and underlying data models to the Domo platform, ensuring feature parity and structural integrity.',
              tag: 'Power BI → Domo',
            },
            {
              id: '2',
              icon: '/images/Templates/z-john-good-groups/etl.svg',
              title: 'Dataset & ETL Pipeline Rebuild',
              desc: "Complete reconstruction of datasets and ETL pipelines optimized for Domo's architecture, leveraging Magic ETL for data transformation and standardization.",
              tag: 'Magic ETL',
            },
            {
              id: '3',
              icon: '/images/Templates/z-john-good-groups/data-integration.svg',
              title: 'Automated Data Ingestion',
              desc: 'Implementation of automated data ingestion workflows from multiple source systems including TMS, Excel, and legacy report extracts.',
              tag: 'Multi-source automation',
            },
            {
              id: '4',
              icon: '/images/Templates/z-john-good-groups/data-visualization.svg',
              title: 'Data Validation & Parity',
              desc: 'Rigorous validation processes cross-referencing new outputs against legacy reports. Validated against 4.2M historical records to ensure 99.9% parity.',
              tag: '4.2M records validated',
            },
            {
              id: '5',
              icon: '/images/Templates/z-john-good-groups/data-modal.svg',
              title: 'Unified Data Model',
              desc: 'Creation of a unified, normalized data model enabling consistent global travel analytics across all regions and business units.',
              tag: 'Global standardization',
            },
            {
              id: '6',
              icon: '/images/Templates/z-john-good-groups/dashboard-delivery.svg',
              title: 'Interactive Dashboard Delivery',
              desc: 'Deployment of interactive dashboards with improved usability, performance, and self-service capabilities for distributed teams.',
              tag: 'Self-service analytics',
            },
          ].map((item, index) => (
            <div
              key={index}
              className='mx-auto max-w-6xl mb-4 rounded-2xl border border-[#4C57FF] bg-white px-4 py-5 shadow-sm last:mb-0 md:px-6'
            >
              <div className='flex flex-col gap-5 md:flex-row md:items-center md:justify-start'>
                {/* LEFT */}
                <div className='flex items-center gap-4'>
                  {/* NUMBER */}
                  <div className='flex min-w-[2rem] items-center justify-center'>
                    <span className='text-4xl font-semibold text-[#D9D9D9]'>{item.id}</span>
                  </div>

                  {/* ICON */}
                  <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#5C5CEB] text-white [&>svg]:h-4 [&>svg]:w-4'>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={28}
                      height={28}
                      className='h-6 w-6 md:h-8 md:w-8 object-contain'
                    />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3 className='text-lg font-semibold text-[#2436F5]'>{item.title}</h3>
                    <p className='mt-2 max-w-3xl text-sm leading-7 text-[#737887]'>{item.desc}</p>
                  </div>
                </div>

                {/* RIGHT TAG */}
                <div className='pl-16 md:pl-0'>
                  <p className='text-sm font-medium text-[#26A699]'>{item.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengeSolutionSection;

'use client';

import Image from 'next/image';

const capabilities = [
  {
    icon: '/images/Templates/careabout/csvg1.svg',
    title: 'Scalable ETL with DBT',
    description:
      'Purpose-built transformation pipelines leveraging DBT for modular, testable, and version-controlled data workflows.',
  },
  {
    icon: '/images/Templates/careabout/csvg2.svg',
    title: 'Centralized Meta Package',
    description:
      'A unified dependency management layer standardizing transformations and enabling rapid onboarding of new payer projects.',
  },
  {
    icon: '/images/Templates/careabout/csvg3.svg',
    title: 'Azure to AWS Migration',
    description:
      'Seamless cloud migration to AWS and Snowflake, unlocking elastic scalability and high-performance query processing.',
  },
  {
    icon: '/images/Templates/careabout/csvg4.svg',
    title: 'S3 Storage & Dagster Orchestration',
    description:
      'Amazon S3 for durable, cost-efficient storage paired with Dagster for observable, reliable pipeline orchestration.',
  },
  {
    icon: '/images/Templates/careabout/csvg5.svg',
    title: 'Python Data Pipelines',
    description:
      'Custom Python pipelines handling complex ingestion, validation, and transformation logic across data sources.',
  },
  {
    icon: '/images/Templates/careabout/csvg6.svg',
    title: 'Single Source of Truth',
    description:
      'Standardized data models eliminating inconsistencies and providing a reliable foundation for all downstream analytics.',
  },
  {
    icon: '/images/Templates/careabout/csvg7.svg',
    title: 'Domo Reporting Integration',
    description:
      'Real-time analytics dashboards powered by Domo, enabling stakeholders to make data-driven decisions faster.',
  },
  {
    icon: '/images/Templates/careabout/csvg8.svg',
    title: 'Modular Architecture',
    description:
      'Reusable, composable components ensuring long-term maintainability and accelerated delivery of future projects.',
  },
];

export default function KeyCapabilities() {
  return (
    <section className='w-full bg-white'>
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-10 md:py-14'>
        {/* Title */}
        <h2 className='text-2xl md:text-3xl font-bold mb-8 md:mb-10' style={{ color: '#4250EE' }}>
          Capabilities Delivered
        </h2>

        {/* 4×2 card grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5'>
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className='rounded-2xl p-5 flex flex-col gap-3'
              style={{
                border: '2px solid #4250EE',
                backgroundColor: '#FFFFFF',
              }}
            >
              {/* Icon + title row */}
              <div className='flex items-center gap-3'>
                <div
                  className='flex-shrink-0 w-9 h-9 rounded-[10px] flex items-center justify-center'
                  style={{ backgroundColor: '#1AA2E61A' }}
                >
                  <Image
                    src={cap.icon}
                    alt={cap.title}
                    width={20}
                    height={20}
                    className='object-contain'
                  />
                </div>
                <h3
                  className='text-sm md:text-[16px] font-bold leading-snug'
                  style={{ color: '#4250EE' }}
                >
                  {cap.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className='text-[13px] md:text-[14px] leading-relaxed'
                style={{ color: '#6A7181' }}
              >
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

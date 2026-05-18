'use client';

import Image from 'next/image';

const capabilities = [
  {
    icon: '/images/Templates/gsk/gsvg3.svg',
    title: 'End-to-End Data Pipeline',
    description:
      'Unified integration of Azure AD, HR systems, and contractor databases into a single, reliable data flow.',
  },
  {
    icon: '/images/Templates/gsk/gsvg4.svg',
    title: 'Centralized Data Warehouse',
    description:
      'Azure SQL Database serving as the single source of truth for all identity and license data.',
  },
  {
    icon: '/images/Templates/gsk/gsvg5.svg',
    title: 'Automated ETL Processing',
    description:
      'Azure Data Factory pipelines with incremental loads ensuring data freshness and consistency.',
  },
  {
    icon: '/images/Templates/gsk/gsvg6.svg',
    title: 'Interactive BI Dashboards',
    description:
      'Power BI reports delivering real-time insights on utilization, trends, and cost forecasting.',
  },
  {
    icon: '/images/Templates/gsk/gsvg7.svg',
    title: 'Real-Time Reporting',
    description:
      'Automated, scheduled data refreshes eliminating manual reporting and enabling proactive decisions.',
  },
  {
    icon: '/images/Templates/gsk/gsvg8.svg',
    title: 'Governance & Compliance',
    description:
      'Monitoring framework with audit trails ensuring regulatory compliance and data quality standards.',
  },
];

export default function KeyCapabilities() {
  return (
    <section className='w-full bg-white'>
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 pb-14 md:pb-20'>
        {/* Title */}
        <h2 className='text-2xl md:text-3xl font-bold mb-8 md:mb-10' style={{ color: '#3E2FE2' }}>
          Key Capabilities Delivered
        </h2>

        {/* 3×2 Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'>
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className='rounded-2xl p-6 bg-white flex flex-col gap-3'
              style={{ border: '2px solid #3E2FE2' }}
            >
              {/* Icon row */}
              <div className='flex items-center gap-3'>
                <div
                  className='flex-shrink-0 w-10 h-10 rounded-[10px] flex items-center justify-center'
                  style={{ backgroundColor: '#3E2FE2' }}
                >
                  <Image
                    src={cap.icon}
                    alt={cap.title}
                    width={22}
                    height={22}
                    className='brightness-0 invert'
                  />
                </div>
                <h3
                  className='text-sm md:text-[16px] font-bold leading-snug'
                  style={{ color: '#3E2FE2' }}
                >
                  {cap.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className='text-[13px] md:text-[14px] leading-relaxed'
                style={{ color: '#6C7C93' }}
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

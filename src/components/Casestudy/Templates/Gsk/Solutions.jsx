'use client';

import Image from 'next/image';

const solutionPoints = [
  'Developed an end-to-end data pipeline integrating multiple enterprise data sources into a unified platform',
  'Extracted data from Azure Active Directory, HR systems, and contractor databases using PowerShell and SQL Server',
  'Implemented robust ETL pipelines using Azure Data Factory for reliable, scheduled data transformation',
  'Centralized all data in Azure SQL Database serving as the enterprise data warehouse',
  'Built interactive Power BI dashboards for license utilization, inactive accounts, trends, and forecasting',
  'Enabled incremental data loads and automation for near real-time reporting capabilities',
  'Established a governance and monitoring framework to ensure ongoing compliance and data quality',
];

export default function Solutions() {
  return (
    <section className='w-full bg-white'>
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-8 md:py-10'>
        {/* Full-width title + description */}
        <h2 className='text-2xl md:text-3xl font-bold mb-5 text-center'>Our Solution</h2>
        <p
          className='text-sm sm:text-[15px] lg:text-[16px] leading-relaxed mb-8 w-full text-center'
          style={{ color: '#6C7C93' }}
        >
          We designed and delivered a comprehensive data engineering solution that automated
          identity access reporting and license optimization from source extraction through to
          executive-ready dashboards and governance controls.
        </p>

        {/* Bullets (left) + overlapping image (right) */}
        <div className='flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16'>
          {/* Left — bullet list only */}
          <div className='flex-1 min-w-0'>
            <ul className='space-y-3'>
              {solutionPoints.map((point, i) => (
                <li key={i} className='flex items-start gap-3'>
                  <span className='flex-shrink-0 w-5 h-5 mt-0.5'>
                    <Image
                      src='/images/Templates/gsk/gsvg2.svg'
                      alt='solution icon'
                      width={20}
                      height={20}
                    />
                  </span>
                  <span
                    className='text-sm md:text-[14px] lg:text-[16px] leading-snug'
                    style={{ color: '#6C7C93' }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — two overlapping gsk2 images, anchored to the right end */}
          <div className='hidden lg:block flex-shrink-0 w-[300px] xl:w-[320px] relative h-[300px] xl:h-[320px]'>
            {/* Back card — offset down-right, pinned right */}
            <div
              className='absolute top-[10px] right-[40px]  w-[240px] xl:w-[260px] h-[250px] xl:h-[270px] rounded-2xl overflow-hidden shadow-md'
              style={{ zIndex: 1 }}
            >
              <Image
                src='/images/Templates/gsk/gsk2.png'
                alt='GSK pharmaceutical lab'
                fill
                className='object-cover object-center'
              />
            </div>
            {/* Front card — offset up-left, but still toward the right */}
            <div
              className='absolute top-0 right-[50px] xl:right-[60px] w-[240px] xl:w-[260px] h-[250px] xl:h-[270px] rounded-2xl overflow-hidden shadow-xl'
              style={{ zIndex: 2 }}
            >
              <Image
                src='/images/Templates/gsk/gsk2.png'
                alt='GSK pharmaceutical lab'
                fill
                className='object-cover object-center'
                priority
              />
            </div>
          </div>

          {/* Mobile image */}
          <div className='lg:hidden relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg'>
            <Image
              src='/images/Templates/gsk/gsk2.png'
              alt='GSK pharmaceutical lab'
              fill
              className='object-cover object-center'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

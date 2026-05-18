'use client';

import Image from 'next/image';

const capabilities = [
  {
    icon: '/images/Templates/tess/ttsvg4.svg',
    title: 'Enterprise Data Centralization',
    description:
      'Consolidated disparate data sources—including Oracle and manual records—into a unified SQL Server environment, creating a single source of truth for all operational data.',
  },
  {
    icon: '/images/Templates/tess/ttsvg5.svg',
    title: 'Real-Time Operational Visibility',
    description:
      'Delivered interactive Power BI dashboards providing live insights into production metrics, quality KPIs, and supply chain performance across all business units.',
  },
  {
    icon: '/images/Templates/tess/ttsvg6.svg',
    title: 'Workflow Automation',
    description:
      'Replaced manual, paper-based processes with Power Apps for shop floor data entry, quality inspections, and maintenance workflows significantly reducing cycle times.',
  },
  {
    icon: '/images/Templates/tess/ttsvg7.svg',
    title: 'Integrated Analytics Platform',
    description:
      'Built a comprehensive analytics layer combining Power BI reporting with custom full-stack applications for production tracking and advanced workflow automation.',
  },
  {
    icon: '/images/Templates/tess/ttsvg8.svg',
    title: 'End-to-End System Integration',
    description:
      'Enabled seamless data flow from source systems (machines, APIs, databases) through processing layers to analytics and reporting, ensuring consistency and timeliness.',
  },
];

export default function KeyCapabilities() {
  return (
    /*
      Wrapper is relative + overflow-visible so the tess3 image can
      sit at the top-right and bleed upward into the Solutions section.
    */
    <section className='relative w-full overflow-visible' style={{ backgroundColor: '#F0F1F5' }}>
      {/* ── Overlapping tess3 image — top-right corner ─────────────── */}
      <div className='hidden lg:block absolute top-[-80px] right-6 xl:right-16 z-10 w-[200px] xl:w-[240px]'>
        <div className='relative w-full h-[200px] xl:h-[240px] rounded-2xl overflow-hidden shadow-lg'>
          <Image
            src='/images/Templates/tess/tess3.png'
            alt='Manufacturing technology'
            fill
            className='object-cover object-center'
            priority
          />
        </div>
      </div>

      {/* ── Main content ─────────────────────────────────────────────── */}
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-10 md:py-14'>
        {/* Title — leave right space for the overlapping image on desktop */}
        <h2
          className='text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide mb-8 md:mb-10 lg:pr-[260px] xl:pr-[280px]'
          style={{ color: '#0B64F4' }}
        >
          Key Capabilities Delivered
        </h2>

        {/* Capabilities list */}
        <div className='flex flex-col gap-6 lg:pr-[260px] xl:pr-[280px]'>
          {capabilities.map((cap, i) => (
            <div key={i} className='flex items-start gap-4'>
              {/* Icon with light-blue bg */}
              <div
                className='flex-shrink-0 w-10 h-10 rounded-[10px] flex items-center justify-center'
                style={{ backgroundColor: '#0B64F41A' }}
              >
                <Image
                  src={cap.icon}
                  alt={cap.title}
                  width={22}
                  height={22}
                  className='object-contain'
                />
              </div>

              {/* Text */}
              <div className='flex flex-col gap-1'>
                <h3
                  className='text-sm md:text-[17px] font-bold leading-snug'
                  style={{ color: '#131720' }}
                >
                  {cap.title}
                </h3>
                <p
                  className='text-[13px] md:text-[15px] leading-relaxed'
                  style={{ color: '#6A7181' }}
                >
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

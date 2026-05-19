import React from 'react';

const solutionCards = [
  {
    title: 'Defect & Yield Analysis',
    desc: 'Automated NM104/NM106 reports for defect categorization and cosmetic yield.',
  },
  {
    title: 'Factory Yield Dashboards',
    desc: 'Provided real-time monitoring of factory-level yield and loss drivers.',
  },
  {
    title: 'Machine Parameter Monitoring',
    desc: 'Integrated machine data for performance and root cause insights.',
  },
  {
    title: 'Assembly & Band Reporting',
    desc: 'Digitalized assembly and band yield tracking for process optimization.',
  },
];

const highlights = [
  { label: 'Automated Defect Tracking', details: 'Reduced manual effort, improved accuracy' },
  { label: 'Real-Time Factory Yield Monitoring', details: 'Enabled proactive interventions' },
  {
    label: 'Machine Performance Insights',
    details: 'Parameter analysis to identify efficiency bottlenecks',
  },
  {
    label: 'Assembly & Band Yield Optimization',
    details: 'Clear visibility into production efficiency',
  },
  {
    label: 'Leadership Dashboards',
    details: 'High-level summaries with drill-down to process-level details',
  },
];

export default function Solutions() {
  return (
    <section className='py-[64px] md:py-[80px] bg-[#f8fafc] w-full relative overflow-hidden'>
      <div className='max-w-[1140px] mx-auto px-4 md:px-6 relative'>
        {/* SECTION HEADER */}
        <h2 className='text-center text-[28px] md:text-[32px] font-extrabold text-[#071326] tracking-tight mb-[36px] md:mb-[44px]'>
          GWC&apos;s Solution
        </h2>

        {/* CONTAINER SHELL 1: TOP GRID SOLUTION CARDS */}
        <div className='bg-white rounded-[16px] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] p-6 sm:p-8 md:p-[48px] w-full mb-8 relative z-10'>
          <p className='text-[14.5px] md:text-[15.5px] text-[#64748b] font-medium mb-8'>
            GWC delivered an end-to-end digitalization framework for reporting processes:
          </p>

          {/* 2-Column Responsive Matrix
              - Updated backgrounds to premium light-teal tint to match image
              - Updated border accents for sharp contrast
          */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[24px] max-w-[960px] lg:max-w-[840px] xl:max-w-[880px]'>
            {solutionCards.map((card, index) => (
              <div
                key={index}
                className='bg-[#22C3C30D] rounded-[12px] border border-[#e0f2fe] p-5 md:p-[24px] flex flex-col justify-start'
              >
                <h4 className='text-[16px] md:text-[17px] font-bold text-[#071326] tracking-tight mb-2'>
                  {card.title}
                </h4>
                <p className='text-[13.5px] md:text-[14.5px] text-[#64748b] font-medium leading-relaxed'>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Baseline Centralized Access Card */}
          <div className='mt-5 md:mt-[24px] max-w-[470px] md:max-w-[408px] lg:max-w-[408px]'>
            <div className='bg-[#22C3C30D] rounded-[12px] border border-[#e0f2fe] p-5 md:p-[24px] flex flex-col justify-start'>
              <h4 className='text-[16px] md:text-[17px] font-bold text-[#071326] tracking-tight mb-2'>
                Centralized Access
              </h4>
              <p className='text-[13.5px] md:text-[14.5px] text-[#64748b] font-medium leading-relaxed'>
                Leadership dashboards consolidated data across production units.
              </p>
            </div>
          </div>
        </div>

        {/* CONTAINER SHELL 2: BOTTOM SOLUTION HIGHLIGHTS CARDS */}
        <div className='bg-white rounded-[16px] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] p-6 sm:p-8 md:p-[48px] w-full relative z-10'>
          <h3 className='text-[18px] md:text-[20px] font-extrabold text-[#071326] tracking-tight mb-6'>
            Solution Highlights
          </h3>

          <div className='space-y-[16px] md:space-y-[18px] max-w-[720px] lg:max-w-[640px] xl:max-w-[680px]'>
            {highlights.map((item, index) => (
              <div key={index} className='flex gap-[12px] items-start w-full'>
                <div className='w-[19px] h-[19px] shrink-0 flex items-center justify-center rounded-full border border-teal-500/20 bg-teal-50 mt-[3px] text-teal-500'>
                  <svg
                    className='w-[11px] h-[11px] font-bold'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='3'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>

                <p className='text-[14px] md:text-[15px] text-[#64748b] font-medium tracking-tight text-left leading-normal'>
                  <strong className='text-[#334155] font-semibold'>{item.label}</strong>
                  {item.details ? ` – ${item.details}` : ''}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FIXED ABSOLUTE OVERLAY IMAGE
            - Moved outside the inner components to float right over the seam smoothly
            - Adjusted responsive horizontal translations to prevent panel layout compression
        */}
        <div className='hidden lg:block absolute z-20 top-[40%] xl:top-[55%] right-4 xl:right-[calc((68vw-1140px)/2)] pointer-events-none select-none transform translate-y-6 xl:translate-y-4'>
          <img
            src='/images/Templates/template14/bg5.png'
            alt='Circuit Production Line'
            className='w-[310px] xl:w-[350px] h-auto object-contain rounded-[16px] shadow-[0_20px_50px_rgba(0,0,0,0.08)]'
          />
        </div>
      </div>
    </section>
  );
}

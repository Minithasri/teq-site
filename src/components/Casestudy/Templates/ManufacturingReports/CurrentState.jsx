import React from 'react';

const states = [
  {
    icon: '/images/Templates/template14/current1.svg',
    title: 'Report Generation Time',
    boldValue: 'Several Days',
    arrowText: '→',
    subValue: 'Weekly',
    footerLabel: 'Instead of real-time',
  },
  {
    icon: '/images/Templates/template14/current2.svg',
    title: 'Analysis Delays',
    boldValue: 'Delayed Insights',
    footerLabel: 'Affecting decision-making',
  },
  {
    icon: '/images/Templates/template14/current3.svg',
    title: 'Integration',
    boldValue: 'No Integration',
    footerLabel: 'Between tracking systems',
  },
  {
    icon: '/images/Templates/template14/current4.svg',
    title: 'Manual Work',
    boldValue: 'Over-reliance',
    footerLabel: 'On manual intervention',
  },
];

const objectives = [
  'Digitalize factory reporting processes (NM104/NM106)',
  'Provide real-time insights into yield, defects, and machine performance',
  'Enable drill-down into assembly and band analysis',
  'Reduce manual workload by automating reporting',
  'Improve overall manufacturing efficiency and quality outcomes',
];

export default function OperationalOverview() {
  return (
    <div className='w-full bg-white relative overflow-hidden'>
      {/* 1. TOP SEGMENT: CURRENT STATE SECTION */}
      <section className='py-[56px] md:py-[64px] bg-white w-full relative z-10'>
        <div className='max-w-[1140px] mx-auto px-4 md:px-6'>
          {/* Header Group */}
          <div className='text-center mb-[36px] md:mb-[44px]'>
            <h2 className='text-[26px] md:text-[28px] font-extrabold text-[#071326] tracking-tight'>
              Current State (Before Solution)
            </h2>
            <p className='text-[14.5px] md:text-[15.5px] text-[#64748b] font-medium mt-1.5'>
              Key metrics highlighting the operational challenges
            </p>
          </div>

          {/* 4-Column Metric Grid Cards */}
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[20px]'>
            {states.map((item, index) => (
              <div
                key={index}
                className='bg-white rounded-[12px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-5 md:p-[24px] flex flex-col items-center text-center justify-between min-h-[190px] md:min-h-[210px]'
              >
                <div className='w-[36px] h-[36px] relative shrink-0 mb-3 flex items-center justify-center'>
                  <img src={item.icon} alt='' className='w-full h-full object-contain' />
                </div>

                <span className='text-[12px] md:text-[13px] text-[#64748b] font-bold tracking-tight mb-1 block'>
                  {item.title}
                </span>

                <div className='flex flex-col items-center justify-center min-h-[48px]'>
                  <h3 className='text-[15px] md:text-[16.5px] font-extrabold text-[#071326] tracking-tight leading-tight'>
                    {item.boldValue}
                  </h3>
                  {item.arrowText && (
                    <span className='text-[12px] text-[#64748b] my-0.5 block font-bold leading-none'>
                      {item.arrowText}
                    </span>
                  )}
                  {item.subValue && (
                    <h3 className='text-[15px] md:text-[16.5px] font-extrabold text-[#071326] tracking-tight leading-tight'>
                      {item.subValue}
                    </h3>
                  )}
                </div>

                <p className='text-[12px] text-[#64748b]/80 font-medium tracking-tight mt-3 leading-tight'>
                  {item.footerLabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. BOTTOM SEGMENT: BUSINESS OBJECTIVES SECTION */}
      {/* Reset mobile padding rules to keep standard flow heights */}
      <section className='pt-[10px] pb-[60px] md:pb-[110px] bg-white relative w-full z-10'>
        <div className='max-w-[1140px] mx-auto px-4 md:px-6 relative flex flex-col items-center'>
          {/* Centered Heading */}
          <h2 className='text-center text-[26px] md:text-[30px] font-extrabold text-[#071326] tracking-tight mb-[32px]'>
            Business Objectives
          </h2>

          {/* Centered Content Container Box */}
          <div className='w-full lg:max-w-[820px] xl:max-w-[860px] mr-0 lg:mr-[160px] xl:mr-[200px] relative z-10'>
            {/* List Card Panel */}
            <div className='bg-white rounded-[12px] shadow-[0_15px_45px_rgba(0,0,0,0.04)] border border-gray-100/80 p-6 sm:p-8 md:p-[40px] w-full'>
              <div className='space-y-[16px] md:space-y-[20px]'>
                {objectives.map((point, index) => (
                  <div key={index} className='flex gap-[14px] items-start w-full'>
                    {/* Success Checkmark Circle Wrapper */}
                    <div className='w-[19px] h-[19px] shrink-0 flex items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-50 mt-[4px] text-emerald-500'>
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

                    {/* Description Text */}
                    <p className='text-[14.5px] md:text-[15.5px] text-[#2d3748] font-semibold tracking-tight text-left leading-relaxed'>
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. MOBILE FLOATING CHIP PLACEMENT
                - Nested right inside the card container's relative layer.
                - Renders strictly on mobile (`md:hidden`) so it stays tightly bound to this card box.
            */}
            <div className='md:hidden absolute z-20 -bottom-24 -right-6 pointer-events-none select-none'>
              <img
                src='/images/Templates/template14/bg4.png'
                alt='Chip Graphic'
                className='w-[230px] sm:w-[260px] h-auto object-contain'
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. DESKTOP FLOATING CHIP PLACEMENT
          - Hidden on mobile views (`hidden md:block`), resolving structural spillover conflicts completely.
      */}
      <div className='hidden md:block absolute z-20 top-[40%] lg:top-[40%] xl:top-[41%] -right-15 xl:-right-5 pointer-events-none select-none'>
        <img
          src='/images/Templates/template14/bg4.png'
          alt='Chip Graphic'
          className='w-[390px] lg:w-[430px] xl:w-[470px] h-auto object-contain'
        />
      </div>
    </div>
  );
}

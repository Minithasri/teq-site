import React from 'react';

const metrics = [
  {
    icon: '/images/Templates/template16/inci.svg',
    title: 'Incident response time',
    value: 'hours to days',
  },
  {
    icon: '/images/Templates/template16/down.svg',
    title: 'Downtime risks',
    value: 'high due to lack of predictive monitoring',
  },
  {
    icon: '/images/Templates/template16/ai.svg',
    title: 'AI-driven optimization',
    value: 'No optimization of cooling/power usage',
  },
  {
    icon: '/images/Templates/template16/manual.svg',
    title: 'Manual dependency',
    value: 'Over-reliance on manual operators',
  },
];

export default function CurrentStateMetrics() {
  return (
    // Clean, light gray container canvas base structure
    <section className='relative bg-[#eef2f6] pt-14 pb-16 md:pt-16 md:pb-20 w-full overflow-hidden'>
      {/* Main Structural Frame Content Wrapper
          We make this relative so the background image can be anchored precisely to its right boundary
      */}
      <div className='max-w-[1140px] mx-auto relative'>
        {/* RIGHT-PINNED TABLET GRAPHIC:
          - right-0 anchors it to the exact right edge of the 1140px max-width container
          - top-0 or top-4 controls vertical offset
          - z-0 keeps it behind the cards
        */}
        <div className='hidden lg:block absolute right-[-230] top-[-20] h-[220px] xl:h-[240px] w-[380px] xl:w-[440px] z-0 select-none pointer-events-none overflow-hidden rounded-[24px] shadow-md'>
          <img
            src='/images/Templates/template16/bg2.png'
            alt='Metrics Context Visualization'
            className='w-full h-full object-cover object-left'
          />
        </div>

        {/* Foreground Content Container */}
        <div className='px-4 md:px-6 relative z-10'>
          {/* HEADER BLOCK */}
          <div className='text-center mb-10 md:mb-14 relative z-10'>
            <h2 className='text-[26px] md:text-[32px] font-extrabold text-[#071326] tracking-tight'>
              Current State Metrics
            </h2>
            <p className='text-[14.5px] md:text-[15.5px] text-[#64748b] font-medium mt-1.5 tracking-tight'>
              Before implementing the solution
            </p>
          </div>

          {/* 2-COLUMN RESPONSIVE CARDS MATRIX */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[24px] max-w-[960px] mx-auto relative z-10'>
            {metrics.map((item, index) => (
              <div
                key={index}
                className='bg-white rounded-[14px] border-2 border-[#f5f5f5] shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-6 md:p-[28px] flex items-start gap-4 min-h-[120px] backdrop-blur-sm bg-white/95'
              >
                {/* Soft Red Rounded Square Icon Wrapper Badge */}
                <div className='w-[44px] h-[44px] rounded-[10px] bg-[#ffebee] flex items-center justify-center shrink-0 select-none pointer-events-none'>
                  <img src={item.icon} alt='' className='w-[20px] h-[20px] object-contain' />
                </div>

                {/* Text Field Layout Block */}
                <div className='flex flex-col justify-start text-left pt-0.5'>
                  <h3 className='text-[16px] md:text-[17.5px] font-extrabold text-[#071326] tracking-tight leading-snug'>
                    {item.title}
                  </h3>
                  <p className='text-[13.5px] md:text-[14.5px] text-[#4a5568] font-bold tracking-tight mt-2 leading-normal'>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

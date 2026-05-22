import React from 'react';

const BusinessImpact = () => {
  return (
    <section className='w-full relative py-14'>
      {/* Background layer */}
      <div className='absolute inset-0 bg-[#21C45D]/30 z-0'></div>
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: 'url(/images/Templates/lskg/img4.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.34,
        }}
      ></div>

      {/* SVG Watermarks */}
      {/* Laptop */}
      <svg
        className='absolute right-[10%] top-[10%] w-64 h-64 text-white opacity-20 pointer-events-none z-0'
        viewBox='0 0 100 100'
        fill='none'
        stroke='currentColor'
        strokeWidth='1'
      >
        <circle cx='50' cy='50' r='48' />
        <circle cx='50' cy='50' r='38' />
        <rect x='25' y='35' width='50' height='30' rx='2' />
        <path d='M15 65 h70' strokeWidth='2' strokeLinecap='round' />
        <polygon points='45 45, 55 50, 45 55' fill='currentColor' />
      </svg>
      {/* Globe */}
      <svg
        className='absolute -right-[2%] top-[45%] w-72 h-72 text-white opacity-20 pointer-events-none z-0'
        viewBox='0 0 100 100'
        fill='none'
        stroke='currentColor'
        strokeWidth='1'
      >
        <circle cx='50' cy='50' r='48' />
        <circle cx='50' cy='50' r='38' />
        <ellipse cx='50' cy='50' rx='15' ry='38' />
        <line x1='12' y1='50' x2='88' y2='50' />
        <line x1='25' y1='25' x2='75' y2='25' />
        <line x1='25' y1='75' x2='75' y2='75' />
      </svg>
      {/* Target */}
      <svg
        className='absolute left-[35%] bottom-[5%] w-64 h-64 text-white opacity-20 pointer-events-none z-0'
        viewBox='0 0 100 100'
        fill='none'
        stroke='currentColor'
        strokeWidth='1'
      >
        <circle cx='50' cy='50' r='48' />
        <circle cx='50' cy='50' r='38' />
        <circle cx='50' cy='50' r='28' />
        <circle cx='50' cy='50' r='18' />
        <circle cx='50' cy='50' r='8' fill='currentColor' />
        <line x1='75' y1='25' x2='55' y2='45' strokeWidth='2' />
        <polygon points='80 20, 75 25, 78 28' fill='currentColor' />
      </svg>
      {/* Chart */}
      <svg
        className='absolute left-[5%] bottom-[15%] w-56 h-56 text-white opacity-20 pointer-events-none z-0'
        viewBox='0 0 100 100'
        fill='none'
        stroke='currentColor'
        strokeWidth='1'
      >
        <circle cx='50' cy='50' r='48' />
        <circle cx='50' cy='50' r='38' />
        <line x1='30' y1='70' x2='30' y2='40' strokeWidth='4' strokeLinecap='round' />
        <line x1='50' y1='70' x2='50' y2='25' strokeWidth='4' strokeLinecap='round' />
        <line x1='70' y1='70' x2='70' y2='50' strokeWidth='4' strokeLinecap='round' />
        <line x1='15' y1='70' x2='85' y2='70' strokeWidth='1.5' />
      </svg>

      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-[32px] font-bold text-[#0F1729] mb-3'>Business Impact</h2>
          <p className='text-[#0F1729]/80 font-medium text-[18px]'>
            Measurable results across all dimensions
          </p>
        </div>

        {/* Operational Impact */}
        <div className='mb-16'>
          <h3 className='text-[22px] font-bold text-[#0F1729] text-center mb-8'>
            Operational Impact
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
            {/* Card 1 */}
            <div className='bg-white rounded-[12px] p-6 border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)]'>
              <div className='flex items-center gap-2 mb-3'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#16A249'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                  <polyline points='22 4 12 14.01 9 11.01'></polyline>
                </svg>
                <h4 className='font-bold text-[#0F1729]/80 text-[16px]'>Real-Time</h4>
              </div>
              <p className='text-[#0F1729] text-[14px] leading-relaxed'>
                Reduced sales reporting cycle from weekly ➔ daily/real-time
              </p>
            </div>
            {/* Card 2 */}
            <div className='bg-white rounded-[12px] p-6 border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)]'>
              <div className='flex items-center gap-2 mb-3'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#16A249'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                  <polyline points='22 4 12 14.01 9 11.01'></polyline>
                </svg>
                <h4 className='font-bold text-[#0F1729]/80 text-[16px]'>Optimized</h4>
              </div>
              <p className='text-[#0F1729] text-[14px] leading-relaxed'>
                Improved inventory management, reducing stockouts and overstocks
              </p>
            </div>
            {/* Card 3 */}
            <div className='bg-white rounded-[12px] p-6 border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)]'>
              <div className='flex items-center gap-2 mb-3'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#16A249'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                  <polyline points='22 4 12 14.01 9 11.01'></polyline>
                </svg>
                <h4 className='font-bold text-[#0F1729]/80 text-[16px]'>Connected</h4>
              </div>
              <p className='text-[#0F1729] text-[14px] leading-relaxed'>
                Linked customer engagement to sales outcomes for actionable insights
              </p>
            </div>
          </div>
        </div>

        {/* Financial Impact */}
        <div className='mb-16 relative'>
          <h3 className='text-[22px] font-bold text-[#0F1729] text-center mb-8 relative z-10 bg-[#aee2c2]/10 inline-block px-4 mx-auto left-1/2 -translate-x-1/2 backdrop-blur-[2px] rounded'>
            Financial Impact
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
            {/* Card 1 */}
            <div className='bg-white rounded-[12px] p-6 border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)]'>
              <div className='flex items-center gap-2 mb-3'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#3C83F6'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <polyline points='23 6 13.5 15.5 8.5 10.5 1 18'></polyline>
                  <polyline points='17 6 23 6 23 12'></polyline>
                </svg>
                <h4 className='font-bold text-[#0F1729]/80 text-[16px]'>Revenue Growth</h4>
              </div>
              <p className='text-[#0F1729] text-[14px] leading-relaxed'>
                Improved sales planning accuracy, increasing revenue opportunities
              </p>
            </div>
            {/* Card 2 */}
            <div className='bg-white rounded-[12px] p-6 shadow-md border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)]'>
              <div className='flex items-center gap-2 mb-3'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#3C83F6'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <polyline points='23 6 13.5 15.5 8.5 10.5 1 18'></polyline>
                  <polyline points='17 6 23 6 23 12'></polyline>
                </svg>
                <h4 className='font-bold text-[#0F1729]/80 text-[16px]'>Cost Reduction</h4>
              </div>
              <p className='text-[#0F1729] text-[14px] leading-relaxed'>
                Reduced costs from inefficient inventory management
              </p>
            </div>
          </div>
        </div>

        {/* Strategic Impact */}
        <div>
          <h3 className='text-[22px] font-bold text-[#0F1729] text-center mb-8'>
            Strategic Impact
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
            {/* Card 1 */}
            <div className='bg-white rounded-[12px] p-6 border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)]'>
              <div className='flex items-center gap-2 mb-3'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#0F1729'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <circle cx='12' cy='12' r='10'></circle>
                  <circle cx='12' cy='12' r='6'></circle>
                  <circle cx='12' cy='12' r='2'></circle>
                </svg>
                <h4 className='font-bold text-[#0F1729]/80 text-[16px]'>Data-Driven Culture</h4>
              </div>
              <p className='text-[#0F1729] text-[14px] leading-relaxed'>
                Established a data-driven culture in decision-making across the organization
              </p>
            </div>
            {/* Card 2 */}
            <div className='bg-white rounded-[12px] p-6 border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)]'>
              <div className='flex items-center gap-2 mb-3'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#0F1729'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <line x1='5' y1='12' x2='19' y2='12'></line>
                  <polyline points='12 5 19 12 12 19'></polyline>
                </svg>
                <h4 className='font-bold text-[#0F1729]/80 text-[16px]'>Scalable Foundation</h4>
              </div>
              <p className='text-[#0F1729] text-[14px] leading-relaxed'>
                Positioned LSKD to scale operations with real-time retail analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;

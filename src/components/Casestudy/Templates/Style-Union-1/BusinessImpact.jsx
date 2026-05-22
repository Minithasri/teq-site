import React from 'react';

const BusinessImpact = () => {
  return (
    <section
      className='w-full py-16'
      style={{ background: 'linear-gradient(180deg, #F9F9FB 0%, #F1F5FE 100%)' }}
    >
      <div className='max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Title */}
        <div className='text-center mb-16'>
          <h2 className='text-[36px] md:text-[40px] font-bold text-[#0F1729]'>Business Impact</h2>
          <p className='text-[#64748B] text-[24px] mt-2'>
            Measurable Results Across All Dimensions
          </p>
        </div>

        {/* Cards Container */}
        <div className='max-w-6xl mx-auto space-y-6'>
          {/* Card 1: Operational Impact */}
          <div className='bg-white rounded-[16px] border border-[#E1E7EF] shadow-lg p-8 md:p-10'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0'>
                <svg
                  width='30'
                  height='30'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#2463EB'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <polyline points='22 7 13.5 15.5 8.5 10.5 2 17'></polyline>
                  <polyline points='16 7 22 7 22 13'></polyline>
                </svg>
              </div>
              <h3 className='font-bold text-[24px] text-[#262626]'>Operational Impact</h3>
            </div>
            <ul className='space-y-4 ml-2'>
              <li className='flex items-center gap-4'>
                <div className='w-1.5 h-1.5 rounded-full bg-[#2463EB] flex-shrink-0'></div>
                <p className='text-[#334155] text-[1px] md:text-[20px]'>
                  Reduced reporting cycle from weekly/monthly → real-time
                </p>
              </li>
              <li className='flex items-center gap-4'>
                <div className='w-1.5 h-1.5 rounded-full bg-[#2463EB] flex-shrink-0'></div>
                <p className='text-[#334155] text-[16px] md:text-[20px]'>
                  Improved visibility into inventory, reducing stockouts and overstocking
                </p>
              </li>
              <li className='flex items-center gap-4'>
                <div className='w-1.5 h-1.5 rounded-full bg-[#2463EB] flex-shrink-0'></div>
                <p className='text-[#334155] text-[16px] md:text-[20px]'>
                  Enabled faster decisions for promotions and pricing strategies
                </p>
              </li>
            </ul>
          </div>

          {/* Card 2: Financial Impact */}
          <div className='bg-white rounded-[16px] border border-[#E1E7EF] shadow-lg p-8 md:p-10'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0'>
                <svg
                  width='30'
                  height='30'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#16A34A'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <line x1='12' y1='1' x2='12' y2='23'></line>
                  <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'></path>
                </svg>
              </div>
              <h3 className='font-bold text-[24px] text-[#262626]'>Financial Impact</h3>
            </div>
            <ul className='space-y-4 ml-2'>
              <li className='flex items-center gap-4'>
                <div className='w-1.5 h-1.5 rounded-full bg-[#16A34A] flex-shrink-0'></div>
                <p className='text-[#334155] text-[16px] md:text-[20px]'>
                  Optimized stock turnover and reduced carrying costs
                </p>
              </li>
              <li className='flex items-center gap-4'>
                <div className='w-1.5 h-1.5 rounded-full bg-[#16A34A] flex-shrink-0'></div>
                <p className='text-[#334155] text-[16px] md:text-[20px]'>
                  Improved sales growth through targeted decision-making
                </p>
              </li>
            </ul>
          </div>

          {/* Card 3: Strategic Impact */}
          <div className='bg-white rounded-[16px] border border-[#E1E7EF] shadow-lg p-8 md:p-10'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0'>
                <svg
                  width='30'
                  height='30'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#A855F7'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <circle cx='12' cy='12' r='10'></circle>
                  <circle cx='12' cy='12' r='6'></circle>
                  <circle cx='12' cy='12' r='2'></circle>
                </svg>
              </div>
              <h3 className='font-bold text-[24px] text-[#262626]'>Strategic Impact</h3>
            </div>
            <ul className='space-y-4 ml-2'>
              <li className='flex items-center gap-4'>
                <div className='w-1.5 h-1.5 rounded-full bg-[#A855F7] flex-shrink-0'></div>
                <p className='text-[#334155] text-[16px] md:text-[20px]'>
                  Established Style Union as a data-driven retail player
                </p>
              </li>
              <li className='flex items-center gap-4'>
                <div className='w-1.5 h-1.5 rounded-full bg-[#A855F7] flex-shrink-0'></div>
                <p className='text-[#334155] text-[16px] md:text-[20px]'>
                  Created a foundation for scalable retail analytics and growth
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;

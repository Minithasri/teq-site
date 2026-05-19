import React from 'react';

const BusinessImpact = () => {
  return (
    <section className='w-full'>
      <div className='bg-[#888888] py-14 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-10'>
            <h2 className='text-[32px] font-bold text-white mb-4'>Business Impact</h2>
            <p className='text-white/90 text-[18px]'>
              Measurable improvements across operations, customer experience, and strategic
              positioning
            </p>
          </div>

          <div className='text-center mb-8'>
            <h3 className='text-white font-bold text-[20px]'>Before vs. After</h3>
          </div>

          {/* Top 3 Cards (Before vs After) */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
            {/* Card 1 */}
            <div className='bg-white rounded-[16px] p-4 text-center shadow-sm'>
              <h4 className='font-bold text-[#0F1729] text-[18px] mb-2'>Reporting Cycle</h4>
              <div className='flex items-center justify-center gap-6 mb-4'>
                <div className='text-center w-20'>
                  <p className='text-[#64748B] text-[12px] mb-1'>Before</p>
                  <p className='text-[#EB6060] font-bold text-[15px]'>Weekly</p>
                </div>
                <div className='text-gray-300'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M5 12h14'></path>
                    <path d='m12 5 7 7-7 7'></path>
                  </svg>
                </div>
                <div className='text-center w-20'>
                  <p className='text-[#64748B] text-[12px] mb-1'>After</p>
                  <p className='text-[#0F1729] font-bold text-[15px]'>Real-time</p>
                </div>
              </div>
              <p className='text-[#64748B] text-[14px]'>Near-instant insights</p>
            </div>

            {/* Card 2 */}
            <div className='bg-white rounded-[16px] p-4 text-center shadow-sm'>
              <h4 className='font-bold text-[#0F1729] text-[18px] mb-2'>Fleet Utilization</h4>
              <div className='flex items-center justify-center gap-6 mb-4'>
                <div className='text-center w-24'>
                  <p className='text-[#64748B] text-[12px] mb-1'>Before</p>
                  <p className='text-[#EB6060] font-bold text-[15px]'>Suboptimal</p>
                </div>
                <div className='text-gray-300'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M5 12h14'></path>
                    <path d='m12 5 7 7-7 7'></path>
                  </svg>
                </div>
                <div className='text-center w-24'>
                  <p className='text-[#64748B] text-[12px] mb-1'>After</p>
                  <p className='text-[#0F1729] font-bold text-[15px]'>Optimized</p>
                </div>
              </div>
              <p className='text-[#64748B] text-[14px]'>Reduced vehicle underuse</p>
            </div>

            {/* Card 3 */}
            <div className='bg-white rounded-[16px] p-4 text-center shadow-sm'>
              <h4 className='font-bold text-[#0F1729] text-[18px] mb-2'>Scheduling Decisions</h4>
              <div className='flex items-center justify-center gap-6 mb-4'>
                <div className='text-center w-20'>
                  <p className='text-[#64748B] text-[12px] mb-1'>Before</p>
                  <p className='text-[#EB6060] font-bold text-[15px]'>Manual</p>
                </div>
                <div className='text-gray-300'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M5 12h14'></path>
                    <path d='m12 5 7 7-7 7'></path>
                  </svg>
                </div>
                <div className='text-center w-24'>
                  <p className='text-[#64748B] text-[12px] mb-1'>After</p>
                  <p className='text-[#0F1729] font-bold text-[15px]'>Data-driven</p>
                </div>
              </div>
              <p className='text-[#64748B] text-[14px]'>Improved accuracy</p>
            </div>
          </div>

          {/* Bottom 3 Cards (Impact Lists) */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {/* Card 4 */}
            <div className='bg-white rounded-[16px] p-4 shadow-sm'>
              <div className='flex items-center gap-3 mb-6'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#107AC6'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <polyline points='22 7 13.5 15.5 8.5 10.5 2 17'></polyline>
                  <polyline points='16 7 22 7 22 13'></polyline>
                </svg>
                <h4 className='font-bold text-[#0F1729] text-[18px]'>Operational Impact</h4>
              </div>
              <ul className='space-y-3'>
                <li className='flex items-start gap-2'>
                  <span className='text-[#107AC6] mt-0 text-[18px] leading-none'>•</span>
                  <span className='text-[#627084] text-[15px]'>
                    Reduced reporting cycle from weekly → near real-time
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-[#107AC6] mt-0 text-[18px] leading-none'>•</span>
                  <span className='text-[#627084] text-[15px]'>
                    Improved fleet utilization and reduced underuse of vehicles
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-[#107AC6] mt-0 text-[18px] leading-none'>•</span>
                  <span className='text-[#627084] text-[15px]'>
                    Better scheduling decisions with data-driven insights
                  </span>
                </li>
              </ul>
            </div>

            {/* Card 5 */}
            <div className='bg-white rounded-[16px] p-4 shadow-sm'>
              <div className='flex items-center gap-3 mb-6'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#107AC6'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'></path>
                  <circle cx='9' cy='7' r='4'></circle>
                  <path d='M22 21v-2a4 4 0 0 0-3-3.87'></path>
                  <path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
                </svg>
                <h4 className='font-bold text-[#0F1729] text-[18px]'>Customer Impact</h4>
              </div>
              <ul className='space-y-3'>
                <li className='flex items-start gap-2'>
                  <span className='text-[#107AC6] mt-0 text-[18px] leading-none'>•</span>
                  <span className='text-[#627084] text-[15px]'>
                    Increased service reliability with improved on-time performance
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-[#107AC6] mt-0 text-[18px] leading-none'>•</span>
                  <span className='text-[#627084] text-[15px]'>
                    Improved resource allocation reduced delays
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-[#107AC6] mt-0 text-[18px] leading-none'>•</span>
                  <span className='text-[#627084] text-[15px]'>
                    Enhanced passenger experience through better service
                  </span>
                </li>
              </ul>
            </div>

            {/* Card 6 */}
            <div className='bg-white rounded-[16px] p-4 shadow-sm'>
              <div className='flex items-center gap-3 mb-6'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#107AC6'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <circle cx='12' cy='12' r='10'></circle>
                  <circle cx='12' cy='12' r='6'></circle>
                  <circle cx='12' cy='12' r='2'></circle>
                </svg>
                <h4 className='font-bold text-[#0F1729] text-[18px]'>Strategic Impact</h4>
              </div>
              <ul className='space-y-3'>
                <li className='flex items-start gap-2'>
                  <span className='text-[#107AC6] mt-0 text-[18px] leading-none'>•</span>
                  <span className='text-[#627084] text-[15px]'>
                    Established a data-driven decision-making culture in operations
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-[#107AC6] mt-0 text-[18px] leading-none'>•</span>
                  <span className='text-[#627084] text-[15px]'>
                    Positioned Parisar as a modernized, efficiency-focused provider
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-[#107AC6] mt-0 text-[18px] leading-none'>•</span>
                  <span className='text-[#627084] text-[15px]'>
                    Created foundation for continuous operational improvement
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Blue Footer Banner */}
      <div className='w-full bg-gradient-to-br from-[#107AC6] to-[#1FA8D6] py-16 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='flex justify-center mb-4'>
            <svg
              width='40'
              height='40'
              viewBox='0 0 24 24'
              fill='none'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <circle cx='12' cy='8' r='6'></circle>
              <path d='M15.477 12.89 17 22l-5-3-5 3 1.523-9.11'></path>
            </svg>
          </div>
          <h3 className='text-[32px] font-bold text-white mb-6'>Key Transformation Achievement</h3>
          <p className='text-white/95 text-[16px] leading-relaxed'>
            Successfully transformed Parisar from a manually-tracked operation to a data-driven,
            real-time management system, establishing a foundation for continued operational
            excellence and customer service improvements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;

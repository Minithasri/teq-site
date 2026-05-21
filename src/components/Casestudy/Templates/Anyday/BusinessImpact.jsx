import React from 'react';

const BusinessImpact = () => {
  return (
    <section className='w-full py-4 bg-white'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-10'>
          <h2 className='text-[36px] font-bold text-[#0F1729]'>Business Impact</h2>
        </div>

        {/* Outlined Container */}
        <div className='border-2 border-[#F5F5F5] shadow-[0_4px_20px_rgb(0,0,0,0.08)] rounded-[16px] p-8 md:p-12'>
          {/* Table */}
          <div className='w-full mb-12'>
            <div className='grid grid-cols-12 gap-4 border-b border-gray-100 pb-4 mb-4'>
              <div className='col-span-6 md:col-span-5 font-bold text-[#0F1729] text-[18px]'>
                Metric
              </div>
              <div className='col-span-3 font-bold text-[#FC5A58] text-[18px]'>Before</div>
              <div className='col-span-1'></div>
              <div className='col-span-2 md:col-span-3 font-bold text-[#30BB0A] text-[18px]'>
                After
              </div>
            </div>

            <div className='grid grid-cols-12 gap-4 items-center border-b border-gray-50 pb-4 mb-4'>
              <div className='col-span-6 md:col-span-5 text-[#0F1729] text-[16px]'>
                Trends Reporting
              </div>
              <div className='col-span-3 text-[#FC5A58] text-[15px]'>Monthly</div>
              <div className='col-span-1 flex justify-center'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#2DD4BF'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M5 12h14'></path>
                  <path d='m12 5 7 7-7 7'></path>
                </svg>
              </div>
              <div className='col-span-2 md:col-span-3 font-bold text-[#30BB0A] text-[15px]'>
                Real-time
              </div>
            </div>

            <div className='grid grid-cols-12 gap-4 items-center border-b border-gray-50 pb-4 mb-4'>
              <div className='col-span-6 md:col-span-5 text-[#0F1729] text-[16px]'>
                Menu Optimization
              </div>
              <div className='col-span-3 text-[#FC5A58] text-[15px]'>Reactive</div>
              <div className='col-span-1 flex justify-center'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#2DD4BF'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M5 12h14'></path>
                  <path d='m12 5 7 7-7 7'></path>
                </svg>
              </div>
              <div className='col-span-2 md:col-span-3 font-bold text-[#30BB0A] text-[15px]'>
                Data-driven
              </div>
            </div>

            <div className='grid grid-cols-12 gap-4 items-center border-b border-gray-50 pb-4 mb-4'>
              <div className='col-span-6 md:col-span-5 text-[#0F1729] text-[16px]'>
                Customer Insights
              </div>
              <div className='col-span-3 text-[#FC5A58] text-[15px]'>Limited</div>
              <div className='col-span-1 flex justify-center'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#2DD4BF'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M5 12h14'></path>
                  <path d='m12 5 7 7-7 7'></path>
                </svg>
              </div>
              <div className='col-span-2 md:col-span-3 font-bold text-[#30BB0A] text-[15px]'>
                Centralized
              </div>
            </div>

            <div className='grid grid-cols-12 gap-4 items-center'>
              <div className='col-span-6 md:col-span-5 text-[#0F1729] text-[16px]'>
                Leadership Oversight
              </div>
              <div className='col-span-3 text-[#FC5A58] text-[15px]'>Fragmented</div>
              <div className='col-span-1 flex justify-center'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#2DD4BF'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M5 12h14'></path>
                  <path d='m12 5 7 7-7 7'></path>
                </svg>
              </div>
              <div className='col-span-2 md:col-span-3 font-bold text-[#30BB0A] text-[15px]'>
                Unified
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='border-2 border-[#F5F5F5] shadow-[0_4px_20px_rgb(0,0,0,0.08)] rounded-[8px] p-6 flex items-center gap-4'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#64748B'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='flex-shrink-0'
              >
                <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                <polyline points='22 4 12 14.01 9 11.01'></polyline>
              </svg>
              <p className='text-[#0F1729] text-[14px]'>
                Reduced reporting cycle from monthly → real-time
              </p>
            </div>
            <div className='border-2 border-[#F5F5F5] shadow-[0_4px_20px_rgb(0,0,0,0.08)] rounded-[8px] p-6 flex items-center gap-4'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#64748B'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='flex-shrink-0'
              >
                <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                <polyline points='22 4 12 14.01 9 11.01'></polyline>
              </svg>
              <p className='text-[#0F1729] text-[14px]'>
                Improved menu optimization and promotional planning
              </p>
            </div>
            <div className='border-2 border-[#F5F5F5] shadow-[0_4px_20px_rgb(0,0,0,0.08)] rounded-[8px] p-6 flex items-center gap-4'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#64748B'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='flex-shrink-0'
              >
                <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                <polyline points='22 4 12 14.01 9 11.01'></polyline>
              </svg>
              <p className='text-[#0F1729] text-[14px]'>
                Increased customer engagement with targeted offers
              </p>
            </div>
            <div className='border-2 border-[#F5F5F5] shadow-[0_4px_20px_rgb(0,0,0,0.08)] rounded-[8px] p-6 flex items-center gap-4'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#64748B'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='flex-shrink-0'
              >
                <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                <polyline points='22 4 12 14.01 9 11.01'></polyline>
              </svg>
              <p className='text-[#0F1729] text-[14px]'>
                Enabled leadership to make data-driven growth decisions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;

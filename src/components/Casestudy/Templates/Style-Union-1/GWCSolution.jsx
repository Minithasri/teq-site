import React from 'react';

const GWCSolution = () => {
  return (
    <section className='relative w-full py-20 overflow-hidden'>
      {/* Background Image */}
      <div
        className='absolute inset-0 w-full h-full bg-cover bg-center'
        style={{ backgroundImage: "url('/images/Templates/style-union-1/img5.png')" }}
      ></div>

      {/* Opacity Overlay to ensure text readability */}
      <div className='absolute inset-0 w-full h-full bg-black/20'></div>

      {/* Gradient Overlay requested by user with less opacity */}
      <div
        className='absolute inset-0 w-full h-full opacity-40'
        style={{ background: 'linear-gradient(180deg, #F9F9FB 0%, #F1F5FE 100%)' }}
      ></div>

      <div className='relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Title */}
        <div className='text-center mb-16'>
          <h2 className='text-[36px] md:text-[40px] font-bold text-white shadow-sm'>
            GWC's Solution
          </h2>
          <p className='text-white text-[20px] mt-3 font-medium'>
            Implemented a Comprehensive Retail Analytics Framework
          </p>
        </div>

        {/* 5 Cards Layout */}
        <div className='flex flex-wrap justify-center gap-6 mb-16'>
          {/* Card 1 */}
          <div className='bg-white rounded-[16px] p-8 w-full md:w-[31%] shadow-lg'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-12 bg-[#54F386] rounded-2xl flex items-center justify-center flex-shrink-0'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect>
                  <line x1='3' y1='9' x2='21' y2='9'></line>
                  <line x1='9' y1='21' x2='9' y2='9'></line>
                </svg>
              </div>
              <h3 className='font-bold text-[18px] text-[#0F1729]'>Sales Dashboards</h3>
            </div>
            <p className='text-[#65758B] text-[15px] leading-relaxed'>
              Real-time performance by region, store, and category
            </p>
          </div>

          {/* Card 2 */}
          <div className='bg-white rounded-[16px] p-8 w-full md:w-[31%] shadow-lg'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-12 bg-[#54F386] rounded-2xl flex items-center justify-center flex-shrink-0'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'></path>
                  <polyline points='3.27 6.96 12 12.01 20.73 6.96'></polyline>
                  <line x1='12' y1='22.08' x2='12' y2='12'></line>
                </svg>
              </div>
              <h3 className='font-bold text-[18px] text-[#0F1729]'>Inventory Analytics</h3>
            </div>
            <p className='text-[#64748B] text-[15px] leading-relaxed'>
              Monitoring stock availability, turnover, and replenishment needs
            </p>
          </div>

          {/* Card 3 */}
          <div className='bg-white rounded-[16px] p-8 w-full md:w-[31%] shadow-lg'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-12 bg-[#54F386] rounded-2xl flex items-center justify-center flex-shrink-0'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <polyline points='22 12 18 12 15 21 9 3 6 12 2 12'></polyline>
                </svg>
              </div>
              <h3 className='font-bold text-[18px] text-[#0F1729]'>Operational KPIs</h3>
            </div>
            <p className='text-[#64748B] text-[15px] leading-relaxed'>
              Efficiency, cost, and service-level tracking
            </p>
          </div>

          {/* Card 4 */}
          <div className='bg-white rounded-[16px] p-8 w-full md:w-[31%] shadow-lg'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-12 bg-[#54F386] rounded-2xl flex items-center justify-center flex-shrink-0'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <circle cx='12' cy='12' r='10'></circle>
                  <polyline points='12 6 12 12 16 14'></polyline>
                </svg>
              </div>
              <h3 className='font-bold text-[18px] text-[#0F1729]'>Executive Summaries</h3>
            </div>
            <p className='text-[#64748B] text-[15px] leading-relaxed'>
              Leadership views with consolidated KPIs
            </p>
          </div>

          {/* Card 5 */}
          <div className='bg-white rounded-[16px] p-8 w-full md:w-[31%] shadow-lg'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-12 bg-[#54F386] rounded-2xl flex items-center justify-center flex-shrink-0'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'></polygon>
                </svg>
              </div>
              <h3 className='font-bold text-[18px] text-[#0F1729]'>Automation</h3>
            </div>
            <p className='text-[#64748B] text-[15px] leading-relaxed'>
              Reduced manual reporting via ETL pipelines and auto-refresh dashboards
            </p>
          </div>
        </div>

        {/* Solution Highlights */}
        <div className='bg-white rounded-[24px] shadow-xl p-10 md:p-10 mx-auto md:w-[98%]'>
          <h3 className='text-[28px] md:text-[32px] font-bold text-[#0F1729] mb-8'>
            Solution Highlights
          </h3>
          <ul className='space-y-5'>
            {[
              'Unified view of sales, inventory, and operational performance',
              'Drill-down from company-wide metrics → product/category → store-level insights',
              'Real-time dashboards for faster retail decision-making',
              'Standardized KPIs across departments for consistency',
              'Executive-ready dashboards with actionable insights',
            ].map((highlight, index) => (
              <li key={index} className='flex items-center gap-4'>
                <div className='flex-shrink-0 w-6 h-6 rounded-full bg-[#4F46E5] flex items-center justify-center'>
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='white'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <polyline points='20 6 9 17 4 12'></polyline>
                  </svg>
                </div>
                <span className='text-[#475569] text-[16px] md:text-[18px]'>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GWCSolution;

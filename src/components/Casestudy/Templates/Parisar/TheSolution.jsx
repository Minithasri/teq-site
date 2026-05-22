import React from 'react';

const TheSolution = () => {
  return (
    <section className='w-full py-24 bg-[#F8FAFC]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-[32px] font-bold text-[#0F1729] mb-3'>GWC&apos;s Solution</h2>
          <p className='text-[#64748B] text-[18px]'>
            A comprehensive analytics solution designed for real-time operational excellence
          </p>
        </div>

        {/* Top Grid of 3 Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 max-w-7xl mx-auto mb-6'>
          {/* Card 1 */}
          <div className='bg-white rounded-[12px] p-6 border border-gray-200 border-l-[4px] border-l-[#107AC6] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] flex flex-col h-full'>
            <div className='flex items-center gap-3 mb-4'>
              <svg
                width='26'
                height='26'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#107AC6'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='m12 14 4-4' />
                <path d='M3.34 16a10 10 0 1 1 17.32 0' />
              </svg>
              <h3 className='font-bold text-[#0F1729]/80 text-[18px]'>
                Fleet Utilization Dashboards
              </h3>
            </div>
            <p className='text-[#64748B] text-[15px] leading-relaxed'>
              Real-time tracking of vehicle usage across the entire network
            </p>
          </div>

          {/* Card 2 */}
          <div className='bg-white rounded-[12px] p-6 border border-gray-200 border-l-[4px] border-l-[#107AC6] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] flex flex-col h-full'>
            <div className='flex items-center gap-3 mb-4'>
              <svg
                width='26'
                height='26'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#107AC6'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <rect x='3' y='4' width='18' height='18' rx='2' ry='2'></rect>
                <line x1='16' y1='2' x2='16' y2='6'></line>
                <line x1='8' y1='2' x2='8' y2='6'></line>
                <line x1='3' y1='10' x2='21' y2='10'></line>
              </svg>
              <h3 className='font-bold text-[#0F1729]/80 text-[18px]'>
                Scheduling & Operations Views
              </h3>
            </div>
            <p className='text-[#64748B] text-[15px] leading-relaxed'>
              Comprehensive insights into delays, route performance, and resource allocation
            </p>
          </div>

          {/* Card 3 */}
          <div className='bg-white rounded-[12px] p-6 border border-gray-200 border-l-[4px] border-l-[#107AC6] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] flex flex-col h-full'>
            <div className='flex items-center gap-3 mb-4'>
              <svg
                width='26'
                height='26'
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
              <h3 className='font-bold text-[#0F1729]/80 text-[18px]'>KPI Tracking</h3>
            </div>
            <p className='text-[#64748B] text-[15px] leading-relaxed'>
              Monitoring key performance indicators like on-time performance and downtime
            </p>
          </div>
        </div>

        {/* Middle Grid of 2 Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16'>
          {/* Card 4 */}
          <div className='bg-white rounded-[12px] p-6 border border-gray-200 border-l-[4px] border-l-[#107AC6] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] flex flex-col h-full'>
            <div className='flex items-center gap-3 mb-4'>
              <svg
                width='26'
                height='26'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#107AC6'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <rect x='3' y='17' width='4' height='4'></rect>
                <rect x='10' y='10' width='4' height='11'></rect>
                <rect x='17' y='3' width='4' height='18'></rect>
              </svg>
              <h3 className='font-bold text-[#0F1729]/80 text-[18px]'>Executive Dashboards</h3>
            </div>
            <p className='text-[#64748B] text-[15px] leading-relaxed'>
              High-level summaries with drill-down into route and vehicle-level metrics
            </p>
          </div>

          {/* Card 5 */}
          <div className='bg-white rounded-[12px] p-6 border border-gray-200 border-l-[4px] border-l-[#107AC6] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] flex flex-col h-full'>
            <div className='flex items-center gap-3 mb-4'>
              <svg
                width='26'
                height='26'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#107AC6'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <polygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'></polygon>
              </svg>
              <h3 className='font-bold text-[#0F1729]/80 text-[18px]'>Automation</h3>
            </div>
            <p className='text-[#64748B] text-[15px] leading-relaxed'>
              Eliminated manual reporting through scheduled data refreshes
            </p>
          </div>
        </div>

        {/* Solution Highlights Box */}
        <div className='bg-white rounded-[16px] p-10 max-w-6xl mx-auto border-2 border-[#F5F5F5] shadow-[0px_4px_12px_rgba(0,0,0,0.08)]'>
          <h3 className='text-[22px] font-bold text-[#0F1729]/80 mb-6'>Solution Highlights</h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5'>
            {/* Left Column */}
            <div className='flex flex-col gap-5'>
              <div className='flex items-start gap-3'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#64748B'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='mt-0.5 flex-shrink-0'
                >
                  <circle cx='12' cy='12' r='10'></circle>
                  <path d='M9 12l2 2 4-4'></path>
                </svg>
                <p className='text-[#627084] text-[16px]'>
                  Real-time fleet monitoring and scheduling dashboards
                </p>
              </div>
              <div className='flex items-start gap-3'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#64748B'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='mt-0.5 flex-shrink-0'
                >
                  <circle cx='12' cy='12' r='10'></circle>
                  <path d='M9 12l2 2 4-4'></path>
                </svg>
                <p className='text-[#627084] text-[16px]'>
                  Drill-down capabilities to analyze performance at route and vehicle level
                </p>
              </div>
              <div className='flex items-start gap-3'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#64748B'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='mt-0.5 flex-shrink-0'
                >
                  <circle cx='12' cy='12' r='10'></circle>
                  <path d='M9 12l2 2 4-4'></path>
                </svg>
                <p className='text-[#627084] text-[16px]'>
                  Centralized dashboards for both operations managers and executives
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className='flex flex-col gap-5'>
              <div className='flex items-start gap-3'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#64748B'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='mt-0.5 flex-shrink-0'
                >
                  <circle cx='12' cy='12' r='10'></circle>
                  <path d='M9 12l2 2 4-4'></path>
                </svg>
                <p className='text-[#627084] text-[16px]'>
                  KPI tracking for efficiency, reliability, and resource allocation
                </p>
              </div>
              <div className='flex items-start gap-3'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#64748B'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='mt-0.5 flex-shrink-0'
                >
                  <circle cx='12' cy='12' r='10'></circle>
                  <path d='M9 12l2 2 4-4'></path>
                </svg>
                <p className='text-[#627084] text-[16px]'>
                  Automated refresh cycles for always up-to-date insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheSolution;

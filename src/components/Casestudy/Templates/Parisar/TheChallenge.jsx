import React from 'react';

const TheChallenge = () => {
  return (
    <section className='w-full py-16 bg-[#EB6060]'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-10'>
          <h2 className='text-[32px] font-bold text-[#0F1729] mb-3'>The Challenge</h2>
          <p className='text-[#0F1729]/80 text-[18px] font-medium'>
            Operational inefficiencies were limiting service reliability and resource optimization
          </p>
        </div>

        {/* Top 3 Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mb-6'>
          {/* Card 1 */}
          <div className='bg-white rounded-[12px] p-6 shadow-sm border border-transparent'>
            <div className='flex items-center gap-3 mb-3'>
              <svg
                width='26'
                height='26'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#EB6060'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <ellipse cx='12' cy='5' rx='9' ry='3'></ellipse>
                <path d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3'></path>
                <path d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'></path>
              </svg>
              <h3 className='font-bold text-[#0F1729]/80 text-[18px]'>Scattered Data</h3>
            </div>
            <p className='text-[#64748B] text-[15px] leading-relaxed'>
              Fleet usage and scheduling data were fragmented across multiple systems
            </p>
          </div>

          {/* Card 2 */}
          <div className='bg-white rounded-[12px] p-6 shadow-sm border border-transparent'>
            <div className='flex items-center gap-3 mb-3'>
              <svg
                width='26'
                height='26'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#EB6060'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <circle cx='12' cy='12' r='10'></circle>
                <line x1='12' y1='8' x2='12' y2='12'></line>
                <line x1='12' y1='16' x2='12.01' y2='16'></line>
              </svg>
              <h3 className='font-bold text-[#0F1729]/80 text-[18px]'>No Central Dashboard</h3>
            </div>
            <p className='text-[#64748B] text-[15px] leading-relaxed'>
              Lack of centralized visibility into real-time operations
            </p>
          </div>

          {/* Card 3 */}
          <div className='bg-white rounded-[12px] p-6 shadow-sm border border-transparent'>
            <div className='flex items-center gap-3 mb-3'>
              <svg
                width='26'
                height='26'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#EB6060'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect>
                <polyline points='12 7 12 12 16 12'></polyline>
              </svg>
              <h3 className='font-bold text-[#0F1729]/80 text-[18px]'>Manual Reporting</h3>
            </div>
            <p className='text-[#64748B] text-[15px] leading-relaxed'>
              Manual processes caused significant delays in decision-making
            </p>
          </div>
        </div>

        {/* Middle 2 Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16'>
          {/* Card 4 */}
          <div className='bg-white rounded-[12px] p-6 shadow-sm border border-transparent'>
            <div className='flex items-center gap-3 mb-3'>
              <svg
                width='26'
                height='26'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#EB6060'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <polyline points='23 18 13.5 8.5 8.5 13.5 1 6'></polyline>
                <polyline points='17 18 23 18 23 12'></polyline>
              </svg>
              <h3 className='font-bold text-[#0F1729]/80 text-[18px]'>Limited Insights</h3>
            </div>
            <p className='text-[#64748B] text-[15px] leading-relaxed'>
              Difficulty identifying underutilized vehicles and inefficient routes
            </p>
          </div>

          {/* Card 5 */}
          <div className='bg-white rounded-[12px] p-6 shadow-sm border border-transparent'>
            <div className='flex items-center gap-3 mb-3'>
              <svg
                width='26'
                height='26'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#EB6060'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'></path>
                <polyline points='14 2 14 8 20 8'></polyline>
                <line x1='9' y1='15' x2='15' y2='9'></line>
                <line x1='9' y1='9' x2='15' y2='15'></line>
              </svg>
              <h3 className='font-bold text-[#0F1729]/80 text-[18px]'>Poor KPI Tracking</h3>
            </div>
            <p className='text-[#64748B] text-[15px] leading-relaxed'>
              Limited ability to monitor operational efficiency metrics
            </p>
          </div>
        </div>

        {/* Current State Metrics Box */}
        <div className='bg-white/40 rounded-[16px] p-4 max-w-6xl mx-auto backdrop-blur-sm border border-white/20'>
          <h3 className='text-[32px] font-bold text-[#0F1729] text-center mb-2'>
            Current State Metrics (Before Solution)
          </h3>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3'>
            {/* Metric 1 */}
            <div className='bg-white rounded-[8px] py-6 px-4 text-center shadow-sm'>
              <p className='text-[#64748B] text-[13px] mb-1'>Reporting Cycle</p>
              <p className='text-[#0F1729]/80 font-bold text-[18px] mb-1'>Weekly</p>
              <p className='text-[#64748B] text-[12px]'>Instead of real-time</p>
            </div>
            {/* Metric 2 */}
            <div className='bg-white rounded-[8px] py-6 px-4 text-center shadow-sm'>
              <p className='text-[#64748B] text-[13px] mb-1'>Data Quality</p>
              <p className='text-[#0F1729]/80 font-bold text-[18px] mb-1'>Fragmented</p>
              <p className='text-[#64748B] text-[12px]'>Inconsistent across systems</p>
            </div>
            {/* Metric 3 */}
            <div className='bg-white rounded-[8px] py-6 px-4 text-center shadow-sm'>
              <p className='text-[#64748B] text-[13px] mb-1'>Route Optimization</p>
              <p className='text-[#0F1729]/80 font-bold text-[18px] mb-1'>None</p>
              <p className='text-[#64748B] text-[12px]'>No automated insights</p>
            </div>
            {/* Metric 4 */}
            <div className='bg-white rounded-[8px] py-6 px-4 text-center shadow-sm'>
              <p className='text-[#64748B] text-[13px] mb-1'>Manual Work</p>
              <p className='text-[#0F1729]/80 font-bold text-[18px] mb-1'>High</p>
              <p className='text-[#64748B] text-[12px]'>Required for all reports</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheChallenge;

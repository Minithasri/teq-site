import React from 'react';

const TheSolution = () => {
  return (
    <section className='w-full py-14 bg-[#EEF9F9]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-[32px] font-bold text-[#0F1729] mb-2'>GWC's Solution</h2>
          <p className='text-[#0F1729] font-bold text-[18px]'>Customer Trends Dashboard</p>
        </div>

        <div className='max-w-6xl mx-auto'>
          {/* Top 3 Cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
            {/* Card 1 */}
            <div className='bg-white rounded-[12px] p-6 shadow-sm flex items-start gap-4'>
              <div className='w-12 h-12 rounded-[8px] bg-[#2DD4BF] flex items-center justify-center flex-shrink-0 shadow-sm'>
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
              <div>
                <h3 className='font-bold text-[#0F1729] text-[16px] mb-1'>
                  Menu Performance Insights
                </h3>
                <p className='text-[#64748B] text-[13px]'>
                  Identified top-performing and underperforming items
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className='bg-white rounded-[12px] p-6 shadow-sm flex items-start gap-4'>
              <div className='w-12 h-12 rounded-[8px] bg-[#2DD4BF] flex items-center justify-center flex-shrink-0 shadow-sm'>
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
                  <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
                  <circle cx='9' cy='7' r='4'></circle>
                  <path d='M23 21v-2a4 4 0 0 0-3-3.87'></path>
                  <path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
                </svg>
              </div>
              <div>
                <h3 className='font-bold text-[#0F1729] text-[16px] mb-1'>
                  Customer Behavior Analysis
                </h3>
                <p className='text-[#64748B] text-[13px]'>
                  Tracked repeat customers, preferences, and purchase trends
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className='bg-white rounded-[12px] p-6 shadow-sm flex items-start gap-4'>
              <div className='w-12 h-12 rounded-[8px] bg-[#2DD4BF] flex items-center justify-center flex-shrink-0 shadow-sm'>
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
                  <line x1='18' y1='20' x2='18' y2='10'></line>
                  <line x1='12' y1='20' x2='12' y2='4'></line>
                  <line x1='6' y1='20' x2='6' y2='14'></line>
                </svg>
              </div>
              <div>
                <h3 className='font-bold text-[#0F1729] text-[16px] mb-1'>Sales Dashboards</h3>
                <p className='text-[#64748B] text-[13px]'>
                  Real-time visibility into revenue drivers and demand shifts
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section: Cards 4 & 5 */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
            <div className='md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* Card 4 */}
              <div className='bg-white rounded-[12px] p-6 shadow-sm flex items-start gap-4'>
                <div className='w-12 h-12 rounded-[8px] bg-[#2DD4BF] flex items-center justify-center flex-shrink-0 shadow-sm'>
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
                    <circle cx='12' cy='12' r='6'></circle>
                    <circle cx='12' cy='12' r='2'></circle>
                  </svg>
                </div>
                <div>
                  <h3 className='font-bold text-[#0F1729] text-[16px] mb-1'>Engagement Metrics</h3>
                  <p className='text-[#64748B] text-[13px]'>
                    Linked customer data with loyalty and feedback insights
                  </p>
                </div>
              </div>
              {/* Card 5 */}
              <div className='bg-white rounded-[12px] p-6 shadow-sm flex items-start gap-4'>
                <div className='w-12 h-12 rounded-[8px] bg-[#2DD4BF] flex items-center justify-center flex-shrink-0 shadow-sm'>
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
                    <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'></path>
                    <polyline points='14 2 14 8 20 8'></polyline>
                    <line x1='16' y1='13' x2='8' y2='13'></line>
                    <line x1='16' y1='17' x2='8' y2='17'></line>
                    <polyline points='10 9 9 9 8 9'></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className='font-bold text-[#0F1729] text-[16px] mb-1'>Executive Summaries</h3>
                  <p className='text-[#64748B] text-[13px]'>
                    Leadership-ready KPIs for strategic planning
                  </p>
                </div>
              </div>
            </div>
            <div className='hidden md:block'></div>
          </div>

          {/* Highlights Box with Image */}
          <div className='bg-white rounded-[16px] p-10 shadow-sm relative mt-36'>
            <div className='w-full md:w-[55%]'>
              <h3 className='text-[22px] font-bold text-[#0F1729] mb-6'>Solution Highlights</h3>
              <ul className='space-y-4'>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 rounded-full bg-[#2DD4BF] flex-shrink-0'></div>
                  <span className='text-[#64748B] text-[15px]'>
                    Real-time customer and sales insights
                  </span>
                </li>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 rounded-full bg-[#2DD4BF] flex-shrink-0'></div>
                  <span className='text-[#64748B] text-[15px]'>
                    Drill-down views from overall sales → menu item → customer segment
                  </span>
                </li>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 rounded-full bg-[#2DD4BF] flex-shrink-0'></div>
                  <span className='text-[#64748B] text-[15px]'>
                    Automated refresh cycles for always up-to-date reporting
                  </span>
                </li>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 rounded-full bg-[#2DD4BF] flex-shrink-0'></div>
                  <span className='text-[#64748B] text-[15px]'>
                    Integration of POS, feedback, and customer loyalty data
                  </span>
                </li>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 rounded-full bg-[#2DD4BF] flex-shrink-0'></div>
                  <span className='text-[#64748B] text-[15px]'>
                    Executive dashboards for high-level and operational decision-making
                  </span>
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className='hidden md:block absolute -top-44 right-1 w-[36%] z-10'>
              <img
                src='/images/Templates/anyday/img4.jpg'
                alt='Restaurant Guests'
                className='w-full h-auto object-cover rounded-[24px] shadow-lg'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheSolution;

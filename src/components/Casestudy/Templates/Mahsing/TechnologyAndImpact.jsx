import React from 'react';

const TechnologyAndImpact = () => {
  return (
    <section className='w-full bg-white pt-10 pb-10 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Technology Stack Header */}
        <div className='text-center mb-5'>
          <h2 className='text-[30px] font-bold text-[#0F1729] '>Technology Stack</h2>
          <h3 className='text-[20px] font-medium text-[#151515]'>
            Powered by Industry-Leading Tools
          </h3>
        </div>

        {/* Logos */}
        <div className='flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20 mb-5'>
          <img
            src='/images/Templates/mahsing/Domo.png'
            alt='Domo'
            className='h-10 md:h-16 object-contain'
          />
          <img
            src='/images/Templates/mahsing/jupyter.png'
            alt='Jupyter'
            className='h-12 md:h-20 object-contain'
          />
          <img
            src='/images/Templates/mahsing/question-pro.png'
            alt='Question Pro'
            className='h-24 md:h-36 object-contain'
          />
          <img
            src='/images/Templates/mahsing/etl.png'
            alt='ETL Tools'
            className='h-10 md:h-16 object-contain'
          />
        </div>

        {/* Tech Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto'>
          {/* Card 1 */}
          <div className='bg-white rounded-[16px] p-6 border-2 border-[#F5F5F5] flex flex-col items-start shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-lg transition-all duration-300'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-[50px] h-[50px] rounded-[10px] bg-[#0846AA]/60 flex items-center justify-center shrink-0'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect>
                  <line x1='8' y1='12' x2='8' y2='21'></line>
                  <line x1='12' y1='8' x2='12' y2='21'></line>
                  <line x1='16' y1='16' x2='16' y2='21'></line>
                </svg>
              </div>
              <h4 className='font-bold text-[#0F1729] text-[20px]'>Domo</h4>
            </div>
            <p className='text-gray-500 text-[20px]'>Dashboards & visualization</p>
          </div>
          {/* Card 2 */}
          <div className='bg-white rounded-[16px] p-6 border-2 border-[#F5F5F5] flex flex-col items-start shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-lg transition-all duration-300'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-[50px] h-[50px] rounded-[10px] bg-[#0846AA]/60 flex items-center justify-center shrink-0'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <ellipse cx='12' cy='5' rx='9' ry='3'></ellipse>
                  <path d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3'></path>
                  <path d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'></path>
                </svg>
              </div>
              <h4 className='font-bold text-[#0F1729] text-[18px]'>Question Pro</h4>
            </div>
            <p className='text-gray-500 text-[15px]'>Survey data integration</p>
          </div>
          {/* Card 3 */}
          <div className='bg-white rounded-[16px] p-6 border-2 border-[#F5F5F5] flex flex-col items-start shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-lg transition-all duration-300'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-[50px] h-[50px] rounded-[10px] bg-[#0846AA]/60 flex items-center justify-center shrink-0'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <circle cx='12' cy='12' r='3'></circle>
                  <path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'></path>
                </svg>
              </div>
              <h4 className='font-bold text-[#0F1729] text-[18px]'>ETL Tools</h4>
            </div>
            <p className='text-gray-500 text-[15px]'>Data cleaning and automation</p>
          </div>
        </div>

        {/* Business Impact Header */}
        <div className='text-center mb-12'>
          <h2 className='text-[36px] font-bold text-[#0F1729] mb-4'>Business Impact</h2>
          <h3 className='text-[20px] font-semibold text-[#151515] mb-3'>
            Transformative Results Across All Dimensions
          </h3>
          <p className='text-gray-600 text-[16px] max-w-2xl mx-auto'>
            Measurable improvements in operations, customer satisfaction, and strategic positioning
          </p>
        </div>

        {/* Impact Cards */}
        <div className='flex flex-col gap-6 max-w-5xl mx-auto mb-12'>
          {/* Operational Impact */}
          <div className='bg-white rounded-[16px] p-8 border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex flex-col md:flex-row items-start md:items-center gap-8 hover:shadow-lg transition-all duration-300'>
            {/* Left Header */}
            <div className='flex items-center gap-4 w-full md:w-[260px] shrink-0'>
              <div className='w-[44px] h-[44px] rounded-[12px] bg-[#0846AA]/60 flex items-center justify-center shrink-0'>
                <svg
                  width='20'
                  height='20'
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
              <h4 className='font-bold text-[#0F1729] text-[18px]'>Operational Impact</h4>
            </div>
            {/* Right Bullets */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 w-full'>
              <div className='flex items-start gap-2'>
                <div className='w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0'></div>
                <p className='text-[#151515] text-[14px] leading-snug'>
                  Reduced feedback reporting cycle from weeks → near real-time
                </p>
              </div>
              <div className='flex items-start gap-2'>
                <div className='w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0'></div>
                <p className='text-[#151515] text-[14px] leading-snug'>
                  Improved defect resolution time through early visibility
                </p>
              </div>
              <div className='flex items-start gap-2'>
                <div className='w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0'></div>
                <p className='text-[#151515] text-[14px] leading-snug'>
                  Enhanced handover experience with data-driven insights
                </p>
              </div>
            </div>
          </div>

          {/* Customer Impact */}
          <div className='bg-white rounded-[16px] p-8 border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex flex-col md:flex-row items-start md:items-center gap-8 hover:shadow-lg transition-all duration-300'>
            {/* Left Header */}
            <div className='flex items-center gap-4 w-full md:w-[260px] shrink-0'>
              <div className='w-[44px] h-[44px] rounded-[12px] bg-[#0846AA]/60 flex items-center justify-center shrink-0'>
                <svg
                  width='20'
                  height='20'
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
              <h4 className='font-bold text-[#0F1729] text-[18px]'>Customer Impact</h4>
            </div>
            {/* Right Bullets */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 w-full'>
              <div className='flex items-start gap-2'>
                <div className='w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0'></div>
                <p className='text-[#151515] text-[14px] leading-snug'>
                  Strengthened customer trust by acting on survey results faster
                </p>
              </div>
              <div className='flex items-start gap-2'>
                <div className='w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0'></div>
                <p className='text-[#151515] text-[14px] leading-snug'>
                  Improved transparency in defect and refund management
                </p>
              </div>
              <div className='flex items-start gap-2'>
                <div className='w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0'></div>
                <p className='text-[#151515] text-[14px] leading-snug'>
                  Higher satisfaction during property handovers
                </p>
              </div>
            </div>
          </div>

          {/* Strategic Impact */}
          <div className='bg-white rounded-[16px] p-8 border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex flex-col md:flex-row items-start md:items-center gap-8 hover:shadow-lg transition-all duration-300'>
            {/* Left Header */}
            <div className='flex items-center gap-4 w-full md:w-[260px] shrink-0'>
              <div className='w-[44px] h-[44px] rounded-[12px] bg-[#0846AA]/60 flex items-center justify-center shrink-0'>
                <svg
                  width='20'
                  height='20'
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
              <h4 className='font-bold text-[#0F1729] text-[18px]'>Strategic Impact</h4>
            </div>
            {/* Right Bullets */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 w-full'>
              <div className='flex items-start gap-2'>
                <div className='w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0'></div>
                <p className='text-[#151515] text-[14px] leading-snug'>
                  Established a data-driven culture in customer satisfaction tracking
                </p>
              </div>
              <div className='flex items-start gap-2'>
                <div className='w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0'></div>
                <p className='text-[#151515] text-[14px] leading-snug'>
                  Positioned Mah Sing as a customer-first property developer
                </p>
              </div>
              <div className='flex items-start gap-2'>
                <div className='w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0'></div>
                <p className='text-[#151515] text-[14px] leading-snug'>
                  Created a foundation for continuous improvement across projects
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
          {/* Stat 1 */}
          <div className='bg-white border-2 border-[#F5F5F5] rounded-[12px] py-10 flex flex-col items-center justify-center text-center shadow-[0_4px_12px_rgba(0,0,0,0.08)]'>
            <h4 className='text-[40px] font-bold text-[#0F1729]/80 mb-2 leading-none'>18</h4>
            <p className='text-[#0F1729] text-[15px]'>Months of Data Analyzed</p>
          </div>
          {/* Stat 2 */}
          <div className='bg-white border-2 border-[#F5F5F5] rounded-[12px] py-10 flex flex-col items-center justify-center text-center shadow-[0_4px_12px_rgba(0,0,0,0.08)]'>
            <h4 className='text-[40px] font-bold text-[#0F1729]/80 mb-2 leading-none'>Real-time</h4>
            <p className='text-[#0F1729] text-[15px]'>Feedback Reporting</p>
          </div>
          {/* Stat 3 */}
          <div className='bg-white border-2 border-[#F5F5F5] rounded-[12px] py-10 flex flex-col items-center justify-center text-center shadow-[0_4px_12px_rgba(0,0,0,0.08)]'>
            <h4 className='text-[40px] font-bold text-[#0F1729]/80 mb-2 leading-none'>100%</h4>
            <p className='text-[#0F1729] text-[15px]'>Data Visibility</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyAndImpact;

import React from 'react';

const TechnologyStack = () => {
  return (
    <section className='w-full py-14 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Logos and Title */}
        <div className='flex items-center justify-center gap-6 md:gap-10 mb-12 flex-wrap'>
          <img
            src='/images/Templates/anyday/tableau.png'
            alt='Tableau'
            className='h-16 object-contain'
          />
          <img src='/images/Templates/anyday/Domo.png' alt='Domo' className='h-10 object-contain' />
          <h2 className='text-[36px] font-bold text-[#0F1729] mx-2'>Technology Stack</h2>
          <img
            src='/images/Templates/anyday/google.png'
            alt='Google Analytics'
            className='h-10 object-contain'
          />
          <img
            src='/images/Templates/anyday/etl.png'
            alt='ETL Tools'
            className='h-10 object-contain'
          />
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
          {/* Card 1 */}
          <div className='bg-white rounded-[16px] py-10 px-6 text-center border border-[#DADFE780] shadow-sm flex flex-col items-center'>
            <div className='w-14 h-14 rounded-[12px] bg-gradient-to-b from-[#3B82F6] to-[#2563EB] flex items-center justify-center mb-4'>
              <svg
                width='28'
                height='28'
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
            <h3 className='font-bold text-[#0F1729] text-[18px] mb-2'>Power BI / Tableau / Domo</h3>
            <p className='text-[#64748B] text-[14px]'>Dashboards & visualization</p>
          </div>

          {/* Card 2 */}
          <div className='bg-white rounded-[16px] py-10 px-6 text-center border border-[#DADFE780] shadow-sm flex flex-col items-center'>
            <div className='w-14 h-14 rounded-[12px] bg-gradient-to-b from-[#A855F7] to-[#9333EA] flex items-center justify-center mb-4'>
              <svg
                width='28'
                height='28'
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
            <h3 className='font-bold text-[#0F1729] text-[18px] mb-2'>POS & Customer Systems</h3>
            <p className='text-[#64748B] text-[14px]'>Sales and behavior data integration</p>
          </div>

          {/* Card 3 */}
          <div className='bg-white rounded-[16px] py-10 px-6 text-center border border-[#DADFE780] shadow-sm flex flex-col items-center'>
            <div className='w-14 h-14 rounded-[12px] bg-gradient-to-b from-[#22C55E] to-[#16A34A] flex items-center justify-center mb-4'>
              <svg
                width='28'
                height='28'
                viewBox='0 0 24 24'
                fill='none'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <rect x='3' y='3' width='8' height='8' rx='2' />
                <path d='M7 11v4a2 2 0 0 0 2 2h4' />
                <rect x='13' y='13' width='8' height='8' rx='2' />
              </svg>
            </div>
            <h3 className='font-bold text-[#0F1729] text-[18px] mb-2'>ETL Tools</h3>
            <p className='text-[#64748B] text-[14px]'>Automation pipelines</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;

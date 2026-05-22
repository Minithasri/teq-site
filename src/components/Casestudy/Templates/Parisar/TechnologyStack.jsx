import React from 'react';

const TechnologyStack = () => {
  return (
    <section className='w-full py-10 bg-[#F3F5F6]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Logos and Title */}
        <div className='flex items-center justify-center gap-6 md:gap-10 mb-12 flex-wrap'>
          <img
            src='/images/Templates/parisar/Domo.png'
            alt='Domo'
            className='h-12 object-contain'
          />
          <img
            src='/images/Templates/parisar/jupyter.png'
            alt='Jupyter'
            className='h-16 object-contain'
          />
          <h2 className='text-[36px] font-bold text-[#0F1729] mx-2'>Technology Stack</h2>
          <img src='/images/Templates/parisar/pdf.png' alt='PDF' className='h-12 object-contain' />
          <img
            src='/images/Templates/parisar/etl.png'
            alt='ETL Tools'
            className='h-12 object-contain'
          />
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
          {/* Card 1 */}
          <div className='bg-white rounded-[12px] py-8 px-6 border-2 border-[#F5F5F5] text-center shadow-[0px_4px_12px_rgba(0,0,0,0.08)]'>
            <h3 className='font-bold text-[#0F1729]/80 text-[20px] mb-2'>Domo</h3>
            <p className='text-[#64748B] text-[15px]'>Dashboards & Visualization</p>
          </div>

          {/* Card 2 */}
          <div className='bg-white rounded-[12px] py-8 px-6 border-2 border-[#F5F5F5] text-center shadow-[0px_4px_12px_rgba(0,0,0,0.08)]'>
            <h3 className='font-bold text-[#0F1729]/80 text-[20px] mb-2'>PDF</h3>
            <p className='text-[#64748B] text-[15px]'>Data Integration from Fleet Systems</p>
          </div>

          {/* Card 3 */}
          <div className='bg-white rounded-[12px] py-8 px-6 border-2 border-[#F5F5F5] text-center shadow-[0px_4px_12px_rgba(0,0,0,0.08)]'>
            <h3 className='font-bold text-[#0F1729]/80 text-[20px] mb-2'>ETL Tools</h3>
            <p className='text-[#64748B] text-[15px]'>Data Cleaning & Automation Pipelines</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;

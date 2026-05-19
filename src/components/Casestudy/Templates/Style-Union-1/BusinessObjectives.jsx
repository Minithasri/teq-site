import React from 'react';

const BusinessObjectives = () => {
  const objectives = [
    { id: 1, text: 'Build a comprehensive reporting and analytics framework' },
    { id: 2, text: 'Provide real-time dashboards for sales, inventory, and operational KPIs' },
    { id: 3, text: 'Enable drill-down insights at product, category, and location levels' },
    { id: 4, text: 'Automate reporting to reduce manual dependency' },
    { id: 5, text: 'Support data-driven retail growth and operational efficiency' },
  ];

  return (
    <section className='w-full py-20 bg-[#90B6F04F]'>
      <div className='max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Title */}
        <div className='text-center mb-16'>
          <h2 className='text-[36px] md:text-[40px] font-bold text-[#0F1729]'>
            Business Objectives
          </h2>
        </div>

        {/* Content Box */}
        <div className='bg-white rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-white p-8 md:p-14 md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div className='space-y-10'>
            {objectives
              .filter(o => o.id % 2 !== 0)
              .map(obj => (
                <div key={obj.id} className='flex items-start gap-5'>
                  <div className='w-10 h-10 rounded-full bg-gradient-to-br from-[#2463EB] to-[#7C3BED] flex items-center justify-center flex-shrink-0 text-white font-bold text-[16px]'>
                    {obj.id}
                  </div>
                  <p className='text-[#0F1729E5] text-[18px] leading-relaxed mt-1.5'>{obj.text}</p>
                </div>
              ))}
          </div>

          <div className='space-y-10'>
            {objectives
              .filter(o => o.id % 2 === 0)
              .map(obj => (
                <div key={obj.id} className='flex items-start gap-5'>
                  <div className='w-10 h-10 rounded-full bg-gradient-to-br from-[#2463EB] to-[#7C3BED] flex items-center justify-center flex-shrink-0 text-white font-bold text-[16px]'>
                    {obj.id}
                  </div>
                  <p className='text-[#0F1729E5] text-[18px] leading-relaxed mt-1.5'>{obj.text}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessObjectives;

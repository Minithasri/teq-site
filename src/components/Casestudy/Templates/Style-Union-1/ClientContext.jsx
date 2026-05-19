import React from 'react';

const ClientContext = () => {
  return (
    <section className='w-full py-16 bg-[#FFFFFF]'>
      <div className='max-w-[1500px] mx-auto px-4 md:px-6 '>
        {/* Title */}
        <div className='text-center mb-16'>
          <h2 className='text-[36px] md:text-[40px] font-bold text-[#0F1729]'>Client Context</h2>
        </div>

        {/* Content Box */}
        <div className='relative bg-white rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E1E7EF] p-8 md:p-14 md:w-[85%] mt-12'>
          <div className='md:w-[95%] space-y-6'>
            <p className='text-[#0F1729] text-[16px] md:text-[22px] leading-relaxed'>
              Style Union, a retail brand with growing operations, needed real-time visibility into
              sales, inventory, and operational performance. Leadership relied on fragmented
              reports, which made it difficult to respond quickly to shifting customer demand, stock
              imbalances, and sales trends.
            </p>
            <p className='text-[#0F1729] text-[16px] md:text-[22px] leading-relaxed'>
              The company wanted to move toward a data-driven retail strategy by consolidating
              reporting and analytics into a unified framework.
            </p>
          </div>

          {/* Overlapping Image */}
          <div className='hidden md:block absolute -top-36 -right-[22%] w-[35%] z-10'>
            <img
              src='/images/Templates/style-union-1/img2.png'
              alt='Style Union Store'
              className='w-full h-auto object-cover rounded-[24px] shadow-lg'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientContext;

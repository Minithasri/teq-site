import React from 'react';

const TechnologyStack = () => {
  return (
    <section className='w-full pb-16 bg-white'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-[32px] font-bold text-[#0F1729] mb-3'>Technology Stack</h2>
          <p className='text-[#64748B] text-[18px]'>Modern tools powering the solution</p>
        </div>

        {/* Logos */}
        <div className='flex flex-col lg:flex-row justify-center items-center w-full gap-4   lg:gap-10 mx-auto mb-10 px-4'>
          <div className='flex items-center justify-center'>
            <img
              src='/images/Templates/lskg/Domo.png'
              alt='Domo'
              className='h-12 md:h-20 object-contain'
            />
          </div>

          <div className='grid grid-cols-3 items-center justify-items-center'>
            <img
              src='/images/Templates/lskg/shopify.png'
              alt='Shopify'
              className='h-5 md:h-5 object-contain'
            />
            <img
              src='/images/Templates/lskg/Tictok.png'
              alt='TikTok'
              className='h-5 md:h-5 object-contain'
            />
            <img
              src='/images/Templates/lskg/kepler.png'
              alt='Kepler'
              className='h-12 md:h-16 object-contain'
            />
            <img
              src='/images/Templates/lskg/meta.png'
              alt='Meta'
              className='h-12 md:h-16 object-contain'
            />
            <img
              src='/images/Templates/lskg/google.png'
              alt='Google Analytics'
              className='h-5 md:h-5 object-contain'
            />
            <img
              src='/images/Templates/lskg/airwallex.png'
              alt='Airwallex'
              className='h-4 md:h-4 object-contain'
            />
          </div>

          <div className='flex items-center justify-center'>
            <img
              src='/images/Templates/lskg/etl.png'
              alt='ETL Tools'
              className='h-12 md:h-20 object-contain'
            />
          </div>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto'>
          <div className='bg-white rounded-[12px] p-6 border border-[#3C83F633] shadow-md flex flex-col justify-center transition-all hover:shadow-md'>
            <h4 className='font-bold text-[#0F1729] text-[16px] mb-2'>
              Dashboards & visualization
            </h4>
            <p className='text-[#64748B] text-[14px] leading-relaxed'>Domo</p>
          </div>
          <div className='bg-white rounded-[12px] p-6 border border-[#3C83F633] shadow-md flex flex-col justify-center transition-all hover:shadow-md'>
            <h4 className='font-bold text-[#0F1729] text-[16px] mb-2'>Data integration systems</h4>
            <p className='text-[#64748B] text-[14px] leading-relaxed'>
              Shopify/Meta /TikTok/Google Analytics/Kepler/ Airwallex
            </p>
          </div>
          <div className='bg-white rounded-[12px] p-6 border border-[#3C83F633] shadow-md flex flex-col justify-center transition-all hover:shadow-md'>
            <h4 className='font-bold text-[#0F1729] text-[16px] mb-2'>Automated transformations</h4>
            <p className='text-[#64748B] text-[14px] leading-relaxed'>ETL Tools</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;

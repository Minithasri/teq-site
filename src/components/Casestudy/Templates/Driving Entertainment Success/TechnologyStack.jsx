'use client';

import Image from 'next/image';

export default function TechnologyStack() {
  const stackItems = [
    {
      title: 'Power BI / Domo',
      description: 'Dashboards & visualization',
    },
    {
      title: 'CRM / Event Data Sources',
      description: 'Audience and sales data',
    },
    {
      title: 'ETL Tools',
      description: 'Data integration and automation',
    },
  ];

  return (
    <section className="w-full bg-white lg:mt-[-50px] lg:mb-[-10px] py-10 px-4 md:py-16 md:px-8 flex flex-col items-center font-['Poppins'] select-none">
      <div className='w-full max-w-[1294px] mx-auto flex flex-col items-center'>
        {/* HEADER & BRAND LOGO ROW  */}
        <div className='flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 mb-10 lg:mb-12 w-full'>
          {/* Left Side Logos */}
          <div className='flex items-center gap-6 md:gap-8 order-2 lg:order-1'>
            <div className='relative w-[65px] h-[55px] md:w-[85px] md:h-[75px]'>
              <Image
                src='/images/Templates/templatez/tcdomo.png'
                alt='Domo Logo'
                fill
                className='object-contain'
                priority
              />
            </div>
            <div className='relative w-[65px] h-[45px] md:w-[85px] md:h-[58px]'>
              <Image
                src='/images/Templates/templatez/jamm/jammcrm.svg'
                alt='CRM Platform Logo'
                fill
                className='object-contain'
                priority
              />
            </div>
          </div>

          {/* Central Section Title Header */}
          <h2
            className='text-[26px] leading-[30px] sm:text-[30px] sm:leading-[34px] lg:text-[34px] lg:leading-[36px] font-bold text-[#21242C] text-center order-1 lg:order-2 mx-0 lg:mx-3'
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Technology Stack
          </h2>

          {/* Right Side Logos */}
          <div className='flex items-center gap-6 md:gap-12 order-3'>
            <div className='relative w-[65px] h-[45px] md:w-[85px] md:h-[58px]'>
              <Image
                src='/images/Templates/templatez/jamm/jammga.svg'
                alt='Power BI Logo'
                fill
                className='object-contain'
                priority
              />
            </div>
            <div className='relative w-[65px] h-[45px] md:w-[85px] md:h-[58px]'>
              <Image
                src='/images/Templates/templatez/jamm/jammetl.svg'
                alt='ETL Infrastructure Diagram Logo'
                fill
                className='object-contain'
                priority
              />
            </div>
          </div>
        </div>

        {/* HORIZONTAL CARD MATRIX GRID */}
        <div className='flex flex-col lg:flex-row justify-between items-center w-full gap-4 md:gap-6 lg:gap-8'>
          {stackItems.map((item, index) => (
            <div
              key={index}
              className='bg-white flex flex-col justify-center p-6 md:pl-8 md:pr-4 w-full max-w-[410px] min-h-[110px] md:h-[122px] rounded-[12px] border border-[#DCDFE5] box-border'
            >
              {/* Card Title Layout */}
              <div className='flex items-center gap-3 mb-1'>
                <span className='w-2 h-2 rounded-full bg-black shrink-0' />
                <h3
                  className='text-[18px] leading-[24px] md:text-[22px] md:leading-[30px] font-bold text-[#21242C]'
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.title}
                </h3>
              </div>

              {/* Description Body text */}
              <p
                className='text-[14px] leading-[22px] md:text-[18px] md:leading-[30px] text-[#676F7E] pl-5'
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

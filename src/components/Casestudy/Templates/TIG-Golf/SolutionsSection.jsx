'use client';

import Image from 'next/image';

const solutions = [
  {
    step: 'STEP 01',
    title: 'Automated Data Ingestion',
    description: 'Integrated SFTP data flow into Domo for hands-free intake.',
    icon: '/images/Templates/tig-golf/automated.svg',
  },
  {
    step: 'STEP 02',
    title: 'Python-Based Processing',
    description: 'Used Jupyter workspace to transform Excel data at scale.',
    icon: '/images/Templates/tig-golf/python.svg',
  },
  {
    step: 'STEP 03',
    title: 'Structure Preservation',
    description: 'Maintained hierarchy and formatting logic throughout the flow.',
    icon: '/images/Templates/tig-golf/structure.svg',
  },
  {
    step: 'STEP 04',
    title: 'Magic ETL Transformation',
    description: 'Standardized and integrated datasets ready for reporting.',
    icon: '/images/Templates/tig-golf/magic.svg',
  },
  {
    step: 'STEP 05',
    title: 'End-to-End Pipeline Automation',
    description: 'Enabled seamless flow from ingestion to reporting.',
    icon: '/images/Templates/tig-golf/end-to-end.svg',
  },
];

const SolutionsSection = () => {
  return (
    <section className='relative w-full pt-6 overflow-hidden bg-[#F6F6F6]'>
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        {/* TITLE */}
        <h2 className='text-[28px] md:text-[54px] leading-none font-semibold text-[#262626]'>
          <span className='mr-3'>03</span>· Solution Implemented
        </h2>
      </div>

      <div className='bg-[#F6F6F6]'>
        <div className='relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16'>
          {/* RIGHT FLOATING IMAGE */}
          <div
            className='
            absolute
            right-[-30px]
            bottom-10
            hidden
            xl:block
            z-10
            pointer-events-none
          '
          >
            <Image
              src='/images/Templates/tig-golf/solution.png'
              alt='Golf'
              width={420}
              height={320}
              priority
              className='
              h-[320px]
              w-[420px]
              object-contain
            '
            />
          </div>

          {/* CONTENT */}
          <div className='relative z-20'>
            {/* DESCRIPTION */}
            <p className='text-[14px] md:text-[18px] leading-[1.8] text-[#6D7383]'>
              Each layer of the pipeline was designed to remove manual touch points while preserving
              the integrity of the source data.
            </p>

            {/* GRID */}
            <div className='mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
              {solutions.map((item, index) => (
                <div
                  key={index}
                  className='
                  relative
                  min-h-[240px]
                  rounded-[22px]
                  border-2
                  border-[##F5F5F5]
                  bg-white
                  px-6
                  py-6
                  shadow-md
                '
                >
                  {/* TOP */}
                  <div className='flex items-start gap-5'>
                    {/* ICON */}
                    <div className='flex h-[54px] w-[54px] flex-shrink-0 items-center justify-center rounded-[14px] bg-[#5758F0]'>
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={24}
                        height={24}
                        className='h-6 w-6 object-contain'
                      />
                    </div>

                    {/* TITLE */}
                    <h3 className='pt-2 text-[14px] md:text-[18px] leading-[1.5] font-semibold text-[#262626]'>
                      {item.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <p className='mt-5 text-[12px] md:text-[16px] leading-[2] text-[#6F7787]'>
                    {item.description}
                  </p>

                  {/* STEP */}
                  <span className='absolute bottom-6 left-6 text-[11px] font-semibold uppercase tracking-[1.5px] text-[#B2B6C2]'>
                    {item.step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE IMAGE */}
          <div className='mt-10 flex justify-center md:hidden'>
            <Image
              src='/images/Templates/tig-golf/solution.png'
              alt='Golf'
              width={320}
              height={240}
              priority
              className='
              h-[240px]
              w-[320px]
              object-contain
            '
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

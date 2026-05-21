'use client';

import Image from 'next/image';

const technologies = [
  'Power BI',
  'Snowflake',
  'Informatica',
  'Apache Airflow',
  'GitLab',
  'DBeaver',
];

const TechnologyValueSection = () => {
  return (
    <section className='w-full overflow-hidden bg-[#FCFBF8]'>
      {/* ================= TECHNOLOGY STACK ================= */}
      <div className='mx-auto max-w-7xl px-4 md:px-6 pt-12 md:pt-16 pb-10 text-center'>
        {/* TITLE */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[3px]'>
          <span className='mr-3'>05</span>— Technology
        </h2>
        {/* HEADER */}
        <div className='mt-6 flex flex-col gap-8 md:flex-row md:items-center md:justify-center'>
          {/* ICONS */}
          <div className='flex flex-wrap items-center gap-5 md:gap-7'>
            <Image
              src='/images/Templates/altimetrik/powerbi.png'
              alt='Power BI'
              width={56}
              height={56}
              className='h-[44px] w-[44px] object-contain md:h-[56px] md:w-[56px]'
            />

            <Image
              src='/images/Templates/altimetrik/snowflake.png'
              alt='Snowflake'
              width={56}
              height={56}
              className='h-[44px] w-[44px] object-contain md:h-[56px] md:w-[56px]'
            />

            <Image
              src='/images/Templates/altimetrik/infomatica.png'
              alt='Informatica'
              width={56}
              height={56}
              className='h-[44px] w-[44px] object-contain md:h-[56px] md:w-[56px]'
            />

            <Image
              src='/images/Templates/altimetrik/apache.png'
              alt='Airflow'
              width={56}
              height={56}
              className='h-[44px] w-[44px] object-contain md:h-[56px] md:w-[56px]'
            />

            <Image
              src='/images/Templates/altimetrik/gitlab.png'
              alt='GitLab'
              width={56}
              height={56}
              className='h-[44px] w-[44px] object-contain md:h-[56px] md:w-[56px]'
            />

            <Image
              src='/images/Templates/altimetrik/dbeaver.png'
              alt='DBeaver'
              width={56}
              height={56}
              className='h-[44px] w-[44px] object-contain md:h-[56px] md:w-[56px]'
            />
          </div>
        </div>

        {/* TAGS */}
        <div className='mt-10 flex flex-wrap justify-center gap-4'>
          {technologies.map((item, index) => (
            <div
              key={index}
              className='
                flex
                items-center
                gap-3
                rounded-[8px]
                border-2
                border-[#F5F5F5]
                bg-white
                px-5
                py-3
                shadow-[0px_2px_12px_rgba(0,0,0,0.08)]
              '
            >
              {/* DOT */}
              <div className='h-[6px] w-[6px] rounded-full bg-[#F25A38]' />

              {/* TEXT */}
              <span className='text-[14px] md:text-[16px] font-medium text-[#2E2E2E]'>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= VALUE DELIVERED ================= */}
      <div className='bg-[#1654AC] py-14 md:py-20'>
        <div className='mx-auto max-w-7xl px-4 md:px-6 text-center'>
          {/* TITLE */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[3px]'>
            <span className='mr-3'>06</span>— Value Delivered
          </h2>

          {/* DESCRIPTION */}
          <div className='mt-12'>
            <p className='text-[18px] md:text-[26px] leading-[1.8] tracking-[1.0] text-white font-light'>
              A scalable analytics platform that{' '}
              <span className='font-semibold'>unified sales, inventory, and customer data</span> —
              enabling real-time insights, improving inventory efficiency, and powering data-driven
              decisions across retail operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyValueSection;

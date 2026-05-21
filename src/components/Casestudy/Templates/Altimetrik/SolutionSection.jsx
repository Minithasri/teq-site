'use client';

import Image from 'next/image';

const solutions = [
  {
    id: '01',
    icon: '/images/Templates/altimetrik/automated.svg',
    title: 'Automated ETL Pipelines',
    description: 'Ingested and transformed data into Snowflake using Informatica.',
  },
  {
    id: '02',
    icon: '/images/Templates/altimetrik/scalable.svg',
    title: 'Scalable Data Models',
    description: 'Designed optimized models tuned for performance and analytics.',
  },
  {
    id: '03',
    icon: '/images/Templates/altimetrik/interactive.svg',
    title: 'Interactive Dashboards',
    description: 'Built Power BI dashboards for sales, inventory, and customer insights.',
  },
  {
    id: '04',
    icon: '/images/Templates/altimetrik/workflow.svg',
    title: 'Workflow Automation',
    description: 'Used Apache Airflow for scheduling and pipeline orchestration.',
  },
  {
    id: '05',
    icon: '/images/Templates/altimetrik/data.svg',
    title: 'Data Validation & Monitoring',
    description: 'Ensured data quality and reliability across every pipeline.',
  },
];

const SolutionSection = () => {
  return (
    <section className='relative w-full overflow-visible py-12 md:py-20'>
      {/* RIGHT SIDE IMAGES */}
      <div className='absolute right-0 bottom-0 hidden md:block'>
        {/* BACK IMAGE */}
        <div className='relative right-[160px] bottom-[0px] z-10 opacity-70'>
          <Image
            src='/images/Templates/altimetrik/solution.png'
            alt='Fashion Back'
            width={180}
            height={220}
            className='
        h-[220px]
        w-[260px]
        rounded-[28px]
        object-contain
      '
          />
        </div>

        {/* FRONT IMAGE */}
        <div className='absolute z-0 -top-20'>
          <Image
            src='/images/Templates/altimetrik/solution.png'
            alt='Fashion Front'
            width={320}
            height={380}
            className='
        h-[380px]
        w-[320px]
        rounded-[32px]
        object-cover
      '
          />
        </div>
      </div>

      <div className='relative mx-auto max-w-7xl px-4 md:px-6'>
        {/* TITLE */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[3px] text-center'>
          <span className='mr-3'>03</span>— Solution
        </h2>

        {/* SUBTEXT */}
        <p className='mt-6 text-[13px] md:text-[18px] leading-[1.8] text-[#3B3B3B]'>
          Engineered for scale, governance, and speed of insight — from ingestion through executive
          dashboards.
        </p>

        {/* CARDS */}
        <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-3'>
          {solutions.map((item, index) => (
            <div
              key={index}
              className='
                relative
                rounded-[18px]
                border-2
                border-[#F5F5F5]
                bg-white
                px-7
                py-7
                shadow-[0px_8px_24px_rgba(0,0,0,0.08)]
              '
            >
              {/* NUMBER */}
              <span className='absolute right-5 top-5 text-[12px] font-medium'>{item.id}</span>

              {/* HEADER */}
              <div className='flex items-center gap-5'>
                {/* ICON */}
                <div
                  className='
                    flex
                    h-[52px]
                    w-[52px]
                    flex-shrink-0
                    items-center
                    justify-center
                    rounded-[12px]
                    bg-blue-100
                  '
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={22}
                    height={22}
                    className='h-[22px] w-[22px] object-contain'
                  />
                </div>

                {/* TITLE */}
                <h3 className='text-[16px] md:text-[20px] leading-[1.35] font-semibold tracking-[-0.5px] text-[#0F1729]/80'>
                  {item.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p className='mt-8 text-[14px] md:text-[16px] leading-[1.9] text-[#2E2E2E]'>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* MOBILE IMAGES */}
        <div className='mt-12 flex flex-col items-center gap-6 xl:hidden'>
          <Image
            src='/images/Templates/altimetrik/solution.png'
            alt='Fashion'
            width={280}
            height={220}
            priority
            className='h-[220px] w-[280px] object-contain'
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

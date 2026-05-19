'use client';

import Image from 'next/image';

const impactCards = [
  {
    icon: '/images/Templates/wellstat/reduction.svg',
    value: '60–70%',
    desc: 'Reduction in Manual Reporting\nEffort',
  },
  {
    icon: '/images/Templates/wellstat/improvement.svg',
    value: '30–40%',
    desc: 'Improvement in Data Accuracy &\nConsistency',
  },
  {
    icon: '/images/Templates/wellstat/faster.svg',
    value: '~50%',
    desc: 'Faster Decision-Making Cycles',
  },
  {
    icon: '/images/Templates/wellstat/end-to-end.svg',
    value: 'Automated',
    desc: 'End-to-End Reporting Workflows',
  },
];

const techStack = [
  {
    title: 'Boomi',
    subtitle: 'Enterprise Integration\nPlatform',
  },
  {
    title: 'Azure Data Factory',
    subtitle: 'ETL & Data Orchestration',
  },
  {
    title: 'Azure SQL',
    subtitle: 'Cloud Data Warehouse',
  },
  {
    title: 'Power BI',
    subtitle: 'Business Intelligence &\nReporting',
  },
];

const BusinessImpactSection = () => {
  return (
    <section className='w-full overflow-hidden bg-[#F7F7F7]'>
      {/* ================= BUSINESS IMPACT ================= */}
      <div className='mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14'>
        {/* TITLE */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#12C92E]'>
          Business Impact
        </h2>

        {/* IMPACT GRID */}
        <div className='mt-10 grid grid-cols-1 gap-5 md:grid-cols-4'>
          {impactCards.map((item, index) => (
            <div
              key={index}
              className='
                rounded-[18px]
                border-2
                border-[#12C92E]
                bg-white
                px-5
                md:px-6
                py-5
                md:py-6
              '
            >
              {/* HEADER */}
              <div className='flex items-center gap-4'>
                {/* ICON */}
                <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#12C92E]'>
                  <Image
                    src={item.icon}
                    alt={item.value}
                    width={22}
                    height={22}
                    className='h-[22px] w-[22px] object-contain'
                  />
                </div>

                {/* VALUE */}
                <h3 className='text-[18px] md:text-[32px] leading-none font-semibold tracking-[-1px] text-[#15181F]'>
                  {item.value}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p className='mt-4 whitespace-pre-line text-[11px] md:text-[14px] leading-[1.7] text-[#404754]'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= TECHNOLOGY STACK ================= */}
      <div className='relative overflow-visible'>
        {/* FLOATING IMAGE */}
        <div className='absolute right-[-10px] bottom-[-80px] hidden md:block z-10'>
          <Image
            src='/images/Templates/wellstat/values-delivered.png'
            alt='Energy'
            width={260}
            height={260}
            priority
            className='h-[260px] w-[260px] object-contain'
          />
        </div>

        {/* CONTENT */}
        <div className='mx-auto max-w-7xl px-4 md:px-6 pb-10 md:pb-14'>
          {/* TOP ROW */}
          <div className='flex flex-col gap-8 md:flex-row md:items-center items-start'>
            {/* LEFT TITLE */}
            <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#168DF7]'>
              Technology Stack
            </h2>

            {/* LOGOS */}
            <div className='flex flex-wrap gap-5 md:gap-7'>
              <Image
                src='/images/Templates/wellstat/boomi.png'
                alt='Boomi'
                width={60}
                height={60}
                className='h-[52px] w-[52px] object-contain md:h-[60px] md:w-[60px]'
              />

              <Image
                src='/images/Templates/wellstat/azure.png'
                alt='ADF'
                width={60}
                height={60}
                className='h-[52px] w-[52px] object-contain md:h-[60px] md:w-[60px]'
              />

              <Image
                src='/images/Templates/wellstat/sql.png'
                alt='SQL'
                width={60}
                height={60}
                className='h-[52px] w-[52px] object-contain md:h-[60px] md:w-[60px]'
              />

              <Image
                src='/images/Templates/wellstat/power-bi.png'
                alt='Power BI'
                width={60}
                height={60}
                className='h-[52px] w-[52px] object-contain md:h-[60px] md:w-[60px]'
              />
            </div>
          </div>

          {/* STACK CARDS */}
          <div className='mt-10 grid grid-cols-1 gap-5 md:grid-cols-4'>
            {techStack.map((item, index) => (
              <div
                key={index}
                className='
                  rounded-[18px]
                  border-2
                  border-[#8BB8FF]
                  bg-white
                  px-5
                  py-6
                  text-center
                '
              >
                {/* TITLE */}
                <h3 className='text-[14px] md:text-[20px] leading-none font-semibold tracking-[-0.5px] text-[#168DF7]'>
                  {item.title}
                </h3>

                {/* SUBTITLE */}
                <p className='mt-5 whitespace-pre-line text-[13px] md:text-[16px] leading-[1.7] text-[#6F7888]'>
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= VALUE DELIVERED ================= */}
      <div className='bg-[#F4F7FA]'>
        <div className='mx-auto max-w-7xl px-4 md:px-6'>
          {/* TITLE */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#22C62F]'>
            Value Delivered
          </h2>

          {/* CONTENT */}
          <div className='mt-6 space-y-8'>
            <p className='text-[13px] md:text-[18px] leading-[2] text-[#6F7888]'>
              By replacing fragmented, manual reporting workflows with a centralized and automated
              data platform, the PropTech organization achieved a step-change in operational
              efficiency, data quality, and strategic decision-making speed.
            </p>

            <p className='text-[13px] md:text-[18px] leading-[2] text-[#6F7888]'>
              The solution delivered a{' '}
              <span className='font-semibold text-[#1D2129]'>
                scalable, future-ready architecture
              </span>{' '}
              with real-time insights empowering leadership with the visibility and confidence
              needed to drive growth in a dynamic market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpactSection;

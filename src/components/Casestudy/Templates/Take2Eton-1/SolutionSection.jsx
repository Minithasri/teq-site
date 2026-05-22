'use client';

import Image from 'next/image';

const solutionCards = [
  {
    title: 'Unified Data Integration',
    desc: 'Integrated external and internal payment systems using Domo and Python',
    icon: '/images/Templates/take2eton-1/tick.svg',
  },
  {
    title: 'Automated Reconciliation Logic',
    desc: 'Implemented comparison rules to identify mismatches',
    icon: '/images/Templates/take2eton-1/tick.svg',
  },
  {
    title: 'Machine Learning Forecasting',
    desc: 'Built predictive models using historical data',
    icon: '/images/Templates/take2eton-1/tick.svg',
  },
  {
    title: 'Interactive Dashboards',
    desc: 'Developed App Studio dashboards for insights',
    icon: '/images/Templates/take2eton-1/tick.svg',
  },
  {
    title: 'Real-Time Monitoring',
    desc: 'Enabled continuous tracking of discrepancies',
    icon: '/images/Templates/take2eton-1/tick.svg',
  },
];

const techStack = ['Domo (Magic ETL)', 'App Studio', 'AppDB', 'Python', 'Machine Learning'];

const impacts = [
  {
    bold: '50–60%',
    text: 'Reduction in manual reconciliation effort',
  },
  {
    bold: 'Improved',
    text: 'financial visibility and accuracy',
  },
  {
    bold: 'Enabled',
    text: 'proactive revenue forecasting',
  },
  {
    bold: 'Enhanced',
    text: 'decision-making through predictive insights',
  },
];

const SolutionSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      <div className='relative mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-18'>
        {/* ================= SOLUTION TITLE ================= */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[2px] text-[#262626]'>
          Solution Implemented
        </h2>

        {/* ================= SOLUTION CARDS ================= */}
        <div className='mt-8 grid grid-cols-1 gap-4 md:mt-10 mb-10 md:grid-cols-3 md:gap-5'>
          {solutionCards.map((item, index) => (
            <div
              key={index}
              className='
                rounded-[16px]
                border-2
                border-[#F5F5F5]
                bg-[#EFF2F5]
                px-5
                md:px-6
                py-5
                shadow-lg
              '
            >
              {/* HEADER */}
              <div className='flex items-center gap-4'>
                {/* ICON */}
                <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] bg-[#E8E9FF]'>
                  <Image
                    src={item.icon}
                    alt='Check'
                    width={16}
                    height={16}
                    className='h-[16px] w-[16px] object-contain'
                  />
                </div>

                {/* TITLE */}
                <h3 className='text-[13px] md:text-[17px] leading-[1.4] font-semibold text-[#262626]'>
                  {item.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p className='mt-4 text-[12px] md:text-[15px] leading-[1.8] text-[#6F7686]'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ================= TECHNOLOGY STACK ================= */}
        <div className='relative mt-14 md:mt-16'>
          {/* FLOATING IMAGE */}
          <div className='absolute right-[-170px] top-[-260px] hidden md:block'>
            <Image
              src='/images/Templates/take2eton-1/techstack.png'
              alt='Travel'
              width={660}
              height={720}
              priority
              className='h-[720px] w-[660px] object-contain'
            />
          </div>

          {/* LEFT CONTENT */}
          <div className='flex flex-col gap-6 md:flex-row md:items-center'>
            {/* TITLE */}
            <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[2px] text-[#262626]'>
              Technology Stack
            </h2>

            {/* ICONS */}
            <div className='flex flex-wrap items-center gap-5 md:gap-6'>
              <Image
                src='/images/Templates/take2eton-1/domo.png'
                alt='Domo'
                width={54}
                height={54}
                className='h-[54px] w-[54px] object-contain'
              />

              <Image
                src='/images/Templates/take2eton-1/appDb.png'
                alt='Database'
                width={54}
                height={54}
                className='h-[54px] w-[54px] object-contain'
              />

              <Image
                src='/images/Templates/take2eton-1/python.png'
                alt='Python'
                width={54}
                height={54}
                className='h-[54px] w-[54px] object-contain'
              />
            </div>
          </div>

          {/* TAGS */}
          <div className='mt-7 flex flex-wrap gap-3'>
            {techStack.map((item, index) => (
              <div
                key={index}
                className='
                    rounded-[10px]
                    border-2
                    border-[#F5F5F5]
                    bg-[#143C6214]
                    px-5
                    py-2.5
                    text-[13px]
                    md:text-[18px]
                    font-medium
                    text-[#5A54F8]
                    shadow-md
                  '
              >
                {item}
              </div>
            ))}
          </div>

          {/* ================= BUSINESS IMPACT ================= */}
          <div className='mt-8'>
            {/* TITLE */}
            <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[2px] text-[#262626]'>
              Business Impact
            </h2>

            {/* LIST */}
            <div className='mt-8 space-y-6'>
              {impacts.map((item, index) => (
                <div key={index} className='flex items-start gap-4'>
                  {/* DOT */}
                  <div className='mt-[11px] h-[8px] w-[8px] rounded-full bg-[#0D1A35]' />

                  {/* TEXT */}
                  <p className='text-[18px] md:text-[18px] leading-[1.7] text-[#0D1A35]'>
                    <span className='font-semibold text-[#12B51D]'>{item.bold}</span> {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE IMAGE */}
        <div className='flex justify-center md:hidden'>
          <Image
            src='/images/Templates/take2eton-1/techstack.png'
            alt='Travel'
            width={290}
            height={220}
            priority
            className='h-[220px] w-[290px] object-contain'
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

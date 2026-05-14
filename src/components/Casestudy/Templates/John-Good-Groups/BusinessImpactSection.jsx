'use client';

import Image from 'next/image';

const TrendIcon = () => (
  <svg
    viewBox='0 0 24 24'
    className='h-7 w-7'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M5 15l5-5 4 4 5-5' />
    <path d='M14 9h5v5' />
  </svg>
);

const BoltIcon = () => (
  <svg
    viewBox='0 0 24 24'
    className='h-6 w-6'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M13 2L4 14h6l-1 8 9-12h-6l1-8z' />
  </svg>
);

const ShieldIcon = () => (
  <svg
    viewBox='0 0 24 24'
    className='h-6 w-6'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z' />
    <path d='M9.5 12l1.5 1.5 3-3' />
  </svg>
);

const GlobeIcon = () => (
  <svg
    viewBox='0 0 24 24'
    className='h-6 w-6'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='12' cy='12' r='9' />
    <path d='M3 12h18' />
    <path d='M12 3a15 15 0 0 1 0 18' />
    <path d='M12 3a15 15 0 0 0 0 18' />
  </svg>
);

const impactCards = [
  {
    icon: <TrendIcon />,
    value: '70–80%',
    title: 'Reduction in Manual Data Preparation',
  },
  {
    icon: <BoltIcon />,
    value: '60%',
    title: 'Faster Report Refresh Time',
  },
  {
    icon: <ShieldIcon />,
    value: '99%+',
    title: 'Data Accuracy After Validation',
  },
  {
    icon: <GlobeIcon />,
    value: '75%',
    title: 'Improvement in Global Reporting Accessibility',
  },
];

const technologies = [
  {
    name: 'Domo',
    desc: 'Magic ETL, Reporting',
    image: '/images/Domo.png',
  },
  {
    name: 'Power BI',
    desc: 'Legacy Platform',
    image: '/images/Templates/z-john-good-groups/power-bi-logo.png',
  },
  {
    name: 'SQL',
    desc: 'Data Queries',
    image: '/images/Templates/z-john-good-groups/sql-logo.png',
  },
  {
    name: 'Python',
    desc: 'Automation Scripts',
    image: '/images/Templates/z-bay/python-logo.png',
  },
  {
    name: 'Excel',
    desc: 'Source Data',
    image: '/images/Templates/z-john-good-groups/excel-logo.png',
  },
];

const BusinessImpactSection = () => {
  return (
    <section className='overflow-hidden bg-[#F8F8F8]'>
      <div className='mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20'>
        {/* HEADER */}
        <div>
          <p className='text-2xl font-semibold uppercase tracking-wide text-[#19D219] md:text-4xl'>
            Business Impact
          </p>

          <h2 className='mt-4 text-xl font-medium text-[#161C2D] md:text-3xl'>
            Measurable Transformation
          </h2>

          <p className='mt-6 max-w-4xl text-base leading-relaxed text-[#737887] md:text-lg'>
            Quantifiable outcomes delivered through systematic platform migration and optimization.
          </p>
        </div>

        {/* IMPACT CARDS */}
        <div className='relative mt-10'>
          {/* BACKGROUND FLOATING IMAGE */}
          <div className='absolute -right-36 -top-60 hidden xl:block z-0'>
            <div className='relative h-72 w-96 overflow-hidden rounded-3xl'>
              <Image
                src='/images/Templates/z-john-good-groups/business-impact-earth.png'
                alt=''
                fill
                className='object-cover'
              />
            </div>
          </div>

          {/* CARDS GRID */}
          <div className='relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4'>
            {impactCards.map((card, index) => (
              <div
                key={index}
                className='rounded-3xl border-2 border-[#2BE14B] bg-white px-5 py-8 text-center'
              >
                {/* ICON */}
                <div className='flex justify-center text-[#19D219]'>{card.icon}</div>

                {/* VALUE */}
                <h3 className='mt-4 text-5xl font-semibold tracking-tight text-[#19D219]'>
                  {card.value}
                </h3>

                {/* TITLE */}
                <p className='mx-auto mt-5 max-w-[14rem] text-sm leading-7 text-[#737887]'>
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* TECHNOLOGY STACK */}
        <div className='relative z-20 mt-20 bg-[#F8F8F8] pt-6'>
          {/* TOP SECTION */}
          <div className='flex flex-col gap-10 lg:flex-row items-center'>
            {/* LEFT CONTENT */}
            <div>
              <h2 className='text-2xl font-semibold uppercase tracking-wide text-[#202124] md:text-4xl'>
                Technology Stack
              </h2>

              <p className='mt-6 text-xl font-medium text-[#161C2D] md:text-3xl'>
                Tools & Technologies
              </p>
            </div>

            {/* RIGHT LOGOS */}
            <div className='flex flex-wrap items-center gap-6'>
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`relative ${tech.name === 'Excel' ? 'h-24 w-28' : 'h-20 w-24'}`}
                >
                  <Image src={tech.image} alt={tech.name} fill className='object-contain' />
                </div>
              ))}
            </div>
          </div>

          {/* TECH TAGS */}
          <div className='mt-12 flex flex-wrap gap-4'>
            {technologies.map((tech, index) => (
              <div
                key={index}
                className='flex items-center gap-4 rounded-2xl border border-[#BDBDBD] bg-white px-6 py-3'
              >
                <p className='text-sm font-semibold text-[#202124]'>{tech.name}</p>

                <p className='text-xs text-[#8A8F9D]'>{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpactSection;

'use client';

import Image from 'next/image';

const impactCards = [
  {
    icon: '/images/Templates/z-john-good-groups/trend-up.svg',
    value: '70–80%',
    title: 'Reduction in Manual Data Preparation',
  },
  {
    icon: '/images/Templates/z-john-good-groups/boult.svg',
    value: '60%',
    title: 'Faster Report Refresh Time',
  },
  {
    icon: '/images/Templates/z-john-good-groups/security.svg',
    value: '99%+',
    title: 'Data Accuracy After Validation',
  },
  {
    icon: '/images/Templates/z-john-good-groups/internet.svg',
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
                <div className='flex justify-center text-[#19D219]'>
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={28}
                    height={28}
                    className='h-6 w-6 md:h-8 md:w-8 object-contain'
                  />
                </div>

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

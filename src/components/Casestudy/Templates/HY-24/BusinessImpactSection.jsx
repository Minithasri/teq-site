'use client';

import Image from 'next/image';

const impactStats = [
  {
    icon: (
      <svg
        viewBox='0 0 24 24'
        className='h-5 w-5'
        fill='none'
        stroke='#18D80F'
        strokeWidth='2.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M4 15L9 10L13 14L20 7' />
        <path d='M15 7H20V12' />
      </svg>
    ),
    value: '85%',
    title: 'Reduction in Manual Reporting Effort',
  },

  {
    icon: (
      <svg
        viewBox='0 0 24 24'
        className='h-5 w-5'
        fill='none'
        stroke='#18D80F'
        strokeWidth='2.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <circle cx='12' cy='12' r='8' />
        <circle cx='12' cy='12' r='4.5' />
        <circle cx='12' cy='12' r='1' fill='#18D80F' stroke='none' />
      </svg>
    ),
    value: '99%+',
    title: 'Improvement in Data Accuracy',
  },

  {
    icon: (
      <svg
        viewBox='0 0 24 24'
        className='h-5 w-5'
        fill='none'
        stroke='#18D80F'
        strokeWidth='2.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M10 3L4 12H11L9 21L20 10H13L15 3H10Z' />
      </svg>
    ),
    value: '70%',
    title: 'Faster Report Generation Time',
  },

  {
    icon: (
      <svg
        viewBox='0 0 24 24'
        className='h-5 w-5'
        fill='none'
        stroke='#18D80F'
        strokeWidth='2.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        {/* LEFT SIDE */}
        <path d='M10 4C7.5 4 6 6 6 8C4.5 8.5 4 10 4 11.5C4 13.5 5.2 15 7 15.5C6.8 17.8 8.2 20 11 20' />

        {/* RIGHT SIDE */}
        <path d='M14 4C16.5 4 18 6 18 8C19.5 8.5 20 10 20 11.5C20 13.5 18.8 15 17 15.5C17.2 17.8 15.8 20 13 20' />

        {/* CENTER LINE */}
        <path d='M12 4V20' />
      </svg>
    ),
    value: '60%',
    title: 'Improvement in Decision-Making Speed',
  },
];

const capabilities = [
  {
    title: 'Automated Data Collection & Ingestion',
    description:
      'Seamless data capture from multiple sources with automated validation and ingestion pipelines.',
    icon: (
      <svg
        viewBox='0 0 24 24'
        className='h-4 w-4'
        fill='none'
        stroke='#18D80F'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M7 17a4 4 0 1 1 .8-7.9A5 5 0 0 1 17 11a3 3 0 1 1 0 6' />

        <path d='M12 16V10' />
        <path d='M9.5 12.5L12 10l2.5 2.5' />
      </svg>
    ),
  },

  {
    title: 'Centralized Portfolio Reporting',
    description:
      'Unified view across all assets and projects, replacing siloed spreadsheet-based reporting.',
    icon: (
      <svg
        viewBox='0 0 24 24'
        className='h-4 w-4'
        fill='none'
        stroke='#18D80F'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M12 6V12H16' />
        <circle cx='12' cy='12' r='7' />
      </svg>
    ),
  },

  {
    title: 'Real-Time Analytics Dashboards',
    description:
      'Interactive dashboards with live data refresh, enabling instant portfolio performance monitoring.',
    icon: (
      <svg
        viewBox='0 0 24 24'
        className='h-4 w-4'
        fill='none'
        stroke='#18D80F'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M4 12H8L10 6L14 18L16 12H20' />
      </svg>
    ),
  },

  {
    title: 'Scalable Architecture',
    description:
      'Platform designed for future expansion easily onboard new assets, projects, and data sources.',
    icon: (
      <svg
        viewBox='0 0 24 24'
        className='h-4 w-4'
        fill='none'
        stroke='#18D80F'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M8 4H4V8' />
        <path d='M16 4H20V8' />
        <path d='M20 16V20H16' />
        <path d='M4 16V20H8' />
        <path d='M9 9L4 4' />
        <path d='M15 9L20 4' />
        <path d='M15 15L20 20' />
        <path d='M9 15L4 20' />
      </svg>
    ),
  },

  {
    title: 'Elimination of Excel Dependencies',
    description:
      'Complete removal of fragile spreadsheet workflows, reducing risk and manual effort across the organization.',
    icon: (
      <svg
        viewBox='0 0 24 24'
        className='h-4 w-4'
        fill='none'
        stroke='#18D80F'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M8 3H14L18 7V20H8V3Z' />
        <path d='M14 3V7H18' />

        <path d='M10.5 12.5L13.5 15.5' />
        <path d='M13.5 12.5L10.5 15.5' />
      </svg>
    ),
  },
];

const BusinessImpactSection = () => {
  return (
    <section className='w-full overflow-hidden bg-[#F5F5F5]'>
      <div className='mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-10'>
        <h2 className='text-[28px] md:text-[42px] leading-none font-semibold uppercase tracking-tight text-[#18D80F]'>
          BUSINESS IMPACT
        </h2>

        <h3 className='mt-4 text-2xl md:text-5xl leading-[1.1] tracking-[-2px] text-[#111827]'>
          Measurable Transformation
        </h3>

        <p className='mt-4 max-w-4xl text-[14px] md:text-[18px] leading-[1.6] text-[#7A7F8C]'>
          Quantifiable outcomes delivered through automation and platform modernization.
        </p>

        <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-4'>
          {impactStats.map((item, index) => (
            <div
              key={index}
              className='rounded-[18px] border border-[#18D80F] bg-white px-5 py-7 text-center'
            >
              {/* ICON */}
              <div className='text-[18px] text-[#18D80F] items-center justify-center flex'>
                {item.icon}
              </div>

              {/* VALUE */}
              <div className='mt-3 text-4xl md:text-[48px] font-semibold leading-none text-[#18D80F]'>
                {item.value}
              </div>

              {/* LABEL */}
              <p className='mt-4 text-[13px] md:text-[14px] leading-[1.5] text-[#7A7F8C]'>
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div className='mt-14 relative'>
          {/* TOP CONTENT */}
          <div className='flex items-start justify-between gap-6'>
            <div>
              <h2 className='text-[28px] md:text-[42px] leading-none font-semibold uppercase tracking-tight text-[#18D80F]'>
                KEY CAPABILITIES
              </h2>

              <h3 className='mt-4 text-2xl md:text-5xl leading-[1.1] tracking-[-2px] text-[#111827]'>
                Capabilities Delivered
              </h3>

              <p className='mt-4 max-w-4xl text-sm md:text-lg leading-[1.6] text-[#7A7F8C]'>
                Core platform capabilities enabling automated, scalable clean energy investment
                reporting.
              </p>
            </div>

            {/* LEAF IMAGE */}
            <div className='hidden md:block absolute right-52 -top-6'>
              <Image
                src='/images/Templates/z-hy-24/plugWithLeaf.png'
                alt='Leaf'
                width={420}
                height={160}
                priority
                className='object-contain'
              />
            </div>
          </div>

          {/* MOBILE LEAF */}
          <div className='mt-6 flex justify-center md:hidden'>
            <Image
              src='/images/Templates/z-hy-24/plugWithLeaf.png'
              alt='Leaf'
              width={260}
              height={120}
              priority
              className='object-contain'
            />
          </div>

          {/* CAPABILITY GRID */}
          <div className='mt-10'>
            {/* FIRST ROW */}
            <div className='relative z-10 grid grid-cols-1 gap-4 md:grid-cols-3'>
              {capabilities.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className='min-h-[150px] rounded-[18px] border border-[#18D80F] bg-white px-5 py-5'
                >
                  {/* HEADER */}
                  <div className='flex items-start gap-3'>
                    {/* ICON */}
                    <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[10px] border border-[#18D80F]'>
                      {item.icon}
                    </div>

                    {/* TITLE */}
                    <h4 className='max-w-[240px] text-[15px] md:text-[16px] font-semibold leading-[1.5] text-[#111827]'>
                      {item.title}
                    </h4>
                  </div>

                  {/* DESCRIPTION */}
                  <p className='mt-4 pl-11 text-[13px] md:text-[14px] leading-[1.8] text-[#7A7F8C]'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* SECOND ROW */}
            <div className='relative mt-4'>
              {/* BACKSIDE IMAGE */}
              <div className='absolute -top-12 -right-4 hidden md:block z-0 w-[360px] h-[260px]'>
                {/* BACK IMAGE */}
                <div className='absolute top-0 right-0 overflow-hidden rounded-[20px] opacity-90'>
                  <Image
                    src='/images/Templates/z-hy-24/buildings-nature.png'
                    alt='Back'
                    width={240}
                    height={130}
                    priority
                    className='h-[150px] w-[240px] object-cover'
                  />
                </div>

                {/* FRONT IMAGE */}
                <div className='absolute top-12 right-12 overflow-hidden rounded-[22px] shadow-xl'>
                  <Image
                    src='/images/Templates/z-hy-24/buildings-nature.png'
                    alt='Front'
                    width={300}
                    height={170}
                    priority
                    className='h-[170px] w-[300px] object-cover'
                  />
                </div>
              </div>

              {/* SECOND ROW GRID */}
              <div className='relative z-10 grid grid-cols-1 gap-4 md:grid-cols-3'>
                {/* LEFT CARDS */}
                <div className='md:col-span-2 grid grid-cols-1 gap-4 md:grid-cols-2'>
                  {capabilities.slice(3, 5).map((item, index) => (
                    <div
                      key={index}
                      className='min-h-[150px] rounded-[18px] border border-[#18D80F] bg-white px-5 py-5'
                    >
                      {/* HEADER */}
                      <div className='flex items-start gap-3'>
                        {/* ICON */}
                        <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[10px] border border-[#18D80F]'>
                          {item.icon}
                        </div>

                        {/* TITLE */}
                        <h4 className='max-w-[240px] text-[15px] md:text-[16px] font-semibold leading-[1.5] text-[#111827]'>
                          {item.title}
                        </h4>
                      </div>

                      {/* DESCRIPTION */}
                      <p className='mt-4 pl-11 text-[13px] md:text-[14px] leading-[1.8] text-[#7A7F8C]'>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* EMPTY COLUMN */}
                <div className='hidden md:block' />
              </div>
            </div>
          </div>

          {/* MOBILE IMAGE */}
          <div className='mt-6 md:hidden'>
            <div className='overflow-hidden rounded-[22px]'>
              <Image
                src='/images/Templates/z-hy-24/buildings-nature.png'
                alt='Energy'
                width={1200}
                height={800}
                priority
                className='h-56 w-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpactSection;

'use client';

import Image from 'next/image';

const impactStats = [
  {
    icon: '/images/Templates/z-hy-24/trend-up.svg',
    value: '85%',
    title: 'Reduction in Manual Reporting Effort',
  },

  {
    icon: '/images/Templates/z-hy-24/target.svg',
    value: '99%+',
    title: 'Improvement in Data Accuracy',
  },

  {
    icon: '/images/Templates/z-hy-24/bolt.svg',
    value: '70%',
    title: 'Faster Report Generation Time',
  },

  {
    icon: '/images/Templates/z-hy-24/brain.svg',
    value: '60%',
    title: 'Improvement in Decision-Making Speed',
  },
];

const capabilities = [
  {
    title: 'Automated Data Collection & Ingestion',
    description:
      'Seamless data capture from multiple sources with automated validation and ingestion pipelines.',
    icon: '/images/Templates/z-hy-24/upload.svg',
  },

  {
    title: 'Centralized Portfolio Reporting',
    description:
      'Unified view across all assets and projects, replacing siloed spreadsheet-based reporting.',
    icon: '/images/Templates/z-hy-24/timer.svg',
  },

  {
    title: 'Real-Time Analytics Dashboards',
    description:
      'Interactive dashboards with live data refresh, enabling instant portfolio performance monitoring.',
    icon: '/images/Templates/z-hy-24/real-time.svg',
  },

  {
    title: 'Scalable Architecture',
    description:
      'Platform designed for future expansion easily onboard new assets, projects, and data sources.',
    icon: '/images/Templates/z-hy-24/scalable.svg',
  },

  {
    title: 'Elimination of Excel Dependencies',
    description:
      'Complete removal of fragile spreadsheet workflows, reducing risk and manual effort across the organization.',
    icon: '/images/Templates/z-hy-24/file.svg',
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
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={28}
                  height={28}
                  className='h-6 w-6 md:h-8 md:w-8 object-contain'
                />
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
                    <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[10px] border border-[#18D80F]'>
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={28}
                        height={28}
                        className='h-6 w-6 md:h-8 md:w-8 object-contain'
                      />
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
                        <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[10px] border border-[#18D80F]'>
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={28}
                            height={28}
                            className='h-6 w-6 md:h-8 md:w-8 object-contain'
                          />
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

'use client';

import Image from 'next/image';

const solutionCards = [
  {
    icon: '/images/Templates/connect-wise/end-to-end.svg',
    title: 'End-to-End Integration Framework',
    desc: 'Designed and implemented scalable integrations using Boomi to enable seamless bidirectional data flow.',
  },
  {
    icon: '/images/Templates/connect-wise/advanced.svg',
    title: 'Advanced Data Validation & Transformation',
    desc: 'Introduced robust validation rules and transformation logic to ensure accurate and consistent data exchange.',
  },
  {
    icon: '/images/Templates/connect-wise/salesforce.svg',
    title: 'Salesforce–NetSuite Integration Enhancement',
    desc: 'Strengthened core integrations with improved error handling and synchronization reliability.',
  },
  {
    icon: '/images/Templates/connect-wise/modular.svg',
    title: 'Modular Zone-Based Architecture',
    desc: 'Built reusable integration modules to manage entities such as accounts, contracts, subscriptions, invoices, and products.',
  },
  {
    icon: '/images/Templates/connect-wise/real-time.svg',
    title: 'Real-Time Data Synchronization',
    desc: 'Enabled continuous and automated data exchange across Salesforce, NetSuite, Snowflake, and other systems.',
  },
  {
    icon: '/images/Templates/connect-wise/automated.svg',
    title: 'Automated Monitoring and Exception Handling',
    desc: 'Implemented alerting and error-handling mechanisms to proactively detect and resolve integration issues.',
  },
  {
    icon: '/images/Templates/connect-wise/scalable.svg',
    title: 'Scalable Workflow Optimization',
    desc: 'Optimized integration workflows to support high-volume, real-time processing with minimal manual intervention.',
  },
];

const impactCards = [
  {
    value: '~60%',
    desc: 'Reduction in manual effort\nand data inconsistencies',
  },
  {
    value: '~50–60%',
    desc: 'Decrease in integration-\nrelated support tickets',
  },
  {
    value: '~40–50%',
    desc: 'Faster financial reconciliation\nand issue resolution',
  },
  {
    value: '↑',
    desc: 'Improved data accuracy,\nsystem\nreliability, and\nstakeholder confidence',
  },
];

const SolutionImpactSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      <div className='mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14'>
        {/* ================= OUR SOLUTION ================= */}
        <div>
          {/* TITLE */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#214CD9]'>
            OUR SOLUTION
          </h2>

          {/* DESCRIPTION */}
          <p className='mt-4 text-[12px] md:text-[17px] leading-[1.8] text-[#7B8496]'>
            We delivered a comprehensive, enterprise-grade integration platform that unified
            disparate systems, automated workflows, and established a resilient data synchronization
            backbone.
          </p>
        </div>

        {/* ================= SOLUTION GRID ================= */}
        <div className='relative mt-10'>
          {/* BACKGROUND IMAGE */}
          <div
            className='
              absolute
              right-[180px]
              bottom-[60px]
              hidden
              md:block
              h-[260px]
              w-[520px]
              overflow-hidden
              rounded-[28px]
              z-0
            '
          >
            <Image
              src='/images/Templates/connect-wise/solution-blur.png'
              alt='Background'
              fill
              priority
              className='object-cover'
            />
          </div>

          {/* FLOATING IMAGE - RIGHT MOST */}
          <div
            className='
              absolute
              right-[-120px]
              bottom-[-40px]
              hidden
              md:block
              z-20
            '
          >
            <Image
              src='/images/Templates/connect-wise/solution.png'
              alt='Security'
              width={340}
              height={240}
              priority
              className='h-[240px] w-[340px] rounded-[24px] object-cover'
            />
          </div>

          {/* GRID */}
          <div className='relative z-10 grid grid-cols-1 gap-5 md:grid-cols-3'>
            {solutionCards.map((item, index) => (
              <div
                key={index}
                className='
                  rounded-[20px]
                  border-2
                  border-[#2B58E6]
                  bg-white
                  px-5
                  md:px-6
                  py-5
                  md:py-6
                  shadow-[0px_8px_18px_rgba(0,0,0,0.06)]
                '
              >
                {/* HEADER */}
                <div className='flex items-center gap-4'>
                  {/* ICON */}
                  <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[14px] border border-[#2B58E6] bg-[#F5F8FF]'>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={22}
                      height={22}
                      className='h-[22px] w-[22px] object-contain'
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className='text-[15px] md:text-[20px] leading-[1.45] font-semibold tracking-[-0.5px] text-[#214CD9]'>
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className='mt-6 text-[12px] md:text-[14px] leading-[1.9] text-[#7A8496]'>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE IMAGE */}
        <div className='mt-8 flex justify-center md:hidden'>
          <Image
            src='/images/Templates/connect-wise/solution.png'
            alt='Security'
            width={500}
            height={300}
            priority
            className='h-[240px] w-full rounded-[24px] object-cover'
          />
        </div>

        {/* ================= BUSINESS IMPACT ================= */}
        <div className='mt-16'>
          {/* TITLE */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#11C82E]'>
            Business Impact
          </h2>

          {/* DESCRIPTION */}
          <p className='mt-4 text-[12px] md:text-[17px] leading-[1.8] text-[#7B8496]'>
            Measurable outcomes delivered across operational efficiency, data quality, and financial
            agility.
          </p>

          {/* IMPACT GRID */}
          <div className='mt-10 grid grid-cols-1 gap-5 md:grid-cols-4'>
            {impactCards.map((item, index) => (
              <div
                key={index}
                className='
                  flex
                  min-h-[210px]
                  flex-col
                  items-center
                  justify-center
                  rounded-[20px]
                  border-2
                  border-[#14C82F]
                  bg-white
                  px-5
                  py-6
                  text-center
                '
              >
                {/* VALUE */}
                <h3 className='whitespace-pre-line text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#14C82F]'>
                  {item.value}
                </h3>

                {/* DESCRIPTION */}
                <p className='mt-7 whitespace-pre-line text-[12px] md:text-[16px] leading-[1.8] text-[#4A505C]'>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionImpactSection;

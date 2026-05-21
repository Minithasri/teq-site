'use client';

import Image from 'next/image';

const impactCards = [
  {
    value: '~80%',
    title: 'Reduction in manual effort for presentation creation',
  },
  {
    value: '~70%',
    title: 'Faster report generation time',
  },
  {
    value: '100%',
    title: 'Consistency and standardization across reports',
  },
];

const impactPoints = [
  'Enabled scalable and automated reporting processes',
  'Faster executive decision-making through timely insights',
];

const techStack = [
  'Domo Code Engine',
  'AI Agents',
  'PPT Automation Libraries / APIs',
  'Dashboard Integrations',
];

const BusinessImpactSection = () => {
  return (
    <section className='w-full overflow-hidden bg-[#F7F7F7]'>
      {/* ================= BUSINESS IMPACT ================= */}
      <div className='relative'>
        {/* BACKGROUND IMAGE */}
        <div className='absolute inset-0 top-[80px] md:top-[120px] z-0'>
          <Image
            src='/images/Templates/bissell/business.png'
            alt='Background'
            fill
            priority
            className='object-cover'
          />
        </div>

        {/* OVERLAY */}
        <div className='absolute inset-0 top-[80px] md:top-[120px] bg-white/20 z-0' />

        {/* CONTENT */}
        <div className='relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14'>
          {/* LABEL */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[1px] text-center'>
            Business Impact
          </h2>

          {/* IMPACT CARDS */}
          <div className='mt-10 grid grid-cols-1 gap-5 md:grid-cols-3'>
            {impactCards.map((item, index) => (
              <div
                key={index}
                className='
                  min-h-[170px]
                  rounded-[16px]
                  border-2
                  border-[#F5F5F5]
                  bg-white
                  px-5
                  md:px-7
                  py-6
                  text-center
                  shadow-[0px_4px_12px_rgba(0,0,0,0.08)]
                '
              >
                {/* VALUE */}
                <h3 className='text-[46px] md:text-[64px] leading-none font-semibold text-[#0F1729]/80'>
                  {item.value}
                </h3>

                {/* TITLE */}
                <p className='mt-5 text-[13px] md:text-[15px] leading-[1.6] text-[#4E5565]'>
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* IMPACT POINTS */}
          <div className='mt-8 flex flex-col items-center justify-center gap-4 md:flex-row'>
            {impactPoints.map((item, index) => (
              <div
                key={index}
                className='
                  flex
                  w-full
                  md:w-auto
                  items-center
                  gap-3
                  rounded-[12px]
                  border-2
                  border-[#F5F5F5]
                  bg-white
                  px-5
                  md:px-7
                  py-4
                  shadow-[0px_4px_12px_rgba(0,0,0,0.08)]
                '
              >
                {/* TEXT */}
                <p className='text-[13px] md:text-[15px] leading-[1.6] text-[#4A5261]'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= TECHNOLOGY STACK ================= */}
      <div className='mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14'>
        {/* LABEL */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[1px] text-center'>
          Technology Stack
        </h2>
        <div className='mt-6 flex flex-col gap-10 md:flex-row md:items-center md:justify-center'>
          {/* ICONS */}
          <div className='flex flex-wrap items-center gap-5 md:gap-7'>
            <Image
              src='/images/Templates/bissell/domo.svg'
              alt='Domo'
              width={60}
              height={60}
              className='h-[50px] w-[50px] object-contain'
            />

            <Image
              src='/images/Templates/bissell/robo.svg'
              alt='AI'
              width={60}
              height={60}
              className='h-[50px] w-[50px] object-contain'
            />

            <Image
              src='/images/Templates/bissell/settings.svg'
              alt='Gear'
              width={60}
              height={60}
              className='h-[50px] w-[50px] object-contain'
            />

            <Image
              src='/images/Templates/bissell/dashboard-integration.svg'
              alt='Settings'
              width={60}
              height={60}
              className='h-[50px] w-[50px] object-contain'
            />
          </div>
        </div>

        {/* TAGS */}
        <div className='mt-8 flex flex-wrap items-center justify-center gap-4'>
          {techStack.map((item, index) => (
            <div
              key={index}
              className='
                rounded-full
                border-2
                border-[#F5F5F5]
                bg-white
                px-7
                md:px-10
                py-2.5
                text-[12px]
                md:text-[14px]
                font-medium
                shadow-[0px_4px_12px_rgba(0,0,0,0.08)]
              '
            >
              {item}
            </div>
          ))}
        </div>

        {/* ================= VALUE DELIVERED ================= */}
        <div className='mt-14 text-center'>
          {/* LABEL */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[1px]'>
            Value Delivered
          </h2>

          {/* DESCRIPTION */}
          <div className='mt-8 max-w-6xl space-y-7'>
            <p className='text-[15px] md:text-[18px] leading-[1.9] text-[#7D8797]'>
              By replacing manual, repetitive reporting workflows with an AI-powered automation
              platform, we enabled this leading manufacturing organization to transform raw
              dashboard data into compelling, executive-ready presentations — at scale and in a
              fraction of the time.
            </p>

            <p className='text-[15px] md:text-[18px] leading-[1.9] text-[#7D8797]'>
              The result: a future-ready reporting framework that drives efficiency, ensures
              consistency, and empowers leadership with the timely insights they need to make
              confident, data-driven decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpactSection;

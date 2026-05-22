'use client';

import Image from 'next/image';

const challenges = [
  {
    icon: '/images/Templates/retail-1/fragmented.svg',
    title: 'Fragmented Data Sources',
    description:
      'Sales data scattered across multiple disconnected systems with no single source of truth.',
  },
  {
    icon: '/images/Templates/retail-1/accuracy.svg',
    title: 'Accuracy Gaps',
    description:
      'Inconsistencies in data validation led to unreliable reports and eroded stakeholder trust.',
  },
  {
    icon: '/images/Templates/retail-1/delayed.svg',
    title: 'Delayed Reporting',
    description:
      'Manual data consolidation created multi-day reporting cycles, making insights stale on arrival.',
  },
  {
    icon: '/images/Templates/retail-1/no-drill.svg',
    title: 'No Drill-Down Capability',
    description:
      'Leadership lacked granular views into region-wise and channel-wise performance metrics.',
  },
];

const HeroSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      {/* ================= HERO SECTION ================= */}
      <div className='relative overflow-hidden'>
        {/* BACKGROUND IMAGE */}
        <div className='absolute inset-0'>
          <Image
            src='/images/Templates/retail-1/hero-bg.png'
            alt='Background'
            fill
            priority
            className='object-cover'
          />

          {/* OVERLAY */}
          <div className='absolute inset-0 bg-[#16B6B7]/78' />
        </div>

        {/* CONTENT */}
        <div className='relative mx-auto max-w-7xl px-4 md:px-6 pt-24 pb-12 md:py-28 text-center'>
          {/* HEADING */}
          <h1 className='text-[34px] md:text-[72px] leading-[1.12] font-semibold tracking-[-2px] text-white'>
            Driving Sales Excellence Through
            <br />
            Validated Data
          </h1>

          {/* DESCRIPTION */}
          <p className='mt-8text-[14px] md:text-[22px] leading-[1.9] text-white'>
            A unified reporting framework that transformed fragmented sales data into real-time
            executive intelligence enabling faster, evidence-based decisions across regions and
            channels.
          </p>
        </div>
      </div>

      {/* ================= CHALLENGE SECTION ================= */}
      <div className='mx-auto max-w-7xl px-4 md:px-6 py-14 md:py-20'>
        {/* TITLE */}
        <h2 className='text-center text-2xl md:text-5xl leading-none font-semibold tracking-[3px] text-[#262626]'>
          The Challenge
        </h2>

        {/* SUBTEXT */}
        <p className='mt-8 text-center text-[13px] md:text-[18px] leading-[2] text-[#2B2B2B]'>
          Sales data was fragmented across multiple systems, leading to inconsistencies in accuracy
          and delays in reporting. The organization lacked real-time visibility into sales
          performance, making decision-making reactive rather than proactive.
        </p>

        {/* CARDS */}
        <div
          className='
    mt-14
    grid
    grid-cols-1
    md:grid-cols-2
    gap-4
    justify-center
    place-items-center
  '
        >
          {challenges.map((item, index) => (
            <div
              key={index}
              className='
        rounded-[18px]
        border-2
        border-[#F5F5F5]
        bg-white
        px-6
        py-6
        shadow-lg
      '
            >
              {/* HEADER */}
              <div className='flex items-center gap-5'>
                {/* ICON */}
                <div
                  className='
            flex
            h-[48px]
            w-[48px]
            flex-shrink-0
            items-center
            justify-center
            rounded-[12px]
            bg-[#FDE0E0]
          '
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={20}
                    height={20}
                    className='h-[20px] w-[20px] object-contain'
                  />
                </div>

                {/* TITLE */}
                <h3 className='text-[18px] md:text-[24px] leading-[1.3] font-semibold tracking-[-0.5px] text-[#262626]'>
                  {item.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p className='mt-7 text-[12px] md:text-[16px] leading-[1.9] text-[#7A8090]'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

'use client';

import Image from 'next/image';

const challenges = [
  {
    icon: '/images/Templates/kamrt/db.svg',
    text: 'Sales, inventory, and operational data were spread across multiple systems',
  },
  {
    icon: '/images/Templates/kamrt/warning.svg',
    text: 'No single source of truth for end-to-end retail performance',
  },
  {
    icon: '/images/Templates/kamrt/clock.svg',
    text: 'Manual reporting processes delayed insights for leadership',
  },
  {
    icon: '/images/Templates/kamrt/chart.svg',
    text: 'Limited visibility into stock availability, demand trends, and regional sales performance',
  },
  {
    icon: '/images/Templates/kamrt/report.svg',
    text: 'Executives needed consolidated dashboards for oversight and planning',
  },
];

const beforeAfterCards = [
  {
    title: 'Sales Reporting',
    before: 'Weekly',
    after: 'Real-time',
  },
  {
    title: 'Inventory Visibility',
    before: 'Inconsistent',
    after: 'Centralized & Accurate',
  },
  {
    title: 'Reporting Process',
    before: 'Manual',
    after: 'Automated',
  },
  {
    title: 'Executive Oversight',
    before: 'Limited',
    after: 'Unified Dashboards',
  },
];

const ChallengeTransformationSection = () => {
  return (
    <section className='w-full overflow-hidden bg-[#F7F7F7]'>
      {/* ================= CHALLENGES ================= */}
      <div className='relative'>
        {/* RIGHT IMAGE */}
        <div className='absolute right-0 -top-14 hidden md:block z-0'>
          <Image
            src='/images/Templates/kamrt/challenges.png'
            alt='Retail'
            width={320}
            height={480}
            priority
            className='h-[585px] w-[320px] object-fit'
          />
        </div>

        {/* CONTENT */}
        <div className='relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-6 md:py-10'>
          {/* TITLE */}
          <div className='max-w-4xl'>
            <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#161922]'>
              Client Challenges
            </h2>

            <p className='mt-5 text-[15px] md:text-[24px] leading-[1.5] text-[#777D8B]'>
              Client faced significant obstacles in achieving real-time visibility and data-driven
              decision making
            </p>
          </div>

          {/* CHALLENGE CARDS */}
          <div className='mt-4 grid grid-cols-1 gap-5 md:grid-cols-3'>
            {challenges.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className='
                  rounded-[18px]
                  border
                  border-[#FF6A6A]
                  bg-white
                  px-5
                  py-5
                  shadow-[0px_8px_20px_rgba(0,0,0,0.05)]
                '
              >
                <div className='flex items-start gap-4'>
                  {/* ICON */}
                  <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#FFE9E9]'>
                    <Image
                      src={item.icon}
                      alt='Icon'
                      width={18}
                      height={18}
                      className='h-[18px] w-[18px] object-contain'
                    />
                  </div>

                  {/* TEXT */}
                  <p className='text-[17px] md:text-[20px] leading-[1.4] text-[#2B2F39]'>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* SECOND ROW */}
          <div className='mt-4 grid grid-cols-1 gap-5 md:max-w-[68%] md:grid-cols-2'>
            {challenges.slice(3, 5).map((item, index) => (
              <div
                key={index}
                className='
                  min-h-[120px]
                  rounded-[18px]
                  border
                  border-[#FF6A6A]
                  bg-white
                  px-5
                  py-5
                  shadow-[0px_8px_20px_rgba(0,0,0,0.05)]
                '
              >
                <div className='flex items-start gap-4'>
                  {/* ICON */}
                  <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#FFE9E9]'>
                    <Image
                      src={item.icon}
                      alt='Icon'
                      width={18}
                      height={18}
                      className='h-[18px] w-[18px] object-contain'
                    />
                  </div>

                  {/* TEXT */}
                  <p className='text-[17px] md:text-[20px] leading-[1.4] text-[#2B2F39]'>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= BEFORE AFTER ================= */}
      <div className='relative overflow-hidden'>
        {/* BACKGROUND IMAGE */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Templates/kamrt/before-after.png'
            alt='Retail'
            fill
            priority
            className='object-fit'
          />
        </div>

        {/* OVERLAY */}
        <div className='absolute inset-0 bg-[#74ADEF]/30 z-0' />

        {/* CONTENT */}
        <div className='relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16'>
          {/* CENTER BOX */}
          <div className='relative mx-auto flex max-w-[420px] flex-col items-center justify-center bg-[#3C160C]/20 px-8 py-5 text-center'>
            {/* OVERLAY */}
            <div className='absolute inset-0 z-0 bg-[#000000]/5' />

            {/* IMAGE */}
            <Image
              src='/images/Templates/kamrt/before-after-text.png'
              alt='Insights'
              width={420}
              height={120}
              className='relative z-10 h-auto w-full object-contain'
            />
          </div>

          {/* CARDS */}
          <div className='mt-10 grid grid-cols-1 gap-5 md:grid-cols-2'>
            {beforeAfterCards.map((item, index) => (
              <div
                key={index}
                className='
                  rounded-[18px]
                  bg-white
                  px-5
                  md:px-7
                  py-5
                  md:py-6
                  shadow-[0px_10px_24px_rgba(0,0,0,0.08)]
                '
              >
                {/* TITLE */}
                <h3 className='text-lg md:text-2xl leading-none font-semibold text-[#1D2028]'>
                  {item.title}
                </h3>

                {/* CONTENT */}
                <div className='mt-4 flex items-center justify-between gap-5'>
                  {/* BEFORE */}
                  <div>
                    <p className='text-sm md:text-xl text-[#7A7F8B]'>Before</p>

                    <p className='mt-1 text-sm md:text-xl font-medium text-[#FF4D4D]'>
                      {item.before}
                    </p>
                  </div>

                  {/* ARROW */}
                  <div>
                    <Image
                      src='/images/Templates/kamrt/arrow.svg'
                      alt='Arrow'
                      width={24}
                      height={24}
                      className='h-[24px] w-[24px] object-contain'
                    />
                  </div>

                  {/* AFTER */}
                  <div className='text-right'>
                    <p className='text-sm md:text-xl text-[#7A7F8B]'>After</p>

                    <p className='mt-1 text-sm md:text-xl font-medium text-[#14D59C]'>
                      {item.after}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeTransformationSection;

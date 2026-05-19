'use client';

import Image from 'next/image';

const challengeCards = [
  {
    icon: '/images/Templates/henkel/fragmented.svg',
    title: 'Fragmented Marketing Data Sources',
    desc: 'Campaign data was distributed across Salesforce, SharePoint, and third-party tools, limiting unified analysis.',
  },
  {
    icon: '/images/Templates/henkel/limited.svg',
    title: 'Limited Conversion Funnel Visibility',
    desc: 'Inability to track end-to-end journey from Contact to SQL impacted performance evaluation.',
  },
  {
    icon: '/images/Templates/henkel/inefficent.svg',
    title: 'Inefficient Campaign Performance Tracking',
    desc: 'Lack of consolidated insights made it difficult to assess campaign effectiveness and ROI.',
  },
  {
    icon: '/images/Templates/henkel/manual.svg',
    title: 'Manual Reporting Effort',
    desc: 'Heavy reliance on manual data consolidation slowed down reporting cycles.',
  },
  {
    icon: '/images/Templates/henkel/lack.svg',
    title: 'Lack of Owner-Level Insights',
    desc: 'No clear visibility into CTA owner performance and contribution to conversions.',
  },
  {
    icon: '/images/Templates/henkel/inconsistent.svg',
    title: 'Inconsistent Trend Analysis',
    desc: 'Difficulty in analyzing time-based performance trends across campaigns.',
  },
];

const ChallengeSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      {/* TOP CONTENT */}
      <div className='mx-auto max-w-7xl px-4 md:px-6 pt-10 md:pt-14'>
        {/* TITLE */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#FF2323]'>
          THE CHALLENGE
        </h2>

        {/* DESCRIPTION */}
        <p className='mt-6 text-[12px] md:text-[17px] leading-[1.8] text-[#727B8D]'>
          The organization faced critical integration hurdles that hampered operational efficiency
          and data reliability across its enterprise ecosystem.
        </p>
      </div>

      {/* ================= CHALLENGE GRID ================= */}
      <div className='relative mt-10 overflow-hidden'>
        {/* BACKGROUND IMAGE */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Templates/henkel/challenges.png'
            alt='Lab Background'
            fill
            priority
            className='object-fit'
          />
        </div>

        {/* OVERLAY */}
        <div className='absolute inset-0 bg-white/5 z-0' />

        {/* CONTENT */}
        <div className='relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-12'>
          {/* GRID */}
          <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
            {challengeCards.map((item, index) => (
              <div
                key={index}
                className='
                  rounded-[22px]
                  border-2
                  border-[#FF3434]
                  bg-white
                  px-5
                  md:px-6
                  py-5
                  md:py-6
                  shadow-[0px_10px_24px_rgba(0,0,0,0.08)]
                '
              >
                {/* HEADER */}
                <div className='flex items-center gap-4'>
                  {/* ICON BOX */}
                  <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[14px] border border-[#FF3A3A] bg-[#FFF6F6]'>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={22}
                      height={22}
                      className='h-[22px] w-[22px] object-contain'
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className='text-[12px] md:text-[16px] leading-[1.45] font-semibold tracking-[-0.4px] text-[#FF2B2B]'>
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className='mt-4 text-[12px] md:text-[14px] leading-[1.9] text-[#7B8395]'>
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

export default ChallengeSection;

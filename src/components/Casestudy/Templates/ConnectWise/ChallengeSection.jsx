'use client';

import Image from 'next/image';

const challengeCards = [
  {
    icon: '/images/Templates/connect-wise/siloed.svg',
    title: 'Siloed Enterprise Systems',
    desc: 'Critical platforms like CRM, finance, and subscription systems operated independently, leading to disconnected workflows.',
  },
  {
    icon: '/images/Templates/connect-wise/data.svg',
    title: 'Data Inconsistencies and Sync Failures',
    desc: 'Fragmented integrations caused frequent data mismatches and unreliable synchronization.',
  },
  {
    icon: '/images/Templates/connect-wise/manual.svg',
    title: 'Manual Reconciliation Effort',
    desc: 'Teams relied on manual processes to correct errors, increasing operational overhead.',
  },
  {
    icon: '/images/Templates/connect-wise/delayed.svg',
    title: 'Delayed Financial Processes',
    desc: 'Lack of real-time data flow impacted billing, reconciliation, and financial reporting timelines.',
  },
  {
    icon: '/images/Templates/connect-wise/high.svg',
    title: 'High Volume of Support Tickets',
    desc: 'Integration issues and failures resulted in increased dependency on support teams.',
  },
  {
    icon: '/images/Templates/connect-wise/lack.svg',
    title: 'Lack of Monitoring & Validation',
    desc: 'Existing integrations lacked proper error handling, validation rules, and proactive monitoring.',
  },
];

const ChallengeSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      {/* TOP CONTENT */}
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        {/* TITLE */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#FF2323]'>
          THE CHALLENGE
        </h2>

        {/* DESCRIPTION */}
        <p className='mt-4 text-[12px] md:text-[17px] leading-[1.8] text-[#727B8D]'>
          The organization faced critical integration hurdles that hampered operational efficiency
          and data reliability across its enterprise ecosystem.
        </p>
      </div>

      {/* CHALLENGE GRID SECTION */}
      <div className='relative mt-10 overflow-hidden'>
        {/* BACKGROUND IMAGE */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Templates/connect-wise/challenge.png'
            alt='Technology'
            fill
            priority
            className='object-fit'
          />
        </div>

        {/* OVERLAY */}
        <div className='absolute inset-0 bg-[#DDF8FF]/45 z-0' />

        {/* CONTENT */}
        <div className='relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-12'>
          {/* GRID */}
          <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
            {challengeCards.map((item, index) => (
              <div
                key={index}
                className='
                  rounded-[20px]
                  border-2
                  border-[#FF3D3D]
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
                  <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[14px] border border-[#FF4A4A] bg-[#FFF5F5]'>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={22}
                      height={22}
                      className='h-[22px] w-[22px] object-contain'
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className='text-[12px] md:text-[18px] leading-[1.45] font-semibold tracking-[-0.5px] text-[#FF2D2D]'>
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className='mt-7 text-[12px] md:text-[14px] leading-[1.9] text-[#707A8C]'>
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

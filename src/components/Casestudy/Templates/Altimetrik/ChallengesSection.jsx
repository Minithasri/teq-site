'use client';

import Image from 'next/image';

const challenges = [
  {
    id: '01',
    icon: '/images/Templates/altimetrik/lack.svg',
    title: 'Lack of Real-Time Visibility',
    description: 'Delayed insights into sales and inventory performance across channels.',
  },
  {
    id: '02',
    icon: '/images/Templates/altimetrik/fragmented.svg',
    title: 'Fragmented Data Sources',
    description: 'Data spread across multiple channels, regions, and disconnected systems.',
  },
  {
    id: '03',
    icon: '/images/Templates/altimetrik/inefficient.svg',
    title: 'Inefficient Inventory Planning',
    description: 'Stock imbalances affecting product availability and working capital.',
  },
  {
    id: '04',
    icon: '/images/Templates/altimetrik/manual.svg',
    title: 'Manual Reporting Processes',
    description: 'Time-consuming, error-prone report generation cycles.',
  },
  {
    id: '05',
    icon: '/images/Templates/altimetrik/limited.svg',
    title: 'Limited Customer Insights',
    description: 'Inability to analyze behavior across the omnichannel journey.',
  },
];

const ChallengesSection = () => {
  return (
    <section className='relative w-full overflow-visible bg-white'>
      <div className='relative mx-auto max-w-7xl px-4 md:px-6'>
        {/* TITLE */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold uppercase tracking-[3px] text-[#F03632]'>
          <span className='mr-3'>02</span>— Challenges
        </h2>

        {/* SUBTEXT */}
        <p className='mt-5 text-[12px] md:text-[16px] leading-[1.8] text-[#7A8291]'>
          A diagnostic review surfaced systemic gaps across visibility, integration, and operational
          reporting.
        </p>

        {/* CONTENT AREA */}
        <div className='relative mt-10'>
          {/* FLOATING IMAGE */}
          <div
            className='
              absolute
              right-[-90px]
              -bottom-[386px]
              hidden
              md:block
              z-10
            '
          >
            <Image
              src='/images/Templates/altimetrik/challenge.png'
              alt='Fashion'
              width={300}
              height={360}
              priority
              className='
                h-[690px]
                w-[550px]
                object-contain
              '
            />
          </div>

          {/* CARDS */}
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
            {challenges.map((item, index) => {
              return (
                <div
                  key={index}
                  className='
                    relative
                    rounded-[14px]
                    border-2
                    border-[#FF3A35]
                    bg-white
                    px-6
                    py-6
                  '
                >
                  {/* NUMBER */}
                  <span className='absolute right-5 top-5 text-[12px] font-medium text-[#FF3A35]'>
                    {item.id}
                  </span>

                  <div className='flex items-center gap-4'>
                    {/* ICON */}
                    <div className='flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] bg-[#F03632]'>
                      <Image
                        src={item.icon}
                        alt='Warning'
                        width={16}
                        height={16}
                        className='h-[16px] w-[16px] object-contain'
                      />
                    </div>

                    {/* TITLE */}
                    <h3 className='text-[16px] md:text-[20px] leading-[1.4] font-semibold tracking-[-0.5px] text-[#F03632]'>
                      {item.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <p className='mt-6 text-[13px] md:text-[15px] leading-[1.9] text-[#6F7787]'>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;

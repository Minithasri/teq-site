'use client';

import Image from 'next/image';

const challenges = [
  {
    id: '01',
    title: 'Semi-Structured Excel Data',
    description: 'Complex formatting and hierarchies made processing difficult.',
    icon: '/images/Templates/tig-golf/semi.svg',
  },
  {
    id: '02',
    title: 'Manual Data Handling',
    description: 'High dependency on repetitive Excel operations.',
    icon: '/images/Templates/tig-golf/manual.svg',
  },
  {
    id: '03',
    title: 'Data Inconsistency',
    description: 'Lack of standard structure impacted reporting accuracy.',
    icon: '/images/Templates/tig-golf/data.svg',
  },
  {
    id: '04',
    title: 'Processing Delays',
    description: 'Slow turnaround for report generation.',
    icon: '/images/Templates/tig-golf/processing.svg',
  },
  {
    id: '05',
    title: 'Limited Scalability',
    description: 'Difficult to handle increasing file volumes.',
    icon: '/images/Templates/tig-golf/limited.svg',
  },
];

const ChallengesSection = () => {
  return (
    <section className='relative w-full bg-[#FCFBF8]'>
      {/* RIGHT FLOATING IMAGE */}
      <div
        className='
            absolute
            right-[0px]
            -bottom-10
            hidden
            lg:block
            z-10
          '
      >
        <Image
          src='/images/Templates/tig-golf/challenge.png'
          alt='Golf'
          width={520}
          height={420}
          priority
          className='
              h-[420px]
              w-[520px]
              object-contain
            '
        />
      </div>

      <div className='relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16'>
        {/* CONTENT WRAPPER */}
        <div className='relative z-20'>
          {/* TITLE */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold uppercase tracking-[3px] text-[#F03232]'>
            <span className='mr-3'>02</span>· BUSINESS CHALLENGES
          </h2>

          {/* DESCRIPTION */}
          <p className='mt-8 text-[14px] md:text-[18px] leading-[1.8] text-[#70798A]'>
            Five interconnected obstacles were slowing reporting cycles and eroding confidence in
            the data.
          </p>

          {/* GRID */}
          <div className='mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
            {challenges.map((item, index) => (
              <div
                key={index}
                className='
                  relative
                  rounded-[22px]
                  border-2
                  border-[#FF4444]
                  bg-white
                  px-6
                  py-6
                  shadow-[0px_10px_24px_rgba(0,0,0,0.04)]
                '
              >
                {/* NUMBER */}
                <span className='absolute right-5 top-5 text-[12px] font-semibold text-[#FF4444]'>
                  {item.id}
                </span>

                <div className='flex flex-row gap-6 items-center'>
                  {/* ICON */}
                  <div className='flex h-[54px] w-[54px] items-center justify-center rounded-[14px] bg-[#E73030]'>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                      className='h-6 w-6 object-contain'
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className='text-[20px] md:text-[20px] leading-[1.4] font-semibold text-[#F03232]'>
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className='mt-5 text-[14px] md:text-[17px] leading-[1.9] text-[#727B8B]'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE IMAGE */}
        <div className='mt-10 flex justify-center lg:hidden'>
          <Image
            src='/images/Templates/tig-golf/challenge.png'
            alt='Golf'
            width={320}
            height={240}
            priority
            className='
              h-[240px]
              w-[320px]
              object-contain
            '
          />
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;

'use client';

import Image from 'next/image';

const challengeCards = [
  {
    title: 'No Centralized Tracking',
    desc: 'Travel data scattered across systems',
    icon: '/images/Templates/take2eton-1/warning.svg',
  },
  {
    title: 'Compliance Visibility Gaps',
    desc: 'Difficult to monitor compliance status',
    icon: '/images/Templates/take2eton-1/warning.svg',
  },
  {
    title: 'Manual Reporting',
    desc: 'High effort required for compliance tracking',
    icon: '/images/Templates/take2eton-1/warning.svg',
  },
  {
    title: 'Duration Tracking Issues',
    desc: 'Challenges in tracking employee stay',
    icon: '/images/Templates/take2eton-1/warning.svg',
  },
  {
    title: 'Regulatory Risks',
    desc: 'Increased compliance exposure',
    icon: '/images/Templates/take2eton-1/warning.svg',
  },
];

const solutionCards = [
  {
    title: 'Centralized Data Storage',
    desc: 'Captured travel data in AppDB',
    icon: '/images/Templates/take2eton-1/tick.svg',
  },
  {
    title: 'Custom Tracking Application',
    desc: 'Built using React and Domo',
    icon: '/images/Templates/take2eton-1/tick.svg',
  },
  {
    title: 'Compliance Classification',
    desc: 'Implemented Green/Amber/Red indicators',
    icon: '/images/Templates/take2eton-1/tick.svg',
  },
  {
    title: 'Interactive Dashboards',
    desc: 'Enabled real-time monitoring',
    icon: '/images/Templates/take2eton-1/tick.svg',
  },
  {
    title: 'Date-Based Filtering',
    desc: 'Allowed period-based analysis',
    icon: '/images/Templates/take2eton-1/tick.svg',
  },
];

const ChallengesSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      {/* FLOATING IMAGE */}
      <div className='absolute right-0 bottom-[40px] hidden md:block'>
        <Image
          src='/images/Templates/take2eton-2/challenge.png'
          alt='Travel'
          width={360}
          height={220}
          priority
          className='
          h-[220px]
          w-[360px]
          rounded-[24px]
          object-cover
          shadow-[0px_10px_24px_rgba(0,0,0,0.08)]
        '
        />
      </div>

      <div className='relative mx-auto max-w-7xl px-4 md:px-6 pt-24 pb-8'>
        {/* ================= TOP HEADING ================= */}
        <div className='flex flex-col gap-3 md:flex-row md:items-center md:gap-6'>
          {/* NUMBER */}
          <div className='text-[58px] md:text-[82px] leading-none font-bold tracking-[-4px] text-[#2F24D2]'>
            02
          </div>

          {/* TITLE */}
          <h1 className='text-[28px] md:text-[42px] leading-[1.15] font-semibold tracking-[-1.5px] text-[#2F24D2]'>
            Travel Compliance & Tax Reporting Tracking Platform
          </h1>
        </div>

        {/* ================= BUSINESS CHALLENGES ================= */}
        <div className='mt-10'>
          {/* TITLE */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold uppercase tracking-[2px] text-[#FF3030]'>
            BUSINESS CHALLENGES
          </h2>

          {/* CHALLENGE AREA */}
          <div className='relative mt-8'>
            {/* LEFT GRID */}
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5'>
              {challengeCards.map((item, index) => (
                <div
                  key={index}
                  className='
                    rounded-[16px]
                    border-2
                    border-[#FF4A4A]
                    bg-white
                    px-5
                    md:px-6
                    py-5
                    shadow-[0px_6px_18px_rgba(0,0,0,0.04)]
                  '
                >
                  {/* HEADER */}
                  <div className='flex items-center gap-3'>
                    {/* ICON */}
                    <div className='flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] bg-[#FFE7E7]'>
                      <Image
                        src={item.icon}
                        alt='Warning'
                        width={16}
                        height={16}
                        className='h-[16px] w-[16px] object-contain'
                      />
                    </div>

                    {/* TITLE */}
                    <h3 className='text-[15px] md:text-[18px] leading-[1.4] font-semibold text-[#FF4040]'>
                      {item.title}
                    </h3>
                  </div>

                  {/* DESC */}
                  <p className='mt-4 text-[14px] md:text-[16px] leading-[1.7] text-[#666D7D]'>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE IMAGE */}
        <div className='mt-8 flex justify-center md:hidden'>
          <Image
            src='/images/Templates/take2eton-2/challenge.png'
            alt='Travel'
            width={320}
            height={220}
            priority
            className='h-[220px] w-[320px] rounded-[22px] object-cover'
          />
        </div>

        {/* ================= SOLUTION IMPLEMENTED ================= */}
        <div className='mt-14'>
          {/* TITLE */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold uppercase tracking-[2px] text-[#5A54F8]'>
            SOLUTION IMPLEMENTED
          </h2>

          {/* GRID */}
          <div className='mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5'>
            {solutionCards.map((item, index) => (
              <div
                key={index}
                className='
                  rounded-[16px]
                  border-2
                  border-[#4B52E4]
                  bg-[#EFF2F5]
                  px-5
                  md:px-6
                  py-5
                  shadow-[0px_6px_18px_rgba(0,0,0,0.04)]
                '
              >
                {/* HEADER */}
                <div className='flex items-center gap-3'>
                  {/* ICON */}
                  <div className='flex h-9 w-9 flex-shrink-0 items-center justify-center border border-[#4B52E4] rounded-[10px] bg-[#E8E9FF]'>
                    <Image
                      src={item.icon}
                      alt='Check'
                      width={16}
                      height={16}
                      className='h-[16px] w-[16px] object-contain'
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className='text-[15px] md:text-[18px] leading-[1.4] font-semibold text-[#5A54F8]'>
                    {item.title}
                  </h3>
                </div>

                {/* DESC */}
                <p className='mt-6 text-[14px] md:text-[16px] leading-[1.7] text-[#666D7D]'>
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

export default ChallengesSection;

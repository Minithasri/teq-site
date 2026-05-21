'use client';

import Image from 'next/image';

const challenges = [
  'Lack of end-to-end visibility into logistics network performance',
  'Data scattered across multiple systems and formats',
  'Difficulty in analyzing transportation costs and shipment patterns',
  'Limited ability to simulate alternative network strategies',
  'Inefficiencies in routing decisions and distribution center utilization',
  'Slow and manual scenario analysis impacting decision-making',
];

const ChallengesSection = () => {
  return (
    <section className='w-full overflow-hidden bg-[#ECEFF4]'>
      <div className='relative mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14'>
        {/* RIGHT IMAGE */}
        <div className='absolute -right-[100px] top-[240px] hidden md:block z-0'>
          <Image
            src='/images/Templates/bissell-3/challenges.png'
            alt='Logistics'
            width={420}
            height={420}
            priority
            className='h-[420px] w-[420px] object-contain'
          />
        </div>

        {/* CONTENT */}
        {/* TITLE */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-center'>
          Business Challenges
        </h2>
        <div className='relative z-10 max-w-4xl'>
          {/* CHALLENGE LIST */}
          <div className='mt-10 space-y-5'>
            {challenges.map((item, index) => (
              <div
                key={index}
                className='
                  flex
                  items-center
                  gap-4
                  rounded-[14px]
                  border-2
                  border-[#F5F5F5]
                  bg-white
                  px-5
                  md:px-6
                  py-4
                  md:py-5
                  shadow-[0px_4px_12px_rgba(0,0,0,0.08)]
                '
              >
                {/* DOT */}
                <div className='h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#FF2E2E]' />

                {/* TEXT */}
                <p className='text-[12px] md:text-[18px] leading-[1.6] text-[#2B2F37]'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE IMAGE */}
      <div className='px-4 pb-10 md:hidden'>
        <Image
          src='/images/Templates/bissell-3/challenges.png'
          alt='Logistics'
          width={500}
          height={420}
          priority
          className='h-[280px] w-full object-contain'
        />
      </div>
    </section>
  );
};

export default ChallengesSection;

import React from 'react';

const challenges = [
  'Finance and HR data were tracked in silos, delaying leadership reporting',
  'No single platform to unify workforce metrics with financial performance',
  'Manual reports consumed significant time and effort',
  'Lack of cross-functional KPIs (e.g., workforce cost vs. revenue impact)',
  'Leadership struggled to connect people performance with business results',
];

export default function KeyChallenges() {
  return (
    <section className='relative bg-[#fdf3f5] py-[90px] overflow-hidden'>
      {/* RIGHT SATELLITE IMAGE */}
      <img
        src='/images/Templates/template15/bg2.png'
        alt='Satellite'
        className='hidden xl:block absolute top-[-130px] right-[-120px] w-[520px] rotate-[280deg] opacity-[0.55] pointer-events-none select-none z-0'
      />

      <div className='max-w-[1140px] mx-auto px-4 relative z-10'>
        {/* HEADING */}
        <div className='text-center mb-[55px]'>
          <h2 className='text-[48px] leading-[54px] font-extrabold text-[#071326] tracking-[-1px]'>
            Key Challenges
          </h2>

          <p className='mt-[18px] text-[18px] text-[#111827] font-normal'>
            Critical obstacles preventing data-driven decision making
          </p>
        </div>

        {/* CHALLENGE GRID */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-[22px] gap-y-[18px]'>
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className={`bg-white border-2 border-[#F5F5F5] rounded-[12px] px-[20px] py-[18px] flex items-start gap-[16px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] ${
                index === 4 ? 'md:col-span-2 md:max-w-[440px] md:mx-auto' : ''
              }`}
            >
              {/* NUMBER CIRCLE */}
              <div className='w-[34px] h-[34px] min-w-[34px] rounded-full bg-[#ff3131] flex items-center justify-center text-white text-[15px] font-bold mt-[2px]'>
                {index + 1}
              </div>

              {/* TEXT */}
              <p className='text-[16px] leading-[30px] text-[#111827] font-medium tracking-[-0.2px]'>
                {challenge}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';

const challenges = [
  'Reports for defects, cosmetic yield, and machine parameters were manually prepared',
  'Assembly and band yield analysis lacked a centralized, automated reporting framework',
  'Delay in identifying defect root causes and yield losses',
  'Leadership had limited visibility into factory-wide performance',
  'Manual consolidation of reports consumed significant time and effort',
];

export default function ChallengeSection() {
  return (
    <section className='py-[56px] md:py-[72px] bg-white relative overflow-hidden w-full'>
      {/* NEW BULLETPROOF HTML BACKGROUND LAYER:
        - We use a dedicated div to hold the background image.
        - 'translate-x-[250px]' physically pushes the chip image 250px to the RIGHT on desktop views,
          moving it completely out from under your text cards.
        - You can change 'md:translate-x-[250px]' to higher numbers (e.g., 300px, 350px) to slide it even further right.
      */}
      <div
        className='absolute top-0 bottom-0 right-0 w-full md:w-[135%] opacity-15 md:opacity-100 md:translate-x-[250px] pointer-events-none z-0'
        style={{
          backgroundImage: 'url("/images/Templates/template14/bg3.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Clean semi-transparent white wash layer to blend the edges naturally */}
      <div className='absolute inset-0 bg-white/85 z-5 pointer-events-none' />

      {/* Main content layer container */}
      <div className='max-w-[1040px] mx-auto px-4 sm:px-6 relative z-10'>
        {/* Module Main Title */}
        <h2 className='text-center text-[28px] md:text-[32px] font-extrabold text-[#0f2347] tracking-tight mb-[32px] md:mb-[44px]'>
          The Challenge
        </h2>

        {/* Stack Box Tracks Container */}
        <div className='space-y-[14px] md:space-y-[16px] w-full'>
          {challenges.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-r-[12px] rounded-l-[4px] border-2 border-[#F5F5F5] border-l-[5px] border-l-[#ef4444] shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-4 sm:p-5 md:px-[24px] md:py-[18px] flex items-center gap-4 md:gap-[20px]'
            >
              {/* Number Circle Badge Indicator */}
              <div className='w-[32px] h-[32px] md:w-[36px] md:h-[36px] shrink-0 flex items-center justify-center bg-[#ef4444] text-white rounded-full font-bold text-[14px] md:text-[15px] shadow-sm shadow-red-500/10'>
                {index + 1}
              </div>

              {/* Description Copy */}
              <p className='text-[#2c3a57] text-[14px] sm:text-[15px] md:text-[15.5px] font-semibold tracking-tight text-left leading-[1.45]'>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

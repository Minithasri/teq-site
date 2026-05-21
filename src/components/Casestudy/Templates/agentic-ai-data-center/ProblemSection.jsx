import React from 'react';

const problems = [
  'Monitoring was manual and reactive, leading to delayed responses.',
  'Limited ability to predict failures before they occurred.',
  'Energy usage was not optimized across systems.',
  'No centralized intelligence to manage cooling, power, and server workloads.',
  'System alerts were overwhelming and often lacked prioritization.',
];

export default function ProblemSection() {
  return (
    <section
      className='py-[64px] md:py-[80px] w-full bg-cover bg-center'
      style={{
        // Replaced flat solid red background with the precise target linear gradient transition
        backgroundImage: 'linear-gradient(to bottom, #f37b81, #fdebee)',
      }}
    >
      <div className='max-w-[1140px] mx-auto px-4 md:px-6 flex flex-col items-center'>
        {/* HEADER BLOCK */}
        <div className='text-center mb-[36px] md:mb-[44px]'>
          <h2 className='text-[26px] md:text-[30px] font-extrabold text-[#071326] tracking-tight'>
            The Problem
          </h2>
          <p className='text-[14.5px] md:text-[15.5px] text-[#071326]/85 font-semibold mt-1.5 tracking-tight'>
            Reactive Monitoring and High Risk of Downtime
          </p>
        </div>

        {/* CONTAINER STACK LIST CARDS */}
        <div className='space-y-4 w-full max-w-[960px] lg:max-w-[860px] xl:max-w-[900px]'>
          {problems.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-[10px] border-2 border-[#f5f5f5] shadow-[0_4px_24px_rgba(0,0,0,0.08)] px-6 py-4 md:py-[18px] flex items-center gap-4'
            >
              {/* Proportioned Circle Step Number Indicator */}
              <div className='w-[26px] h-[26px] rounded-full bg-[#ef4444] text-white flex items-center justify-center text-[12.5px] font-extrabold shrink-0 select-none pointer-events-none shadow-sm'>
                {index + 1}
              </div>

              {/* Description Body Text */}
              <p className='text-[13.5px] md:text-[14.5px] text-[#334155] font-semibold tracking-tight text-left leading-normal'>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

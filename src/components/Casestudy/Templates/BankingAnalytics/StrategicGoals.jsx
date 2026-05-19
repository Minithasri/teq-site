import React from 'react';
import Image from 'next/image';

export default function StrategicGoals() {
  const goals = [
    'Provide real-time visibility into customer transactions and performance',
    'Build Tableau analytics to centralize financial and operational KPIs',
    'Automate compliance and regulatory reporting',
    'Enable drill-down analysis for transaction-level details',
    'Support data-driven banking decisions',
  ];

  return (
    <section className='py-[64px] bg-white'>
      <div className='max-w-[1140px] mx-auto px-6'>
        {/* Section Header */}
        <div className='text-center mb-[40px]'>
          <h2 className='text-[28px] font-extrabold text-[#071326] tracking-tight'>
            Strategic Goals
          </h2>
          <p className='text-[15.5px] text-[#64748b] font-medium mt-2'>
            Clear targets to transform banking operations and decision-making
          </p>
        </div>

        {/* 2-Column Core Section Split */}
        <div className='grid md:grid-cols-[1.2fr_0.8fr] gap-[40px] items-center'>
          {/* LEFT SIDE: OVERLAPPED CAPSULES BLOCK */}
          <div className='space-y-[14px] w-full'>
            {goals.map((goal, index) => (
              <div
                key={index}
                className='w-full bg-white border border-gray-100/80 border-l-[4px] border-l-[#3b82f6] rounded-r-[8px] rounded-l-[4px] shadow-[0_4px_12px_rgba(0,0,0,0.02)] px-[20px] py-[16px] flex items-center gap-[16px]'
              >
                {/* Left Aligned Blue Concentric Target Icon Badge */}
                <div className='w-[24px] h-[24px] shrink-0 relative flex items-center justify-center'>
                  <Image
                    src='/images/Templates/template13/goals.svg'
                    alt='Goal Target Icon'
                    width={18}
                    height={18}
                    className='object-contain'
                  />
                </div>

                {/* Main Content Plain Normal/Medium Text */}
                <p className='text-[15px] text-[#334155] font-medium leading-[1.4]'>{goal}</p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: CLEAN FLOATING ILLUSTRATION */}
          <div className='flex items-center justify-center p-2 w-full'>
            <div className='relative w-full max-w-[380px] aspect-square flex items-center justify-center'>
              <Image
                src='/images/Templates/template13/bg3.png'
                alt='Banking Operations Analytics Graphic'
                width={380}
                height={340}
                priority
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

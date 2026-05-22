'use client';

import Image from 'next/image';

const objectives = [
  'Create a centralized dashboard suite for artist and event performance',
  'Provide real-time insights into audience engagement and revenue impact',
  'Enable leadership to track KPIs across events, artists, and audience segments',
  'Support data-driven decisions for event planning and talent management',
];

export default function BusinessObjectives() {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[90px] py-10 md:py-12 font-['Poppins']">
      {/* ── Main Card ── */}
      <div className='relative w-full bg-white border-2 border-[#F5F5F5] rounded-[16px] shadow-[0px_4px_12px_rgba(0,0,0,0.08)] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:min-h-[258px]'>
        {/* Left/Content Layout */}
        <div className='flex flex-col z-10 w-full lg:max-w-[60%]'>
          {/* ── Header Components (Icon + Title) ── */}
          <div className='flex items-center gap-3 mb-4 sm:mb-6'>
            {/* Icon Wrap */}
            <div className='w-9 h-9 rounded-[12px] bg-[#6249DF] flex items-center justify-center shrink-0'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#fff'
                strokeWidth='2.2'
                strokeLinecap='round'
              >
                <circle cx='12' cy='12' r='10' />
                <circle cx='12' cy='12' r='6' />
                <circle cx='12' cy='12' r='2' />
              </svg>
            </div>

            {/* Title Text */}
            <h2 className='text-[26px] leading-[30px] sm:text-[30px] sm:leading-[34px] lg:text-[34px] lg:leading-[32px] font-bold text-[#21242C]'>
              Business Objectives
            </h2>
          </div>

          {/* ── Points List ── */}
          <ul className='flex flex-col gap-[10px] m-0 p-0 list-none w-full'>
            {objectives.map((point, i) => (
              <li
                key={i}
                className='flex items-start gap-3 text-[15px] leading-[22px] sm:text-[16px] sm:leading-[24px] lg:text-[18px] lg:leading-[24px] font-normal text-[#21242CE5]'
              >
                {/* Bullet Point Spot Marker */}
                <span className=' text-[22px] leading-[22px] shrink-0 mt-[1px] select-none'>•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Floating / Responsive Graphic Layout ── */}
        <div className='relative lg:absolute w-full max-w-[340px] h-[190px] sm:max-w-[425px] sm:h-[239px] mx-auto lg:mx-0 lg:left-[calc(100%-455px)] xl:left-[892px] lg:-top-[46px] z-10 shrink-0 shadow-[0px_8px_32px_rgba(0,0,0,0.12)] rounded-[18px] overflow-hidden'>
          <Image
            src='/images/Templates/templatez/jamm/jammbo.png'
            alt='Business performance analytics dashboard on monitors mockup'
            fill
            priority
            className='object-cover rounded-[18px]'
          />
        </div>
      </div>
    </div>
  );
}

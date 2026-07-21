'use client';

import Image from 'next/image';

const stats = [
  {
    number: '$407B',
    description: 'Projected global enterprise AI spend in 2026, up nearly 35% from $302B in 2025.',
  },
  {
    number: '$8.4B+',
    description:
      'Enterprise LLM API spend crossed this mark in 2025 and is on track to double again this year.',
  },
  {
    number: '60–80%',
    description:
      'Disciplined model routing and tiering typically achieve a 50% reduction in per-query costs.',
  },
];

export default function SectionGwc() {
  return (
    <section className='w-full py-16 lg:py-24 bg-white overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Title */}
        <h2 className='text-3xl sm:text-4xl lg:text-[42px] font-semibold text-center mb-6 tracking-tight text-[#6E2B8B]'>
          AI Spend Is Outrunning AI Governance
        </h2>

        {/* Subtitle */}
        <p className='text-center text-sm sm:text-base max-w-4xl mx-auto font-normal leading-relaxed mb-12 text-[#909090]'>
          Most finance and technology teams lack visibility into AI spending. They struggle to track
          token costs, measure business value, and identify waste from inefficient models, prompts,
          and shadow AI. AI FinOps and Token Economics bring financial discipline to every model
          call, agent, and AI workflow.
        </p>

        {/* Center Image */}
        <div className='relative max-w-3xl mx-auto mb-16 rounded-[28px] overflow-hidden shadow-2xl shadow-purple-900/10 border border-gray-100'>
          <Image
            src='/images/solutions/aifinops/frame2.png'
            alt='AI Spend Is Outrunning AI Governance'
            width={750}
            height={320}
            priority
            className='w-full h-auto object-cover rounded-[20px]'
          />
        </div>

        {/* 3 Stat Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4 max-w-7xl mx-auto justify-items-center'>
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className='p-[1px] rounded-[132px] w-full max-w-[375px] min-h-[142px] flex transition-transform duration-300 hover:scale-105 shadow-sm'
              style={{
                background: 'linear-gradient(262.35deg, #E67582 2.92%, #7785F4 99.45%)',
              }}
            >
              <div className='bg-white rounded-[131px] w-full h-full px-6 py-5 flex flex-col justify-center items-center text-center'>
                <h3 className='text-2xl sm:text-3xl font-semibold text-[#1C1917] mb-1 tracking-tight'>
                  {stat.number}
                </h3>
                <p className='text-xs sm:text-[12px] text-[#737373] leading-snug font-normal max-w-[290px]'>
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

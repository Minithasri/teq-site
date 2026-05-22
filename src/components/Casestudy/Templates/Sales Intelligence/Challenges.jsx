'use client';

import { AlertTriangle, BarChart3, TrendingDown } from 'lucide-react';
import Image from 'next/image';

const challengeCards = [
  {
    description: 'YOY and MOM comparisons were misaligned across dashboards',
    icon: <TrendingDown size={24} className='text-white' />,
  },
  {
    description: 'Inconsistent time-based calculations undermined reporting reliability',
    icon: <BarChart3 size={24} className='text-white' />,
  },
  {
    description: 'Strategic planning suffered from conflicting performance data',
    icon: <AlertTriangle size={24} className='text-white' />,
  },
];

export default function ChallengeSection() {
  return (
    <section className='relative w-full overflow-hidden bg-gradient-to-b from-[#FEDBDA] to-[#F3F4F6] py-8 md:py-10'>
      {/* Decorative Right Image */}
      <div className='absolute right-[-5%] lg:right-[-2%] xl:right-10 top-8 z-0 hidden md:block w-[300px] h-[200px] lg:w-[474px] lg:h-[316px] opacity-75'>
        <Image
          src='/images/Templates/templatez/salesintelligence/sihead.png'
          alt='Retail Context'
          fill
          className='rounded-3xl object-cover'
        />
      </div>

      <div className='relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
        {/* The Challenge Title */}
        <div className='mb-6'>
          <h2 className='text-2xl md:text-3xl font-bold tracking-wide text-[#262626]'>
            The Challenge
          </h2>
        </div>

        {/* Subtitle Heading */}
        <div className='mb-6'>
          <h3 className='text-xl md:text-3xl lg:text-4xl font-semibold text-[#0F1729] leading-tight max-w-4xl'>
            Unreliable time-based calculations were eroding trust in sales reporting
          </h3>
        </div>

        {/* Paragraph Text */}
        <div className='mb-12'>
          <p className='text-base md:text-md lg:text-lg text-gray-700 leading-relaxed max-w-3xl'>
            The client had an existing reporting system, but inconsistencies in time-based
            calculations were affecting the reliability of sales insights. Metrics like
            Year-over-Year and Month-over-Month comparisons were not aligned, creating confusion in
            performance analysis and strategic planning.
          </p>
        </div>

        {/* Challenge Cards Container */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full'>
          {challengeCards.map((card, index) => (
            <div
              key={index}
              className='relative flex items-center bg-white rounded-2xl border border-[#F5F5F5] shadow-lg p-6 pl-24 transition-all duration-300 hover:shadow-lg min-h-[120px]'
            >
              {/* Icon Container */}
              <div className='absolute left-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-xl bg-red-600 flex-shrink-0'>
                {card.icon}
              </div>

              <p className='text-base font-medium leading-tight text-gray-900'>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

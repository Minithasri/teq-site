'use client';

import { GitBranch, ShieldCheck, Target } from 'lucide-react';
import Image from 'next/image';

const impactData = [
  {
    title: 'Restored Reporting Confidence',
    description:
      'Rebuilt trust in sales and marketing performance reporting across the organization.',
    icon: <ShieldCheck size={24} className='text-white' />,
  },
  {
    title: 'Consistent Comparisons',
    description:
      'Enabled transparent, standardized time-based performance comparisons (YOY, MOM, WOW).',
    icon: <GitBranch size={24} className='text-white' />,
  },
  {
    title: 'Targeted Growth Strategies',
    description:
      'Improved customer segmentation insights for more precise and effective growth strategies.',
    icon: <Target size={24} className='text-white' />,
  },
];

export default function BusinessImpactSection() {
  return (
    <section className='relative w-full overflow-hidden bg-gradient-to-b from-[#F3F4F6] via-[#CBFAD3] to-[#FFFFFF] py-16 md:py-24'>
      {/* Right Corner Background Image */}
      <div className='absolute bottom-0 right-0 z-0 pointer-events-none opacity-40 w-full md:w-[750px] h-[200px] md:h-[280px]'>
        <Image
          src='/images/Templates/templatez/salesintelligence/siill.png'
          alt='Retail Context Illustration'
          fill
          className='object-cover object-right-bottom'
          priority
        />
      </div>

      <div className='relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24'>
        {/* Business Impact Header */}
        <div className='mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold tracking-wide text-[#262626] mb-4'>
            Business Impact
          </h2>

          {/* Subtitle */}
          <h3 className='text-md md:text-lg lg:text-xl font-semibold text-[#0F1729] leading-tight max-w-4xl'>
            Measurable outcomes that transformed decision-making
          </h3>
        </div>

        {/* Impact Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 w-full'>
          {impactData.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl border-t-4 border-[#18BE3C] shadow-md p-6 lg:p-8 flex items-start gap-5 transition-all duration-300 hover:shadow-lg'
            >
              {/* Icon Container */}
              <div className='flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-xl bg-[#37F647]'>
                {item.icon}
              </div>

              <div>
                <h4 className='font-semibold text-[#262626] text-xl leading-tight mb-2'>
                  {item.title}
                </h4>
                <p className='text-[#4B5563] text-base leading-relaxed'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack Header */}
        <div className='mt-8'>
          <h2 className='text-2xl md:text-3xl font-bold tracking-wide text-black mb-8'>
            Technology Stack
          </h2>

          {/* Domo Card */}
          <div className='bg-white flex flex-col sm:flex-row items-center sm:justify-between relative z-10 max-w-md rounded-2xl border border-[#C4F4D4] shadow-sm p-6 sm:px-8 transition-all hover:shadow-md gap-4 sm:gap-0 text-center sm:text-left'>
            <div>
              <h4 className='font-extrabold text-black text-xl md:text-2xl leading-tight mb-1'>
                Domo
              </h4>
              <p className='text-[#4B5563] text-sm md:text-base font-medium'>
                Business Intelligence Platform
              </p>
            </div>

            <div className='relative w-24 h-16 sm:w-28 sm:h-20 flex-shrink-0'>
              <Image
                src='/images/Templates/templatez/salesIntelligence/sidomo.svg'
                alt='Domo Logo'
                fill
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';

const gapItems = [
  {
    icon: '/images/Templates/template2/sectionicon1.svg',
    title: 'Manual Data Capture',
    description: 'Prone to reporting errors and inconsistencies',
  },
  {
    icon: '/images/Templates/template2/sectionicon2.svg',
    title: 'No Real-Time Monitoring',
    description: 'Limited visibility into line performance or deviations',
  },
  {
    icon: '/images/Templates/template2/sectionicon3.svg',
    title: 'Inefficient Planning',
    description: 'Suboptimal shift-level workload planning',
  },
  {
    icon: '/images/Templates/template2/sectionicon4.svg',
    title: 'Limited WIP Visibility',
    description: 'Poor tracking of work-in-progress and yield performance',
  },
  {
    icon: '/images/Templates/template2/sectionicon5.svg',
    title: 'Delayed Decision-Making',
    description: 'Non-automated analytics slowing down response time',
  },
];

export default function CurrentState() {
  return (
    <section className='relative w-full py-20 bg-[#F3F4F7] overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-[32px] md:text-[40px] font-bold text-[#1D2530] mb-4'>
            Current State & Operational Gaps
          </h2>
          <p className='text-[16px] md:text-[18px] text-[#65758B] leading-relaxed max-w-3xl mx-auto'>
            Key areas requiring immediate improvement
          </p>
        </div>

        {/* Content Grid */}
        <div className='flex flex-col gap-6 items-center'>
          {/* Top Row - 3 Cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative'>
            {gapItems.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className='bg-white rounded-xl p-8 border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-md transition-shadow duration-300'
              >
                <div className='w-12 h-12 mb-6'>
                  <Image src={item.icon} alt={item.title} width={48} height={48} />
                </div>
                <h3 className='text-xl font-bold text-[#0F1729]/80 mb-2'>{item.title}</h3>
                <p className='text-[#65758B] text-base leading-relaxed'>{item.description}</p>
              </div>
            ))}

            {/* Decorative Gear Image - Hidden on mobile/tablet to avoid overlap */}
            <div className='hidden xl:block absolute -right-20 -top-24 w-64 h-64 z-20'>
              <Image
                src='/images/Templates/template2/section22.svg'
                alt='Gears'
                fill
                className='object-contain'
              />
            </div>
          </div>

          {/* Bottom Row - 2 Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-2/3'>
            {gapItems.slice(3, 5).map((item, index) => (
              <div
                key={index}
                className='bg-white rounded-xl p-8 border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-md transition-shadow duration-300'
              >
                <div className='w-12 h-12 mb-6'>
                  <Image src={item.icon} alt={item.title} width={48} height={48} />
                </div>
                <h3 className='text-xl font-bold text-[#0F1729]/80 mb-2'>{item.title}</h3>
                <p className='text-[#65758B] text-base leading-relaxed'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

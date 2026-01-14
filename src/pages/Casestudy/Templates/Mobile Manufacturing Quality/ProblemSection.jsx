'use client';

import Image from 'next/image';

const challenges = [
  {
    icon: '/images/Templates/template3/hero2icon1.svg',
    title: 'Inability to correlate defects across machining, assembly, and testing stages',
  },
  {
    icon: '/images/Templates/template3/hero2icon2.svg',
    title: 'Delayed root-cause analysis due to lack of unified defect genealogy',
  },
  {
    icon: '/images/Templates/template3/hero2icon3.svg',
    title: 'Inefficient containment of recurring defects',
  },
  {
    icon: '/images/Templates/template3/hero2icon4.svg',
    title: 'Disconnected data between MES, IPQC, and traceability systems',
  },
];

export default function ProblemSection() {
  return (
    <section className='relative w-full py-20 overflow-visible bg-[#EAEDF14D]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Top Content Row */}
        <div className='flex flex-col lg:flex-row justify-between items-start mb-16'>
          <div className='max-w-5xl'>
            <h2 className='text-[28px] lg:text-[36px] font-semibold text-[#1D2530] mb-4'>
              Problem Statement
            </h2>
            <h3 className='text-[16px] lg:text-[20px] font-semibold text-[#1D2530] mb-6'>
              Fragmented Quality Tracking Across Multi-Stage Production
            </h3>
            <p className='text-[#65758B] text-lg leading-relaxed mb-8'>
              The client, a leading phone manufacturer, operates a complex, multi-stage production
              environment involving CNC machines, fixtures, jigs, testing stations, and assembly
              lines running across multiple shifts.
              <br />
              <br />
              Their existing quality control process faced major challenges due to fragmented data
              and limited traceability, resulting in:
            </p>
          </div>

          {/* Floating Illustration - Desktop */}
          <div className='hidden lg:block absolute -right-0 -top-56 w-[450px] h-[350px] pointer-events-none z-50'>
            <Image
              src='/images/Templates/template3/heroimage2.png'
              alt='Production Line Illustration'
              fill
              className='object-contain'
            />
          </div>

          {/* Mobile Image */}
          <div className='lg:hidden w-full h-[250px] relative mb-8'>
            <Image
              src='/images/Templates/template3/heroimage2.png'
              alt='Production Line Illustration'
              fill
              className='object-contain'
            />
          </div>
        </div>

        {/* Challenges Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl'>
          {challenges.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-6 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow'
            >
              <div className='flex-shrink-0 w-12 h-12 relative'>
                <Image src={item.icon} alt='Icon' fill className='object-contain' />
              </div>
              <p className='text-[#1D2530] font-medium text-[16px] leading-snug'>{item.title}</p>
            </div>
          ))}
        </div>

        {/* Impact Banner */}
        <div className='bg-[#EF44440D] border-l-4 border-[#EF4444] rounded-r-xl p-6 max-w-5xl'>
          <p className='text-[#CC1A0E] font-bold text-[16px] lg:text-[20px]'>
            This led to high rework rates, yield loss, and prolonged downtime in identifying &
            resolving process-level quality issues.
          </p>
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';

const impacts = [
  {
    icon: '/images/Templates/template4/ic1.svg',
    title: 'Preventive Compliance',
    before: 'Irregular',
    after: '95% on-time completion',
  },
  {
    icon: '/images/Templates/template4/ic2.svg',
    title: 'Unplanned Downtime',
    before: 'Frequent',
    after: '40% reduction',
  },
  {
    icon: '/images/Templates/template4/ic3.svg',
    title: 'Maintenance Cost',
    before: 'High',
    after: '20% optimization',
  },
  {
    icon: '/images/Templates/template4/ic4.svg',
    title: 'Asset Visibility',
    before: 'Fragmented',
    after: 'Real-time unified dashboard',
  },
];

const outcomes = [
  '40% reduction in unplanned downtime',
  '95% on-time preventive maintenance completion',
  '20% reduction in maintenance costs',
  'Improved asset availability and technician productivity',
];

export default function BusinessImpact() {
  return (
    <section
      className='relative w-full py-20 overflow-hidden'
      style={{ background: 'linear-gradient(180deg, #F6F6F6 0%, #D8FFDC 100%)' }}
    >
      {/* Decorative Background Image - Top Right */}
      <div className='absolute -top-28 right-44 w-[500px] h-[400px] pointer-events-none z-0'>
        <Image
          src='/images/Templates/template4/lastsectionbg.webp'
          alt='Growth Arrow'
          fill
          className='object-contain lg:object-right-top'
        />
      </div>

      <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='text-center max-w-4xl mx-auto mb-16'>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1D2530] mb-4'>Business Impact</h2>
          <p className='text-[#64748B] text-lg'>
            Measurable results that transformed maintenance operations
          </p>
        </div>

        {/* Impact Cards Row - Hardcoded Positions */}
        <div className='flex w-full flex-wrap justify-center mb-16'>
          {/* Card 1 - Green (Low, Z-20) */}
          <div
            className='rounded-2xl mr-4 p-6 shadow-sm flex flex-col justify-between h-[240px] w-[320px] transition-transform hover:-translate-y-1 relative z-20 lg:mt-16'
            style={{ background: 'linear-gradient(180deg, #E3F2E8 0%, #A2F8BF 100%)' }}
          >
            <div>
              <div className='w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-[#16A2491A]'>
                <div className='relative w-5 h-5'>
                  <Image src={impacts[0].icon} alt='Icon' fill className='object-contain' />
                </div>
              </div>
              <h3 className='text-lg font-bold text-[#1D2530] mb-6 leading-tight'>
                {impacts[0].title}
              </h3>
            </div>
            <div className='space-y-2 text-sm'>
              <div className='flex justify-between items-center'>
                <span className='text-[#64748B]'>Before:</span>
                <span className='text-[#EF4444] font-medium'>{impacts[0].before}</span>
              </div>
              <div className='flex justify-between items-center border-t border-gray-200/50 pt-2'>
                <span className='text-[#64748B]'>After:</span>
                <span className='text-[#16A249] font-bold text-right max-w-[60%] leading-tight'>
                  {impacts[0].after}
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 - White (High, Z-0, Tucked Behind) */}
          <div className='rounded-2xl p-6 shadow-md flex flex-col justify-between h-[240px] w-[320px] transition-transform hover:-translate-y-1 relative z-0 bg-white lg:-ml-8'>
            <div>
              <div className='w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-[#16A2491A]'>
                <div className='relative w-5 h-5'>
                  <Image src={impacts[1].icon} alt='Icon' fill className='object-contain' />
                </div>
              </div>
              <h3 className='text-lg font-bold text-[#1D2530] mb-6 leading-tight'>
                {impacts[1].title}
              </h3>
            </div>
            <div className='space-y-2 text-sm'>
              <div className='flex justify-between items-center'>
                <span className='text-[#64748B]'>Before:</span>
                <span className='text-[#EF4444] font-medium'>{impacts[1].before}</span>
              </div>
              <div className='flex justify-between items-center border-t border-gray-200/50 pt-2'>
                <span className='text-[#64748B]'>After:</span>
                <span className='text-[#16A249] font-bold text-right max-w-[60%] leading-tight'>
                  {impacts[1].after}
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 - Green (Low, Z-20, Overlaps 2) */}
          <div
            className='rounded-2xl p-6 shadow-sm flex flex-col justify-between h-[240px] w-[320px] transition-transform hover:-translate-y-1 relative z-20 lg:mt-16 lg:-ml-4'
            style={{ background: 'linear-gradient(180deg, #E3F2E8 0%, #A2F8BF 100%)' }}
          >
            <div>
              <div className='w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-[#16A2491A]'>
                <div className='relative w-5 h-5'>
                  <Image src={impacts[2].icon} alt='Icon' fill className='object-contain' />
                </div>
              </div>
              <h3 className='text-lg font-bold text-[#1D2530] mb-6 leading-tight'>
                {impacts[2].title}
              </h3>
            </div>
            <div className='space-y-2 text-sm'>
              <div className='flex justify-between items-center'>
                <span className='text-[#64748B]'>Before:</span>
                <span className='text-[#EF4444] font-medium'>{impacts[2].before}</span>
              </div>
              <div className='flex justify-between items-center border-t border-gray-200/50 pt-2'>
                <span className='text-[#64748B]'>After:</span>
                <span className='text-[#16A249] font-bold text-right max-w-[60%] leading-tight'>
                  {impacts[2].after}
                </span>
              </div>
            </div>
          </div>

          {/* Card 4 - White (High, Z-30, Overlaps 3) */}
          <div className='rounded-2xl p-6 -bottom-6 shadow-md flex flex-col justify-between h-[240px] w-[320px] transition-transform hover:-translate-y-1 relative z-30 bg-white lg:-ml-4'>
            <div>
              <div className='w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-[#16A2491A]'>
                <div className='relative w-5 h-5'>
                  <Image src={impacts[3].icon} alt='Icon' fill className='object-contain' />
                </div>
              </div>
              <h3 className='text-lg font-bold text-[#1D2530] mb-6 leading-tight'>
                {impacts[3].title}
              </h3>
            </div>
            <div className='space-y-2 text-sm'>
              <div className='flex justify-between items-center'>
                <span className='text-[#64748B]'>Before:</span>
                <span className='text-[#EF4444] font-medium'>{impacts[3].before}</span>
              </div>
              <div className='flex justify-between items-center border-t border-gray-200/50 pt-2'>
                <span className='text-[#64748B]'>After:</span>
                <span className='text-[#16A249] font-bold text-right max-w-[60%] leading-tight'>
                  {impacts[3].after}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quantitative Outcomes Summary Box */}
        <div
          className='rounded-2xl p-8 lg:p-10 shadow-lg border border-white max-w-4xl mx-auto'
          style={{ background: 'linear-gradient(180deg, #F6F6F6 0%, #D8FFDC 100%)' }}
        >
          <h3 className='text-xl font-bold text-[#1D2530] mb-6'>Quantitative Outcomes</h3>
          <div className='space-y-3'>
            {outcomes.map((outcome, index) => (
              <div key={index} className='flex items-start gap-3'>
                <div className='flex-shrink-0 mt-1'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='10' cy='10' r='9' stroke='#16A249' strokeWidth='1.5' />
                    <path
                      d='M6 10L9 13L14 7'
                      stroke='#16A249'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <p className='text-[#4B5563] font-medium text-lg'>{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

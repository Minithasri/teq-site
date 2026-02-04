'use client';

import Image from 'next/image';

export default function Challenges() {
  return (
    <section className='relative w-full py-20 overflow-hidden '>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/template2/section2bg.webp'
          alt='Circuit Background'
          fill
          className='object-cover scale-105'
        />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl lg:text-4xl font-bold text-white mb-4'>The Challenge</h2>
          <p className='text-lg text-white/90'>Inconsistent Production Tracking and Yield Loss</p>
        </div>

        {/* Challenge Card */}
        <div className='bg-white rounded-2xl p-8 lg:p-12 shadow-xl border-l-8 border-[#EF4444]'>
          {/* Description Row */}
          <div className='flex flex-col lg:flex-row gap-6 mb-12'>
            <div className='flex-shrink-0'>
              <div className='w-16 h-16 relative'>
                {/* Using the specified icon */}
                <Image
                  src='/images/Templates/template2/section21.svg'
                  alt='Challenge Icon'
                  width={64}
                  height={64}
                />
              </div>
            </div>
            <div>
              <p className='text-[#1D2530] text-[16px] leading-relaxed'>
                The client, an electronics components manufacturing and assembly company, faced
                frequent unplanned downtime in packaging operations, along with manual data entry
                errors and limited visibility into production performance. The absence of real-time
                monitoring made it difficult to track machine utilization, identify bottlenecks, and
                control yield losses effectively.
              </p>
            </div>
          </div>

          {/* Grid Issues */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {[
              'Production efficiency and OEE were below target',
              'Bottleneck detection and performance tracking were reactive',
              'Manual reporting consumed significant operator time',
              'Lack of predictive insights hindered proactive maintenance and scheduling',
            ].map((issue, index) => (
              <div key={index} className='bg-[#F3F4F6] rounded-xl p-6 flex items-start gap-3'>
                <div className='w-2 h-2 rounded-full bg-[#EF4444] mt-2 flex-shrink-0' />
                <p className='text-[#8D4949] text-sm font-medium'>{issue}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Result Banner */}
        <div className='mt-8 bg-[#EF4444] rounded-xl py-4 px-6 text-center shadow-lg mx-auto max-w-4xl'>
          <p className='text-white font-medium text-lg'>
            Result: Reduced throughput, delayed delivery, and increased operational costs
          </p>
        </div>
      </div>
    </section>
  );
}

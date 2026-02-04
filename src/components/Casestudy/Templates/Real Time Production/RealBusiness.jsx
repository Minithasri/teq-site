'use client';

import Image from 'next/image';

export default function RealBusiness() {
  const impacts = [
    {
      icon: '/images/Templates/template1/real1.svg',
      title: 'Reporting Latency',
      value: 'Shift-end → Real-time',
      description: 'From delayed post-shift reports to instant live visibility',
    },
    {
      icon: '/images/Templates/template1/real2.svg',
      title: 'Downtime Transparency',
      value: 'Instant Logging',
      description: 'Logged instantly with cause tagging and tracking',
    },
    {
      icon: '/images/Templates/template1/real3.svg',
      title: 'Productivity',
      value: '10-15% ↑',
      description: 'Via faster intervention and proactive management',
    },
    {
      icon: '/images/Templates/template1/real4.svg',
      title: 'Manual Effort',
      value: '90% Reduction',
      description: 'Automated data capture eliminates manual logging',
    },
    {
      icon: '/images/Templates/template1/real5.svg',
      title: 'On-Time Delivery',
      value: 'Improved',
      description: 'Enhanced through live tracking and predictive insights',
    },
    {
      icon: '/images/Templates/template1/real6.svg',
      title: 'Response Time',
      value: 'Minutes',
      description: 'Supervisors now react within minutes, not next day',
    },
  ];

  return (
    <section
      className='relative w-full py-20'
      style={{
        background: 'linear-gradient(180deg, #F9FAFB 0%, #B6F58F21 50%, #F9FAFB 100%)',
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='flex flex-col lg:flex-row justify-between items-start mb-12'>
          {/* Header */}
          <div className='max-w-7xl'>
            <h2 className='text-[28px] lg:text-[36px] font-bold text-[#1D2530] mb-4'>
              Real Business Impact
            </h2>
            <p className='text-[16px] text-[#65758B]'>
              Quantifiable improvements across key operational metrics, delivering measurable value
              to production efficiency and bottom-line results.
            </p>
          </div>

          {/* Decorative Image */}
          <div className='absolute top-0 -right-20 w-64 h-64 lg:-mt-48 lg:mr-12 pointer-events-none'>
            <Image
              src='/images/Templates/template1/bike2.svg'
              alt='Growth Chart'
              fill
              className='object-contain'
            />
          </div>
        </div>

        {/* Impact Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 relative z-10'>
          {impacts.map((impact, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300'
            >
              <div className='flex items-center gap-3 mb-4'>
                <div className='flex-shrink-0 w-12 h-12 bg-[#22C55E] rounded-xl flex items-center justify-center'>
                  <Image
                    src={impact.icon}
                    alt={impact.title}
                    width={16}
                    height={16}
                    className='w-8 h-8'
                  />
                </div>
                <h3 className='text-[#1D2530]  text-[20px]'>{impact.title}</h3>
              </div>

              <div className='mb-2'>
                <span className='text-[#0846AA] font-bold text-[18px] block'>{impact.value}</span>
              </div>

              <p className='text-[16px] text-[#65758B] leading-relaxed'>{impact.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className='max-w-4xl mx-auto'>
          <div
            className='rounded-xl py-6 px-8 flex items-center justify-center gap-3 shadow-sm'
            style={{
              background: 'linear-gradient(90deg, #FBBD23 0%, #F59F0A 100%)',
            }}
          >
            <p className='text-[#1F2937] font-bold text-lg text-center'>
              Supervisors now react within minutes, not next day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

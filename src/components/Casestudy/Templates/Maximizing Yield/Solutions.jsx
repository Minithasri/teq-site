'use client';

import Image from 'next/image';

const solutions = [
  {
    icon: '/images/Templates/template2/sec32.svg',
    title: 'Operational Visibility',
    bgColor: 'bg-[#0846AA1A]',
    features: [
      'Real-time monitoring of machine performance and yield trends',
      'Integration with line sensors and PLC data for live updates',
    ],
  },
  {
    icon: '/images/Templates/template2/sec33.svg',
    title: 'Predictive Analytics',
    bgColor: 'bg-[#11B7D41A]',
    features: [
      'Identify defect trends and forecast yield variations',
      'Early alerts for process deviations and bottlenecks',
    ],
  },
  {
    icon: '/images/Templates/template2/sec34.svg',
    title: 'Optimization & Reporting',
    bgColor: 'bg-[#D411111A]',
    features: [
      'Load balancing and optimized scheduling based on utilization data',
      'Unified KPI dashboards for production, WIP, and quality metrics',
    ],
  },
];

export default function Solutions() {
  return (
    <section className='relative w-full py-20 bg-[#F6F6F6] overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header and Floating Image */}
        <div className='flex flex-col lg:flex-row justify-between items-start mb-16 relative'>
          <div className='max-w-2xl'>
            <h2 className='text-[32px] md:text-[40px] font-bold text-[#1D2530] mb-4'>
              Strategic Solution Requirements
            </h2>
            <p className='text-[16px] md:text-[18px] text-[#65758B] leading-relaxed'>
              Building a comprehensive analytics framework
            </p>
          </div>

          {/* Floating Chart Image - Hidden on mobile/tablet to avoid overlap */}
          <div className='hidden xl:block absolute right-0 -top-8 w-[500px] h-[300px] pointer-events-none z-0'>
            <Image
              src='/images/Templates/template2/sec31.webp'
              alt='Analytics Dashboard'
              fill
              className='object-contain object-right-top'
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20'>
          {solutions.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300'
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.bgColor}`}
              >
                <Image src={item.icon} alt={item.title} width={28} height={28} />
              </div>

              <h3 className='text-xl font-bold text-[#1D2530] mb-6'>{item.title}</h3>

              <div className='space-y-4'>
                {item.features.map((feature, idx) => (
                  <p key={idx} className='text-[#65758B] text-base leading-relaxed'>
                    {feature}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

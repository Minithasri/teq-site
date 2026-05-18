'use client';

import Image from 'next/image';

const impacts = [
  {
    icon: '/images/Templates/gsk/gsvg9.svg',
    metric: '~25%',
    subtitle: 'Reduction in unnecessary license costs',
    description:
      'Eliminated over-provisioned and unused licenses, driving significant cost savings.',
  },
  {
    icon: '/images/Templates/gsk/gsvg10.svg',
    metric: '~40%',
    subtitle: 'Decrease in manual effort & reporting time',
    description: 'Automated data pipelines replaced time-intensive manual processes.',
  },
  {
    icon: '/images/Templates/gsk/gsvg11.svg',
    metric: 'Proactive',
    subtitle: 'Inactive account identification',
    description: 'Real-time detection and flagging of dormant accounts across the enterprise.',
  },
  {
    icon: '/images/Templates/gsk/gsvg12.svg',
    metric: 'Data-Driven',
    subtitle: 'Decision-making for cost optimization',
    description: 'Executive dashboards enabling strategic, evidence-based license management.',
  },
];

export default function BusinessImpact() {
  return (
    <section
      className='w-full'
      style={{ background: 'linear-gradient(180deg, #FCFBF8 0%, #F3F5F7 100%)' }}
    >
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-8 md:py-10'>
        {/* Title */}
        <h2 className='text-2xl md:text-3xl font-bold mb-3' style={{ color: '#3FC91C' }}>
          Business Impact
        </h2>

        {/* Description */}
        <p
          className='text-sm sm:text-[15px] leading-relaxed mb-8 md:mb-10 max-w-7xl'
          style={{ color: '#6C7C93' }}
        >
          The solution delivered measurable outcomes across cost optimization, operational
          efficiency, and compliance enabling the organization to take a proactive stance on license
          management.
        </p>

        {/* 2×2 Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6'>
          {impacts.map((item, i) => (
            <div
              key={i}
              className='bg-white rounded-2xl p-6 flex flex-col gap-3'
              style={{ border: '2px solid #3FC91C' }}
            >
              {/* Icon + metric row */}
              <div className='flex items-center gap-3'>
                {/* Icon box */}
                <div
                  className='flex-shrink-0 w-10 h-10 rounded-[10px] flex items-center justify-center'
                  style={{ backgroundColor: '#3FC91C' }}
                >
                  <Image
                    src={item.icon}
                    alt={item.metric}
                    width={22}
                    height={22}
                    className='brightness-0 invert'
                  />
                </div>

                {/* Metric / keyword */}
                <span
                  className='text-xl md:text-2xl font-bold leading-none'
                  style={{ color: '#3FC91C' }}
                >
                  {item.metric}
                </span>
              </div>

              {/* Subtitle */}
              <p className='text-sm md:text-[16px] font-semibold' style={{ color: '#1D2530' }}>
                {item.subtitle}
              </p>

              {/* Description */}
              <p
                className='text-[13px] md:text-[14px] leading-relaxed'
                style={{ color: '#6C7C93' }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

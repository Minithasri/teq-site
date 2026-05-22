'use client';

import Image from 'next/image';

export default function BusinessImpact() {
  const impacts = [
    {
      icon: '/images/Templates/style_bazaar/stylesvg14.svg', // Assuming appropriate icons
      stat: '90%',
      label: 'Reduction in Manual Reporting',
      description:
        'Replaced 15+ manual Excel reports with automated dashboards across all departments.',
    },
    {
      icon: '/images/Templates/style_bazaar/stylesvg15.svg',
      stat: '75%',
      label: 'Improved Data Accuracy',
      description:
        'Standardized KPIs and automated validation eliminated inconsistencies across teams.',
    },
    {
      icon: '/images/Templates/style_bazaar/stylesvg16.svg',
      stat: '85%',
      label: 'Faster Insight Availability',
      description: 'Reduced reporting latency from weekly to daily updates for all stakeholders.',
    },
    {
      icon: '/images/Templates/style_bazaar/home.svg',
      stat: '70%',
      label: 'Increased Operational Visibility',
      description: 'Real-time performance monitoring across 100+ retail stores nationwide.',
    },
  ];

  return (
    <section className='relative w-full flex flex-col overflow-hidden'>
      {/* Top Header Section (White Background) */}
      <div className='w-full bg-white py-12 md:py-16'>
        <div className='max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24'>
          <div className='mb-0'>
            <h2 className='font-semibold mb-4 tracking-[1.32px] text-2xl md:text-3xl text-[#262626]'>
              Business Impact
            </h2>
            <h3 className='font-medium mb-6 text-xl md:text-2xl text-[#262626]'>
              Measurable Business Outcomes
            </h3>
            <p className='max-w-5xl text-lg leading-relaxed text-[#6B7280]'>
              The new analytics platform significantly improved operational visibility and reporting
              efficiency — enabling leadership teams to make faster, data-driven decisions with
              greater confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Content Section with Background Image */}
      <div className='relative w-full py-16 md:py-20'>
        {/* Full-width Background Image */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Templates/style_bazaar/style_i4.png'
            alt='Store background'
            fill
            className='object-cover'
          />
        </div>

        <div className='relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24'>
          <div className='flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch'>
            {/* Stats Grid */}
            <div className='w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-6'>
              {impacts.map((item, index) => (
                <div
                  key={index}
                  className='bg-white border-2 border-[#F5F5F5] rounded-[24px] p-6 md:p-8 flex flex-col shadow-sm'
                >
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='p-2 rounded-full border border-[#18C612] flex items-center justify-center'>
                      <Image
                        src={item.icon}
                        alt=''
                        width={24}
                        height={24}
                        className='object-contain'
                      />
                    </div>
                    <span className='font-bold text-5xl md:text-6xl text-[#18C612] tracking-tight'>
                      {item.stat}
                    </span>
                  </div>
                  <h4 className='font-medium mb-6 text-sm md:text-base text-[#262626]'>
                    {item.label}
                  </h4>
                  <p className='text-xs md:text-sm leading-relaxed text-[#6B7280]'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Side Image */}
            <div className='w-full lg:w-[35%] flex-shrink-0'>
              <div className='relative w-full h-full min-h-[400px] rounded-[24px] overflow-hidden shadow-lg'>
                <Image
                  src='/images/Templates/style_bazaar/style_i5.png'
                  alt='Digital store display'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

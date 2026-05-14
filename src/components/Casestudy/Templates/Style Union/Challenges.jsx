'use client';

import Image from 'next/image';

export default function Challenges() {
  const challenges = [
    {
      icon: '/images/Templates/style_union/unionsvg1.svg',
      title: 'Reporting Delays',
      description:
        'Weekly Excel-based reports caused significant delays in decision-making, leaving leadership without timely insights.',
    },
    {
      icon: '/images/Templates/style_union/unionsvg2.svg',
      title: 'Data Inconsistencies',
      description:
        'Manual consolidation across POS, e-commerce, and supply chain systems introduced frequent errors and discrepancies.',
    },
    {
      icon: '/images/Templates/style_union/unionsvg3.svg',
      title: 'Limited Visibility',
      description:
        'No unified view of online and offline sales performance made it impossible to understand true omnichannel metrics.',
    },
    {
      icon: '/images/Templates/style_union/unionsvg4.svg',
      title: 'Data Silos',
      description:
        'Data distributed across multiple systems prevented teams from gaining a complete view of sales, inventory, and customer behavior.',
    },
    {
      icon: '/images/Templates/style_union/unionsvg5.svg',
      title: 'Manual Consolidation Errors',
      description:
        'Combining POS, supply chain, and e-commerce data manually created reporting errors that undermined trust in analytics.',
    },
    {
      icon: '/images/Templates/style_union/unionsvg6.svg',
      title: 'Inventory Blind Spots',
      description:
        'Lack of real-time inventory visibility led to stock-outs and overstock situations across channels.',
    },
  ];

  return (
    <section className='relative w-full bg-white pt-16 pb-0 overflow-hidden'>
      {/* Top Header Section */}
      <div className='max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 text-center mb-16'>
        <h2 className='text-[#EF492B] font-bold text-lg md:text-2xl lg:text-3xl uppercase tracking-widest mb-4'>
          THE CHALLENGE
        </h2>
        <h3 className='text-[#131720] text-xl md:text-2xl lg:text-3xl mb-8 leading-tight'>
          Fragmented Data, Delayed Decisions
        </h3>
        <p className='text-[#6B7280] text-sm md:text-base lg:text-lg max-w-9xl mx-auto leading-relaxed'>
          The organization relied on multiple manually prepared Excel reports refreshed weekly,
          causing delays and inconsistencies in reporting across critical business functions.
        </p>
      </div>

      {/* Cards with Background Image Section */}
      <div className='relative w-full py-16 md:py-24'>
        {/* Full-width Background Image */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Templates/style_union/union1.png'
            alt='Store background'
            fill
            className='object-cover opacity-100'
          />
          {/* Subtle overlay to improve readability if needed */}
          <div className='absolute inset-0 bg-white/10' />
        </div>

        <div className='relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
            {challenges.map((item, index) => (
              <div
                key={index}
                className='bg-white rounded-[20px] p-8 border-[2px] border-[#FC7979] border-opacity-50 shadow-lg flex flex-col h-full hover:shadow-xl transition-all duration-300'
              >
                {/* Header: Icon + Title */}
                <div className='flex items-center gap-5 mb-6'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-xl border-[1px] border-[#FC7979] flex items-center justify-center bg-[#FFF5F5]'>
                    <Image
                      src={item.icon}
                      alt=''
                      width={24}
                      height={24}
                      className='object-contain'
                    />
                  </div>
                  <h4 className='text-[#EE462A] font-bold text-lg md:text-xl leading-snug'>
                    {item.title}
                  </h4>
                </div>
                {/* Description */}
                <p className='text-[#6B7280] text-sm md:text-base leading-relaxed'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

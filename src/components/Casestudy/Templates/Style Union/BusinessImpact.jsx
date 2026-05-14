'use client';

import Image from 'next/image';

export default function BusinessImpact() {
  const impacts = [
    {
      title: 'Omnichannel Visibility',
      stat: '80%',
      description:
        'Unified online and offline data into a single analytics platform, providing a holistic view across all channels.',
      icon: '/images/Templates/style_union/unionsvg15.svg', // Assuming pattern or using standard icons
    },
    {
      title: 'Reporting Effort Reduced',
      stat: '80%',
      description:
        'Automated data pipelines eliminated manual reporting, enabling teams to focus on strategic activities.',
      icon: '/images/Templates/style_union/unionsvg16.svg',
    },
    {
      title: 'Secure Role-Based Access',
      stat: '100%',
      description:
        'PDP permissions ensured every user sees only the data relevant to their role and department.',
      icon: '/images/Templates/style_union/unionsvg17.svg',
    },
    {
      title: 'Inventory Planning Accuracy',
      stat: '65%',
      description:
        'Improved planning accuracy significantly reduced stock-outs and overstock situations across all channels.',
      icon: '/images/Templates/style_union/unionsvg18.svg',
    },
  ];

  return (
    <section className='relative w-full bg-white pt-20 overflow-hidden'>
      {/* Header Section */}
      <div className='max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 text-center mb-16'>
        <h2 className='text-[#23DD12] font-bold text-lg md:text-2xl lg:text-3xl uppercase tracking-widest mb-4'>
          BUSINESS IMPACT
        </h2>
        <h3 className='text-[#000000] font-bold text-3xl md:text-4xl lg:text-5xl mb-8'>
          Measurable Business Transformation
        </h3>
        <p className='text-[#6B7280] text-sm md:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed'>
          The unified analytics platform significantly improved operational visibility and data
          reliability across the retail organization.
        </p>
      </div>

      {/* Cards with Background Section */}
      <div className='relative w-full py-16 md:py-24'>
        {/* Full-width Background Image */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Templates/style_union/union4.png'
            alt='Business impact background'
            fill
            className='object-cover'
          />
          {/* Overlay to darken slightly if needed for better contrast */}
          <div className='absolute inset-0 bg-black/20' />
        </div>

        <div className='relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
            {impacts.map((item, index) => (
              <div
                key={index}
                className='bg-white/95 backdrop-blur-sm rounded-[24px] p-8 md:p-10 border-[2px] border-[#23DD12] border-opacity-30 shadow-xl flex flex-col h-full transition-all duration-300 hover:scale-[1.02]'
              >
                {/* Card Header: Icon + Title + Stat */}
                <div className='flex justify-between items-start mb-8'>
                  <div className='flex gap-5 items-center'>
                    <div className='w-14 h-14 rounded-xl border border-[#23DD12] flex items-center justify-center bg-[#F0FFF0]'>
                      <Image
                        src={item.icon}
                        alt=''
                        width={28}
                        height={28}
                        className='object-contain'
                      />
                    </div>
                    <h4 className='text-[#131720] font-bold text-xl md:text-2xl max-w-[200px] leading-tight'>
                      {item.title}
                    </h4>
                  </div>
                  <div className='text-[#23DD12] text-4xl md:text-5xl lg:text-6xl tracking-tight'>
                    {item.stat}
                  </div>
                </div>

                {/* Description */}
                <p className='text-[#4B5563] text-sm md:text-base lg:text-lg leading-relaxed font-medium'>
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

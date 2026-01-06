'use client';

import Image from 'next/image';

export default function WhyGwc() {
  const features = [
    {
      icon: '/images/AboutUs/icon61.svg',
      title: 'Proven ROI',
      description:
        'GWC takes a strategic, ROI driven approach by identifying gaps and solving high impact business challenges.',
    },
    {
      icon: '/images/AboutUs/icon62.svg',
      title: 'Trusted Expertise',
      description:
        'Our team consists of seasoned experts with deep knowledge of data analytics and AI.',
    },
    {
      icon: '/images/AboutUs/icon63.svg',
      title: 'Pioneering Innovation',
      description: 'We leverage the latest advancements to deliver a strong competitive edge.',
    },
    {
      icon: '/images/AboutUs/icon64.svg',
      title: 'Bespoke Solutions',
      description: 'Every solution is tailored to maximize the unique potential of your data.',
    },
  ];

  return (
    <section className='relative w-full py-20 overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/AboutUs/section6_bg.png'
          alt=''
          fill
          className='object-cover'
          priority
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Heading */}
        <h2 className='text-[40px] font-semibold text-white text-center mb-16'>
          Why choose GWC Data.AI?
        </h2>

        {/* Features Grid */}
        <div className='relative'>
          {/* Center Glow Effect */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl' />

          {/* Grid Layout */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-16 max-w-5xl mx-auto relative'>
            {features.map((feature, index) => (
              <div key={index} className='flex flex-col items-center text-center'>
                {/* Icon with Gradient Border */}
                <div className='relative w-16 h-16 mb-6 flex items-center justify-center'>
                  {/* Gradient Border Wrapper
                     - The background here is the "Border Color"
                     - padding: '2px' defines the Border Width
                  */}
                  <div
                    className='absolute inset-0 rounded-2xl border-2 border-[#EFEDFDB2]'
                    style={{
                      background: '',
                      padding: '2px',
                    }}
                  >
                    {/* Inner Circle
                       - We use a solid dark color (#10051D) to cover the center.
                       - This creates the illusion of a border.
                       - If we used 'transparent', the gradient would fill the whole circle.
                    */}
                    <div
                      className='w-full h-full rounded-full flex items-center justify-center'
                      style={{
                        backgroundColor: '', // Solid dark color to match theme
                      }}
                    >
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={32}
                        height={32}
                        className='object-contain'
                      />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className='text-[16px] font-semibold mb-3' style={{ color: '#F4F0FF' }}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className='text-[16px] leading-relaxed max-w-xs' style={{ color: '#EFEDFDB2' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Icon (Hidden behind/between grid items) */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 hidden md:flex items-center justify-center'>
            <div className='w-20 h-20 rounded-full bg-purple-600/40 backdrop-blur-sm flex items-center justify-center'>
              <Image
                src='/images/AboutUs/icon61.svg'
                alt=''
                width={40}
                height={40}
                className='opacity-60'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

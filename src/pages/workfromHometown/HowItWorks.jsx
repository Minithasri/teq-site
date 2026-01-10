'use client';

import Image from 'next/image';

const steps = [
  {
    id: 1,
    title: 'GWC Offices Near Hometown',
    description:
      'Access the latest technology and secure platforms to carry out your work efficiently from the comfort of offices in your hometown.',
    icon: '/images/WFH/wfh1.svg',
  },
  {
    id: 2,
    title: 'Flexibility',
    description:
      'Enjoy a flexible work schedule that suits your lifestyle, allowing you to be more productive while managing your commitments.',
    icon: '/images/WFH/wfh2.svg',
  },
  {
    id: 3,
    title: 'Supportive Environment',
    description:
      'Fosters a supportive and collaborative virtual environment, ensuring you have the resources and support needed for success.',
    icon: '/images/WFH/wfh3.svg',
  },
];

const HowItWorks = () => {
  return (
    <section className='w-full bg-white py-20 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        {/* Header */}
        <div className='text-center mb-20'>
          <h2 className='text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4'>How it works</h2>
        </div>

        {/* Steps Container */}
        <div className='relative'>
          {/* Dashed Connecting Line (Desktop) */}
          <div className='hidden md:block absolute top-[40px] left-0 right-0 h-[300px] z-0 pointer-events-none'>
            <svg className='w-full h-full' preserveAspectRatio='none' viewBox='0 0 1200 300'>
              <path
                d='M 200,60 C 400,60 400,230 600,180 S 800,30 1000,30'
                fill='none'
                stroke='#D4C5E0'
                strokeWidth='2'
                strokeDasharray='10 10'
              />
            </svg>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10'>
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col items-center text-center group transition-all duration-500 ${
                  index === 0 ? 'md:mt-4' : index === 1 ? 'md:mt-36' : 'md:mt-0'
                }`}
              >
                {/* Icon Container */}
                <div
                  className='relative w-[120px] h-[120px] mb-8 transition-transform duration-300 group-hover:-translate-y-2 flex items-center justify-center rounded-2xl shadow-lg'
                  style={{ backgroundColor: '#5E2677' }}
                >
                  <div className='relative w-[60px] h-[60px]'>
                    <Image src={step.icon} alt={step.title} fill className='object-contain' />
                  </div>
                </div>

                {/* Content */}
                <div className='bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 rounded-xl'>
                  <h3 className='text-xl font-bold text-[#1A1A1A] mb-3'>{step.title}</h3>
                  <p className='text-[#666666] text-sm leading-relaxed max-w-[280px] mx-auto'>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

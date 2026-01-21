'use client';

import Image from 'next/image';

const features = [
  {
    title: 'Cloud-Native iPaaS',
    description: '100% low-code, scalable, and future ready platform for seamless integrations.',
    icon: '/images/boo1.svg',
  },
  {
    title: 'Certified Expertise',
    description: '1000+ integrations delivered across industries using proven methodologies.',
    icon: '/images/boo2.svg',
  },
  {
    title: 'AI Infused Services',
    description: 'Smarter automation from error resolution to intelligent customer experiences.',
    icon: '/images/boo3.svg',
  },
  {
    title: 'Accelerated Delivery and Ownership',
    description:
      '70% faster deployments with end to end lifecycle management from strategy to managed services.',
    icon: '/images/boo4.svg',
  },
];

const WhyBoomi = () => {
  return (
    <section className='w-full bg-white py-12 md:py-16 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Title Section */}
        <div className='text-center mb-6 -mb-12'>
          <h2 className='text-[28px] md:text-[32px] font-medium text-[#5C2B8F] mb-2'>
            Why Boomi with GWC?
          </h2>
          <p className='text-[#404040] text-[24px] md:text-[32px] font-medium'>
            Intelligence that drives real impact
          </p>
        </div>

        {/* Central Visual Section */}
        <div className='relative w-full flex justify-center items-center my-6 min-h-[350px] md:min-h-[550px]'>
          {/* Background Circle Image */}
          <div className='absolute inset-0 flex justify-center items-center z-0'>
            <div className='relative w-[600px] h-[600px] md:w-[1000px] md:h-[1000px]'>
              <Image
                src='/images/HomePage/circle_big.png'
                alt='Background Pattern'
                fill
                className='object-contain opacity-60'
              />
            </div>
          </div>

          {/* Main Image */}
          <div className='relative z-10 w-full max-w-[900px]'>
            <Image
              src='/images/partners/boomi/img2.png'
              alt='Boomi Ecosystem'
              width={900}
              height={500}
              className='w-full h-auto object-contain'
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl -mt-24 mx-auto'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='group flex items-center gap-4 px-6 py-4 rounded-[100px] bg-white transition-all duration-300'
              style={{
                background:
                  'linear-gradient(white, white) padding-box, linear-gradient(90deg, #7785F4 0%, #E67582 100%) border-box',
                border: '1.5px solid transparent',
                boxShadow: '0px 4px 20px rgba(111, 43, 139, 0.05)',
              }}
            >
              <div className='shrink-0 w-8 h-8 flex items-center justify-center'>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={28}
                  height={28}
                  className='w-full h-full object-contain'
                />
              </div>
              <div>
                <h4 className='text-[#1F1F1F] font-bold text-[18px] mb-2'>{feature.title}</h4>
                <p className='text-[#666666] text-[14px] leading-relaxed'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBoomi;

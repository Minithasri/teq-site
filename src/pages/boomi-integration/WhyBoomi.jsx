'use client';

import Image from 'next/image';

const features = [
  {
    title: 'Cloud-Native iPaaS',
    description: '100% low-code, scalable, and future-ready platform for seamless integrations.',
    icon: '/images/boo1.svg',
  },
  {
    title: 'Certified Expertise',
    description: '1000+ integrations delivered across industries with proven methodologies.',
    icon: '/images/boo2.svg',
  },
  {
    title: 'AI-Infused Services',
    description: 'From error resolution to customer service automation powered by advanced AI.',
    icon: '/images/boo3.svg',
  },
  {
    title: 'Accelerated Delivery',
    description: '70% faster deployment with our frameworks & proprietary accelerators.',
    icon: '/images/boo4.svg',
  },
  {
    title: 'End-to-End Ownership',
    description: 'Complete lifecycle management from strategy to managed services.',
    icon: '/images/boo5.svg',
  },
];

const WhyBoomi = () => {
  return (
    <section className='w-full bg-white py-16 md:py-28 mt-12 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Title Section */}
        <div className='text-center mb-16 md:mb-20'>
          <div className='flex items-center justify-center gap-3 mb-4'>
            <h2 className='text-[28px] md:text-[32px] font-medium text-[#5C2B8F]'>
              Why Boomi with GWC?
            </h2>
            <Image
              src='/images/partners/boomi/Spark.svg'
              alt='Spark'
              width={32}
              height={32}
              className='w-6 h-6 md:w-8 md:h-8'
            />
          </div>
          <p className='text-[#404040] text-[24px] md:text-[32px] font-medium'>
            Intelligence that drives real impact
          </p>
        </div>

        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-20'>
          {/* Left Image Section */}
          <div className='w-full lg:w-1/2 flex justify-center'>
            <div className='relative w-full max-w-[500px] aspect-square'>
              <Image
                src='/images/partners/boomi/bleft1.png'
                alt='Why Boomi with GWC'
                fill
                className='object-contain'
                priority
              />
            </div>
          </div>

          {/* Right Features List */}
          <div className='w-full lg:w-[70%] space-y-4'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='group flex items-start gap-4 p-4 rounded-full bg-white hover:shadow-lg transition-all duration-300'
                style={{
                  background:
                    'linear-gradient(white, white) padding-box, linear-gradient(90deg, #E67582 0%, #7785F4 100%) border-box',
                  border: '1px solid transparent',
                  boxShadow: '0px 4px 20px rgba(111, 43, 139, 0.05)',
                }}
              >
                <div className='shrink-0 w-10 h-10 flex items-center justify-center mt-1'>
                  <Image src={feature.icon} alt='' width={24} height={24} className='w-6 h-6' />
                </div>
                <div>
                  <h4 className='text-[#5C2B8F] font-bold text-[16px] mb-1'>{feature.title}</h4>
                  <p className='text-[#404040] text-[14px] leading-relaxed opacity-80'>
                    {feature.description}
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

export default WhyBoomi;

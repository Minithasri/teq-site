'use client';

import Image from 'next/image';

const features = [
  {
    text: 'Cloud native, 100% low code, scalable integrations.',
    icon: '/images/boo1.svg',
  },
  {
    text: 'Streamlined workflows tailored to your business',
    icon: '/images/boo2.svg',
  },
  {
    text: 'Reduced manual effort with intelligent automation',
    icon: '/images/boo3.svg',
  },
  {
    text: 'Scalable solutions backed by GWC expertise',
    icon: '/images/boo4.svg',
  },
  {
    text: 'Scalable solutions backed by GWC expertise',
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
          <div className='w-full lg:w-1/2 space-y-5'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='group flex items-center gap-5 p-4 md:p-5 rounded-full border border-purple-100 bg-white hover:shadow-lg hover:border-purple-200 transition-all duration-300'
                style={{
                  boxShadow: '0px 4px 20px rgba(111, 43, 139, 0.05)',
                }}
              >
                <div className='shrink-0 w-10 h-10 flex items-center justify-center'>
                  <Image src={feature.icon} alt='' width={24} height={24} className='w-6 h-6' />
                </div>
                <p className='text-[#404040] font-semibold text-sm md:text-[15px] leading-snug'>
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBoomi;

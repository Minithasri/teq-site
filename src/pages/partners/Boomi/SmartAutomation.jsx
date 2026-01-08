'use client';

import Image from 'next/image';

const features = [
  'GWC powered Boomi integrations for faster deployments',
  'Streamlined workflows tailored to your business',
  'Reduced manual effort with intelligent automation',
  'Scalable solutions backed by GWC expertise',
];

const SmartAutomation = () => {
  return (
    <section className='w-full bg-white py-16 md:py-24 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Title */}
        <div className='flex items-center justify-center gap-3 mb-16 md:mb-20'>
          <h2 className='text-3xl md:text-4xl font-bold text-[#5C2B8F] text-center'>
            Smart Automation with GWC & Boomi
          </h2>
          <Image
            src='/images/partners/boomi/Spark.svg'
            alt='Spark'
            width={32}
            height={32}
            className='w-6 h-6 md:w-8 md:h-8'
          />
        </div>

        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-20'>
          {/* Left Image Section */}
          <div className='w-full lg:w-1/2 flex justify-center'>
            <div className='relative w-full max-w-[500px] aspect-square'>
              <Image
                src='/images/partners/boomi/bleft1.png'
                alt='Smart Automation Illustration'
                fill
                className='object-contain'
                priority
              />
            </div>
          </div>

          {/* Right Features List */}
          <div className='w-full lg:w-1/2 space-y-6'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='group flex items-center gap-4 p-4 md:p-6 rounded-full border border-purple-200 bg-white hover:shadow-md transition-shadow duration-300'
                style={{
                  boxShadow: '0px 2px 10px rgba(111, 43, 139, 0.05)',
                }}
              >
                <div className='shrink-0'>
                  <Image
                    src='/images/partners/boomi/Spark.svg'
                    alt='Spark'
                    width={20}
                    height={20}
                    className='w-5 h-5 md:w-6 md:h-6'
                  />
                </div>
                <p className='text-[#404040] font-semibold text-sm md:text-base leading-snug'>
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartAutomation;

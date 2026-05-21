'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='relative w-full min-h-[400px] md:min-h-[500px] bg-[#051121] flex items-center py-6 md:py-8 px-6 md:px-8 lg:px-12 overflow-hidden'>
      {/* Background Image with Opacity */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/customdashboard/cd1.png'
          alt='Hero Background'
          fill
          className='object-cover opacity-20'
          priority
        />
      </div>

      <div className='max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center gap-12'>
        {/* Left Content */}
        <div className='flex-1 text-left'>
          <h1
            className='font-bold leading-[1.2] mb-10'
            style={{ color: '#E8EAEE', fontSize: '56px' }}
          >
            AI-Enabled Safety Analytics & <br />
            <span style={{ color: '#E8EAEE' }}>Custom Dashboard</span> Solution
          </h1>

          <p className='w-full leading-relaxed' style={{ color: '#E8EAEEB2', fontSize: '18px' }}>
            Transforming complex safety data into actionable, AI-powered insights enabling faster
            decisions, proactive risk management, and a measurably safer operational environment.
          </p>
        </div>

        {/* Right Side Image Card */}
        <div className='relative w-[1500px] sm:w-[250px] lg:w-[350px] aspect-[4/3] flex-shrink-0 lg:-right-32'>
          <div className='relative w-full h-full rounded-[20px] lg:rounded-[40px] overflow-hidden'>
            <Image
              src='/images/Templates/customdashboard/cd2.png'
              alt='Dashboard in Action'
              fill
              className='object-cover'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

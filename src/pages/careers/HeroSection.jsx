'use client';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className='relative w-full min-h-[600px] lg:min-h-[750px] flex items-center overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Careers/hero_main_bg.png'
          alt='Background'
          fill
          className='object-cover'
          priority
        />
      </div>

      {/* Content Container */}
      <div className='relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center'>
        {/* Grid Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 w-full h-full items-center'>
          {/* Left Content - Text Area */}
          <div className='lg:col-span-8 space-y-6 lg:space-y-8 py-20 lg:py-0 relative z-20'>
            <h1
              className='text-white font-bold text-3xl sm:text-4xl lg:text-[46px]'
              style={{ lineHeight: '1.3' }}
            >
              Work where innovation drives change at GWC.
            </h1>

            <p className='text-white/90 leading-relaxed text-base sm:text-lg lg:text-[20px] max-w-2xl'>
              Do you enjoy tackling challenges & solving intricate problems? Join GWC & contribute
              to shaping a brighter future with us!
            </p>

            <div className='pt-4'>
              <button
                onClick={() => {
                  const element = document.getElementById('explore-section');
                  if (element) {
                    const yOffset = -50;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className='inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full font-medium text-base hover:scale-105 transition-transform shadow-lg'
                style={{
                  background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                }}
              >
                Search open roles
                <FiArrowRight className='text-lg' />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image - Absolutely Positioned (Outside Grid)
         - Positioned relative to the section, not the grid
         - Starts from top-1/3 (higher up) and extends to bottom for more height
         - Anchored to right edge
      */}
      <div className='hidden md:block absolute top-1/4 bottom-0 right-0 w-[400px] md:w-[500px] lg:w-[650px] xl:w-[750px] z-10 pointer-events-none'>
        <Image
          src='/images/Careers/hero_right.svg'
          alt='Career professional'
          fill
          className='object-contain object-bottom'
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;

'use client';
import Countdown from './Countdown';
import StatsSection from './StatsSection';

const HeroSection = () => {
  return (
    <section className='relative pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-10 px-4 sm:px-6 text-center overflow-hidden'>
      {/* Background image */}
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: `url(/images/domopalooza/bg-2.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className='max-w-6xl mx-auto relative z-10'>
        {/* Container for Domopalooza and Countdown */}
        <div className='bg-white/30 border border-white/50 flex flex-col sm:flex-row justify-between items-center gap-4 backdrop-blur-md rounded-2xl p-4 sm:p-5 mb-6 sm:mb-8'>
          {/* Domopalooza text with gradient */}
          <img
            src='/images/domopalooza/domo-palooza.png'
            alt='domo img'
            className='h-8 sm:h-10 md:h-12 w-auto'
          />

          <Countdown />
        </div>

        <p
          className='text-sm sm:text-base md:text-lg font-bold mt-2 px-2'
          style={{
            background: 'linear-gradient(90deg, #2E94DB, #7030B1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          GWC IS ALL SET FOR DOMOPALOOZA 2026 IN SALT LAKE CITY!
        </p>

        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 sm:mt-6 md:mt-8 leading-tight px-2'>
          Build your First AI Agent
          <span
            className='block mt-1 sm:mt-2'
            style={{
              background: 'linear-gradient(90deg, #2E94DB, #7030B1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            in 10 Hours
          </span>
        </h1>

        <p className='mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4'>
          As a Sponsor, we'll be sharing customer stories, real use cases, and hands-on guidance
          across data, analytics, and AI.
        </p>

        <StatsSection />
      </div>
    </section>
  );
};

export default HeroSection;

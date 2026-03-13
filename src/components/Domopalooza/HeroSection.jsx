'use client';
import Countdown from './Countdown';
import StatsSection from './StatsSection';
import SupportForm from './SupportForm';

const HeroSection = () => {
  return (
    <section className='relative pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-10 px-4 sm:px-6 overflow-hidden'>
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
        {/* ── TOP BAR: Domopalooza logo + Countdown — stays full width ── */}
        <div className='bg-white/30 border border-white/50 flex flex-col sm:flex-row justify-between items-center gap-4 backdrop-blur-md rounded-2xl p-4 sm:p-5 mb-6 sm:mb-8 mt-4'>
          <img
            src='/images/domopalooza/domo-palooza.png'
            alt='domo img'
            className='h-8 sm:h-10 md:h-12 w-auto'
          />
          <Countdown />
        </div>

        {/* ── BELOW BAR: Left content + Right form ── */}
        <div className='flex flex-col lg:flex-row items-start gap-8 lg:gap-12'>
          {/* LEFT — Hero text + stats */}
          <div className='w-full lg:w-1/2 text-center lg:text-left'>
            <p className='text-sm sm:text-base md:text-lg font-bold px-2'>
              <span
                style={{
                  background: 'linear-gradient(90deg, #2E94DB 40%, #7030B1 60%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                }}
              >
                GWC IS ALL SET FOR DOMOPALOOZA 2026{' '}
              </span>
              <span
                className='block text-lg sm:text-xl md:text-2xl font-extrabold px-2'
                style={{
                  background: 'linear-gradient(90deg, #2E94DB 40%, #7030B1 60%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                }}
              >
                IN SALT LAKE CITY!
              </span>
            </p>

            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4 sm:mt-6 leading-tight px-2'>
              Build your First AI Agent
              <span
                className='block mt-1 sm:mt-2'
                style={{
                  background: 'linear-gradient(90deg, #2E94DB 40%, #7030B1 60%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                }}
              >
                in 10 Hours
              </span>
            </h1>

            <p className='mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 px-4'>
              As a Sponsor, we'll be sharing customer stories, real use cases, and hands-on guidance
              across data, analytics, and AI.
            </p>

            <StatsSection />
          </div>

          {/* RIGHT — Support Form */}
          <div className='w-full lg:w-1/2'>
            <SupportForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

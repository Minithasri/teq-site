'use client';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

const DomoBanner = () => {
  return (
    <section className='relative w-full min-h-screen overflow-hidden pt-20 pb-6'>
      {/* HERO BACKGROUND IMAGE */}
      <div className='absolute inset-0 -z-10'>
        <Image
          src='/images/solutions/Hero section BG.webp'
          alt=''
          fill
          priority
          className='object-cover'
        />
        {/* Fade out overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white' />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* ---------- CENTERED TEXT ---------- */}
        <div className='text-center max-w-7xl mx-auto space-y-6 mb-12 lg:mb-16 mt-8 lg:mt-14'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2D2D] leading-tight lg:leading-normal'>
            Reimagine Enterprise Workflows with
            <br className='hidden md:block' />
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#2BC0E4] to-[#4F72D8] block mt-2 pb-2'>
              DOMO Agentic AI
            </span>
          </h1>

          <p className='text-base md:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed'>
            Autonomous agents that convert insight into action seamlessly integrated within your
            data ecosystem. Welcome to the future of intelligent operations.
          </p>

          <div className='flex justify-center pt-4'>
            <button
              onClick={() => {
                const element = document.getElementById('agent-bundle');
                if (element) {
                  const yOffset = -10;
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className='group flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 shadow-xl'
              style={{
                background: 'linear-gradient(90deg, #9D50BB 0%, #6E48AA 100%)',
                borderRadius: '50px',
              }}
            >
              Explore Use Cases
              <FiArrowRight className='text-lg transition-transform group-hover:translate-x-1' />
            </button>
          </div>
        </div>

        {/* ---------- HERO IMAGE ---------- */}
        <div className='w-full max-w-7xl mx-auto pb-2'>
          <div className='relative flex justify-center'>
            <div
              className='relative w-full overflow-hidden'
              style={{
                maxWidth: '1240px',
                height: '485px',
                borderRadius: '24px',
                border: '1px solid #E5E7EB',
                boxShadow:
                  '0px 1.34px 4.15px 0px #D2D0E111, 0px 3.23px 9.98px 0px #D2D0E119, 0px 6.08px 18.8px 0px #D2D0E11F, 0px 10.85px 33.53px 0px #D2D0E124, 0px 20.3px 62.72px 0px #D2D0E12C',
              }}
            >
              <Image
                src='/images/domoa1.webp'
                alt='Domo Banner'
                fill
                className='object-cover object-[center_70%]'
              />
            </div>

            {/* Overlapping Badge */}
            <div
              className='absolute bottom-8 z-20 bg-white shadow-xl flex items-center justify-center hidden md:flex'
              style={{
                width: '726px',
                height: '60px',
                borderRadius: '16px',
                padding: '30px 24px',
              }}
            >
              <h3
                className='text-center whitespace-nowrap'
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 800,
                  fontSize: '25px',
                  lineHeight: '100%',
                  background: 'linear-gradient(91.23deg, #2E94DB 31.47%, #7030B1 67.68%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                International Partner of the Year 2026 – GWC Data.AI
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomoBanner;

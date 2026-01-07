'use client';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

const DomoBanner = () => {
  return (
    <section className='relative w-full min-h-screen overflow-hidden pt-20 pb-24'>
      {/* HERO BACKGROUND IMAGE */}
      <div className='absolute inset-0 -z-10'>
        <Image
          src='/images/solutions/Hero section BG.jpg'
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
              className='group flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 shadow-xl'
              style={{
                background: 'linear-gradient(90deg, #9D50BB 0%, #6E48AA 100%)',
                borderRadius: '50px',
              }}
            >
              Explore solutions
              <FiArrowRight className='text-lg transition-transform group-hover:translate-x-1' />
            </button>
          </div>
        </div>

        {/* ---------- IMAGE LAYOUT (66 / 33) ---------- */}
        <div className='w-full max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-8'>
            {/* LEFT IMAGE – 70% */}
            <div className='relative h-[300px] md:h-[400px] rounded-[24px] overflow-hidden shadow-2xl'>
              <Image
                src='/images/DomoPage/leftimg.png'
                alt='Domo Office Interior'
                fill
                className='object-cover'
              />
            </div>

            {/* RIGHT IMAGE – 30% */}
            <div className='relative h-[300px] md:h-[400px] rounded-[24px] overflow-hidden shadow-2xl'>
              <Image
                src='/images/DomoPage/rightimg.png'
                alt='Domo Exterior'
                fill
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomoBanner;

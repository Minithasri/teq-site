'use client';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const HeroSection = () => {
  const stats = [
    { value: '50+', label: 'Agentic blueprints' },
    { value: '03', label: 'Claude models' },
    { value: '50+', label: 'Countries Served' },
    { value: 'Certified', label: 'Claude team' },
  ];

  return (
    <section
      className='relative w-full min-h-[700px] flex items-center justify-center pt-24 pb-4 px-4 sm:px-6 md:px-8 overflow-hidden'
      style={{
        background: `
          radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 50%),
          radial-gradient(66.94% 858.63% at 50% 46.71%, rgba(110, 43, 139, 0.15) 0%, rgba(217, 109, 66, 0.45) 100%),
          radial-gradient(172.76% 57% at 50% 46.71%, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%),
          radial-gradient(65.49% 839.92% at 50% 46.71%, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%),
          url('/images/partners/claude/claude1.png')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'normal',
      }}
    >
      <div className='max-w-5xl mx-auto text-center flex flex-col items-center relative z-10'>
        {/* Headings */}
        <h1 className='text-[#404040] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight mb-2 leading-none'>
          Agentic AI.
        </h1>
        <h2
          className='text-3xl sm:text-5xl md:text-6xl lg:text-[66px] font-medium italic tracking-tight mb-6 pb-2 pr-2'
          style={{
            backgroundImage: 'linear-gradient(90deg, #6F2B8B 0%, #ED7200 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
          }}
        >
          Powered by Claude
        </h2>

        {/* Description */}
        <p className='text-[#737373] text-sm sm:text-base md:text-[17px] font-medium leading-relaxed max-w-3xl mb-8 px-4'>
          We build autonomous agents on Claude built by Anthropic that reason, code and operate
          inside the systems you already run.
        </p>

        {/* CTA Button */}
        <div className='mb-12'>
          <Link
            href='/contact'
            className='inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:opacity-90 shadow-lg hover:shadow-xl hover:gap-3'
            style={{
              background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
            }}
          >
            Talk to our Claude team
            <FiArrowRight className='text-base sm:text-lg' />
          </Link>
        </div>

        {/* Stats Pills */}
        <div className='flex flex-wrap md:flex-nowrap gap-4 sm:gap-5 justify-center max-w-4xl px-2'>
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className='bg-white px-6 py-3 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#ECEAE6]/40 flex items-center gap-3 transition-transform duration-300 hover:scale-105 select-none'
            >
              <span
                className='font-medium text-lg sm:text-xl tracking-tight'
                style={{
                  backgroundImage: 'linear-gradient(90deg, #6F2B8B 0%, #ED7200 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.value}
              </span>
              <span className='text-[#525252] text-xs sm:text-sm font-medium font-sans whitespace-nowrap'>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

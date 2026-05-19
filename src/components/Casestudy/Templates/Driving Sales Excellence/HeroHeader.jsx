'use client';

export default function SalesExcellenceHero() {
  return (
    <section
      className='relative overflow-hidden w-full flex items-center justify-center px-4 sm:px-6 md:px-12 text-center'
      style={{
        width: '100%',
        minHeight: '549px',
        background: 'linear-gradient(155deg, #334155 0%, #476669ff 40%, #bde2e4ff 100%)',
      }}
    >
      {/* Background Dashboard Overlay Layer */}
      <div
        className='absolute inset-0 bg-cover bg-center mix-blend-overlay pointer-events-none'
        style={{
          backgroundImage: `url('/images/Templates/templatez/drivingsales/head.png')`,
          opacity: 0.15,
        }}
      />

      {/* Content Container */}
      <div className='z-10 w-full max-w-[100%] flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 px-2 sm:px-4'>
        {/* Main Headline */}
        <h1
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            lineHeight: '110%',
            letterSpacing: '-1.5px',
          }}
          className='text-white mb-10 sm:mb-14 md:mb-20 tracking-tight text-[32px] sm:text-[42px] md:text-[56.1px]'
        >
          Driving Sales Excellence with{' '}
          <span
            style={{
              color: '#EFFF3C',
            }}
          >
            Validated Data
          </span>
        </h1>

        {/* Subheadline Description */}
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            letterSpacing: '0%',
            color: 'rgba(255, 255, 255, 0.9)',
          }}
          className='max-w-[95%] sm:max-w-[90%] md:max-w-[100%] m-0 font-normal text-[16px] sm:text-[20px] md:text-[24px] leading-[28px] sm:leading-[32px] md:leading-[34px]'
        >
          How GWC transformed the client's sales reporting with real-time insights and
          executive-level analytics
        </p>
      </div>
    </section>
  );
}

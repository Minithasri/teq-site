import React from 'react';

export default function HeroSection() {
  return (
    <section
      className='relative w-full h-[320px] md:h-[440px] bg-cover bg-center border-t-[3px] border-[#38bdf8] flex items-center justify-center'
      style={{
        backgroundImage:
          'linear-gradient(rgba(14, 52, 107, 0.82), rgba(14, 52, 107, 0.82)), url("/images/Templates/template14/bg1.png")',
      }}
    >
      {/* Container wrapper maximizing scannability and perfect text centering */}
      <div className='max-w-[1140px] mx-auto px-6 w-full flex flex-col items-center justify-center text-center'>
        {/* Main Heading styled with tight tracking and a soft golden yellow accent */}
        <h1 className='text-[32px] sm:text-[42px] md:text-[46px] font-extrabold text-white leading-[1.2] max-w-[800px] tracking-tight'>
          End-to-End Digitalization of{' '}
          <span className='text-white inline-block mt-1 sm:mt-0'>Manufacturing Reports</span>
        </h1>
      </div>
    </section>
  );
}

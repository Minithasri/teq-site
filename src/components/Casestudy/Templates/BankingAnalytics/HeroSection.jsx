import React from 'react';

export default function HeroSection() {
  return (
    <section
      className='relative h-[420px] bg-cover bg-center border-t-[5px] border-[#0ea5e9]'
      style={{
        backgroundImage:
          'linear-gradient(rgba(64, 20, 98, 0.78), rgba(64, 20, 98, 0.78)), url("/images/Templates/template13/bg1.png")',
      }}
    >
      {/* Centered flex wrapper to position everything right down the middle */}
      <div className='max-w-[1080px] mx-auto h-full px-6 flex flex-col justify-center items-center text-center'>
        {/* Main Heading styled to match the perfect scaling and line height */}
        <h1 className='text-[34px] md:text-[44px] font-extrabold text-white leading-[1.2] max-w-[950px] tracking-tight'>
          Driving Compliance and Performance with{' '}
          <span className='text-[#ffe600] block mt-1 md:inline md:mt-0'>Banking Analytics</span>
        </h1>

        {/* Fixed unescaped apostrophe via JavaScript evaluation braces {"'"} */}
        <p className='text-white text-[15px] md:text-[19px] font-medium mt-[24px] max-w-[820px] leading-[1.45] opacity-90'>
          How GWC transformed Tavent{"'"}s operations with real-time analytics, automated
          compliance, and centralized financial insights
        </p>
      </div>
    </section>
  );
}

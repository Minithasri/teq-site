'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex flex-col justify-center font-['Poppins']"
      style={{
        width: '100%',
        maxWidth: '1658px', // Root width requirement
        height: '500px', // Root height requirement
        margin: '0 auto', // Centering the root container
        backgroundColor: '#0000BCA6', // Root background color requirement
        opacity: 1,
      }}
    >
      {/* Background Image Layer */}
      <div className='absolute inset-0 z-0 scale-x-[-1]'>
        <Image
          src='/images/Templates/templatez/z2sol.png'
          alt='Campaign Infrastructure Background'
          fill
          priority
          className='object-cover'
        />
        {/* Specific Blue Overlay to match image_bec31d.png depth */}
        <div className='absolute inset-0 bg-[#0000BCA6]/80' />
      </div>

      {/* Content Container - Adjusted for responsive padding */}
      <div className='relative z-20 h-full flex flex-col justify-start text-left px-6 md:px-20 lg:pl-[72px] pt-[50px]'>
        {/* GWC Logo Section */}
        <div
          className='relative ml-6 mb-6 md:mb-10 mt-20'
          style={{
            width: '314px', // Logo width requirement
            height: '74px', // Logo height requirement
          }}
        >
          <Image
            src='/images/Templates/templatez/gwclogo.png' // Path to your GWC logo
            alt='GWC DATA.AI'
            fill
            className='object-contain object-left'
          />
        </div>

        {/* Heading Section - Replicating image_bec31d.png text */}
        <div className='max-w-4xl'>
          <h1 className='text-white font-extrabold text-[40px] md:text-[54px] lg:text-[64px] leading-[1.1] tracking-[-1px] mb-8'>
            Next-Gen <span className='text-white'>Sales Campaign</span>
            <br />
            <span className='text-white'>Infrastructure</span> on GCP
          </h1>

          {/* Subtitle / Footer Text */}
          <p className='text-white font-semibold text-[16px] md:text-[20px] lg:text-[24px] leading-relaxed max-w-5xl'>
            Building a Scalable Single Source of Truth for Campaign Governance
          </p>
        </div>
      </div>

      {/* Angle Requirement Implementation (if needed for container orientation) */}
      <style jsx>{`
        section {
          /* Applying angle if strict root transformation is required */
          /* transform: rotate(180deg); */
        }
      `}</style>
    </section>
  );
}

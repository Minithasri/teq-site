'use client';

export default function HeroSection() {
  return (
    <section className='relative w-full overflow-hidden' style={{ minHeight: '280px' }}>
      {/* Background image */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: "url('/images/Templates/tess/tess1.png')" }}
      />

      {/* Overlay: #809FE2 at 96 hex = 150/255 ≈ 59% opacity */}
      <div className='absolute inset-0' style={{ backgroundColor: 'rgba(128, 159, 226, 0.59)' }} />

      {/* Content */}
      <div className='relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-14 md:py-20 lg:py-24'>
        {/* Main Title */}
        <h1 className='font-bold mb-5 md:mb-6'>
          {/* Yellow first line */}
          <span
            className='block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px]'
            style={{ color: '#EEE017', lineHeight: '1.1' }}
          >
            Enterprise Digital Transformation for
          </span>
          {/* White second line */}
          <span
            className='block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px]'
            style={{ color: '#FFFFFF', lineHeight: '1.1' }}
          >
            Production, Quality &amp; Supply Chain
          </span>
        </h1>

        {/* Description */}
        <p
          className='text-sm sm:text-base md:text-[16px] max-w-7xl leading-relaxed'
          style={{ color: '#FFFFFF', opacity: 0.9 }}
        >
          Driving real-time visibility, operational efficiency, and data-driven decision-making
          across manufacturing operations through an integrated digital platform.
        </p>
      </div>
    </section>
  );
}

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      className='relative w-full py-20 lg:py-28 overflow-hidden'
      style={{
        background: 'linear-gradient(180deg, #B138D6 0%, #3A55ED 100%)',
      }}
    >
      {/* Background Image */}
      <div className='absolute inset-0 z-0 opacity-30 mix-blend-overlay'>
        <Image
          src='/images/Templates/template8/temp888.png'
          alt='Background'
          fill
          className='object-cover'
          priority
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center'>
        {/* Top Logo Area - Right Aligned */}
        <div className='flex justify-end mb-8'>
          <div className='relative w-56 h-20'>
            <Image
              src='/images/Templates/template8/logonew.png'
              alt='GWC Logo'
              fill
              className='object-contain'
            />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className='text-4xl lg:text-5xl font-bold text-white mb-6'>
          Tool Management Solution for Manufacturing
        </h1>

        {/* Subheading */}
        <p className='text-white/90 text-lg lg:text-xl max-w-3xl mx-auto mb-16 leading-relaxed'>
          Driving efficiency, traceability, and operational excellence through Power Platform
          automation
        </p>
      </div>
    </section>
  );
}

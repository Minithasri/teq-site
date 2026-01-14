import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      className='relative w-full min-h-[500px] overflow-hidden flex flex-col justify-center items-center'
      style={{
        background:
          'linear-gradient(180deg, #F6F6F6 0%, #CCD7E7 15%, #ABBEDD 30%, #819FCE 40%, #648BC9 50%, #819FCE 60%, #ABBEDD 70%, #CCD7E7 85%, #F6F6F6 100%)',
      }}
    >
      {/* Background Image */}
      <div className='absolute inset-0 z-0 opacity-40 mix-blend-overlay'>
        <Image
          src='/images/Templates/template5/herobgmain.png'
          alt='Background'
          fill
          className='object-cover center'
          priority
        />
      </div>

      {/* Content */}
      <div className='relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* Logo */}
        <div className='flex justify-center mb-8'>
          <Image
            src='/images/Templates/template4/comlogo.svg' // Using common logo
            alt='GWC Data.ai'
            width={180}
            height={50}
            className='h-12 w-auto'
          />
        </div>

        {/* Title */}
        <h1 className='font-bold text-white mb-6 drop-shadow-md leading-tight'>
          <span className='block text-[28px] lg:text-[32px] mb-1'>
            Streamlining Production Through
          </span>
          <span className='block text-[36px] lg:text-[46px]'>Data-Driven IE Applications</span>
        </h1>

        {/* Subtitle */}
        <p className='text-white/90 text-[16px] lg:text-[18px] max-w-7xl mx-auto font-medium drop-shadow-sm'>
          Digitizing maintenance operations for improved equipment reliability and performance
        </p>
      </div>
    </section>
  );
}

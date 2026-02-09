import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='relative w-full min-h-[500px] flex flex-col justify-center items-center overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/template6/hero6.webp'
          alt='Optimizing Production Background'
          fill
          className='object-cover'
          priority
        />
        {/* Subtle Blue Gradient Overlay */}
        <div className='absolute inset-0 bg-blue-900/80 mix-blend-multiply'></div>
        <div className='absolute inset-0 bg-gradient-to-b from-blue-500/50 to-blue-800/80'></div>
      </div>

      {/* Content */}
      <div className='relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* Logo */}
        <div className='flex justify-center mb-8'>
          <Image
            src='/images/Templates/template6/gwc.png'
            alt='GWC Data.AI'
            width={180}
            height={50}
            className='h-12 w-auto'
          />
        </div>

        {/* Title */}
        <h1 className='font-bold text-white mb-6 drop-shadow-md leading-tight'>
          <span className='block text-3xl lg:text-5xl mb-2'>Optimizing Production Efficiency</span>
          <span className='block text-4xl lg:text-5xl'>
            Through <span className='text-[#FFD700] text-4xl lg:text-6xl'>Scrap Analytics</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className='text-white/90 text-lg lg:text-xl max-w-4xl mx-auto font-medium drop-shadow-sm'>
          Reducing material waste through real-time scrap tracking and data-driven insights
        </p>
      </div>
    </section>
  );
}

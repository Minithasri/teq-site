import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='relative w-full h-[74vh]'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/template9/9hero.webp'
          alt='Smart Maintenance Background'
          fill
          className='object-cover'
          quality={100}
        />
        {/* Subtle blue overlay */}
        <div className='absolute inset-0 bg-[#002A86]/70'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center px-4'>
        <div className='mb-6 mt-12'>
          <Image
            src='/images/Templates/template9/9herologo.png'
            alt='GWC Data.ai Solution Matters'
            width={200}
            height={100}
            className='object-contain'
          />
        </div>

        <h1 className='text-[38px] md:text-[44px] lg:text-[54px] font-bold text-white mb-2 tracking-tight'>
          Smart Maintenance
        </h1>
        <h2 className='text-[38px] md:text-[44px] lg:text-[54px] font-bold text-[#E5C810] mb-6 tracking-tight'>
          Solution for Manufacturing
        </h2>

        <p className='text-white text-[16px] md:text-[20px] lg:text-[24px] max-w-5xl leading-relaxed font-light'>
          Modernizing traditional maintenance processes with Microsoft Power Platform,
          <br className='hidden md:block' />
          enabling predictive analytics and preventive maintenance strategies
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

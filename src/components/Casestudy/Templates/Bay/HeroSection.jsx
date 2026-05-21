import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='relative w-full overflow-hidden border-t-2 border-[#5D8CFF] bg-[#ECEFFC] py-14 md:py-24'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/z-bay/hero-bg.png'
          alt='Background'
          fill
          priority
          className='object-cover object-center'
        />
      </div>

      {/* Soft Gradient Overlay */}
      <div className='absolute inset-0 z-0 ' />

      {/* Content */}
      <div className='relative z-10 px-4 text-center md:px-8'>
        {/* Heading */}
        <h1 className='font-poppins text-[42px] font-semibold leading-[56px] tracking-normal text-black md:text-[64px] md:leading-[80px]'>
          Product Authentication & Theft
          <br className='hidden md:block' />
          Monitoring Analytics Platform
        </h1>

        {/* Description */}
        <p className='mx-auto mt-8 max-w-5xl font-poppins text-[16px] font-normal leading-[28px] tracking-normal text-[#2B2B2B] md:text-[20px] md:leading-[35px]'>
          A centralized analytics solution that transformed fragmented counterfeit monitoring into
          an automated intelligence platform delivering real-time threat detection and secure,
          role-based insights to 50+ stakeholders.
        </p>
      </div>
    </section>
  );
}

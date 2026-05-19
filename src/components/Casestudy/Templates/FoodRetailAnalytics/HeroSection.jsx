export default function HeroSection() {
  return (
    <section className='bg-gradient-to-r from-[#b31217] via-[#ca1d23] to-[#d82424] w-full overflow-hidden'>
      <div className='max-w-[1180px] mx-auto px-6 py-16 md:py-24 relative flex items-center justify-between min-h-[420px]'>
        {/* Text Content */}
        <div className='z-10 max-w-[70%] md:max-w-[75%]'>
          <h1 className='text-white text-[32px] sm:text-[38px] md:text-[46px] lg:text-[46px] font-extrabold leading-[1.15] tracking-tight'>
            Boosting Food Retail Performance
            <br />
            with <span className='text-[#fff02a]'>Real-Time Analytics</span>
          </h1>
        </div>

        {/* Image Layering System (Visible on Medium screens and up) */}
        <div className='hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[260px] lg:w-[300px] h-[200px] z-10'>
          {/* Background Image (bg2) - Transparent/Faded Layer underneath */}
          <img
            src='/images/Templates/template17/bg2.png'
            alt='Food Retail Background'
            className='absolute -right-4 bottom-[-40px] w-[85%] h-auto rounded-[20px] object-cover opacity-40 z-0 pointer-events-none filter blur-[0.5px]'
          />

          {/* Foreground Image (bg1) - Main focal image */}
          <img
            src='/images/Templates/template17/bg1.png'
            alt='Food Retail Main'
            className='absolute right-[-55] top-5 w-[90%] h-auto rounded-[20px] shadow-2xl object-cover z-10 border border-white/10'
          />
        </div>
      </div>
    </section>
  );
}

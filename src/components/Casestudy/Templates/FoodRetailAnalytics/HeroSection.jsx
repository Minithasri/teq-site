export default function HeroSection() {
  return (
    <section
      className='w-full relative z-20'
      style={{ background: 'linear-gradient(135deg, #cf4b4dff 0%, #C52222 30%, #EF9C9D 100%)' }}
    >
      {/* Background Image Layer */}
      <div className='absolute inset-0 z-0 pointer-events-none mix-blend-overlay'>
        <img
          src='/images/Templates/template17/marrybg1.png'
          alt='Food Pattern Background'
          className='w-full h-full object-cover object-center'
        />
      </div>

      <div className='max-w-[1180px] mx-auto px-6 pt-36 pb-16 md:py-24 relative flex items-center justify-between min-h-[320px] z-10'>
        {/* Text Content */}
        <div className='z-10 max-w-full md:max-w-[70%]'>
          <h1 className='text-white text-[28px] sm:text-[34px] md:text-[46px] lg:text-[46px] font-extrabold leading-[1.15] tracking-tight'>
            Boosting Food Retail Performance
            <br className='hidden sm:block' />
            with Real-Time Analytics
          </h1>
        </div>

        {/* Image Layering System (Visible on Medium screens and up) */}
        <div className='hidden md:block absolute right-6 lg:right-[-180px] bottom-[-40px] lg:bottom-[-90px] w-[350px] lg:w-[380px] z-20'>
          {/* Foreground Image (bg1) - Main focal image */}
          <img
            src='/images/Templates/template17/bg1.png'
            alt='Food Retail Main'
            className='w-full h-auto rounded-[24px] object-cover'
          />
        </div>
      </div>
    </section>
  );
}

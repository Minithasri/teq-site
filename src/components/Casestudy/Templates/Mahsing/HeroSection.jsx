const HeroSection = () => {
  return (
    <section className='relative w-full min-h-[70vh] flex items-center overflow-hidden'>
      {/* Zoomed Background Image */}
      <div
        className='absolute inset-0 w-full h-full'
        style={{
          backgroundImage: 'url(/images/Templates/mahsing/img1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'left top',
          backgroundRepeat: 'no-repeat',
          transform: 'scale(1.15)',
          transformOrigin: 'top left',
        }}
      ></div>

      {/* Gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-[#0B2E79F2] to-[#0B2E79CC] z-0'></div>

      <div className='relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-16 py-20 w-full'>
        <div className='max-w-7xl mt-16'>
          <h1 className='text-4xl md:text-5xl lg:text-5xl font-bold text-[#F8FAFC] mb-3 leading-[1.15]'>
            Driving Real Estate Excellence Through <br />
            <span className='text-[#FBFF1F] mt-7 block'>Customer Feedback Insights</span>
          </h1>
          <p className='mt-8 text-lg md:text-xl text-[#F8FAFC]/90 font-light tracking-wide '>
            How Mah Sing transformed customer satisfaction tracking with data- driven insights
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

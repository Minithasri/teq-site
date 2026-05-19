const Hero = () => {
  return (
    <section className='relative w-full py-18 md:py-24 flex items-center justify-center overflow-hidden'>
      {/* Background Image zoomed to top */}
      <div
        className='absolute inset-0 w-full h-full bg-cover scale-110'
        style={{
          backgroundImage: "url('/images/Templates/style-union-1/img1.png')",
          backgroundPosition: 'center -90px',
        }}
      ></div>

      {/* Linear Gradient Overlay */}
      <div
        className='absolute inset-0 w-full h-full opacity-90 mix-blend-multiply'
        style={{ background: 'linear-gradient(180deg, #F57777 0%, #F8D5D5 100%)' }}
      ></div>

      {/* Additional solid gradient overlay for better text readability if needed */}
      <div
        className='absolute inset-0 w-full h-full opacity-90'
        style={{ background: 'linear-gradient(180deg, #F57777 0%, #F8D5D5 100%)' }}
      ></div>

      {/* Content */}
      <div className='relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <h1 className='text-4xl md:text-[56px] font-bold text-[#000000] mb-6 leading-tight tracking-tight'>
          Transforming Retail Performance <br />
          with <span className='text-[#673AF8]'>Unified Analytics</span>
        </h1>
        <p className='text-[18px] md:text-[22px] text-[#000000] max-w-3xl mx-auto font-medium'>
          How Style Union achieved real-time visibility and data-driven growth through comprehensive
          retail analytics
        </p>
      </div>
    </section>
  );
};

export default Hero;

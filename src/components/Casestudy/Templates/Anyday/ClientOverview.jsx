const ClientOverview = () => {
  return (
    <section className='w-full py-14 bg-white'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-10'>
          <h2 className='text-[32px] font-bold text-[#0F1729]'>Client Overview</h2>
        </div>

        <div className='relative max-w-5xl mx-auto'>
          {/* Main White Container Card */}
          <div className='bg-white rounded-[16px] p-5 md:p-8 border border-[#DCE0E5] shadow-[0_4px_20px_rgb(0,0,0,0.06)] relative flex items-center min-h-[220px]'>
            {/* Text Content */}
            <div className='w-full md:w-[65%] lg:w-[70%] relative z-10  '>
              <p className='text-[#0F1729] text-[16px] md:text-[18px] leading-relaxed'>
                Anyday, a restaurant brand, wanted to strengthen its customer engagement and sales
                strategy by understanding customer behavior more effectively. Leadership lacked
                real-time visibility into menu performance, sales trends, and customer preferences,
                which limited their ability to make data-driven decisions for growth.
              </p>
            </div>

            {/* Right Images (Overlapping the Card) */}
            <div className='hidden md:block absolute right-[-10%] top-1 -translate-y-1/2 z-20'>
              {/* Faded Background Image */}
              <div className='absolute top-6 -left-6 w-[380px] h-[220px] opacity-40 z-0'>
                <img
                  src='/images/Templates/anyday/img1.png'
                  alt='Restaurant Interior Faded'
                  className='w-full h-full object-cover rounded-[24px] rotate-180'
                />
              </div>

              {/* Main Foreground Image */}
              <div className='relative w-[380px] h-[220px] z-10 shadow-lg rounded-[24px]'>
                <img
                  src='/images/Templates/anyday/img1.png'
                  alt='Restaurant Interior'
                  className='w-full h-full object-cover rounded-[24px] rotate-180'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientOverview;

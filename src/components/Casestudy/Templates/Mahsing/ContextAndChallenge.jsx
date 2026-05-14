const ContextAndChallenge = () => {
  const painPoints = [
    'Customer feedback was collected through surveys but not centralized',
    'Leadership had limited visibility into defect trends, refund patterns, and handover issues',
    'Manual reporting processes delayed customer insights',
    'No real-time system for tracking satisfaction metrics across projects',
    'Lack of actionable insights led to slower response times and operational inefficiencies',
  ];

  return (
    <section className='w-full flex flex-col'>
      {/* Client Context Section */}
      <div className='bg-white py-20 w-full relative'>
        <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-[32px] font-bold text-[#1e3a8a] mb-4'>Client Context</h2>

          <div className='flex flex-col lg:flex-row items-center relative'>
            {/* Text Box */}
            <div className='lg:w-[79%] z-10'>
              <div className='bg-white rounded-[20px] shadow-xl p-8 md:p-15 border border-gray-200 relative'>
                <p className='text-[#0F1729] leading-[1.8] text-[17px] md:text-[20px]'>
                  A prominent real estate and property development company, places customer
                  satisfaction at the center of its operations. With large-scale projects and
                  multiple property handovers, the company needed a way to systematically analyze
                  customer survey data related to construction defects, refund requests, and
                  handover (VP) feedback over an 18-month period.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image (Absolute to the full window width) */}
        <div className='hidden lg:block absolute right-0 top-16 lg:w-[45%] xl:w-[35%] pt-64 z-20'>
          <img
            src='/images/Templates/mahsing/img2.png'
            alt='Mah Sing Building'
            className='w-full h-[260px] object-cover object-top rounded-tl-[20px] shadow-[-12px_12px_40px_rgb(0,0,0,0.12)]'
          />
        </div>

        {/* Mobile Right Image */}
        <div className='lg:hidden w-full px-4 sm:px-6 mt-8 z-20'>
          <img
            src='/images/Templates/mahsing/img2.png'
            alt='Mah Sing Building'
            className='w-full h-[280px] object-cover object-top rounded-[20px] shadow-lg'
          />
        </div>
      </div>

      {/* The Challenge Section */}
      <div
        className='w-full pt-48 pb-24 px-4 sm:px-6 lg:px-8 relative'
        style={{
          backgroundImage: 'url(/images/Templates/mahsing/img3.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* White overlay to wash out the background */}
        <div className='absolute inset-0 bg-white/90 z-0'></div>

        <div className='max-w-7xl mx-auto relative z-10'>
          <div className='text-center mb-10'>
            <h2 className='text-[36px] font-bold text-[#0F1729] mb-2'>The Challenge</h2>
            <h3 className='text-[20px] font-medium text-[#0F1729] mb-4'>
              Overcoming Customer Feedback Barriers
            </h3>
            <p className='text-[#000000] text-[16px]'>
              Multiple pain points were hindering effective customer <br /> satisfaction tracking
            </p>
          </div>

          <div className='flex flex-col items-center gap-6'>
            {/* First Row: 3 cards */}
            <div className='flex flex-col md:flex-row justify-center gap-6 w-full'>
              {painPoints.slice(0, 3).map((point, index) => (
                <div
                  key={index}
                  className='bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-50 p-5 flex items-start gap-4 w-full md:w-[32%]'
                >
                  <div className='w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5'>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='#EF4444'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <circle cx='12' cy='12' r='10'></circle>
                      <line x1='12' y1='8' x2='12' y2='12'></line>
                      <line x1='12' y1='16' x2='12.01' y2='16'></line>
                    </svg>
                  </div>
                  <p className='text-[#0F1729] text-[15px] leading-relaxed pt-1'>{point}</p>
                </div>
              ))}
            </div>

            {/* Second Row: 2 cards */}
            <div className='flex flex-col md:flex-row justify-center gap-6 w-full md:w-[66%]'>
              {painPoints.slice(3, 5).map((point, index) => (
                <div
                  key={index + 3}
                  className='bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-50 p-6 flex items-start gap-4 w-full md:w-[50%]'
                >
                  <div className='w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5'>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='#EF4444'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <circle cx='12' cy='12' r='10'></circle>
                      <line x1='12' y1='8' x2='12' y2='12'></line>
                      <line x1='12' y1='16' x2='12.01' y2='16'></line>
                    </svg>
                  </div>
                  <p className='text-[#0F1729] text-[15px] leading-relaxed pt-1'>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContextAndChallenge;

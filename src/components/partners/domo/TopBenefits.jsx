'use client';

import Image from 'next/image';

const benefits = [
  'Data Visualization',
  'Security Controls',
  'BI & Analytics',
  'Dashboard Creation',
  'Flexible Data Connections',
  'Flexible Integrations',
  'Sharing & Collaboration',
  'Mobile First',
  'Project Management',
];

const TopBenefits = () => {
  return (
    <section className='relative w-full max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 z-20 mb-20'>
      <div className='relative w-full rounded-[20px] overflow-hidden backdrop-blur-sm pb-16'>
        {/* Background Image */}
        <div className='absolute inset-0 -z-10 bg-[#3B174A]'>
          <Image
            src='/images/partners/domo/linesbg.webp'
            alt='Success Background'
            fill
            className='object-cover opacity-100'
          />
        </div>

        <div className='py-12 px-6 md:px-12 text-center'>
          {/* Header */}
          <div className='mb-16'>
            <h2 className='text-[24px] md:text-[32px] font-medium text-white mb-4'>
              Top Benefits of Domo
            </h2>
            <p className='text-white/90 text-[16px] md:text-[18px] max-w-4xl mx-auto leading-relaxed'>
              Domo delivers powerful, visually rich data visualizations with full user control,
              social collaboration, and seamless tracking of user behavior for deeper, connected
              insights.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className='flex flex-col items-center gap-12'>
            {/* Row 1 */}
            <div className='flex flex-wrap justify-center gap-2'>
              {benefits.slice(0, 5).map((benefit, index) => (
                <div key={index} className='flex items-center'>
                  <div className='relative w-[150px] h-[140px] md:w-[170px] md:h-[160px] flex flex-col items-center justify-center p-4 rounded-3xl backdrop-blur-sm text-center shadow-[0px_4px_24px_#0000001F] bg-[#FFFFFF1A] hover:bg-white/20 transition-all duration-300'>
                    <svg className='absolute inset-0 w-full h-full rounded-3xl pointer-events-none'>
                      <defs>
                        <linearGradient
                          id={`border-grad-${index}`}
                          x1='0%'
                          y1='0%'
                          x2='0%'
                          y2='100%'
                        >
                          <stop offset='0%' stopColor='#B56DD3' />
                          <stop offset='100%' stopColor='#7030B1' />
                        </linearGradient>
                      </defs>
                      <rect
                        x='0.5'
                        y='0.5'
                        width='calc(100% - 1px)'
                        height='calc(100% - 1px)'
                        rx='23.5'
                        stroke={`url(#border-grad-${index})`}
                        strokeWidth='1'
                        fill='none'
                      />
                    </svg>
                    <span className='text-white font-semibold text-[15px] md:text-[16px] leading-snug'>
                      {benefit}
                    </span>
                  </div>
                  {/* Dashed Line (except last item) */}
                  {index < 4 && (
                    <div className='hidden xl:block w-8 border-t-2 border-dashed border-white/60 mx-1'></div>
                  )}
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className='flex flex-wrap justify-center gap-2'>
              {benefits.slice(5).map((benefit, index) => (
                <div key={index} className='flex items-center'>
                  <div className='relative w-[150px] h-[140px] md:w-[170px] md:h-[160px] flex flex-col items-center justify-center p-4 rounded-3xl backdrop-blur-sm text-center shadow-[0px_4px_24px_#0000001F] bg-[#FFFFFF1A] hover:bg-white/20 transition-all duration-300'>
                    <svg className='absolute inset-0 w-full h-full rounded-3xl pointer-events-none'>
                      <defs>
                        <linearGradient
                          id={`border-grad-row2-${index}`}
                          x1='0%'
                          y1='0%'
                          x2='0%'
                          y2='100%'
                        >
                          <stop offset='0%' stopColor='#B56DD3' />
                          <stop offset='100%' stopColor='#7030B1' />
                        </linearGradient>
                      </defs>
                      <rect
                        x='0.5'
                        y='0.5'
                        width='calc(100% - 1px)'
                        height='calc(100% - 1px)'
                        rx='23.5'
                        stroke={`url(#border-grad-row2-${index})`}
                        strokeWidth='1'
                        fill='none'
                      />
                    </svg>
                    <span className='text-white font-semibold text-[15px] md:text-[16px] leading-snug'>
                      {benefit}
                    </span>
                  </div>
                  {/* Dashed Line (except last item) */}
                  {index < 3 && (
                    <div className='hidden xl:block w-8 border-t-2 border-dashed border-white/60 mx-1'></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBenefits;

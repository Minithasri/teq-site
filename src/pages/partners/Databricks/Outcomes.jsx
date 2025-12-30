'use client';

import Image from 'next/image';

const Outcomes = () => {
  return (
    <section className='w-full py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Card */}
        <div className='w-full rounded-[32px] overflow-hidden relative min-h-[500px] flex items-center shadow-xl'>
          {/* Background Image - Final Frame */}
          <div className='absolute inset-0 z-0'>
            <Image
              src='/images/partners/databricks/final_frame.png'
              alt='Background'
              fill
              className='object-cover'
            />
          </div>

          <div className='w-full h-full relative z-10 p-8 md:p-16'>
            <div className='w-full md:w-3/4 lg:w-3/5'>
              <h2 className='text-3xl md:text-[40px] font-bold text-white mb-8 leading-tight'>
                Outcomes & Metrics
                <br />
                You Can Expect
              </h2>

              {/* Metrics & Attributes Grid */}
              <div className='w-full'>
                {/* Top Row: Metrics */}
                <div className='grid grid-cols-3 gap-0'>
                  {/* Metric 1 */}
                  <div className='border-r border-b border-gray-100/30 py-8 pr-8'>
                    <div className='text-[#FFC107] text-[32px] font-bold mb-1 whitespace-nowrap'>
                      50-80%
                    </div>
                    <div className='text-white/80 text-[14px] md:text-[16px] font-medium leading-snug'>
                      Faster processing
                    </div>
                  </div>
                  {/* Metric 2 */}
                  <div className='border-r border-b border-gray-100/30 py-8 px-8'>
                    <div className='text-[#FFC107] text-[32px] font-bold mb-1 whitespace-nowrap'>
                      30-60%
                    </div>
                    <div className='text-white/80 text-[14px] md:text-[16px] font-medium leading-snug'>
                      Cost efficiency
                    </div>
                  </div>
                  {/* Metric 3 */}
                  <div className='border-b border-gray-100/30 py-8 pl-8'>
                    <div className='text-[#FFC107] text-[32px] font-bold mb-1 whitespace-nowrap'>
                      40-70%
                    </div>
                    <div className='text-white/80 text-[14px] md:text-[16px] font-medium leading-snug'>
                      Faster time-to-value
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Attributes */}
                <div className='grid grid-cols-3 gap-0'>
                  {/* Attribute 1 */}
                  <div className='border-r border-b border-gray-100/30 py-8 pr-8'>
                    <div className='mb-3'>
                      <Image
                        src='/images/partners/databricks/final_icon_1.svg'
                        alt='Icon'
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className='text-white font-bold text-[14px] leading-tight'>
                      Improved
                      <br />
                      compliance
                    </div>
                  </div>

                  {/* Attribute 2 */}
                  <div className='border-r border-b border-gray-100/30 py-8 px-8'>
                    <div className='mb-3'>
                      <Image
                        src='/images/partners/databricks/final_icon_2.svg'
                        alt='Icon'
                        width={12}
                        height={12}
                      />
                    </div>
                    <div className='text-white font-bold text-[14px] leading-tight'>
                      More ML
                      <br />
                      deployments
                    </div>
                  </div>

                  {/* Attribute 3 */}
                  <div className='border-b border-gray-100/30 py-8 pl-8'>
                    <div className='mb-3'>
                      <Image
                        src='/images/partners/databricks/final_icon_3.svg'
                        alt='Icon'
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className='text-white font-bold text-[14px] leading-tight'>
                      Improved self
                      <br />
                      service adoption
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;

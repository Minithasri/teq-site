'use client';

import Image from 'next/image';

const Outcomes = () => {
  const outcomesData = [
    {
      metricVal: '50-80%',
      metricLabel: 'Faster processing',
      icon: '/images/partners/databricks/final_icon_1.svg',
      iconSize: 24,
      attrLabel: ['Improved', 'compliance'],
    },
    {
      metricVal: '30-60%',
      metricLabel: 'Cost efficiency',
      icon: '/images/partners/databricks/final_icon_2.svg',
      iconSize: 12,
      attrLabel: ['More ML', 'deployments'],
    },
    {
      metricVal: '40-70%',
      metricLabel: 'Faster time-to-value',
      icon: '/images/partners/databricks/final_icon_3.svg',
      iconSize: 24,
      attrLabel: ['Improved self', 'service adoption'],
    },
  ];

  return (
    <section className='w-full py-10 lg:py-20 bg-white'>
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

              {/* Desktop View: Strict Grid */}
              <div className='hidden lg:block w-full'>
                {/* Top Row: Metrics */}
                <div className='grid grid-cols-3 gap-0'>
                  {/* Metric 1 */}
                  <div className='border-r border-b border-gray-100/30 py-8 pr-8'>
                    <div className='text-[#FFC107] text-[32px] font-bold mb-1 whitespace-nowrap'>
                      50-80%
                    </div>
                    <div className='text-white/80 text-[16px] font-medium leading-snug'>
                      Faster processing
                    </div>
                  </div>
                  {/* Metric 2 */}
                  <div className='border-r border-b border-gray-100/30 py-8 px-8'>
                    <div className='text-[#FFC107] text-[32px] font-bold mb-1 whitespace-nowrap'>
                      30-60%
                    </div>
                    <div className='text-white/80 text-[16px] font-medium leading-snug'>
                      Cost efficiency
                    </div>
                  </div>
                  {/* Metric 3 */}
                  <div className='border-b border-gray-100/30 py-8 pl-8'>
                    <div className='text-[#FFC107] text-[32px] font-bold mb-1 whitespace-nowrap'>
                      40-70%
                    </div>
                    <div className='text-white/80 text-[16px] font-medium leading-snug'>
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

              {/* Mobile View: Vertical Stack */}
              <div className='lg:hidden flex flex-col w-full'>
                {outcomesData.map((item, index) => (
                  <div
                    key={index}
                    className={`py-6 ${
                      index !== outcomesData.length - 1 ? 'border-b border-gray-100/30' : ''
                    }`}
                  >
                    {/* Metric Row */}
                    <div className='mb-4'>
                      <div className='text-[#FFC107] text-3xl font-bold mb-1'>{item.metricVal}</div>
                      <div className='text-white/80 text-sm font-medium'>{item.metricLabel}</div>
                    </div>

                    {/* Attribute Row */}
                    <div className='flex items-start gap-4'>
                      <div className='mt-1'>
                        <Image
                          src={item.icon}
                          alt='Icon'
                          width={item.iconSize}
                          height={item.iconSize}
                        />
                      </div>
                      <div className='text-white font-bold text-sm leading-tight'>
                        {item.attrLabel.map((line, i) => (
                          <span key={i} className='block'>
                            {line}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;

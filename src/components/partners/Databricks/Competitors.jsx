'use client';

import Image from 'next/image';

const Competitors = () => {
  return (
    <section className='w-full py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-wrap justify-center gap-6'>
          {/* Card 1 — Frame 1 */}
          <div className='relative w-full lg:w-[755px] min-h-[400px] lg:h-[386px] p-6 sm:p-8 md:p-12 overflow-hidden bg-white'>
            <Image
              src='/images/partners/databricks/Frame_1.png'
              alt=''
              fill
              className='object-fill pointer-events-none'
            />

            <div className='relative z-10 h-full flex flex-col justify-between gap-6 sm:gap-8'>
              <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6'>
                <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0'>
                  <Image
                    src='/images/partners/databricks/robo.svg'
                    alt='Robo'
                    width={48}
                    height={48}
                    className='w-8 h-8 sm:w-12 sm:h-12'
                  />
                </div>
                <h2 className='text-[24px] sm:text-[28px] md:text-[36px] font-medium text-[#404040] leading-tight'>
                  Why GWC Data.AI Over <br className='hidden sm:block' />
                  <span className='sm:inline'> Competitors</span>
                </h2>
              </div>

              <div className='flex items-start gap-3 sm:gap-4'>
                <Image
                  src='/images/partners/databricks/spark_bg.svg'
                  alt='Spark'
                  width={32}
                  height={32}
                  className='shrink-0 w-6 h-6 sm:w-8 sm:h-8'
                />
                <div className='flex-1'>
                  <h3 className='text-[16px] sm:text-[18px] font-semibold text-[#404040] mb-3 sm:mb-4'>
                    Depth + Speed
                  </h3>
                  <ul className='space-y-2 sm:space-y-3 text-[13px] sm:text-[14px] list-disc list-inside marker:text-black'>
                    <li>Rapid deployment capabilities</li>
                    <li>Deep architecture maturity</li>
                    <li>Sustainable & resilient solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Frame 2 (Purple Card) */}
          <div className='relative w-full lg:w-[375px] h-auto lg:h-[386px] rounded-[32px] p-8 md:p-12 overflow-hidden bg-[#7030B1] text-white'>
            <Image
              src='/images/partners/databricks/Frame_2.png'
              alt=''
              fill
              className='object-fill pointer-events-none'
            />

            <div className='relative z-10 flex flex-col justify-between h-full'>
              <p className='text-[18px] font-medium leading-relaxed opacity-90'>
                Here's how GWC ensures success with tailored solutions across industries.
              </p>

              <div>
                <div className='mb-6 w-10 h-10  flex items-center justify-center'>
                  <Image
                    src='/images/partners/databricks/spark_bg.svg'
                    alt='Spark'
                    width={32}
                    height={32}
                    className='shrink-0'
                  />
                </div>

                <h3 className='text-[16px] font-semibold mb-4'>Tailored Industry Experience</h3>
                <ul className='space-y-3 text-white/80 list-disc list-inside marker:text-white/50 text-[14px]'>
                  <li>Domain-specific expertise</li>
                  <li>Healthcare & manufacturing focus</li>
                  <li>Regulatory compliance awareness</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3 — Frame 3 */}
          <div className='relative w-full lg:w-[375px] h-auto lg:h-[242px]  p-8 overflow-hidden bg-white'>
            <Image
              src='/images/partners/databricks/Frame_3.png'
              alt=''
              fill
              className='object-fill pointer-events-none'
            />

            <div className='relative z-10'>
              <div className='mb-6'>
                <Image
                  src='/images/partners/databricks/spark.svg'
                  alt='Spark'
                  width={24}
                  height={24}
                />
              </div>
              <h3 className='text-[18px] font-semibold text-[#404040] mb-4'>
                Holistic Cost Governance
              </h3>
              <ul className='space-y-3 text-[14px] list-disc list-inside marker:text-black'>
                <li>Cost visibility from day one</li>
                <li>Auto-scaling & spot instances</li>
                <li>Proactive usage monitoring</li>
              </ul>
            </div>
          </div>

          {/* Card 4 — Frame 4 */}
          <div className='relative w-full lg:w-[375px] h-auto lg:h-[242px]  p-8 overflow-hidden bg-white'>
            <Image
              src='/images/partners/databricks/Frame_4.png'
              alt=''
              fill
              className='object-fill pointer-events-none'
            />

            <div className='relative z-10'>
              <div className='mb-6'>
                <Image
                  src='/images/partners/databricks/spark.svg'
                  alt='Spark'
                  width={24}
                  height={24}
                />
              </div>
              <h3 className='text-[18px] font-semibold text-[#404040] mb-4'>
                Holistic Cost Governance
              </h3>
              <ul className='space-y-3 text-[14px] list-disc list-inside marker:text-black'>
                <li>Role-based access controls</li>
                <li>End-to-end encryption</li>
                <li>Complete audit trails</li>
              </ul>
            </div>
          </div>

          {/* Card 5 — Frame 5 */}
          <div className='relative w-full lg:w-[375px] h-auto lg:h-[242px]  p-8 overflow-hidden bg-white'>
            <Image
              src='/images/partners/databricks/Frame_5.png'
              alt=''
              fill
              className='object-fill pointer-events-none'
            />

            <div className='relative z-10'>
              <div className='mb-6'>
                <Image
                  src='/images/partners/databricks/spark.svg'
                  alt='Spark'
                  width={24}
                  height={24}
                />
              </div>
              <h3 className='text-[18px] font-semibold text-[#404040] mb-4'>
                Continuous Innovation
              </h3>
              <ul className='space-y-3 text-[14px] list-disc list-inside marker:text-black'>
                <li>Post-deployment support</li>
                <li>Feature adoption roadmaps</li>
                <li>Continuous platform updates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competitors;

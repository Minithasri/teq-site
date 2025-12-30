'use client';

import Image from 'next/image';
import { FiShield, FiTrendingUp, FiZap } from 'react-icons/fi'; // Using generic icons for bottom row as users usually provide specific ones later or standard react-icons match well

const Outcomes = () => {
  return (
    <section className='w-full py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Card */}
        <div className='w-full bg-[#8B5CF6] rounded-[32px] overflow-hidden relative min-h-[500px] flex items-center shadow-xl'>
          {/* Dummy Background Overlay - User asked for dummy now */}
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),_transparent_50%)]' />

          <div className='grid grid-cols-1 lg:grid-cols-2 w-full h-full relative z-10'>
            {/* Left Content */}
            <div className='p-8 md:p-16 flex flex-col justify-center'>
              <h2 className='text-3xl md:text-5xl font-bold text-white mb-16 leading-tight'>
                Outcomes & Metrics
                <br />
                You Can Expect
              </h2>

              <div className='grid grid-cols-3 gap-8 md:gap-12 border-t border-white/20 pt-12'>
                {/* Metric 1 */}
                <div>
                  <div className='text-[#FFC107] text-3xl md:text-4xl font-bold mb-2'>50-80%</div>
                  <div className='text-white/80 text-sm md:text-base'>Faster processing</div>
                </div>
                {/* Metric 2 */}
                <div>
                  <div className='text-[#FFC107] text-3xl md:text-4xl font-bold mb-2'>30-60%</div>
                  <div className='text-white/80 text-sm md:text-base'>Cost efficiency</div>
                </div>
                {/* Metric 3 */}
                <div>
                  <div className='text-[#FFC107] text-3xl md:text-4xl font-bold mb-2'>40-70%</div>
                  <div className='text-white/80 text-sm md:text-base'>Faster time-to-value</div>
                </div>

                {/* Bottom Row Attributes */}
                <div className='pt-8 border-t border-white/20 col-span-3 grid grid-cols-3 gap-8 md:gap-12 mt-4'>
                  <div>
                    <div className='text-[#FFC107] mb-2'>
                      <FiShield className='w-6 h-6' />
                    </div>
                    <div className='text-white font-medium text-sm md:text-base'>
                      Improved
                      <br />
                      compliance
                    </div>
                  </div>
                  <div>
                    <div className='text-[#FFC107] mb-2'>
                      <FiZap className='w-6 h-6' />
                    </div>
                    <div className='text-white font-medium text-sm md:text-base'>
                      More ML
                      <br />
                      deployments
                    </div>
                  </div>
                  <div>
                    <div className='text-[#FFC107] mb-2'>
                      <FiTrendingUp className='w-6 h-6' />
                    </div>
                    <div className='text-white font-medium text-sm md:text-base'>
                      Improved self
                      <br />
                      service adoption
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image (Globe) */}
            <div className='relative h-[400px] lg:h-auto overflow-hidden lg:overflow-visible flex justify-end items-center'>
              {/*
                  The globe is aligned to the right, mostly cut off circle.
                  User image shows it taking up the right side.
               */}
              <div className='absolute right-[-20%] lg:right-[-100px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px]'>
                <Image
                  src='/images/partners/databricks/globe.png'
                  alt='Global Impact'
                  fill
                  className='object-contain lg:object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;

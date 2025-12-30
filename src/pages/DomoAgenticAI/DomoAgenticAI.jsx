/* eslint-disable @next/next/no-img-element */
'use client';

const DomoAgenticAI = () => {
  return (
    <div className='w-full'>
      {/* Top spacing */}
      <div className='h-[50px] sm:h-[75px] lg:h-[100px]'></div>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-6 lg:gap-[2%]'>
          <div
            className='relative rounded-[16px] lg:rounded-[24px] border border-[#6E2B8B] p-4 sm:p-6 lg:p-[60px] overflow-hidden'
            style={{ borderWidth: '1px' }}
          >
            <div className='absolute inset-0 z-0'>
              <img
                src='/images/DomoAgenticAI.jpg'
                alt='Background'
                className='w-full h-full object-cover opacity-20'
              />
            </div>

            {/* Content */}
            <div className='relative z-10'>
              {/* First Row - Image */}
              <div className='flex justify-center lg:justify-start mb-4 sm:mb-6'>
                <div
                  className='w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] lg:w-[90px] lg:h-[90px] rounded-[16px] lg:rounded-[24px] flex items-center justify-center'
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #0000001C',
                  }}
                >
                  <img
                    src='/images/Agent.svg'
                    alt='Agent Icon'
                    className='w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12'
                  />
                </div>
              </div>

              {/* Second Row - Title */}
              <div className='text-center lg:text-left mb-6 sm:mb-8'>
                <h2 className='text-[28px] sm:text-[34px] lg:text-[40px] font-semibold leading-[34px] sm:leading-[42px] lg:leading-[48px]'>
                  What are{' '}
                  <span
                    className='bg-clip-text text-transparent'
                    style={{
                      backgroundImage: 'linear-gradient(to right, #7030B1, #B56DD3)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    DOMO AI Agents?
                  </span>
                </h2>
              </div>

              {/* Top gap */}
              <div className='h-[30px] sm:h-[35px] lg:h-[40px]'></div>

              {/* Third Row - Two Columns */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                {/* First Column */}
                <div className='space-y-3 sm:space-y-4'>
                  <div className='flex justify-center lg:justify-start'>
                    <div className='w-6 h-6'>
                      <img
                        src='/images/Star.svg'
                        alt='Autonomous Digital Coworkers Icon'
                        className='w-6 h-6'
                      />
                    </div>
                  </div>
                  <div className='text-center lg:text-left'>
                    <h3 className='text-[16px] sm:text-[17px] lg:text-[18px] font-semibold text-[#404040]'>
                      Autonomous Digital Coworkers
                    </h3>
                  </div>
                  <div className='text-center lg:text-left'>
                    <p className='text-[13px] sm:text-[14px] font-normal leading-[22px] sm:leading-[26px] text-[#404040]'>
                      AI agents that operate independently to support your teams and streamline
                      daily workflows.
                    </p>
                  </div>
                </div>

                {/* Second Column */}
                <div className='space-y-3 sm:space-y-4'>
                  <div className='flex justify-center lg:justify-start'>
                    <div className='w-6 h-6'>
                      <img
                        src='/images/Star.svg'
                        alt='Real-Time Data Action Icon'
                        className='w-6 h-6'
                      />
                    </div>
                  </div>
                  <div className='text-center lg:text-left'>
                    <h3 className='text-[16px] sm:text-[17px] lg:text-[18px] font-semibold text-[#404040]'>
                      Real-Time Data Action
                    </h3>
                  </div>
                  <div className='text-center lg:text-left'>
                    <p className='text-[13px] sm:text-[14px] font-normal leading-[22px] sm:leading-[26px] text-[#404040]'>
                      Instantly analyze and act on your data to accelerate decisions and reduce
                      manual effort.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className='flex justify-center lg:justify-end items-stretch mt-6 lg:mt-0'>
            <div className='w-full max-w-[450px] flex items-center justify-center'>
              <img
                src='/images/DomoAgenticAI.svg'
                alt='Domo Agentic AI'
                className='w-full h-auto object-contain'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className='h-[50px] sm:h-[75px] lg:h-[100px]'></div>
    </div>
  );
};

export default DomoAgenticAI;

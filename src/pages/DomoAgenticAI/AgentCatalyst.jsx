'use client';
import Image from 'next/image';

const AgentCatalyst = () => {
  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-10 flex justify-center my-8 sm:my-12 md:my-16 lg:my-20 xl:my-[80px]'>
      <div className='bg-gradient-to-br from-[#7030B1] to-[#A545CC] rounded-2xl sm:rounded-[25px] relative overflow-hidden w-full max-w-[1200px]'>
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/AIMatters.jpg')] bg-cover bg-center opacity-40 rounded-2xl sm:rounded-[25px] z-10" />

        {/* CONTENT CONTAINER */}
        <div className='relative z-20 flex flex-col lg:flex-row h-auto min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:h-[470px]'>
          {/* LEFT COLUMN - Always visible */}
          <div className='flex-1 p-6 sm:p-8 md:p-10 lg:p-[60px] flex flex-col justify-center lg:justify-start relative'>
            {/* HEADER */}
            <div className='mb-6 sm:mb-8 text-center lg:text-left'>
              <div className='text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-white leading-tight sm:leading-snug md:leading-[50px] lg:leading-[55px]'>
                Agent Catalyst
              </div>
              <div className='text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-white leading-tight sm:leading-snug md:leading-[50px] lg:leading-[55px]'>
                Platform
              </div>
            </div>

            {/* ====================== */}
            {/*     PILLS - ONE ROW   */}
            {/* ====================== */}

            <div className='mb-6 sm:mb-8 flex justify-center lg:justify-start'>
              <div
                className='
                flex items-center
                gap-0.5 sm:gap-1 md:gap-2 lg:gap-1
                whitespace-nowrap
                flex-nowrap
                w-full justify-center lg:justify-start
                scale-90 sm:scale-100
              '
              >
                {/* PILL 1 */}
                <div className='w-[85px] h-[32px] sm:w-[95px] sm:h-[38px] md:w-[110px] md:h-[45px] bg-white rounded-full flex items-center justify-center shrink-0'>
                  <span className='text-[#F16B66] font-bold text-[13px] sm:text-[15px] md:text-[18px] lg:text-[20px]'>
                    Build
                  </span>
                </div>

                {/* CONNECTOR 1 - Mobile */}
                <div className='flex items-center shrink-0 sm:hidden'>
                  <svg width='16' height='8'>
                    <line
                      x1='0'
                      y1='4'
                      x2='14'
                      y2='4'
                      stroke='white'
                      strokeWidth='2'
                      strokeDasharray='3 2'
                      opacity='0.9'
                    />
                  </svg>
                  <svg width='5' height='8' className='ml-0'>
                    <polygon points='0,0 5,4 0,8' fill='white' opacity='0.9' />
                  </svg>
                </div>

                {/* CONNECTOR 1 - Tablet+ */}
                <div className='hidden sm:flex items-center shrink-0'>
                  <svg width='30' height='8' className='md:w-[45px] md:h-[10px]'>
                    <line
                      x1='0'
                      y1='4'
                      x2='28'
                      y2='4'
                      stroke='white'
                      strokeWidth='2'
                      strokeDasharray='4 3'
                      opacity='0.9'
                    />
                  </svg>
                  <svg width='7' height='8' className='ml-0 md:w-[9px] md:h-[10px]'>
                    <polygon points='0,0 7,4 0,8' fill='white' opacity='0.9' />
                  </svg>
                </div>

                {/* PILL 2 */}
                <div className='w-[85px] h-[32px] sm:w-[95px] sm:h-[38px] md:w-[110px] md:h-[45px] bg-white rounded-full flex items-center justify-center shrink-0'>
                  <span className='text-[#F16B66] font-bold text-[13px] sm:text-[15px] md:text-[18px] lg:text-[20px]'>
                    Deploy
                  </span>
                </div>

                {/* CONNECTOR 2 - Mobile */}
                <div className='flex items-center shrink-0 sm:hidden'>
                  <svg width='16' height='8'>
                    <line
                      x1='0'
                      y1='4'
                      x2='14'
                      y2='4'
                      stroke='white'
                      strokeWidth='2'
                      strokeDasharray='3 2'
                      opacity='0.9'
                    />
                  </svg>
                  <svg width='5' height='8' className='ml-0'>
                    <polygon points='0,0 5,4 0,8' fill='white' opacity='0.9' />
                  </svg>
                </div>

                {/* CONNECTOR 2 - Tablet+ */}
                <div className='hidden sm:flex items-center shrink-0'>
                  <svg width='30' height='8' className='md:w-[45px] md:h-[10px]'>
                    <line
                      x1='0'
                      y1='4'
                      x2='28'
                      y2='4'
                      stroke='white'
                      strokeWidth='2'
                      strokeDasharray='4 3'
                      opacity='0.9'
                    />
                  </svg>
                  <svg width='7' height='8' className='ml-0 md:w-[9px] md:h-[10px]'>
                    <polygon points='0,0 7,4 0,8' fill='white' opacity='0.9' />
                  </svg>
                </div>

                {/* PILL 3 */}
                <div className='w-[85px] h-[32px] sm:w-[95px] sm:h-[38px] md:w-[110px] md:h-[45px] bg-white rounded-full flex items-center justify-center shrink-0'>
                  <span className='text-[#F16B66] font-bold text-[13px] sm:text-[15px] md:text-[18px] lg:text-[20px]'>
                    Scale
                  </span>
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className='mt-4 lg:mt-8 lg:absolute lg:bottom-20 lg:left-[60px] lg:right-8'>
              <p className='text-sm sm:text-base md:text-[16px] font-medium leading-5 sm:leading-6 md:leading-[34px] text-white max-w-[600px] text-center lg:text-left mx-auto lg:mx-0'>
                Agent Catalyst is your control center for enterprise AI. Orchestrate logic,
                approvals, APIs, workflows, and data triggers without writing complex code.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN - IMAGES (Hidden on mobile, visible on lg and above) */}
          <div className='hidden lg:flex flex-1 relative h-auto'>
            {/* Desktop Images */}
            <div className='absolute -right-15 top-0 w-[650px]'>
              <Image
                src='/images/AgentCatalyst.svg'
                alt='Ellipse'
                width={800}
                height={800}
                className='absolute top-[-80px] right-[-5px] object-top object-contain'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCatalyst;

'use client';
import { FiArrowRight } from 'react-icons/fi';

const DomoBanner = () => {
  const containerStyle = {
    background: 'linear-gradient(to bottom, #CEB3E9 0%, #FFFFFF 100%)',
  };

  const textGradientStyle = {
    background: 'linear-gradient(to right, #7030B1, #B56DD3)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <div className='min-h-[700px] flex items-center justify-center relative overflow-hidden pt-[122px]'>

      {/* Background Image with 20% opacity */}
      <div className='absolute inset-0 w-full h-full z-0'>
        <img
          src="/images/DomoBanner.jpg"
          alt="DOMO Agentic AI Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Gradient Background with reduced opacity */}
      <div
        className='absolute inset-0 w-full h-full z-10 opacity-60'
        style={{ background: 'linear-gradient(to bottom, #CEB3E9 0%, #FFFFFF 100%)' }}
      />

      {/* Main Container */}
      <div className='relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-[1.45fr_0.85fr] gap-8 lg:gap-12 items-center py-8 sm:py-12 lg:py-16'>

          {/* LEFT COLUMN */}
          <div className='text-center lg:text-left space-y-6'>
            {/* First Row */}
            <div className='font-bold text-[38px] leading-[1.2]'>
              Reimagine Enterprise Workflows with
            </div>

            {/* Second Row */}
            <div className='font-bold text-[38px] leading-[48px]'>
              <span style={textGradientStyle}>
                DOMO Agentic AI
              </span>
            </div>

            {/* Third Row */}
            <div className='text-[#737373] text-[18px] font-normal leading-[1.6] mt-2 max-w-2xl mx-auto lg:mx-0'>
              Autonomous agents that convert insight into action seamlessly
              integrated within your data ecosystem. Welcome to the future of
              intelligent operations.
            </div>

            {/* Button Row */}
            <div className='flex justify-center lg:justify-start pt-4'>
              <button
                className='flex items-center justify-center gap-2 w-[190px] h-[45px] text-[14px] text-white transition-all duration-300 hover:scale-105'
                style={{
                  background: 'linear-gradient(to right, #7030B1, #B56DD3)',
                  borderRadius: '25px',
                }}
              >
                Explore Solutions
                <FiArrowRight className='text-lg' />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className='flex justify-center lg:justify-end mt-8 lg:mt-0'>
            <div className='w-full max-w-[410px] h-[470px] flex items-center justify-center rounded-lg overflow-hidden'>
              <img
                src="/images/DomoBanner.png"
                alt="DOMO Agentic AI"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DomoBanner;

'use client';
import { FiArrowRight } from 'react-icons/fi';
import { useEffect, useRef, useState } from 'react';

const HomeBanner = () => {
  const videoRef = useRef(null);

  const [aiAgents, setAiAgents] = useState(0);
  const [enterprise, setEnterprise] = useState(0);
  const [minutesSaved, setMinutesSaved] = useState(0);

  const animateCount = (setValue, end, duration = 1200) => {
    let start = 0;
    let startTime = null;

    const step = timestamp => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    animateCount(setAiAgents, 90);
    animateCount(setEnterprise, 40);
    animateCount(setMinutesSaved, 200000, 1500);
  }, []);

  return (
    <div className='pt-[50px] md:pt-[50px] lg:pt-10'>
      {/* Background Video */}
      <div className='absolute inset-0 w-full h-full z-0'>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className='w-full h-full object-cover opacity-20'
        >
          <source src='/videos/BannerVideo.mp4' type='video/mp4' />
          <source src='/videos/BannerVideo.webm' type='video/webm' />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Gradient */}
      <div
        className='absolute inset-0 w-full h-full z-10 opacity-60'
        style={{ background: 'linear-gradient(to bottom, #CEB3E9, #FFFFFF)' }}
      />

      {/* Main Container */}
      <div className='relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-[1.45fr_0.85fr] gap-8 lg:gap-12 items-center py-8 sm:py-12 lg:py-16'>
          {/* LEFT COLUMN */}
          <div className='text-center lg:text-left space-y-6'>
            <h1 className='font-bold text-[32px] text-[#404040] leading-[40px] sm:text-[40px] sm:leading-[50px] lg:text-[40px] lg:leading-[58px]'>
              <span
                className='bg-clip-text text-transparent'
                style={{ backgroundImage: 'linear-gradient(to right, #7030B1, #B56DD3)' }}
              >
                Agentic AI
              </span>
              <span className='text-[#404040]'> that turns Automation into Intelligence</span>
            </h1>

            <p className='text-[16px] sm:text-[18px] font-normal text-[#737373] max-w-2xl mx-auto lg:mx-0 mt-4 sm:mt-6'>
              Agentic AI solutions that transform your business <br></br>processes with measurable
              ROI and rapid deployment.
            </p>

            <div className='flex justify-center lg:justify-start'>
              <button
                className='flex items-center justify-center gap-2 w-[170px] h-[42px] sm:w-[190px] sm:h-[45px] text-[13px] sm:text-[14px] text-white transition-all duration-300 hover:scale-105'
                style={{
                  background: 'linear-gradient(to right, #7030B1, #B56DD3)',
                  borderRadius: '25px',
                }}
              >
                Explore Solutions
                <FiArrowRight className='text-lg' />
              </button>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-4 pt-6 sm:pt-8 -ml-2'>
              <div className='flex justify-center lg:justify-start'>
                <div className='rounded-2xl w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[140px] lg:h-[140px]'>
                  <img
                    src='/images/DomoPatner.png'
                    alt='Partner Logo'
                    className='w-full h-full object-contain rounded-2xl'
                  />
                </div>
              </div>

              <div className='space-y-3 sm:space-y-4'>
                <div className='text-left'>
                  <div className='text-[20px] sm:text-[24px] font-bold text-[#7030B1]'>
                    {aiAgents}+
                  </div>

                  <div className='text-[12px] sm:text-[14px] font-medium text-gray-600 mt-1'>
                    AI Agents
                  </div>
                </div>

                <div className='text-left'>
                  <div className='text-[20px] sm:text-[24px] font-bold text-[#7030B1]'>30–50%</div>
                  <div className='text-[12px] sm:text-[14px] font-medium text-gray-600 mt-1'>
                    Faster Implementation
                  </div>
                </div>
              </div>

              <div className='space-y-3 sm:space-y-4'>
                <div className='text-left'>
                  <div className='text-[20px] sm:text-[24px] font-bold text-[#7030B1]'>
                    {enterprise}+
                  </div>

                  <div className='text-[12px] sm:text-[14px] font-medium text-gray-600 mt-1'>
                    Enterprise Deployments
                  </div>
                </div>

                <div className='text-left'>
                  <div className='text-[20px] sm:text-[24px] font-bold text-[#7030B1]'>
                    {Math.floor(minutesSaved / 1000)}k+
                  </div>

                  <div className='text-[12px] sm:text-[14px] font-medium text-gray-600 mt-1'>
                    Mins of human efforts saved
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Improved mobile responsiveness */}
          <div className='flex justify-center lg:justify-end mt-4 sm:mt-8 lg:mt-0 w-full p-0 pt-8 sm:pt-12 lg:pt-[90px]'>
            <div className='relative w-full max-w-md lg:max-w-7xl flex justify-center lg:justify-end'>
              <img
                src='/images/Chip.svg'
                alt='Chip Illustration'
                className='w-full max-w-[280px] sm:max-w-[400px] lg:max-w-none h-auto scale-[1.2] sm:scale-[1.3] lg:scale-[1.5]'
              />

              <div
                className='absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                style={{ animation: 'float 6s ease-in-out infinite' }}
              >
                <img
                  src='/images/Robot.svg'
                  alt='Robot Illustration'
                  className='w-[80px] h-[120px] sm:w-[120px] sm:h-[180px] lg:w-[150px] lg:h-[225px] object-contain'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-25px);
          }
        }
      `}</style>
    </div>
  );
};

export default HomeBanner;

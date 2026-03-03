'use client';
import { useEffect, useRef, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

function GradientHeading() {
  const lines = ['Build your First AI Agent', 'in 10 Hours'];

  const wordGradients = {
    Build: ['#501988', '#501988'],
    your: ['#501988', '#F97316'],
    First: ['#F97316', '#F97316'],
    AI: ['#F97316', '#501988'],
    Agent: ['#501988', '#501988'],
    in: ['#F97316', '#F97316'],
    10: ['#F97316', '#501988'],
    Hours: ['#501988', '#501988'],
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {lines.map((line, li) => (
        <div key={li}>
          <span
            className='responsive-heading'
            style={{
              fontSize: 'clamp(26px, 5.5vw, 50px)',
              fontWeight: 700,
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
              display: 'inline-block',
            }}
          >
            {line.split(' ').map((word, i, arr) => {
              const [from, to] = wordGradients[word] ?? ['#501988', '#501988'];
              return (
                <span key={i}>
                  <span
                    style={{
                      display: 'inline-block',
                      backgroundImage: `linear-gradient(to right, ${from}, ${to})`,
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      color: 'transparent',
                    }}
                  >
                    {word}
                  </span>
                  {i < arr.length - 1 && (
                    <span style={{ display: 'inline-block', width: '0.28em' }} />
                  )}
                </span>
              );
            })}
          </span>
        </div>
      ))}
    </div>
  );
}

const HomeBanner = () => {
  const videoRef = useRef(null);
  const [aiAgents, setAiAgents] = useState(0);
  const [enterprise, setEnterprise] = useState(0);
  const [minutesSaved, setMinutesSaved] = useState(0);

  const animateCount = (setValue, end, duration = 1200) => {
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
    if (videoRef.current) videoRef.current.play().catch(() => {});
    animateCount(setAiAgents, 90);
    animateCount(setEnterprise, 40);
    animateCount(setMinutesSaved, 200000, 1500);
  }, []);

  return (
    <div
      className='relative overflow-hidden border-none outline-none'
      style={{
        minHeight: '100vh',
        background: '#F8F9FA', // Fallback background color for mobile only
      }}
    >
      {/* Video Background - Hidden on mobile, shown on tablet and above */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className='absolute inset-0 w-full h-full object-cover border-none outline-none shadow-none z-0 hidden md:block'
        style={{
          objectPosition: 'center',
        }}
      >
        <source src='/videos/earth.mp4' type='video/mp4' />
        <source src='/videos/earth.webm' type='video/webm' />
        Your browser does not support the video tag.
      </video>

      {/* Overlay - Only show on tablet and desktop when video is present */}
      <div
        className='hidden md:block'
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        className='relative w-full mx-auto px-4 sm:px-6 lg:px-8'
        style={{
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className='w-full max-w-7xl mx-auto py-12 sm:py-16 lg:py-20'>
          <div className='text-center'>
            {/* Badge */}
            <div className='flex items-center justify-center mb-6 sm:mb-8'>
              <div className='inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-100 px-3 sm:px-4 py-1.5 rounded-[10px] shadow-lg'>
                <div
                  className='w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0'
                  style={{ background: 'linear-gradient(135deg, #F97316 0%, #43145E 100%)' }}
                >
                  <img src='/images/HomePage/Frame.svg' alt='' className='w-4 h-4 sm:w-5 sm:h-5' />
                </div>
                <span className='text-[11px] sm:text-[12px] font-medium text-[#444444]'>
                  Agentic AI that turns Automation into Intelligence
                </span>
              </div>
            </div>

            {/* Heading */}
            <GradientHeading />

            {/* Description */}
            <p className='text-sm sm:text-base lg:text-lg text-[#737373] max-w-2xl mx-auto mt-4 sm:mt-6 px-4'>
              Agentic AI solutions that transform your business processes with measurable ROI and
              rapid deployment.
            </p>

            {/* CTA Button */}
            <div className='flex justify-center mt-8 sm:mt-10 lg:mt-12'>
              <button
                onClick={() => {
                  const element = document.getElementById('agent-building');
                  if (element) {
                    const yOffset = -80;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className='flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base text-white transition-all duration-300 hover:scale-105 hover:shadow-lg'
                style={{
                  background: 'linear-gradient(to right, #7030B1, #B56DD3)',
                  borderRadius: '30px',
                }}
              >
                Explore Use Cases
                <FiArrowRight className='text-lg sm:text-xl' />
              </button>
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

        /* Mobile first responsive heading */
        .responsive-heading {
          white-space: normal !important;
          word-break: keep-all;
          display: block !important;
          padding: 0 1rem;
          line-height: 1.2 !important;
        }

        /* Tablet and above */
        @media (min-width: 768px) {
          .responsive-heading {
            padding: 0 2rem;
          }
        }

        /* Desktop - 1024px and above */
        @media (min-width: 1024px) {
          .responsive-heading {
            white-space: nowrap !important;
            padding: 0;
          }
        }

        /* Large desktop */
        @media (min-width: 1280px) {
          .responsive-heading {
            font-size: 56px !important;
          }
        }

        /* Video positioning for tablet and above */
        @media (min-width: 768px) {
          video {
            top: -200px;
            height: calc(100% + 150px);
          }
        }

        @media (min-width: 1024px) {
          video {
            top: -230px;
            height: calc(100% + 200px);
          }
        }

        @media (min-width: 1280px) {
          video {
            top: -250px;
            height: calc(100% + 250px);
          }
        }

        @media (min-width: 1536px) {
          video {
            top: -300px;
            height: calc(100% + 300px);
          }
        }
      `}</style>
    </div>
  );
};

export default HomeBanner;

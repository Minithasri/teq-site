'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import bg from '../../../public/images/background.png';

function GradientHeading() {
  const lines = ['Build your First', 'AI Agent in 10 Hours'];

  const wordGradients = {
    Build: ['#fff', '#fff'],
    your: ['#fff', '#fff'],
    First: ['#fff', '#fff'],
    AI: ['#fff', '#fff'],
    Agent: ['#fff', '#fff'],
    in: ['#fff', '#fff'],
    10: ['#fff', '#fff'],
    Hours: ['#fff', '#fff'],
    Build: ['#fff', '#fff'],
    First: ['#fff', '#fff'],
    AI: ['#fff', '#fff'],
    Agent: ['#fff', '#fff'],
    in: ['#fff', '#fff'],
    10: ['#fff', '#fff'],
    Hours: ['#fff', '#fff'],
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {lines.map((line, li) => (
        <div key={li}>
          <span
            className='responsive-heading'
            style={{
              fontSize: 'clamp(22px, 5.5vw, 60px)',
              fontWeight: 700,
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
              display: 'inline-block',
            }}
          >
            {line.split(' ').map((word, i, arr) => {
              // Group "10 Hours" with gradient background on second line
              if (li === 1 && i === 3) {
                const groupedWords = arr.slice(i).join(' ');
                return (
                  <span
                    key={i}
                    style={{
                      display: 'inline-block',
                      background: 'linear-gradient(135deg, #F97316 , #43145E)',
                      borderRadius: '40px',
                      padding: '8px 20px',
                      marginLeft: '4px',
                      color: 'white',
                      fontWeight: 700,
                    }}
                  >
                    {groupedWords}
                  </span>
                );
              }

              // Skip "Hours" as it's already rendered in the group
              if (li === 1 && i === 4) {
                return null;
              }

              const [from, to] = wordGradients[word] ?? ['#6E2B8B', '#6E2B8B'];
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
      className='relative overflow-hidden rounded-2xl border  mt-0  outline-none w-full'
      style={{
        minHeight: '100vh',
        background: '#F8F9FA',
        borderRadius: '20px ',
      }}
    >
      {/* Background image */}
      <img
        src={bg.src}
        alt='Background'
        className='absolute  z-1 rounded-2xl top-0 left-0 w-full h-full object-cover px-4'
        style={{ zIndex: 1, borderRadius: '40px', padding: '20px' }}
      />

      {/* Content - Full width on 1024px */}
      <div
        className='relative w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-8'
        style={{
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className='w-full max-w-7xl mx-auto py-12 sm:py-16 lg:py-20 px-4'>
          <div className='text-center'>
            {/* Badge */}
            <div className='flex items-center justify-center mb-6 sm:mb-8'>
              <div
                className='inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-100 px-3 sm:px-4 py-1.5 rounded-[10px] shadow-lg'
                style={{
                  boxShadow: '0 20px 40px rgba(255,255,255,0.15)',
                }}
              >
                <div
                  className='w-4 h-4 sm:w-4 sm:h-4 rounded-full flex items-center justify-center shrink-0'
                  style={{ background: 'linear-gradient(135deg, #F97316 0%, #43145E 100%)' }}
                >
                  <img src='/images/HomePage/Frame.svg' alt='' className='w-3 h-3 sm:w-3 sm:h-3' />
                </div>
                <span className='text-[11px] sm:text-[16px] font-medium text-[#444444]'>
                  Agentic AI that turns Automation into Intelligence
                </span>
              </div>
            </div>

            {/* Heading */}
            <GradientHeading />

            {/* Description */}
            <p
              className='text-[20px] mb-12 sm:text-base lg:text-[16px]  text-[#FAFAFA] max-w-4xl mx-auto mt-4 sm:mt-6 px-2'
              style={{ lineHeight: '1.5' }}
            >
              Agentic AI solutions that transform your business processes with measurable ROI and
              rapid deployment.
            </p>

            {/* CTA Button */}
            <div className='mb-6 flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10 lg:mt-12'>
              <button
                onClick={() => {
                  const element = document.getElementById('agent-building');
                  if (element) {
                    const yOffset = -80;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className='flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base text-white transition-all duration-300 hover:scale-105 hover:shadow-lg'
                style={{
                  background: 'linear-gradient(to right, #7030B1, #B56DD3)',
                  borderRadius: '30px',
                }}
              >
                Explore Solution
                <FiArrowRight className='text-lg sm:text-xl' />
              </button>
              <button
                // onClick={() => {
                //   const element = document.getElementById('agent-building');
                //   if (element) {
                //     const yOffset = -80;
                //     const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                //     window.scrollTo({ top: y, behavior: 'smooth' });
                //   }
                // }}
                className='flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base text-[#6F2B8B] transition-all duration-300 hover:scale-105 hover:shadow-lg'
                style={{
                  background: 'white',
                  borderRadius: '30px',
                }}
              >
                <Link href='/contact'>Schedule a Call</Link>
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
          padding: 0 0.5rem;
          line-height: 1.2 !important;
        }

        /* Tablet and above */
        @media (min-width: 768px) {
          .responsive-heading {
            padding: 0 1rem;
          }
        }

        /* Desktop - 1024px and above - FULL WIDTH */
        @media (min-width: 1024px) {
          .responsive-heading {
            font-size: 52px !important;
          }

          /* Make content full width at 1024px */
          .max-w-\[90\%\] {
            max-width: 100% !important;
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }

        /* 13.3-inch devices (typically 1280x800 to 1440x900) */
        @media (min-width: 1280px) and (max-height: 900px) {
          .responsive-heading {
            font-size: 52px !important;
          }

          .text-sm.sm\:text-base.lg\:text-lg {
            font-size: 1.1rem !important;
          }

          video {
            top: -100px !important;
            height: calc(100% + 150px) !important;
          }

          .max-w-\[90\%\] {
            padding-left: 3rem;
            padding-right: 3rem;
          }
        }

        /* Specific adjustment for 13.3-inch with 1280x800 resolution */
        @media (min-width: 1280px) and (max-height: 800px) {
          .responsive-heading {
            font-size: 48px !important;
          }

          .text-sm.sm\:base.lg\:text-lg {
            font-size: 1rem !important;
          }

          video {
            top: -80px !important;
            height: calc(100% + 130px) !important;
          }

          .py-12 {
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
          }
        }

        /* 13.3-inch laptops (around 1280-1366px width) */
        @media (min-width: 1272px) and (max-width: 1366px) and (max-height: 768px) {
          .responsive-heading {
            font-size: 46px !important;
          }

          .text-sm.sm\:base.lg\:text-lg {
            font-size: 1rem !important;
            line-height: 1.6 !important;
          }

          .gap-2.px-3.sm\:px-4.py-1\\.5 {
            padding: 0.5rem 1rem !important;
          }

          .text-\[11px\].sm\:text-\[12px\] {
            font-size: 12px !important;
          }

          button {
            font-size: 1rem !important;
            padding: 0.75rem 2rem !important;
          }

          video {
            top: -210px !important;
            height: calc(100% + 170px) !important;
          }

          .mt-8.sm\:mt-10.lg\:mt-12 {
            margin-top: 1rem !important;
          }
        }

        /* Standard 1280px and above */
        @media (min-width: 1280px) {
          .responsive-heading {
            font-size: 56px !important;
          }
        }

        /* Video positioning for various screen sizes */
        @media (min-width: 768px) {
          video {
            top: -190px;
            height: calc(100% + 100px);
          }
        }

        @media (min-width: 1024px) {
          video {
            top: -200px;
            height: calc(100% + 150px);
          }
        }

        /* 13.3-inch with taller displays */
        @media (min-width: 1440px) and (max-height: 900px) {
          .responsive-heading {
            font-size: 50px !important;
          }

          video {
            top: -200px !important;
            height: calc(100% + 200px) !important;
          }
        }

        /* Large desktop */
        @media (min-width: 1536px) {
          video {
            top: -250px;
            height: calc(100% + 250px);
          }
        }

        /* Extra large screens */
        @media (min-width: 1920px) {
          video {
            top: -300px;
            height: calc(100% + 300px);
          }

          .responsive-heading {
            font-size: 64px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeBanner;

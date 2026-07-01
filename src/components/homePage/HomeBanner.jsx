'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import PartnerAnnouncementHero from './ClaudePartner';
import TechnologyPartner from './TechnologyPartner';

function GradientHeading() {
  const lines = ['We Build Intelligent Agents', 'that work for you'];

  const wordGradients = {
    We: ['#1f1f1f', '#1f1f1f'],
    Build: ['#bc83d7', '#7333b2', '#bc83d7'],
    Intelligent: ['#975bc4', '#7c3db7', '#8b4ebf'],
    Agents: ['#7333b2', '#bc83d7'],
    that: ['#1f1f1f', '#1f1f1f'],
    work: ['#1f1f1f', '#1f1f1f'],
    for: ['#1f1f1f', '#1f1f1f'],
    you: ['#1f1f1f', '#1f1f1f'],
  };

  return (
    <div className='pt-[100px]' style={{ textAlign: 'center' }}>
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
      className='relative overflow-hidden border-none mt-0 outline-none w-full'
      style={{
        minHeight: '100vh',
        background: '#F8F9FA',
      }}
    >
      {/* Background image */}
      {/* <img
        src={bg.src}
        alt='Background'
        className='absolute z-1 top-0 left-0 w-full h-full object-cover'
        style={{ zIndex: 1 }}
      /> */}
      {/* Grid Background - Bottom Half Only */}
      {/* Grid Background - Positioned between text and cards */}
      <div
        className='absolute left-0 right-0'
        style={{
          height: '90%',
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 2px),
            linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 2px)
          `,
          backgroundSize: '100px 100px',
          zIndex: 1,
          maskImage:
            'linear-gradient(to bottom, transparent, rgba(0,0,0,0.4) 15%, black 40%, black 85%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent, rgba(0,0,0,0.4) 15%, black 40%, black 85%, transparent)',
        }}
      />

      {/* Content - Full width on 1024px */}
      <div
        className='relative w-full mx-auto'
        style={{
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className='w-full max-w-9xl mx-auto pb-8 sm:pb-10 lg:pb-12'>
          <div className='text-center'>
            {/* Badge */}
            <div className='flex items-center justify-center'>
              {/* <div className='h-[20px]' /> */}
            </div>

            <PartnerAnnouncementHero />

            {/* Heading */}
            <GradientHeading />

            {/* Description */}
            <p
              className='text-[20px] mb-6 sm:text-base lg:text-[20px] max-w-2xl mx-auto mt-4 sm:mt-6 px-2'
              style={{ lineHeight: '1.5' }}
            >
              Elevate your business with AI agents that automate complexity and accelerate growth.
            </p>

            {/* CTA Button */}
            <div className='mb-6 flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 sm:mt-4'>
              <Link
                href='/contact'
                className='flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base text-white transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold'
                style={{
                  background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                  boxShadow: 'inset 0px 0px 12px 0px #FFFFFF, 0px 0px 2px 0px rgba(0, 0, 0, 0.1)',
                  borderRadius: '30px',
                }}
              >
                Schedule a Call
                <FiArrowRight className='text-lg sm:text-xl' />
              </Link>
            </div>

            <TechnologyPartner />

            {/* Cards Grid Section */}
            <div className='mt-16 lg:mt-24 w-full max-w-[1600px] mx-auto'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                {/* Column 1: Small Info + Enterprise Stats */}
                <div className='flex flex-col gap-2 lg:h-[460px]'>
                  {/* Card 1: Agentic AI */}
                  <div
                    className='bg-white p-8 rounded-[32px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center flex-1 min-h-[250px]'
                    style={{
                      backgroundImage: 'url("/images/bg2.png")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className='w-20 h-20 rounded-[20px] bg-white border border-gray-100 shadow-sm flex items-center justify-center p-4 mb-6'>
                      <img
                        src='/images/Group.png'
                        alt='AI Icon'
                        className='w-full h-full object-contain'
                      />
                    </div>
                    <p className='text-lg sm:text-xl  text-gray-900 text-left leading-snug'>
                      Agentic AI that turns Automation into Intelligence
                    </p>
                  </div>
                  {/* Card 2: Enterprise Deployments */}
                  <div
                    className='bg-white p-8 rounded-[32px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center h-[180px] lg:h-[38%]'
                    style={{
                      backgroundImage: 'url("/images/bg2.png")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <h3 className='text-[40px] leading-none font-black text-gray-900 text-left'>
                      {enterprise}+
                    </h3>
                    <p className='text-[15px] font-bold text-gray-900 text-left mt-3'>
                      Enterprise Deployments
                    </p>
                    <p className='text-[13px] text-gray-400 text-left mt-1'>
                      Proven real world execution
                    </p>
                  </div>
                </div>

                {/* Column 2: Tall AI Robot Card */}
                <div className='lg:col-span-1 h-[350px] lg:h-[460px]'>
                  <div
                    className='w-full h-full rounded-[32px] overflow-hidden'
                    style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                  >
                    <img
                      src='/images/bot1.png'
                      alt='AI Agent'
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>

                {/* Column 3: Stats + DOMO Award */}
                <div className='lg:col-span-2 flex flex-col gap-2 lg:h-[460px]'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 lg:h-[48%]'>
                    {/* Card 3: AI Agents Delivered */}
                    <div
                      className='bg-white p-8 rounded-[32px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center'
                      style={{
                        backgroundImage: 'url("/images/bg2.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <h3 className='text-[44px] leading-none font-black text-gray-900 text-left'>
                        {aiAgents}+
                      </h3>
                      <p className='text-[15px] font-bold text-gray-900 text-left mt-4'>
                        AI Agents Delivered
                      </p>
                      <p className='text-[13px] text-gray-400 text-left mt-1'>
                        Faster automation at scale
                      </p>
                    </div>
                    {/* Card 4: Uptime SLA */}
                    <div
                      className='bg-white p-8 rounded-[32px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-center'
                      style={{
                        backgroundImage: 'url("/images/bg2.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <h3 className='text-[44px] leading-none font-black text-gray-900 text-left'>
                        99.7%
                      </h3>
                      <p className='text-[15px] font-bold text-gray-900 text-left mt-4'>
                        Uptime SLA
                      </p>
                      <p className='text-[13px] text-gray-400 text-left mt-1'>
                        Faster automation at scale
                      </p>
                    </div>
                  </div>

                  {/* Card 5: DOMO Award */}
                  <div
                    className='bg-white p-8 rounded-[32px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex-1 min-h-[280px] flex flex-col justify-center relative overflow-hidden'
                    style={{
                      backgroundImage: 'url("/images/dbg5.png")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'right center',
                    }}
                  >
                    <div className='z-10 text-left max-w-[65%]'>
                      <h3 className='text-3xl font-black mb-3 inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#3688d6] to-[#693bb6] tracking-wide'>
                        DOMO
                      </h3>
                      <p className='text-lg sm:text-[20px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#693bb6] to-[#3688d6] leading-snug inline-block'>
                        International Partner of the Year <br />
                        2025 – GWC Data.AI
                      </p>
                    </div>
                  </div>
                </div>
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

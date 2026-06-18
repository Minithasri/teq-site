'use client';
import { useEffect, useState } from 'react';

const HowWeDeliver = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 4);
    }, 2500); // Switch step every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Map your workflows. Pick the right Claude model.',
    },
    {
      num: '02',
      title: 'Design',
      desc: 'Architect the agent: tools, memory and guardrails.',
    },
    {
      num: '03',
      title: 'Build',
      desc: 'Ship with Claude Code, tested on real data.',
    },
    {
      num: '04',
      title: 'Scale',
      desc: 'Tune performance and cost as you grow.',
    },
  ];

  return (
    <section className='w-full py-10 px-4 sm:px-6 md:px-8 bg-[#FFFFFF] overflow-hidden'>
      {/* Dynamic Keyframe Animation for Crawling Light */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes crawlingLight {
          to {
            stroke-dashoffset: -20;
          }
        }
      `,
        }}
      />

      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='mb-16 text-left'>
          <span className='text-sm sm:text-[16px] font-medium tracking-wider text-[#404040] uppercase block mb-4'>
            HOW WE DELIVER
          </span>
          <h2 className='text-2xl sm:text-3xl md:text-[38px] font-semibold text-[#6E2B8B] tracking-tight leading-tight'>
            From idea to production in four steps
          </h2>
        </div>

        {/* 4 Steps Columns & Connected Wave Grid */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-0 w-full border-b border-l border-r border-[#0000001A] rounded-b-3xl bg-white relative p-8 pb-10 overflow-hidden shadow-sm'>
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                className={`flex flex-col justify-between min-h-[300px] relative transition-all duration-500 cursor-pointer ${
                  idx !== 3 ? 'md:border-r border-[#0000001A]' : ''
                } pt-8 pb-2 bg-transparent`}
                onClick={() => setActiveStep(idx)}
              >
                {/* Text Block with internal padding */}
                <div className='flex flex-col items-start px-8 mb-8'>
                  <div className='flex items-baseline gap-2 mb-3'>
                    <span className='text-md sm:text-lg font-semibold text-[#262626] font-sans'>
                      {step.num}
                    </span>
                    <h3
                      className='text-lg sm:text-xl font-bold tracking-tight'
                      style={{
                        backgroundImage: 'linear-gradient(90deg, #6F2B8B 0%, #ED7200 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent',
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p className='text-neutral-700 text-sm sm:text-md leading-relaxed font-normal font-sans'>
                    {step.desc}
                  </p>
                </div>

                {/* Semicircle Wave Arc Container - Edge to edge */}
                <div className='relative w-full aspect-[2/1] mt-auto flex items-end justify-center select-none overflow-visible px-0'>
                  {/* Inline Animated SVG Semicircle */}
                  <svg
                    viewBox='0 0 290 143'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-full h-auto overflow-visible'
                  >
                    <defs>
                      <linearGradient id='arcGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
                        <stop offset='0%' stopColor='#6F2B8B' />
                        <stop offset='100%' stopColor='#ED7200' />
                      </linearGradient>
                    </defs>

                    {/* Dotted semicircle path */}
                    <path
                      d='M 0,143 A 145,145 0 0,1 290,143'
                      stroke={isActive ? 'url(#arcGradient)' : '#E5E5E5'}
                      strokeWidth={isActive ? '2.5' : '1.5'}
                      strokeDasharray='5 5'
                      className='transition-all duration-500'
                      style={{
                        animation: isActive ? 'crawlingLight 1.8s linear infinite' : 'none',
                      }}
                    />
                  </svg>

                  {/* Circular step badge at the center top of the arc */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md transition-all duration-500 z-10 ${
                      isActive ? 'scale-110 shadow-lg' : 'scale-100 shadow-md'
                    }`}
                    style={{
                      background: isActive
                        ? 'linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(111, 43, 139, 0) 0%, #6F2B8B 50%, #ED7200 100%) border-box'
                        : 'white',
                      border: isActive ? '2px solid transparent' : '1px solid #E5E5E5',
                    }}
                  >
                    <span
                      className='font-bold transition-all duration-500 font-sans'
                      style={{
                        fontSize: '17px',
                        backgroundImage: isActive
                          ? 'linear-gradient(135deg, #6F2B8B 0%, #ED7200 100%)'
                          : 'none',
                        WebkitBackgroundClip: isActive ? 'text' : 'unset',
                        WebkitTextFillColor: isActive ? 'transparent' : 'unset',
                        color: isActive ? 'transparent' : '#737373',
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliver;

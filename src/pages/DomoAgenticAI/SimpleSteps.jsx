'use client';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const StepIcon = ({ stepNumber }) => {
  return (
    <div className='relative flex justify-center items-center w-[70px] h-[70px]'>
      <span
        className='absolute text-[80px] sm:text-[100px] font-bold text-[#E7DEF1] opacity-60 leading-none select-none'
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      >
        {stepNumber}
      </span>
    </div>
  );
};

const SimpleSteps = () => {
  const pathRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const steps = [
    {
      id: 1,
      title: 'Connect Your Data',
      description: 'Plug into any source—cloud apps, files, databases, APIs',
      position: 'top',
      icon: '/images/Data.svg',
    },
    {
      id: 2,
      title: 'Set Your Logic',
      description: 'Use Agent Catalyst to define conditions, rules, and actions',
      position: 'bottom',
      icon: '/images/DomoPage/icon_domo_2.svg',
    },
    {
      id: 3,
      title: 'Launch & Automate',
      description: 'Deploy agents that think, decide, and execute—autonomously',
      position: 'top',
      icon: '/images/DomoPage/icon_domo_3.svg',
    },
    {
      id: 4,
      title: 'Track & Optimize',
      description: 'Visualize actions, tweak logic, and scale across business units',
      position: 'bottom',
      icon: '/images/DomoPage/icon_domo_4.svg',
    },
  ];

  useEffect(() => {
    if (!pathRef.current) return;

    // Define the dash and gap sizes
    const DASH_AND_GAP_SIZE = 14;

    // Wait 1 second for the DOM to settle
    const delay = 1000;
    const ANIMATION_DURATION = '6s';

    const timer = setTimeout(() => {
      if (!pathRef.current) return;

      const pathTotalLength = pathRef.current.getTotalLength();

      if (pathTotalLength === 0) {
        console.error('SVG Path Length is 0. Check component visibility or rendering order.');
        return;
      }

      setIsDrawing(true);

      // --- CRUCIAL CHANGE ---

      // 1. Set strokeDasharray AND strokeDashoffset to the full length
      // This hides the entire line (solid or dashed) completely.
      pathRef.current.style.strokeDasharray = `${pathTotalLength} ${pathTotalLength}`;
      pathRef.current.style.strokeDashoffset = pathTotalLength;

      // 2. Start the animation using requestAnimationFrame
      requestAnimationFrame(() => {
        // Ensure the initial state is applied
        pathRef.current.getBoundingClientRect();

        // 3. Set the desired dashed pattern *before* the transition starts
        // We set the strokeDasharray here to define the visible pattern
        pathRef.current.style.strokeDasharray = `${DASH_AND_GAP_SIZE} ${DASH_AND_GAP_SIZE}`;

        // 4. Start the transition
        pathRef.current.style.transition = `stroke-dashoffset ${ANIMATION_DURATION} ease-in-out`;

        // 5. Animate offset back to 0 to reveal the dashed line
        pathRef.current.style.strokeDashoffset = '0';
      });
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='w-full bg-white py-12 sm:py-16 md:py-10 lg:py-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-center mb-12 md:mb-16 lg:mb-20 leading-tight'>
          <span className='block text-[#404040] text-[32px] font-medium'>Know how it works in</span>
          <span className='block text-[32px] font-medium bg-gradient-to-r from-[#7030B1] to-[#B56DD3] bg-clip-text text-transparent'>
            4 simple steps
          </span>
        </h2>

        <div className='hidden md:block relative'>
          <div className='absolute top-16 left-0 w-full pointer-events-none z-0'>
            <svg
              className='w-full h-96'
              viewBox='0 0 1200 384'
              fill='none'
              preserveAspectRatio='none'
            >
              <path
                ref={pathRef}
                d='
                  M 0 200
                  H 240
                  Q 300 200 300 140
                  V 80
                  Q 300 20 360 20
                  H 520
                  Q 580 20 580 80
                  V 140
                  Q 580 200 640 200
                  H 900
                  Q 960 200 960 140
                  V 80
                  Q 960 20 1020 20
                  H 1180
                  Q 1240 20 1240 80
                  V 140
                  Q 1240 200 1300 200
                '
                stroke='#B87CD9'
                strokeWidth='3'
                strokeLinecap='round'
                fill='none'
              />
            </svg>
          </div>

          <div className='grid grid-cols-4 gap-x-6 xl:gap-x-8 relative z-10'>
            {steps.map(step => (
              <div
                key={step.id}
                className={`relative text-left pl-4 md:pl-8 xl:pl-10 ${
                  step.id === 2
                    ? 'ml-2 md:ml-8 xl:ml-10'
                    : step.id === 4
                      ? 'ml-8 md:ml-16 xl:ml-20'
                      : ''
                }`}
                style={{
                  marginTop: step.position === 'bottom' ? '160px' : '0px',
                }}
              >
                {/* Large number on the left side */}
                <div className='absolute -left-2 xl:-left-4 top-0 text-6xl xl:text-7xl font-bold text-gray-200 opacity-50 leading-none'>
                  {step.id}
                </div>

                {/* Content: Icon, Title, Description */}
                <div className='relative z-10'>
                  <img
                    src={step.icon}
                    alt='step icon'
                    className='w-8 h-8 xl:w-8 xl:h-8 object-contain mb-4'
                  />

                  <h3 className='font-semibold text-base xl:text-lg bg-gradient-to-r from-[#7030B1] to-[#B56DD3] bg-clip-text text-transparent mb-2'>
                    {step.title}
                  </h3>

                  <p className='text-gray-600 text-xs xl:text-sm leading-relaxed max-w-[220px]'>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='block md:hidden space-y-12'>
          {steps.map((step, index) => (
            <div key={step.id} className='relative'>
              <div className='flex flex-col items-center text-center'>
                <StepIcon stepNumber={step.id} />
                <h3 className='font-semibold text-lg mt-6 px-4 bg-gradient-to-r from-[#7030B1] to-[#B56DD3] bg-clip-text text-transparent'>
                  {step.title}
                </h3>
                <p className='text-gray-600 text-sm leading-relaxed mt-3 px-4 max-w-[320px]'>
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className='flex justify-center mt-8'>
                  <div className='w-0.5 h-8 bg-gradient-to-b from-[#B87CD9] to-transparent'></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='flex justify-center mt-12 md:mt-16 lg:mt-20'>
          <button className='bg-gradient-to-r from-[#7030B1] to-[#B56DD3] text-white w-[150px] h-[45px] rounded-full font-medium text-base flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg'>
            Contact Us <ArrowRight className='w-5 h-5' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SimpleSteps;

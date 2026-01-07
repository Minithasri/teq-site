'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    icon: '/images/partners/databricks/icon_db3_1.svg',
    title: 'Discovery & Assessment',
    description:
      'We analyze your data landscape, define success metrics, and deliver a prioritized roadmap.',
  },
  {
    icon: '/images/partners/databricks/icon_db3_2.svg',
    title: 'Solution Architecture & Design',
    description: 'We design a secure, scalable data architecture tailored to your business needs.',
  },
  {
    icon: '/images/partners/databricks/icon_db3_3.svg',
    title: 'Implementation & Migration',
    description:
      'We seamlessly integrate, migrate, and modernize data systems with minimal disruption.',
  },
  {
    icon: '/images/partners/databricks/icon_db3_4.svg',
    title: 'AI/ML & Analytics Enablement',
    description: 'We enable advanced analytics and AI to turn data into actionable insights.',
  },
  {
    icon: '/images/partners/databricks/icon_db3_5.svg',
    title: 'Monitoring, Optimization, Support',
    description:
      'We continuously monitor, optimize performance, and support your evolving data platform.',
  },
];

const DeliveryApproach = () => {
  const iconsRef = useRef([]);
  const containerRef = useRef(null);
  const [points, setPoints] = useState([]);

  // Generate Curved Path
  const generatePath = (from, to) => {
    return `M ${from.x},${from.y} C ${(from.x + to.x) / 2},${from.y} ${(from.x + to.x) / 2},${to.y} ${to.x},${to.y}`;
  };

  // SVG Connector Logic
  useEffect(() => {
    const updatePoints = () => {
      // Check if container is visible (desktop view)
      if (!containerRef.current || containerRef.current.offsetParent === null) {
        setPoints([]);
        return;
      }
      const containerRect = containerRef.current.getBoundingClientRect();
      const newPoints = steps.map((_, i) => {
        const card = iconsRef.current[i];
        if (!card) return { x: 0, y: 0 };
        const iconCircle = card.querySelector('.icon-circle');
        const rect = iconCircle ? iconCircle.getBoundingClientRect() : card.getBoundingClientRect();
        return {
          // Center of the icon circle relative to container
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
        };
      });
      setPoints(newPoints);
    };

    // Initial calculation and follow-up
    requestAnimationFrame(() => requestAnimationFrame(updatePoints));

    const onResize = () => {
      updatePoints();
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section className='w-full py-20 bg-[#F2ECFE] relative overflow-hidden'>
      {/* Background Circle */}
      <div className='absolute inset-0 z-0 flex items-center justify-center pointer-events-none'>
        <div className='w-[1000px] h-[1000px] relative opacity-100'>
          <Image
            src='/images/partners/databricks/circle_big.png'
            alt=''
            fill
            className='object-contain'
          />
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='text-center mb-24'>
          <h2
            className='font-medium text-[32px] md:text-[32px] mb-4'
            style={{
              background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Delivery Approach
          </h2>
          <h3 className='text-[#404040] font-medium text-[32px] md:text-[32px]'>
            How GWC ensures success from planning to adoption
          </h3>
        </div>

        {/* Desktop View: Grid, Staggered, SVG Connectors */}
        <div className='hidden lg:block relative' ref={containerRef}>
          {/* SVG Connector Layer */}
          {points.length === steps.length && (
            <svg
              className='absolute inset-0 w-full h-full pointer-events-none'
              style={{ zIndex: 1 }}
            >
              {points.slice(0, steps.length - 1).map((from, i) => {
                const to = points[i + 1];
                const d = generatePath(from, to);
                return (
                  <path
                    key={i}
                    d={d}
                    stroke='#7030B1'
                    strokeWidth='2'
                    strokeDasharray='8 8'
                    fill='none'
                  />
                );
              })}
            </svg>
          )}

          {/* Steps Grid */}
          <div className='grid grid-cols-5 gap-4 justify-items-center'>
            {steps.map((step, index) => (
              <div
                key={index}
                ref={el => (iconsRef.current[index] = el)}
                className='flex flex-col items-center text-center max-w-[220px]'
                // Stagger effect: Even index (0, 2, 4) at top, Odd index (1, 3) pushed down
                style={{ marginTop: index % 2 === 1 ? '120px' : '0' }}
              >
                {/* Icon Circle */}
                <div
                  className='icon-circle w-[80px] h-[80px] rounded-full flex items-center justify-center mb-6 shadow-lg z-10 relative'
                  style={{
                    background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                  }}
                >
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={40}
                    height={40}
                    className='object-contain'
                  />
                </div>

                {/* Text */}
                <h4 className='text-[#404040] font-semibold text-lg mb-3 leading-tight'>
                  {step.title}
                </h4>
                <p className='text-[#404040] text-sm leading-relaxed'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View: Stacked Cards */}
        <div className='flex lg:hidden flex-col gap-12 items-center'>
          {steps.map((step, index) => (
            <div key={index} className='flex flex-col items-center text-center max-w-[300px]'>
              {/* Icon Circle */}
              <div
                className='w-[80px] h-[80px] rounded-full flex items-center justify-center mb-6 shadow-lg z-10 relative'
                style={{
                  background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                }}
              >
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={40}
                  height={40}
                  className='object-contain'
                />
              </div>

              {/* Text */}
              <h4 className='text-[#404040] font-semibold text-xl mb-3 leading-tight'>
                {step.title}
              </h4>
              <p className='text-[#404040] text-base leading-relaxed'>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryApproach;

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
  const [isMobile, setIsMobile] = useState(false);

  // SVG Connector Logic
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); // lg breakpoint for horizontal flow
    const updatePoints = () => {
      if (isMobile || !containerRef.current) {
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

    checkMobile();
    // Initial calculation and follow-up
    requestAnimationFrame(() => requestAnimationFrame(updatePoints));

    const onResize = () => {
      checkMobile();
      updatePoints();
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [isMobile]);

  // Generate Curved Path (Alternating Up/Down for specific wavy look if needed)
  // The reference uses alternating up/down curves.
  // Step 0 -> 1 (Down curve?), 1 -> 2 (Up curve?), etc.
  // Based on the image:
  // 1 is High, 2 is Low, 3 is High, 4 is Low, 5 is High?
  // Actually looking at the provided image:
  // 1 (Discovery) is High? No, the line goes down to 2.
  // 2 (Solution) is Low. Line goes up to 3.
  // 3 (Implementation) is High. Line goes down to 4.
  // 4 (AI/ML) is Low. Line goes up to 5.
  // 5 (Monitoring) is High.
  // So: High -> Low -> High -> Low -> High
  const generatePath = (from, to, index) => {
    // If index is 0 (1->2), we are going High to Low. Control point should help smooth the S-curve.
    // However, the standard quadratic bezier `Q cpX,cpY toX,toY` with a midpoint offset creates a simple arc.
    // For S-curves between alternating heights, a simple Bezier might be tricky without specific control points.
    // But since the items themselves are physically positioned High/Low via CSS margins, a simple straight line or slight curve connecting them works.
    // Let's try a standard curve with slight offset to look "loose".

    // Actually, looking at the code in Architecture.jsx, it sets explicit margins (marginTop) to stagger items.
    // i % 2 === 1 ? '90px' : '0' -> Even indices (0, 2, 4) are High (margin 0), Odd indices (1, 3) are Low (margin 90).
    // Let's mimic that spacing logic first.

    const cpX = (from.x + to.x) / 2;
    const cpY = (from.y + to.y) / 2; // Midpoint vertical

    // We can add a slight curve offset if desired, or just smooth connection.
    // If we just use cubic bezier enabling smooth S-curve:
    // M fromX,fromY C cp1X,cp1Y cp2X,cp2Y toX,toY
    // Control points handled horizontally?

    // Let's replicate the Architecture.jsx simpler approach:
    // `const offset = upward ? -50 : 50;` ... `Q ${cpX},${cpY} ${to.x},${to.y}`
    // If the elements are already offset, we might not need extreme control point offsets,
    // but let's see. The dotted line in the image looks like a smooth sine wave.
    // If items are physically staggered, a simple smooth curve connecting Is best.

    return `M ${from.x},${from.y} C ${(from.x + to.x) / 2},${from.y} ${(from.x + to.x) / 2},${to.y} ${to.x},${to.y}`;
  };

  return (
    <section className='w-full py-20 bg-[#F2ECFE] relative overflow-hidden'>
      {/* Background Circle */}
      <div className='absolute inset-0 z-0 flex items-center justify-center pointer-events-none'>
        <div className='w-[1000px] h-[1000px] relative opacity-40'>
          <Image
            src='/images/partners/databricks/circle_big.png'
            alt=''
            fill
            className='object-contain'
          />
        </div>
      </div>

      <div ref={containerRef} className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='text-center mb-24'>
          <h2
            className='font-bold text-xl md:text-2xl mb-4'
            style={{
              background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Delivery Approach
          </h2>
          <h3 className='text-[#333333] font-bold text-2xl md:text-4xl'>
            How GWC ensures success from planning to adoption
          </h3>
        </div>

        {/* SVG Connector Layer */}
        {!isMobile && points.length === steps.length && (
          <svg className='absolute inset-0 w-full h-full pointer-events-none' style={{ zIndex: 1 }}>
            {points.slice(0, steps.length - 1).map((from, i) => {
              const to = points[i + 1];
              // Use a cubic bezier for smooth S-curve between the staggered points
              const d = generatePath(from, to, i);
              return (
                <path
                  key={i}
                  d={d}
                  stroke='#A78BFA'
                  strokeWidth='2'
                  strokeDasharray='8 8'
                  fill='none'
                />
              );
            })}
          </svg>
        )}

        {/* Steps Grid/Flex */}
        <div
          className={`relative ${isMobile ? 'flex flex-col space-y-12' : 'grid grid-cols-5 gap-4'} justify-items-center`}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              ref={el => (iconsRef.current[index] = el)}
              className='flex flex-col items-center text-center max-w-[220px]'
              // Stagger effect: Even index (0, 2, 4) at top, Odd index (1, 3) pushed down
              style={!isMobile ? { marginTop: index % 2 === 1 ? '120px' : '0' } : {}}
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
              <h4 className='text-[#1F2937] font-bold text-lg mb-3 leading-tight'>{step.title}</h4>
              <p className='text-[#6B7280] text-sm leading-relaxed'>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryApproach;

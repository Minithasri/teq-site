'use client';
import { useEffect, useRef, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Architecture = () => {
  const iconsRef = useRef([]);
  const containerRef = useRef(null);
  const [points, setPoints] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);

  const features = [
    {
      icon: '/images/Sense.svg',
      title: 'Sense',
      subtitle: 'Ingest data from APIs, documents, sensors, and systems',
    },
    {
      icon: '/images/Reason.svg',
      title: 'Reason',
      subtitle: 'Apply LLMs, rule logic, RAG, or planning modules',
    },
    {
      icon: '/images/Decide.svg',
      title: 'Decide',
      subtitle: 'Choose actions using scoring, conditions, or models',
    },
    {
      icon: '/images/Action.svg',
      title: 'Act',
      subtitle: 'Trigger workflows, send alerts, update records, or collaborate',
    },
    {
      icon: '/images/Grow.svg',
      title: 'Learn',
      subtitle: 'Optimize through feedback loops and continuous improvement',
    },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const updatePoints = () => {
      if (isMobile || !containerRef.current) {
        setPoints([]);
        return;
      }
      const containerRect = containerRef.current.getBoundingClientRect();
      const newPoints = features.map((_, i) => {
        const card = iconsRef.current[i];
        if (!card) return { x: 0, y: 0 };
        const iconCircle = card.querySelector('.icon-circle');
        const rect = iconCircle ? iconCircle.getBoundingClientRect() : card.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
        };
      });
      setPoints(newPoints);
    };

    checkMobile();
    requestAnimationFrame(() => requestAnimationFrame(updatePoints));

    const onResize = () => {
      checkMobile();
      requestAnimationFrame(() => requestAnimationFrame(updatePoints));
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [isMobile]);

  // --- MODIFIED ANIMATION LOGIC ---
  useEffect(() => {
    // Only run if not mobile and points are calculated
    if (isMobile || points.length !== 5) return;

    let animationId;
    const startTime = Date.now();
    const duration = 4000; // 4 seconds total for the full sequence

    const animate = () => {
      const elapsed = Date.now() - startTime;

      // Calculate progress from 0 to 1, clamping it at 1
      const progress = Math.min(elapsed / duration, 1);

      setAnimationProgress(progress);

      // Only continue the loop if we haven't reached the end (1)
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [points, isMobile]);
  // -------------------------------

  const generatePath = (from, to, upward = true) => {
    const offset = upward ? -50 : 50;
    const cpX = (from.x + to.x) / 2;
    const cpY = (from.y + to.y) / 2 + offset;
    return `M ${from.x},${from.y} Q ${cpX},${cpY} ${to.x},${to.y}`;
  };

  const getPointOnQuadraticBezier = (p0, p1, p2, t) => {
    const x = (1 - t) * (1 - t) * p0.x + 2 * (1 - t) * t * p1.x + t * t * p2.x;
    const y = (1 - t) * (1 - t) * p0.y + 2 * (1 - t) * t * p1.y + t * t * p2.y;
    return { x, y };
  };

  const getTangentOnQuadraticBezier = (p0, p1, p2, t) => {
    const dx = 2 * (1 - t) * (p1.x - p0.x) + 2 * t * (p2.x - p1.x);
    const dy = 2 * (1 - t) * (p1.y - p0.y) + 2 * t * (p2.y - p1.y);
    return { dx, dy };
  };

  const getMovingArrowPosition = (from, to, upward = true, progress) => {
    const offset = upward ? -50 : 50;

    const controlPoint = {
      x: (from.x + to.x) / 2,
      y: (from.y + to.y) / 2 + offset,
    };

    const position = getPointOnQuadraticBezier(from, controlPoint, to, progress);
    const tangent = getTangentOnQuadraticBezier(from, controlPoint, to, progress);
    const angle = Math.atan2(tangent.dy, tangent.dx) * (180 / Math.PI);

    return { x: position.x, y: position.y, angle };
  };

  return (
    <section
      ref={containerRef}
      className='relative overflow-hidden mx-4 rounded-2xl'
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* TITLE BLOCK */}
        <div className='text-center mb-20 flex justify-center'>
          <div
            style={{
              fontSize: '32px',
              fontWeight: 500,
              maxWidth: '500px',
              lineHeight: '1.3',
              color: '#1f1f1f',
            }}
          >
            Our Agentic AI{' '}
            <span
              className='bg-clip-text text-transparent'
              style={{
                backgroundImage: 'linear-gradient(to right, #7030B1, #B56DD3)',
              }}
            >
              Architecture
            </span>
          </div>
        </div>

        {/* SVG FLOW */}
        {!isMobile && points.length === 5 && (
          <svg className='absolute inset-0 w-full h-full pointer-events-none' style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id='grad' x1='0%' y1='0%' x2='100%'>
                <stop offset='0%' stopColor='#7030B1' />
                <stop offset='100%' stopColor='#B56DD3' />
              </linearGradient>
              <filter id='glow' x='-50%' y='-50%' width='200%' height='200%'>
                <feGaussianBlur stdDeviation='1.8' result='blur' />
                <feMerge>
                  <feMergeNode in='blur' />
                  <feMergeNode in='SourceGraphic' />
                </feMerge>
              </filter>
            </defs>

            {points.slice(0, 4).map((from, i) => {
              const to = points[i + 1];
              const d = generatePath(from, to, i % 2 === 0);

              const segmentDuration = 0.25;
              const segmentStart = i * segmentDuration;
              const segmentEnd = (i + 1) * segmentDuration;

              let localProgress = 0;
              if (animationProgress >= segmentStart && animationProgress <= segmentEnd) {
                // Determine progress within this specific segment (0 to 1)
                localProgress = (animationProgress - segmentStart) / segmentDuration;
              } else if (animationProgress > segmentEnd) {
                // If animation has passed this segment, keep it fully drawn
                localProgress = 1;
              }

              const dashArray = 10;
              const dashGap = 8;
              const totalDash = dashArray + dashGap;
              // Note: The marching ants effect will freeze when setAnimationProgress stops updating
              const dashOffset = -(Date.now() / 12) % totalDash;

              const arrowPos = getMovingArrowPosition(from, to, i % 2 === 0, localProgress);

              return (
                <g key={i}>
                  <path d={d} stroke='#e4d4f8' strokeWidth='1.5' fill='none' opacity='0' />

                  <path
                    d={d}
                    stroke='url(#grad)'
                    strokeWidth='2'
                    fill='none'
                    strokeLinecap='round'
                    strokeDasharray={`${dashArray} ${dashGap}`}
                    strokeDashoffset={dashOffset}
                    style={{ clipPath: `inset(0 ${100 - localProgress * 100}% 0 0)` }}
                  />

                  {/* Arrow logic: Visible while moving, disappears when segment finishes */}
                  {localProgress > 0.05 && localProgress < 0.95 && (
                    <g transform={`translate(${arrowPos.x}, ${arrowPos.y})`}>
                      <g transform={`rotate(${arrowPos.angle})`}>
                        <polygon
                          points='-6,0 6,0 6,4 12,0 6,-4 6,0'
                          fill='url(#grad)'
                          opacity='1'
                          stroke='#7030B1'
                          strokeWidth='0.5'
                        />
                      </g>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        )}

        {/* Cards */}
        <div
          className={`relative ${
            isMobile ? 'space-y-16' : 'grid grid-cols-5 gap-8'
          } justify-items-center`}
          style={{ zIndex: 10 }}
        >
          {features.map((feature, i) => (
            <div
              key={i}
              ref={el => (iconsRef.current[i] = el)}
              className='flex flex-col items-center text-center'
              style={!isMobile ? { marginTop: i % 2 === 1 ? '90px' : '0' } : {}}
            >
              <div
                className='icon-circle rounded-full mb-6 shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center'
                style={{
                  background: 'linear-gradient(135deg, #7030B1, #B56DD3)',
                  width: '72px',
                  height: '72px',
                  minWidth: '72px',
                }}
              >
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className='w-7 h-7 filter brightness-0 invert'
                  style={{ width: '28px', height: '28px' }}
                />
              </div>

              <h3 className='text-xl font-bold mb-2 tracking-tight' style={{ color: '#404040' }}>
                {feature.title}
              </h3>

              <p className='text-sm text-gray-600 max-w-[220px] leading-relaxed'>
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className='flex justify-center mt-16'>
          <button
            className='flex items-center justify-center gap-2 text-white transition-all duration-300 hover:scale-105'
            style={{
              background: 'linear-gradient(to right, #7030B1, #B56DD3)',
              borderRadius: '24px',
              width: '150px',
              height: '45px',
              fontSize: '14px',
              fontWeight: 400,
            }}
          >
            Contact Us
            <FiArrowRight className='text-lg' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Architecture;

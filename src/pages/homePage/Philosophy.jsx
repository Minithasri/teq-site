'use client';
import React, { useState, useEffect } from 'react';

const Philosophy = () => {
  const [viewMode, setViewMode] = useState('desktop');
  const [middleIndex, setMiddleIndex] = useState(0);

  const items = [
    { title: 'Use Case-First Design', subtitle: 'We build for outcomes, not for hype. Every agent is tied to a tangible business goal.' },
    { title: 'Designed for Production', subtitle: 'Our agents are observable, auditable, secure, and continuously improving.' },
    { title: "Human-in-the-Loop Native", subtitle: "Approvals, exceptions, and escalations are part of the agent's logic, not an afterthought." },
    { title: 'Trust & Governance', subtitle: 'We enforce policy, risk controls, and explainability by default.' },
    { title: 'Continuous Learning', subtitle: 'Agents evolve using controlled feedback loops and real usage signals.' }
  ];

  useEffect(() => {
    const checkViewMode = () => {
      const width = window.innerWidth;
      if (width >= 1440) setViewMode('desktop');
      else if (width >= 768) setViewMode('tablet');
      else setViewMode('mobile');
    };
    checkViewMode();
    window.addEventListener('resize', checkViewMode);
    return () => window.removeEventListener('resize', checkViewMode);
  }, []);

  const wrap = (i) => (i + items.length) % items.length;

  const getSlot = (index) => {
    const top = wrap(middleIndex - 1);
    const bottom = wrap(middleIndex + 1);
    if (index === top) return 0;
    if (index === middleIndex) return 1;
    if (index === bottom) return 2;
    return 3;
  };

  const positionStyles = {
    0: { top: '0%', left: '0%', opacity: 0.4, scale: 0.9 },
    1: { top: '50%', left: '45%', opacity: 1, scale: 1 },
    2: { top: '100%', left: '0%', opacity: 0.4, scale: 0.9 },
    3: { opacity: 0, pointerEvents: 'none' }
  };

  const handleClick = () => {
    setMiddleIndex(wrap(middleIndex + 1));
  };

  const renderCard = (index) => {
    const slot = getSlot(index);
    const isMiddle = slot === 1;
    const style = positionStyles[slot];

    return (
      <div
        key={index}
        className={`absolute flex flex-col items-start select-none ${isMiddle ? 'cursor-pointer' : 'cursor-default'}`}
        onClick={isMiddle ? handleClick : undefined}
        style={{
          width: isMiddle ? 400 : 300,
          maxWidth: isMiddle ? 460 : 320,
          pointerEvents: slot === 3 ? 'none' : 'auto',
          position: 'absolute',
          zIndex: isMiddle ? 15 : 12,
          top: style.top,
          left: style.left,
          transform: `translate(0%, ${slot === 1 ? '-50%' : slot === 2 ? '-100%' : '0%'}) scale(${style.scale})`,
          opacity: style.opacity,
          transition: 'none'
        }}
      >
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          <div
            style={{
              width: '22.5px',
              height: '22.5px',
              borderRadius: '50%',
              border: '6px solid #6F2B8B',
              background: 'transparent',
              boxSizing: 'border-box'
            }}
          />
          <div
            className="flex items-center justify-center font-bold shadow-lg"
            style={{
              background: '#e3daeb',
              borderRadius: '8px',
              width: '32px',
              height: '32px',
              flexShrink: 0
            }}
          >
            <span className="text-[#7030B1] font-bold">{index + 1}</span>
          </div>
        </div>

        <div className="text-left" style={{ width: '100%', maxWidth: isMiddle ? 460 : 320 }}>
          <h3
            className="font-semibold mb-2 md:mb-3"
            style={{
              fontWeight: isMiddle ? 600 : 400,
              fontSize: isMiddle ? '24px' : 'clamp(14px, 1.5vw, 18px)',
              background: 'linear-gradient(to right, #7030B1, #B56DD3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              wordWrap: 'break-word',
              overflowWrap: 'break-word'
            }}
          >
            {items[index].title}
          </h3>
          <p
            className="text-[#404040]"
            style={{
              fontWeight: 400,
              fontSize: isMiddle ? 'clamp(12px, 1.5vw, 14px)' : 'clamp(10px, 1.2vw, 12px)',
              lineHeight: isMiddle ? '1.5' : '1.4'
            }}
          >
            {items[index].subtitle}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        transform: 'translateY(-200px)',
        position: 'relative',
        zIndex: 1
      }}
    >
      {/* Background layer */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundColor: '#f3edff',
          clipPath:
            typeof window !== 'undefined' && window.innerWidth >= 1024
              ? 'ellipse(150% 100% at 50% 100%)'
              : 'none',
          zIndex: 0
        }}
      />

      <div
        className="flex flex-col items-center justify-center px-4 md:px-8 w-full relative"
        style={{
          paddingTop: typeof window !== 'undefined' && window.innerWidth >= 1024 ? '300px' : 'clamp(250px, 20vw, 260px)',
          paddingBottom: 'clamp(40px, 8vw, 80px)',
          zIndex: 2
        }}
      >
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12 w-full px-4">
          <h1
            className="font-medium mb-2 md:mb-4"
            style={{
              fontSize: 'clamp(24px, 5vw, 32px)',
              lineHeight: 'clamp(32px, 6vw, 55px)'
            }}
          >
            Our <span className="bg-gradient-to-r from-[#7030B1] to-[#B56DD3] bg-clip-text text-transparent">Development Philosophy</span>
          </h1>
          <p
            className="text-gray-700 font-medium"
            style={{
              fontSize: 'clamp(18px, 4vw, 32px)',
              lineHeight: 'clamp(28px, 5vw, 55px)'
            }}
          >
            We build reliable, scalable AI that delivers real impact.
          </p>
        </div>

        {viewMode === 'desktop' ? (
          <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-6 md:gap-8 lg:gap-12">
            <div className="w-full lg:w-1/3 flex items-center justify-center order-2 lg:order-1">
              <img
                src="/images/Philosophy.png"
                alt="Development Philosophy"
                className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] h-auto object-contain"
              />
            </div>

            <div className="relative w-full lg:w-[60%] h-64 sm:h-72 md:h-80 lg:h-96 order-1 lg:order-2 overflow-hidden" style={{ zIndex: 10 }}>
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <path
                  d="M 25% 0 L 100% 50% L 25% 100% Z"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7030B1" />
                    <stop offset="100%" stopColor="#B56DD3" />
                  </linearGradient>
                </defs>
              </svg>

              {items.map((_, index) => renderCard(index))}
            </div>
          </div>
        ) : (
          <div className="w-full max-w-6xl mx-auto">
            <div className={`grid ${viewMode === 'tablet' ? 'grid-cols-2' : 'grid-cols-1'} gap-4 md:gap-6 mb-8`}>
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-start cursor-pointer select-none rounded-xl p-4 md:p-6 shadow-lg transition-all duration-300 hover:shadow-xl ${
                    viewMode === 'tablet' && index === 4 ? 'col-span-2 mx-auto' : ''
                  }`}
                  style={{
                    backgroundColor: '#FFFFFFD9',
                    borderRadius: '10px',
                    width: viewMode === 'tablet' && index === 4 ? 'calc(50% - 12px)' : '100%'
                  }}
                >
                  <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <div
                      style={{
                        width: '22.5px',
                        height: '22.5px',
                        borderRadius: '50%',
                        border: '6px solid #6F2B8B',
                        background: 'transparent',
                        boxSizing: 'border-box'
                      }}
                    />
                    <div
                      className="flex items-center justify-center font-bold shadow-lg"
                      style={{
                        background: '#e3daeb',
                        borderRadius: '8px',
                        width: '32px',
                        height: '32px',
                        flexShrink: 0
                      }}
                    >
                      <span className="text-[#7030B1] font-bold">{index + 1}</span>
                    </div>
                  </div>

                  <div className="text-left w-full">
                    <h3
                      className="font-semibold mb-2 md:mb-3"
                      style={{
                        fontSize: viewMode === 'tablet' ? 'clamp(16px, 2vw, 20px)' : 'clamp(18px, 4vw, 24px)',
                        background: 'linear-gradient(to right, #7030B1, #B56DD3)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        lineHeight: '1.3'
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#404040] w-full"
                      style={{
                        fontSize: viewMode === 'tablet' ? 'clamp(12px, 1.5vw, 14px)' : 'clamp(12px, 3vw, 14px)',
                        lineHeight: '1.5'
                      }}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image at bottom */}
            <div className="flex items-center justify-center mt-8">
              <img
                src="/images/Philosophy.png"
                alt="Development Philosophy"
                className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] h-auto object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Philosophy;

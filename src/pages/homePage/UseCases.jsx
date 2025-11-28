'use client';
import React, { useState } from 'react';

const UseCases = () => {
  const pills = ['Operations', 'Sales', 'Marketing', 'Finance', 'HR'];
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      title: 'Operations Automation',
      description: 'Streamline business processes with intelligent workflow automation.',
      backContent:
        'Reduce operational costs by 40% with automated workflows and real-time monitoring.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Sales Optimization',
      description: 'Enhance sales performance with AI-driven insights and recommendations.',
      backContent:
        'Increase conversion rates by 25% with predictive lead scoring and personalized outreach.',
      image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Marketing Intelligence',
      description:
        'Transform marketing strategies with predictive analytics and customer insights.',
      backContent:
        'Boost campaign ROI by 35% with AI-powered audience segmentation and content optimization.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Financial Analysis',
      description:
        'Automate financial reporting and gain deeper insights into business performance.',
      backContent:
        'Cut reporting time by 60% while improving accuracy with automated data analysis.',
      image:
        'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
    },
  ];

  const handleCardHover = index => setHoveredCard(index);
  const handleCardLeave = () => setHoveredCard(null);

  const getCardZIndex = index =>
    hoveredCard === null ? index + 1 : index === hoveredCard ? 100 : 1;

  const getCardTransform = index => {
    const base = 'translateX(-50%) rotate(15deg) skew(-36deg, 15deg)';
    return hoveredCard === index ? `${base} scale(1.05)` : base;
  };

  return (
    <div
      className="flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#ffffff', paddingBottom: '100px' }}
    >
      <div
        className="w-full rounded-[15px] relative overflow-hidden bg-[linear-gradient(135deg,_#7030B14D_0%,_#CAB9F64D_25%,_#E6F2F64D_50%,_#DDA16C4D_65%,_#FFA5814D_80%,_#E5AA664D_100%)]"
        style={{
          backgroundColor: '#F9EAE1',
          padding: 'clamp(16px, 3vw, 20px)',
          paddingBottom: '0px',
          maxWidth: '1400px',
        }}
      >
        <h1
          className="text-center mb-3 sm:mb-4 font-bold"
          style={{ color: '#404040', fontSize: 'clamp(24px, 5vw, 40px)' }}
        >
          Agentic AI Use Cases
        </h1>

        <p
          className="text-center mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-4 mx-auto"
          style={{
            color: '#404040',
            fontSize: 'clamp(14px, 2vw, 16px)',
            maxWidth: '800px',
          }}
        >
          Discover 15 powerful examples of how we apply Agentic AI across industries and departments
          to drive tangible business outcomes.
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 lg:mb-12 px-2">
          {pills.map((pill, index) => (
            <div
              key={index}
              className="px-3 sm:px-4 lg:px-6 py-1 sm:py-2 rounded-full font-medium border text-xs sm:text-sm lg:text-base"
              style={{
                backgroundColor: '#ebe1ea',
                border: '1px solid transparent',
                backgroundImage:
                  'linear-gradient(#ebe1ea, #ebe1ea), linear-gradient(135deg, #7030B1, #B56DD3)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                color: '#712b8c',
              }}
            >
              {pill}
            </div>
          ))}
        </div>

        <div className="block lg:hidden">
          <div className="space-y-4 sm:space-y-6 pb-16 sm:pb-20">
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-full mx-auto bg-white rounded-[12px] sm:rounded-[16px] shadow-lg overflow-hidden"
                style={{ maxWidth: '500px', height: 'clamp(250px, 50vw, 300px)' }}
              >
                <div className="relative w-full h-full">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 flex items-center justify-center">
                    <div className="text-white text-center p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{card.title}</h3>
                      <p className="text-sm sm:text-base">{card.backContent}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div
            className="relative flex justify-center items-end"
            style={{
              height: 'clamp(350px, 30vw, 400px)',
              overflow: 'hidden',
              margin: '0 -20px',
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="absolute transition-all duration-300 group"
                style={{
                  width: 'clamp(420px, 38vw, 560px)',
                  height: 'clamp(280px, 23vw, 380px)',
                  left: `calc(50% + ${(index - (cards.length - 1) / 2) * 350}px)`,
                  transform: getCardTransform(index),
                  zIndex: getCardZIndex(index),
                  bottom: '-120px',
                }}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleCardLeave}
              >
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  <div className="absolute w-full h-full bg-white rounded-[16px] shadow-lg backface-hidden overflow-hidden">
                    <img src={card.image} className="w-full h-full object-cover rounded-[16px]" />
                    <div className="absolute inset-0 bg-[#E9E6ECCC] rounded-[16px] group-hover:bg-transparent transition-all duration-300" />
                  </div>

                  <div className="absolute w-full h-full bg-white rounded-[16px] shadow-lg backface-hidden transform rotate-y-180 overflow-hidden">
                    <img src={card.image} className="w-full h-full object-cover rounded-[16px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 flex items-center justify-center rounded-[16px]">
                      <div className="text-white text-center p-6 lg:p-8">
                        <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">{card.title}</h3>
                        <p className="text-base lg:text-lg">{card.backContent}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative" style={{ zIndex: 1000 }}>
          <button
            className="bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full text-white font-medium text-sm sm:text-base flex items-center gap-2 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            style={{
              background: 'linear-gradient(135deg, #7030B1, #B56DD3)',
              boxShadow: '0 4px 15px rgba(112, 48, 177, 0.3)',
            }}
          >
            View Details
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <path d="M4.16675 10H15.8334" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M10.8334 5L15.8334 10L10.8334 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg) rotate(15deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        @media (max-width: 1024px) {
          .group-hover\:rotate-y-180 {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default UseCases;

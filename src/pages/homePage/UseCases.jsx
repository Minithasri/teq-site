'use client';
import React, { useState } from 'react';

const UseCases = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      title: 'Operations Automation',
      description: 'Streamline business processes with intelligent workflow automation.',
      backContent: 'Reduce operational costs by 40% with automated workflows.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Sales Optimization',
      description: 'Enhance sales performance with AI-driven insights.',
      backContent: 'Increase conversion rates by 25% with predictive lead scoring.',
      image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Marketing Intelligence',
      description: 'Transform marketing strategies with predictive analytics.',
      backContent: 'Boost campaign ROI by 35% with AI-powered segmentation.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    },
    {
      title: 'Financial Analysis',
      description: 'Automate financial reporting and gain deeper insights.',
      backContent: 'Cut reporting time by 60% while improving accuracy.',
      image:
        'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
    },
  ];

  const handleCardHover = index => setHoveredCard(index);
  const handleCardLeave = () => setHoveredCard(null);

  return (
    <div className='flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-24 '>
      <div className='w-full max-w-[1400px] relative'>
        {/* MOBILE STACK (Vertical List) */}
        <div className='block lg:hidden space-y-6'>
          {cards.map((card, index) => (
            <div
              key={index}
              className='w-full bg-white rounded-2xl shadow-lg overflow-hidden h-[300px] relative group'
            >
              <img src={card.image} alt={card.title} className='w-full h-full object-cover' />
              <div className='absolute inset-0 bg-black/60 flex items-center justify-center p-6 text-center'>
                <div>
                  <h3 className='text-xl font-bold text-white mb-2'>{card.title}</h3>
                  <p className='text-sm text-gray-200'>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP STACK (3D Floating Screens) */}
        {/* DESKTOP STACK – OVERLAPPING TILTED SCREENS */}
        <div className='hidden lg:block'>
          <div className='relative w-full h-[420px] flex justify-center items-center'>
            {cards.map((card, index) => {
              const middle = (cards.length - 1) / 2;
              const offset = index - middle;
              const isActive = hoveredCard === index;

              return (
                <div
                  key={index}
                  className='absolute transition-all duration-500 ease-out cursor-pointer'
                  style={{
                    width: '460px',
                    height: '300px',
                    transform: `
              translateX(${offset * 140}px)
              translateY(${isActive ? '-16px' : '0px'})
              rotateZ(${offset * 6}deg)
              scale(${isActive ? 1.05 : 1})
            `,
                    zIndex: isActive ? 50 : 10 - Math.abs(offset),
                  }}
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={handleCardLeave}
                >
                  <div className='relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white'>
                    {/* IMAGE */}
                    <img src={card.image} alt={card.title} className='w-full h-full object-cover' />

                    {/* OVERLAY */}
                    <div className='absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70' />

                    {/* TEXT */}
                    <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                      <h3 className='text-xl font-bold mb-1'>{card.title}</h3>
                      <p className='text-sm opacity-90'>{card.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default UseCases;

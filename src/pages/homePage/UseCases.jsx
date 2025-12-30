'use client';
import { useState } from 'react';

const UseCases = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      width: '500px',
      height: '350px',
    },
    {
      url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80',
      width: '550px',
      height: '380px',
    },
    {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
      width: '500px',
      height: '350px',
    },
  ];

  return (
    <div className='w-full flex items-center justify-center py-20 lg:py-32 px-4 bg-white overflow-visible'>
      <div
        className='relative flex justify-center items-center'
        style={{
          width: '100%',
          maxWidth: '1200px',
          height: '500px',
        }}
      >
        {images.map((image, index) => {
          const isActive = hoveredCard === index;

          // Calculate position for each image to create overlapping effect
          const positions = [
            { translateX: '-180px', translateY: '20px', rotate: '-12deg', zIndex: 1 },
            { translateX: '0px', translateY: '-30px', rotate: '-3deg', zIndex: 3 },
            { translateX: '180px', translateY: '15px', rotate: '8deg', zIndex: 2 },
          ];

          return (
            <div
              key={index}
              className='absolute transition-all duration-500 ease-out cursor-pointer'
              style={{
                width: image.width,
                height: image.height,
                transform: `
                  translateX(${positions[index].translateX})
                  translateY(${positions[index].translateY})
                  rotate(${positions[index].rotate})
                  scale(${isActive ? 1.05 : 1})
                  ${isActive ? 'translateY(-20px)' : ''}
                `,
                zIndex: isActive ? 50 : positions[index].zIndex,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className='relative w-full h-full overflow-hidden shadow-2xl'
                style={{ borderRadius: '16px' }}
              >
                <img
                  src={image.url}
                  alt={`Use case ${index + 1}`}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UseCases;

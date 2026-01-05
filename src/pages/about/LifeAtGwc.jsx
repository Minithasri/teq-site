'use client';

import Image from 'next/image';
import { useState } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

export default function LifeAtGwc() {
  const [activeIndex, setActiveIndex] = useState(3);

  const images = [
    {
      id: 1,
      src: '/images/AboutUs/life1.png',
      title: '3rd Anniversary for GWC',
    },
    {
      id: 2,
      src: '/images/AboutUs/life1.png',
      title: 'Team Building Event',
    },
    {
      id: 3,
      src: '/images/AboutUs/life1.png',
      title: 'Innovation Workshop',
    },
    {
      id: 4,
      src: '/images/AboutUs/life1.png',
      title: 'Company Celebration',
    },
    {
      id: 5,
      src: '/images/AboutUs/life1.png',
      title: 'Team Collaboration',
    },
    {
      id: 6,
      src: '/images/AboutUs/life1.png',
      title: 'Annual Retreat',
    },
    {
      id: 7,
      src: '/images/AboutUs/life1.png',
      title: 'Team Success',
    },
  ];

  const handlePrev = () => {
    setActiveIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => Math.min(images.length - 1, prev + 1));
  };

  const getCardPositions = () => {
    return images.map((_, i) => {
      // Linear distance (no wrapping)
      const distance = i - activeIndex;

      let translateX = 0;
      let scale = 1;
      let opacity = 1;
      let zIndex = 0;

      if (distance === 0) {
        // ACTIVE CARD (center)
        translateX = 0;
        scale = 1;
        opacity = 1;
        zIndex = 10;
      } else if (distance === -1) {
        // IMMEDIATE LEFT
        translateX = -150;
        scale = 0.9;
        opacity = 0.8;
        zIndex = 7;
      } else if (distance === 1) {
        // IMMEDIATE RIGHT
        translateX = 150;
        scale = 0.9;
        opacity = 0.8;
        zIndex = 7;
      } else if (distance === -2) {
        // 2ND LEFT
        translateX = -280;
        scale = 0.8;
        opacity = 0.6;
        zIndex = 5;
      } else if (distance === 2) {
        // 2ND RIGHT
        translateX = 280;
        scale = 0.8;
        opacity = 0.6;
        zIndex = 5;
      } else if (distance === -3) {
        // 3RD LEFT (far)
        translateX = -400;
        scale = 0.7;
        opacity = 0.4;
        zIndex = 3;
      } else if (distance === 3) {
        // 3RD RIGHT (far)
        translateX = 400;
        scale = 0.7;
        opacity = 0.4;
        zIndex = 3;
      } else if (distance < -3) {
        // HIDDEN LEFT (off screen)
        translateX = -600;
        scale = 0;
        opacity = 0;
        zIndex = 0;
      } else {
        // HIDDEN RIGHT (off screen)
        translateX = 600;
        scale = 0;
        opacity = 0;
        zIndex = 0;
      }

      return { index: i, translateX, scale, opacity, zIndex };
    });
  };

  const cardPositions = getCardPositions();

  return (
    <section className='relative w-full py-16 lg:py-24 bg-white overflow-hidden'>
      {/* Header Section - Constrained Width */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Top Navigation: Spark + Dashed Line + Button */}
        <header className='flex items-center mb-16 gap-4'>
          <div className='w-14 h-14 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0'>
            <Image src='/images/Spark.svg' alt='' aria-hidden width={24} height={24} />
          </div>
          <div
            aria-hidden
            className='flex-1 h-[2px] bg-[linear-gradient(to_right,#E5E7EB_50%,rgba(0,0,0,0)_0%)] bg-[length:12px_2px] bg-repeat-x'
          />
          {/* Button with gradient border */}
          <div
            className='rounded-full p-[2px] shrink-0 hover:scale-105 transition-transform'
            style={{
              background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
            }}
          >
            <button className='w-[246px] h-[46px] rounded-full bg-white font-medium flex items-center justify-center gap-2 text-[16px]'>
              <span style={{ color: '#6F2B8B' }}>Talk to Our Experts</span>
              <Image src='/images/Careers/arrow1.svg' alt='Arrow' width={12} height={12} />
            </button>
          </div>
        </header>

        {/* Header Content (Split Layout) */}
        <div className='flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10'>
          {/* Main Heading */}
          <h2
            className='text-[32px] lg:text-[40px] font-bold shrink-0'
            style={{ marginRight: '40px' }}
          >
            <span className='text-black'>Life at GWC Data.AI</span>
          </h2>

          {/* Description - Aligned with heading */}
          <p className='text-gray-600 text-[15px] lg:text-[15px] max-w-xl leading-relaxed text-left'>
            At GWC, career growth and celebrations go hand in hand, creating a vibrant community
            where every success is shared and celebrated together.
          </p>
        </div>
      </div>

      {/* Carousel Section - Full Width */}
      <div className='w-full relative z-10'>
        {/* Image Carousel */}
        <div className='relative mb-8'>
          {/* Carousel Container */}
          <div className='flex justify-center items-center relative h-[220px] sm:h-[320px] md:h-[400px] lg:h-[520px] w-full overflow-hidden'>
            {images.map((image, index) => {
              const pos = cardPositions.find(p => p.index === index);
              if (!pos) return null;
              const isActive = index === activeIndex;

              return (
                <div
                  key={image.id}
                  className='absolute transition-all duration-500 ease-out cursor-pointer w-[280px] h-[180px] sm:w-[400px] sm:h-[256px] md:w-[500px] md:h-[320px] lg:w-[720px] lg:h-[461px]'
                  style={{
                    transform: `translateX(${pos.translateX}px) scale(${pos.scale})`,
                    opacity: pos.opacity,
                    zIndex: pos.zIndex,
                  }}
                  onClick={() => !isActive && setActiveIndex(index)}
                >
                  <div className='relative w-full h-full rounded-3xl overflow-hidden'>
                    <Image src={image.src} alt={image.title} fill className='object-cover' />

                    {/* Dark overlay for inactive cards */}
                    {!isActive && (
                      <div className='absolute inset-0 bg-black/40 transition-all duration-500'></div>
                    )}

                    {/* Title overlay at bottom */}
                    {isActive && (
                      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/90 to-transparent p-6 rounded-b-3xl'>
                        <h3 className='text-white text-2xl font-bold'>{image.title}</h3>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows - Below Carousel */}
          <div className='flex justify-center items-center gap-4 mt-8'>
            <button
              onClick={handlePrev}
              className='w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300'
              aria-label='Previous image'
            >
              <RiArrowLeftSLine size={24} />
            </button>

            <button
              onClick={handleNext}
              className='w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300'
              aria-label='Next image'
            >
              <RiArrowRightSLine size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

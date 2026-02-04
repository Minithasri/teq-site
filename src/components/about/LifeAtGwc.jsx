'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

export default function LifeAtGwc() {
  const [activeIndex, setActiveIndex] = useState(3);

  const images = [
    {
      id: 1,
      src: '/images/AboutUs/life1.svg',
      title: 'TGIT -Thank God It’s Three - Season 1',
    },
    {
      id: 2,
      src: '/images/AboutUs/life2.svg',
      title: 'Sports -Cricket event',
    },
    {
      id: 3,
      src: '/images/AboutUs/life3.svg',
      title: 'Domopalooza 2025 – Saltlake city, Utah',
    },
    {
      id: 4,
      src: '/images/AboutUs/life4.svg',
      title: '4th Year Anniversary (WeReconnect 2025)',
    },
    {
      id: 5,
      src: '/images/AboutUs/life5.svg',
      title: 'Diwali celebration',
    },
    {
      id: 6,
      src: '/images/AboutUs/life6.svg',
      title: 'Sports Event_4th Anniversary 2025',
    },
    {
      id: 7,
      src: '/images/AboutUs/life7.svg',
      title: 'Christmas celebration',
    },
    {
      id: 8,
      src: '/images/AboutUs/life8.svg',
      title: 'Vinayagar Chaturthi celebration',
    },
    {
      id: 9,
      src: '/images/AboutUs/life9.svg',
      title: 'Onam Celebration',
    },
    {
      id: 10,
      src: '/images/AboutUs/life10.svg',
      title: 'Men’s day Celebration',
    },
    {
      id: 11,
      src: '/images/AboutUs/life11.svg',
      title: 'Ayudha Pooja',
    },
    {
      id: 12,
      src: '/images/AboutUs/life12.svg',
      title: 'Green day',
    },
    {
      id: 13,
      src: '/images/AboutUs/life13.svg',
      title: 'Ayudha Pooja celebration',
    },
    {
      id: 14,
      src: '/images/AboutUs/life14.svg',
      title: 'GWC’s Ganapathi Bappaa GWC',
    },
  ];

  // Infinite loop navigation
  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className='relative w-full py-16 lg:py-24 bg-white overflow-hidden'>
      {/* Header Section - Constrained Width */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Top Navigation: Spark + Dashed Line + Button */}
        <header className='hidden md:flex items-center mb-6 lg:mb-8 gap-4'>
          <div className='w-14 h-14 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0'>
            <Image src='/images/Spark.svg' alt='' aria-hidden width={24} height={24} />
          </div>
          <div
            aria-hidden
            className='flex-1 h-[2px] bg-[linear-gradient(to_right,#1F1F1F_30%,rgba(0,0,0,0)_0%)] bg-[length:6px_2px] bg-repeat-x'
          />
          {/* Button with gradient border */}
          <div
            className='rounded-full p-[2px] shrink-0 hover:scale-105 transition-transform'
            style={{
              background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
            }}
          >
            <Link
              href='/contact'
              className='w-[246px] h-[46px] rounded-full bg-white font-medium flex items-center justify-center gap-2 text-[16px]'
            >
              <span style={{ color: '#6F2B8B' }}>Talk to our experts</span>
              <Image src='/images/Careers/arrow1.svg' alt='Arrow' width={12} height={12} />
            </Link>
          </div>
        </header>

        {/* Header Content (Split Layout) */}
        <div className='flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10'>
          {/* Main Heading */}
          <h2
            className='text-[32px] lg:text-[40px] font-bold shrink-0'
            style={{ marginRight: '40px' }}
          >
            <span className='text-[#1F1F1F]'>Life at GWC Data.AI</span>
          </h2>

          {/* Description - Aligned with heading */}
          <p className='text-[#525252] text-[15px] lg:text-[15px] max-w-xl leading-relaxed text-left'>
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
            {/* Infinite Loop render */}
            {[...images, ...images, ...images].map((image, idx) => {
              const actualIndex = idx % images.length;

              // Linear position logic
              const centerSetStart = images.length;
              const relativePosition = idx - (activeIndex + centerSetStart);

              let translateX = '0%';
              let scale = 1;
              let opacity = 1;
              let zIndex = 10;

              if (relativePosition === 0) {
                // Center
                translateX = '0%';
                scale = 1;
                opacity = 1;
                zIndex = 10;
              } else if (relativePosition === 1) {
                // Right 1
                translateX = '20%';
                scale = 0.9;
                opacity = 1;
                zIndex = 5;
              } else if (relativePosition === -1) {
                // Left 1
                translateX = '-20%';
                scale = 0.9;
                opacity = 1;
                zIndex = 5;
              } else if (relativePosition === 2) {
                // Right 2
                translateX = '35%';
                scale = 0.8;
                opacity = 1;
                zIndex = 3;
              } else if (relativePosition === -2) {
                // Left 2
                translateX = '-35%';
                scale = 0.8;
                opacity = 1;
                zIndex = 3;
              } else if (relativePosition === 3) {
                // Right 3
                translateX = '50%';
                scale = 0.7;
                opacity = 1;
                zIndex = 1;
              } else if (relativePosition === -3) {
                // Left 3
                translateX = '-50%';
                scale = 0.7;
                opacity = 1;
                zIndex = 1;
              } else if (relativePosition > 3) {
                // Far Right
                translateX = '100%';
                scale = 0.6;
                opacity = 0;
                zIndex = 0;
              } else {
                // Far Left
                translateX = '-100%';
                scale = 0.6;
                opacity = 0;
                zIndex = 0;
              }

              const isActive = actualIndex === activeIndex;

              return (
                <div
                  key={`${image.id}-${idx}`}
                  className='absolute transition-all duration-500 ease-out cursor-pointer w-[280px] h-[180px] sm:w-[400px] sm:h-[256px] md:w-[500px] md:h-[320px] lg:w-[720px] lg:h-[461px]'
                  style={{
                    transform: `translateX(${translateX}) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                  onClick={() => !isActive && setActiveIndex(actualIndex)}
                >
                  <div
                    className={`relative w-full h-full rounded-3xl overflow-hidden border-[3px] transition-all duration-500 ${
                      isActive
                        ? 'border-white shadow-[10px_10px_20px_rgba(0,0,0,0.4)]'
                        : 'border-black/50'
                    }`}
                  >
                    <Image src={image.src} alt={image.title} fill className='object-cover' />

                    {/* Dark overlay for inactive cards */}
                    {!isActive && (
                      <div
                        className='absolute inset-0 transition-all duration-500'
                        style={{
                          background:
                            'radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)',
                        }}
                      ></div>
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
          <div className='flex justify-center items-center gap-4 mt-2'>
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

'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const MeetPeople = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const people = [
    {
      id: 1,
      name: 'Dhinesh manivelan',
      role: 'Technical lead',
      description:
        'At GWC, transparency and open voices define our culture. We offer strong career growth in analytics, balance work with enjoyment, and empower employees to thrive through our Work From Hometown approach.',
      image: '/images/Careers/dhinesh_image.png',
    },
    {
      id: 2,
      name: 'Guru Prasad',
      role: 'Associate Manager',
      description:
        "After transitioning from a different domain, GWC's data analytics training and supportive mentors helped me grow and secure a role here. The transparent culture and approachable leadership make GWC feel like home.",
      image: '/images/Careers/dhinesh_image.png',
    },
    {
      id: 3,
      name: 'Dhinesh manivelan',
      role: 'Technical lead',
      description:
        'At GWC, transparency and open voices define our culture. We offer strong career growth in analytics, balance work with enjoyment, and empower employees to thrive through our Work From Hometown approach.',
      image: '/images/Careers/dhinesh_image.png',
    },
    {
      id: 4,
      name: 'Guru Prasad',
      role: 'Associate Manager',
      description:
        "After transitioning from a different domain, GWC's data analytics training and supportive mentors helped me grow and secure a role here. The transparent culture and approachable leadership make GWC feel like home.",
      image: '/images/Careers/dhinesh_image.png',
    },
    {
      id: 5,
      name: 'Dhinesh manivelan',
      role: 'Technical lead',
      description:
        'At GWC, transparency and open voices define our culture. We offer strong career growth in analytics, balance work with enjoyment, and empower employees to thrive through our Work From Hometown approach.',
      image: '/images/Careers/dhinesh_image.png',
    },
    {
      id: 6,
      name: 'Guru Prasad',
      role: 'Associate Manager',
      description:
        "After transitioning from a different domain, GWC's data analytics training and supportive mentors helped me grow and secure a role here. The transparent culture and approachable leadership make GWC feel like home.",
      image: '/images/Careers/dhinesh_image.png',
    },
  ];

  // Responsive card width and gap
  const getCardWidth = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 280; // mobile
      if (window.innerWidth < 768) return 340; // sm
      if (window.innerWidth < 1024) return 400; // md
      return 500; // lg+
    }
    return 500;
  };

  const getGap = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 16; // mobile gap-4
      return 24; // md+ gap-6
    }
    return 24;
  };

  const [cardWidth, setCardWidth] = React.useState(500);
  const [gap, setGap] = React.useState(24);

  React.useEffect(() => {
    const handleResize = () => {
      setCardWidth(getCardWidth());
      setGap(getGap());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardsPerView = 3;
  const maxIndex = Math.max(0, people.length - cardsPerView);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className='w-full py-8 lg:py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Heading */}
        <div className='text-center mb-4'>
          <h2
            className='font-medium bg-clip-text text-transparent mb-3'
            style={{
              background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '32px',
            }}
          >
            Meet our People
          </h2>
          {/* Line below heading */}
        </div>

        {/* Subtitle */}
        <p className='text-center text-gray-600 text-base mb-12 max-w-3xl mx-auto'>
          At GWC Data AI, every idea is heard, every project is supported, and every voice matters.
        </p>

        {/* Cards Carousel */}
        <div className='relative overflow-hidden py-4'>
          <div
            className='flex transition-transform duration-500 ease-in-out gap-4 md:gap-6'
            style={{
              transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
            }}
          >
            {people.map(person => (
              <div
                key={person.id}
                className='flex-shrink-0 rounded-2xl p-4 sm:p-5 md:p-6 pb-6 md:pb-8 shadow-lg hover:shadow-xl transition-shadow'
                style={{
                  width: `${cardWidth}px`,
                  minHeight: '284px',
                }}
              >
                {/* Profile */}
                <div className='flex items-center gap-3 md:gap-4 mb-3 md:mb-4'>
                  <div className='relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0'>
                    <Image src={person.image} alt={person.name} fill className='object-cover' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-[#404040] text-[16px] sm:text-[17px] md:text-[18px]'>
                      {person.name}
                    </h3>
                    <p
                      className='bg-clip-text text-transparent text-[14px] sm:text-[15px] md:text-[16px]'
                      style={{
                        backgroundImage: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                      }}
                    >
                      {person.role}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className='text-[#404040] text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed'>
                  {person.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className='flex justify-center items-center gap-4 mt-8'>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className='w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all'
          >
            ←
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className='w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all'
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default MeetPeople;

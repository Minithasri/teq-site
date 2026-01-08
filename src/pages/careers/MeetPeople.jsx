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
      name: 'Jayakumar',
      role: 'Data Analyst',
      description:
        'GWC has created a joyful and supportive work environment that helped me maintain a healthy work life balance while staying connected to my roots. I am grateful for the trust and flexibility that allow me to deliver my best work from my hometown.',
      image: '/images/Careers/peopleimage2.svg',
    },
    {
      id: 3,
      name: 'Vignesh Shanmugam',
      role: 'Senior Data Analyst',
      description:
        'Joining GWC was an exciting learning experience supported by a collaborative team and helpful mentors. The guidance and shared expertise made my journey enjoyable and I look forward to growing and contributing further to this data driven environment.',
      image: '/images/Careers/peopleimage3.svg',
    },
    {
      id: 4,
      name: 'Zhaeeda Bibi',
      role: 'Cloud Specialist',
      description:
        'GWC has empowered me to grow with confidence in an inclusive and supportive environment where everyone is treated equally. I have always felt encouraged valued and embraced throughout my journey here.',
      image: '/images/Careers/peopleimage4.svg',
    },
    {
      id: 5,
      name: 'Swetha Jayaseelan',
      role: 'Support Engineer',
      description:
        "I'm grateful to GWC for supporting my transition from a different domain through data analytics training and mentor guidance. Today, being part of GWC means working in a space defined by transparent leadership, collaboration, and belonging.",
      image: '/images/Careers/peopleimage5.svg',
    },
  ];

  // Responsive card width and gap
  const getCardWidth = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 260; // mobile
      if (window.innerWidth < 768) return 300; // sm
      if (window.innerWidth < 1024) return 350; // md
      return 425; // lg+
    }
    return 385;
  };

  const getGap = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 16; // mobile gap-4
      return 24; // md+ gap-6
    }
    return 24;
  };

  const [cardWidth, setCardWidth] = React.useState(400);
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

  // Duplicate people for seamless looping (4x for smoother reset)
  const marqueePeople = [...people, ...people, ...people, ...people];

  const scrollContainerRef = React.useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  React.useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId;

    const scroll = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += 1; // Speed: 1px per frame (approx 60px/sec)

        // Reset scroll position for infinite loop effect
        // If we have scrolled past the first set of items (approx calculation)
        // We need exact width.
        // Safer way: Check if scrollLeft + clientWidth >= scrollWidth - (buffer).
        // Or simply: When scrollLeft reaches (scrollWidth / 4), reset to 0?
        // Let's rely on scrollWidth.
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const handlePrev = () => {
    setIsPaused(true);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
    }
    setTimeout(() => setIsPaused(false), 1000);
  };

  const handleNext = () => {
    setIsPaused(true);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
    }
    setTimeout(() => setIsPaused(false), 1000);
  };

  return (
    <section className='w-full py-8 lg:py-12'>
      <div className=''>
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
        </div>

        {/* Subtitle */}
        <p className='text-center text-gray-600 text-base mb-12 max-w-3xl mx-auto'>
          At GWC Data AI, every idea is heard, every project is supported, and every voice matters.
        </p>

        {/* Scroll Container */}
        <div className='relative'>
          <div
            ref={scrollContainerRef}
            className='flex gap-4 md:gap-6 overflow-x-hidden pb-8 no-scrollbar'
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ whiteSpace: 'nowrap' }}
          >
            {marqueePeople.map((person, index) => (
              <div
                key={`${person.id}-${index}`}
                className='flex-shrink-0 rounded-2xl p-4 sm:p-5 md:p-6 pb-6 md:pb-8 bg-white border border-[#E5E5E5] shadow-[6px_6px_20px_0px_rgba(0,0,0,0.08)] hover:shadow-[8px_8px_24px_0px_rgba(0,0,0,0.12)] transition-shadow whitespace-normal inline-block align-top'
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

                {/* Separator Line */}
                <div
                  className='w-full h-[1px] mb-4'
                  style={{
                    background:
                      'linear-gradient(0deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%), linear-gradient(107deg, #7030B1 0%, #B56DD3 100%)',
                  }}
                />

                {/* Description */}
                <p className='text-[#404040] text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed'>
                  {person.description}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className='flex justify-center items-center gap-4 mt-8'>
            <button
              onClick={handlePrev}
              className='w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-all'
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className='w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-all'
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetPeople;

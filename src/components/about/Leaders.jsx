'use client';

import Image from 'next/image';
import { useState } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

export default function Leaders() {
  const [activeIndex, setActiveIndex] = useState(2);

  // Dummy leader data - 10 leaders
  const leaders = [
    {
      id: 1,
      name: 'Abhinaya Sindhu',
      title: 'Head of People Operations',
      image: '/images/AboutUs/Abinaya Sindhu.webp',
      linkedin: 'https://www.linkedin.com/in/abinaya-sindhu-a05311206/',
    },
    {
      id: 2,
      name: 'Prasanna Srinivasan',
      title: 'Chief Operating Officer',
      image: '/images/AboutUs/Prasanna Srinivasan .webp',
      linkedin: 'https://www.linkedin.com/in/prasanna-srinivasan-a533b062/',
    },
    {
      id: 3,
      name: 'Naveen Kumar',
      title: 'Chief Executive Officer',
      image: '/images/AboutUs/Naveen Kumar.webp',
      linkedin: 'https://www.linkedin.com/in/naveenkumarnawinkrp/',
    },
    {
      id: 4,
      name: 'Mike Murali',
      title: 'Chief Experience Officer',
      image: '/images/AboutUs/Mike Murali.webp',
      linkedin: 'https://www.linkedin.com/in/mike-murali-3428aa',
    },
    {
      id: 5,
      name: 'Mamtha Shanmugam',
      title: 'Chief Marketing Officer',
      image: '/images/AboutUs/Mamtha Shanmugam.webp',
      linkedin: 'https://www.linkedin.com/in/mamtha-shanmugam-43ba8016a/',
    },
    {
      id: 6,
      name: 'Subash Ramu',
      title: 'Chief Technology Officer',
      image: '/images/AboutUs/Subash Ramu.webp',
      linkedin: 'https://www.linkedin.com/in/subash-ramu-92553784/',
    },
    {
      id: 7,
      name: 'Srinath Raja',
      title: 'Chief Data Officer',
      image: '/images/AboutUs/Srinath Raja.webp',
      linkedin: 'https://www.linkedin.com/in/srinath-raja-8a5710115/',
    },
    {
      id: 8,
      name: 'Shashank Ravikumar',
      title: 'Chief Strategy Officer',
      image: '/images/AboutUs/Shashank Ravikumar.webp',
      linkedin: 'https://www.linkedin.com/in/shashank-ravikumar-780649125/',
    },
    {
      id: 9,
      name: 'Sridhar Vediyappan',
      title: 'Chief Financial Officer',
      image: '/images/AboutUs/Sridhar Vediyappan.webp',
      linkedin: 'https://www.linkedin.com/in/sridhar-vediyappan-943340b5/',
    },
    {
      id: 10,
      name: 'Madhu Sudhanan',
      title: 'Vice President',
      image: '/images/AboutUs/Madhu Sudhanan.webp',
      linkedin: 'https://www.linkedin.com/in/madhu-sudhanan-mahendran-a00b4477/',
    },
    {
      id: 11,
      name: 'Santhosh Kumar',
      title: 'Chief Innovation Officer',
      image: '/images/AboutUs/Santhosh Kumar.webp',
      linkedin: 'https://www.linkedin.com/in/santhosh-kumar-5a3ba3121/',
    },
  ];

  // Bottom cards data
  const valueCards = [
    {
      id: 1,
      title: 'Tech Expertise',
      description:
        'At GWC, our team members specialize in cutting-edge tools ranging from analytics to data engineering, ensuring we deliver the right answer for your business needs.',
      image: '/images/AboutUs/section31.webp',
    },
    {
      id: 2,
      title: 'Problem Solving in the DNA',
      description:
        "Our leaders dive into any challenge and swiftly decode effective tools and solutions. At GWC, we don't just solve problems; we transform them into opportunities for growth.",
      image: '/images/AboutUs/section32.webp',
    },
    {
      id: 3,
      title: 'Ownership Fueled by Value Addition',
      description:
        'The essence of our strength lies in the value we bring to the forefront. With leaders purely focused on delivering results, we take ownership and drive to see your strategic data analytics journey to achieve unmatched success.',
      image: '/images/AboutUs/section33.webp',
    },
  ];

  // Removed GSAP animations to prevent loading issues

  const handlePrev = () => setActiveIndex(prev => (prev === 0 ? leaders.length - 1 : prev - 1));
  const handleNext = () => setActiveIndex(prev => (prev === leaders.length - 1 ? 0 : prev + 1));
  const handleDotClick = index => setActiveIndex(index);

  // --- UPDATED POSITIONING LOGIC ---
  const getCardPositions = () => {
    const total = leaders.length;

    // We map over every leader to calculate where they should be relative to activeIndex
    return leaders.map((_, i) => {
      // Calculate circular distance
      // This ensures that if active is 0, index 9 is treated as -1 (immediate left)
      let distance = (i - activeIndex + total) % total;
      if (distance > total / 2) distance -= total;

      let translateX = 0;
      let scale = 1;
      let opacity = 1;
      let zIndex = 0;

      // Card Width is approx 435px.
      // To "accumulate" them, we use offsets smaller than the width (e.g. 150px)
      // to create the overlap effect.

      if (distance === 0) {
        // ACTIVE CARD
        translateX = 0;
        scale = 1;
        opacity = 1;
        zIndex = 10;
      } else if (distance === -1) {
        // IMMEDIATE LEFT
        translateX = -150; // Tuck behind
        scale = 0.85;
        opacity = 1.5;
        zIndex = 5;
      } else if (distance === 1) {
        // IMMEDIATE RIGHT
        translateX = 150; // Tuck behind
        scale = 0.85;
        opacity = 1.5;
        zIndex = 5;
      } else if (distance === -2) {
        // FAR LEFT
        translateX = -280; // Further back
        scale = 0.75;
        opacity = 0.3;
        zIndex = 2;
      } else if (distance === 2) {
        // FAR RIGHT
        translateX = 280; // Further back
        scale = 0.75;
        opacity = 0.3;
        zIndex = 2;
      } else {
        // HIDDEN (Off screen)
        translateX = distance < 0 ? -600 : 600;
        scale = 0;
        opacity = 0;
        zIndex = 0;
      }

      return { index: i, translateX, scale, opacity, zIndex };
    });
  };

  const cardPositions = getCardPositions();

  return (
    <section
      className='relative py-20 px-6 overflow-hidden'
      style={{
        backgroundColor: '#3B174A',
        backgroundImage: 'url(/images/AboutUs/section3_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-[40px] font-semibold text-white mb-4'>Meet Our Leaders</h2>
          <p className='text-white/80 text-lg max-w-3xl mx-auto'>
            Our leaders inspire excellence, accelerate transformation, and drive global growth
            through innovation.
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className='hidden lg:block relative w-full mb-16'>
          {/* Controls */}
          <button
            className='bg-white rounded-full w-14 h-14 flex items-center justify-center border border-gray-300 transition-all duration-300 z-20 shadow-xl absolute left-4 top-1/2 -translate-y-1/2 hover:scale-105 active:scale-95'
            onClick={handlePrev}
          >
            <RiArrowLeftSLine size={26} />
          </button>
          <button
            className='bg-white rounded-full w-14 h-14 flex items-center justify-center border border-gray-300 transition-all duration-300 z-20 shadow-xl absolute right-4 top-1/2 -translate-y-1/2 hover:scale-105 active:scale-95'
            onClick={handleNext}
          >
            <RiArrowRightSLine size={26} />
          </button>

          {/* Carousel Track */}
          <div className='flex justify-center items-center relative h-[600px] w-full perspective-[1000px]'>
            {leaders.map((leader, index) => {
              // Get the calculated position for this specific leader
              const pos = cardPositions.find(p => p.index === index);

              // Helper to check if this is the active card
              const isActive = index === activeIndex;

              return (
                <div
                  key={leader.id}
                  className='bg-white rounded-2xl shadow-2xl absolute transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer origin-center p-4'
                  style={{
                    transform: `translateX(${pos.translateX}px) scale(${pos.scale})`,
                    opacity: pos.opacity,
                    zIndex: pos.zIndex,
                    width: '435px',
                    height: '485px',
                    // Using box-shadow to enhance depth
                    boxShadow: isActive
                      ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                      : '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
                  }}
                  onClick={() => index !== activeIndex && handleDotClick(index)}
                >
                  {/* Card Content */}
                  <div className='relative h-[375px] bg-gray-100 rounded-xl overflow-hidden mb-4'>
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className={
                        leader.id === 4 ? 'object-contain scale-80' : 'object-cover object-top'
                      }
                    />

                    {/* Dark Overlay for INACTIVE cards to make center pop */}
                    {!isActive && (
                      <div className='absolute inset-0 bg-black/40 transition-all duration-500'></div>
                    )}
                  </div>

                  <div className='flex items-center justify-between px-2 pb-2'>
                    <div className='text-left'>
                      <h3 className='text-xl font-bold text-[#212529] mb-1'>{leader.name}</h3>
                      <p className='text-[#525252] text-sm font-medium'>{leader.title}</p>
                    </div>
                    <a
                      href={leader.linkedin}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex-shrink-0 transition-all duration-300 hover:scale-110'
                      style={{ pointerEvents: isActive ? 'auto' : 'none' }}
                    >
                      <Image
                        src='/images/AboutUs/linkedinicon.svg'
                        alt='LinkedIn'
                        width={32}
                        height={32}
                      />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Stacked View (unchanged) */}
        <div className='lg:hidden flex flex-col gap-6 w-full mb-16'>
          {leaders.map(leader => (
            <div key={leader.id} className='bg-white rounded-2xl shadow-lg w-full p-4'>
              <div className='relative h-80 bg-gray-100 rounded-xl overflow-hidden mb-4'>
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className={
                    leader.id === 4 ? 'object-contain scale-80' : 'object-cover object-top'
                  }
                />
              </div>
              <div className='flex items-center justify-between px-2 pb-2'>
                <div className='text-left'>
                  <h3 className='text-xl font-bold text-gray-900 mb-1'>{leader.name}</h3>
                  <p className='text-gray-600 text-sm font-medium'>{leader.title}</p>
                </div>
                <a
                  href={leader.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex-shrink-0 transition-all duration-300 hover:scale-110'
                >
                  <Image
                    src='/images/AboutUs/linkedinicon.svg'
                    alt='LinkedIn'
                    width={32}
                    height={32}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Line with 3 Dots */}
        <div className='hidden md:block relative w-full mb-10 mt-16'>
          {/* Background Line */}
          <div
            className='absolute top-1/2 -translate-y-1/2 h-1 bg-[#441B56]'
            style={{
              left: '1%', // Changed from 16.5% to 0 to span full width
              right: '1%', // Changed from 16.5% to 0 to span full width
              zIndex: 0,
            }}
          />

          {/* Dots Container */}
          <div className='grid grid-cols-3 gap-6 w-full relative z-10'>
            {/* 1st Dot */}
            <div className='flex mr-96 justify-center'>
              <div
                className='w-4 h-4 rounded-full'
                style={{
                  background:
                    'linear-gradient(0deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(107deg, #7030B1 0%, #B56DD3 100%)',
                  boxShadow: '0 0 0 4px white',
                }}
              />
            </div>

            {/* 2nd Dot */}
            <div className='flex justify-center'>
              <div
                className='w-4 h-4 rounded-full'
                style={{
                  background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                  boxShadow: '0 0 0 4px white',
                }}
              />
            </div>

            {/* 3rd Dot */}
            <div className='flex ml-96 justify-center'>
              <div
                className='w-4 h-4 rounded-full'
                style={{
                  background:
                    'linear-gradient(0deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(107deg, #7030B1 0%, #B56DD3 100%)',
                  boxShadow: '0 0 0 4px white',
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Value Cards */}
        {/* Bottom Value Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {valueCards.map(card => (
            <div
              key={card.id}
              className='rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500'
              style={{
                background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                padding: '2px',
              }}
            >
              <div className='bg-[#3B174A] rounded-2xl p-6 h-full'>
                {/* Image Wrapper */}
                <div className='relative h-48 mb-4 rounded-xl overflow-hidden shadow-lg'>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className='object-cover rounded-xl'
                  />

                  {/* Overlay */}
                  <div className='absolute inset-0 rounded-xl bg-gradient-to-tr from-[#7030B1]/30 via-transparent to-[#B56DD3]/30 mix-blend-overlay' />
                </div>

                <h3 className='text-[17px] font-semibold text-white mb-3'>{card.title}</h3>

                <p className='text-[#EFCAFF] text-[14px] leading-relaxed'>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

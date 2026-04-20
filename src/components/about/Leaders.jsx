'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

// ─── CACHE BUSTER ──────────────────────────────────────────────────────────────
// Bump this string every time you replace/rename any leader image.
// It appends ?v=X to every image src, forcing browsers AND CDNs to
// fetch the new file instead of serving a cached copy.
const IMAGE_VERSION = 'v3';
// ───────────────────────────────────────────────────────────────────────────────

const bust = src => `${src}?${IMAGE_VERSION}`;

export default function Leaders() {
  const [activeIndex, setActiveIndex] = useState(2);

  const leaders = [
    {
      id: 1,
      name: 'Abhinaya Sindhu',
      title: 'Head of People Operations',
      image: bust('/images/AboutUs/Abinaya Sindhu.webp'),
      linkedin: 'https://www.linkedin.com/in/abinaya-sindhu-a05311206/',
    },
    {
      id: 2,
      name: 'Prasanna Srinivasan',
      title: 'Chief Operating Officer',
      image: bust('/images/AboutUs/Prasanna Srinivasan .webp'),
      linkedin: 'https://www.linkedin.com/in/prasanna-srinivasan-a533b062/',
    },
    {
      id: 3,
      name: 'Naveen Kumar',
      title: 'Chief Executive Officer',
      image: bust('/images/AboutUs/NaveenKumarv1.webp'),
      linkedin: 'https://www.linkedin.com/in/naveenkumarnawinkrp/',
    },
    {
      id: 4,
      name: 'Mike Murali',
      title: 'Chief Experience Officer',
      image: bust('/images/AboutUs/MikeMuraliv1.webp'),
      linkedin: 'https://www.linkedin.com/in/mike-murali-3428aa',
    },
    {
      id: 5,
      name: 'Mamtha Shanmugam',
      title: 'Chief Marketing Officer',
      image: bust('/images/AboutUs/Mamtha Shanmugam.webp'),
      linkedin: 'https://www.linkedin.com/in/mamtha-shanmugam-43ba8016a/',
    },
    {
      id: 6,
      name: 'Subash Ramu',
      title: 'Chief Technology Officer',
      image: bust('/images/AboutUs/Subash Ramu.webp'),
      linkedin: 'https://www.linkedin.com/in/subash-ramu-92553784/',
    },
    {
      id: 7,
      name: 'Srinath Raja',
      title: 'Chief Data Officer',
      image: bust('/images/AboutUs/Srinath Raja.webp'),
      linkedin: 'https://www.linkedin.com/in/srinath-raja-8a5710115/',
    },
    {
      id: 8,
      name: 'Shashank Ravikumar',
      title: 'Chief Strategy Officer',
      image: bust('/images/AboutUs/Shashank Ravikumar.webp'),
      linkedin: 'https://www.linkedin.com/in/shashank-ravikumar-780649125/',
    },
    {
      id: 9,
      name: 'Sridhar Vediyappan',
      title: 'Chief Financial Officer',
      image: bust('/images/AboutUs/Sridhar Vediyappan.webp'),
      linkedin: 'https://www.linkedin.com/in/sridhar-vediyappan-943340b5/',
    },
    {
      id: 10,
      name: 'Madhu Sudhanan',
      title: 'Vice President',
      image: bust('/images/AboutUs/Madhu Sudhanan.webp'),
      linkedin: 'https://www.linkedin.com/in/madhu-sudhanan-mahendran-a00b4477/',
    },
    {
      id: 11,
      name: 'Santhosh Kumar',
      title: 'Chief Innovation Officer',
      image: bust('/images/AboutUs/Santhosh Kumar.webp'),
      linkedin: 'https://www.linkedin.com/in/santhosh-kumar-5a3ba3121/',
    },
  ];

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

  // Preload all images via fetch() so the browser warms its HTTP cache
  // before the carousel renders them. fetch() respects the ?v= cache-buster
  // and works correctly with CDNs, unlike window.Image().
  useEffect(() => {
    leaders.forEach(leader => {
      fetch(leader.image, { method: 'GET', cache: 'force-cache' }).catch(() => {});
    });
  }, []);

  const handlePrev = () => setActiveIndex(prev => (prev === 0 ? leaders.length - 1 : prev - 1));
  const handleNext = () => setActiveIndex(prev => (prev === leaders.length - 1 ? 0 : prev + 1));
  const handleDotClick = index => setActiveIndex(index);

  const getCardPositions = () => {
    const total = leaders.length;
    return leaders.map((_, i) => {
      let distance = (i - activeIndex + total) % total;
      if (distance > total / 2) distance -= total;

      let translateX = 0;
      let scale = 1;
      let opacity = 1;
      let zIndex = 0;
      let visibility = 'visible';

      if (distance === 0) {
        translateX = 0;
        scale = 1;
        opacity = 1;
        zIndex = 10;
      } else if (distance === -1) {
        translateX = -150;
        scale = 0.85;
        opacity = 1.5;
        zIndex = 5;
      } else if (distance === 1) {
        translateX = 150;
        scale = 0.85;
        opacity = 1.5;
        zIndex = 5;
      } else if (distance === -2) {
        translateX = -280;
        scale = 0.75;
        opacity = 0.3;
        zIndex = 2;
      } else if (distance === 2) {
        translateX = 280;
        scale = 0.75;
        opacity = 0.3;
        zIndex = 2;
      } else {
        translateX = distance < 0 ? -900 : 900;
        scale = 0.6;
        opacity = 0;
        zIndex = 0;
        visibility = 'hidden';
      }

      return { index: i, translateX, scale, opacity, zIndex, visibility };
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
      {/*
        Hidden preload layer — 1×1px, invisible, aria-hidden.
        Uses plain <img> (NOT next/image) with fetchpriority="high" and the
        ?v= cache-buster. This forces the browser to fetch each real file on
        first load, warming the cache before the carousel needs them.
        Never serves a stale /_next/image optimized copy.
      */}
      <div
        aria-hidden='true'
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          opacity: 0,
          pointerEvents: 'none',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        {leaders.map(leader => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`preload-${leader.id}`}
            src={leader.image}
            alt=''
            width={1}
            height={1}
            loading='eager'
            fetchpriority='high'
          />
        ))}
      </div>

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

          <div className='flex justify-center items-center relative h-[600px] w-full perspective-[1000px]'>
            {leaders.map((leader, index) => {
              const pos = cardPositions.find(p => p.index === index);
              const isActive = index === activeIndex;

              return (
                <div
                  key={leader.id}
                  className='bg-white rounded-2xl shadow-2xl absolute cursor-pointer origin-center p-4'
                  style={{
                    transform: `translateX(${pos.translateX}px) scale(${pos.scale})`,
                    opacity: pos.opacity,
                    zIndex: pos.zIndex,
                    visibility: pos.visibility,
                    width: '435px',
                    height: '485px',
                    willChange: 'transform, opacity',
                    transition:
                      'transform 420ms cubic-bezier(0.25,1,0.5,1), opacity 420ms cubic-bezier(0.25,1,0.5,1)',
                    boxShadow: isActive
                      ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                      : '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
                  }}
                  onClick={() => index !== activeIndex && handleDotClick(index)}
                >
                  <div className='relative h-[375px] bg-gray-100 rounded-xl overflow-hidden mb-4'>
                    {/*
                      unoptimized={true} — skips /_next/image entirely.
                      The browser fetches /images/AboutUs/X.webp?v3 directly,
                      never a server-cached optimized copy. This fixes the
                      "wrong image after deploy" bug in incognito / new users.
                    */}
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      unoptimized
                      loading='eager'
                      sizes='435px'
                      className='object-cover'
                      style={{ objectPosition: 'center top' }}
                    />

                    {/* Always-rendered overlay — fade via opacity only, never mount/unmount */}
                    <div
                      className='absolute inset-0 bg-black/40'
                      style={{
                        opacity: isActive ? 0 : 1,
                        transition: 'opacity 420ms cubic-bezier(0.25,1,0.5,1)',
                        willChange: 'opacity',
                      }}
                    />
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

        {/* Mobile Stacked View */}
        <div className='lg:hidden flex flex-col gap-6 w-full mb-16'>
          {leaders.map(leader => (
            <div key={leader.id} className='bg-white rounded-2xl shadow-lg w-full p-4'>
              <div className='relative h-80 bg-gray-100 rounded-xl overflow-hidden mb-4'>
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  unoptimized
                  loading='eager'
                  className='object-cover'
                  style={{ objectPosition: 'center top' }}
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
          <div
            className='absolute top-1/2 -translate-y-1/2 h-1 bg-[#441B56]'
            style={{ left: '1%', right: '1%', zIndex: 0 }}
          />
          <div className='grid grid-cols-3 gap-6 w-full relative z-10'>
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
            <div className='flex justify-center'>
              <div
                className='w-4 h-4 rounded-full'
                style={{
                  background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                  boxShadow: '0 0 0 4px white',
                }}
              />
            </div>
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
                <div className='relative h-48 mb-4 rounded-xl overflow-hidden shadow-lg'>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className='object-cover rounded-xl'
                  />
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

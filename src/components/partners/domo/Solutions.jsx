'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const solutionsData = [
  {
    image: '/images/partners/domo/sd3.webp',
    title: 'Domo for Manufacturing',
    description:
      'Incorporate data from your supply chain, manufacturing, IoT, and distribution channels to unearth valuable insights and enhance operational efficiency.',
    link: 'https://www.domo.com/industries/manufacturing',
  },
  {
    image: '/images/partners/domo/sd2.webp',
    title: 'Domo for Retail',
    description:
      'Merge data from diverse sources & systems spanning supply chain, retail operations, e-commerce, IoT & beyond to reveal insights, refine planning & execution processes.',
    link: 'https://www.domo.com/industries/retail',
  },
  {
    image: '/images/partners/domo/sd1.webp',
    title: 'Domo for Healthcare',
    description:
      'Incorporate and oversee data generated at every phase of the life sciences value chain to reveal insights and facilitate improved, expedited decision-making.',
    link: 'https://www.domo.com/industries/healthcare',
  },
  {
    image: '/images/partners/domo/sd7.webp',
    title: 'Domo for Enterprise',
    description:
      'Domo empowers users to centralize their data, allowing for the creation and maintenance of intuitive data pipelines.',
    link: 'https://www.domo.com/domo-for-enterprise',
  },
  {
    image: '/images/partners/domo/sd4.webp',
    title: 'Domo for Business',
    description:
      'Domo, an all-in-one platform that swiftly connects and transforms data from diverse sources into actionable insights enabling informed decision-making.',
    link: 'https://www.domo.com/domo-for-business',
  },
  {
    image: '/images/partners/domo/sd6.webp',
    title: 'Domo for AWS',
    description:
      'Domo for AWS takes your data experience to new heights, enabling seamless access, visualization, and collaboration on AWS data.',
    link: 'https://www.domo.com/partners/aws',
  },
  {
    image: '/images/partners/domo/sd5.webp',
    title: 'Domo for Snowflake',
    description:
      "Domo empowers business users to access real-time insights from anywhere. Domo's low-code custom app capabilities mean users can seamlessly act on Snowflake data.",
    link: 'https://www.domo.com/partners/snowflake',
  },
];

export default function Solutions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Duplicate items for seamless looping
  const marqueeSolutions = [...solutionsData, ...solutionsData, ...solutionsData, ...solutionsData];

  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Card settings
  const cardWidth = 380; // Fixed width for desktop
  const gap = 24;

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId;

    const scroll = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += 1; // Speed

        // Reset scroll position for infinite loop effect
        // When we've scrolled halfway (since we triplicated/quadruplicated content)
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          // Providing a smoother reset might need exact calculation, but this is the MeetPeople logic
          // If the visual jump is too noticeable, we adjust the reset point.
          // For now, adhering strictly to the reference logic:
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
    <section className='w-full py-16 lg:py-24 bg-white overflow-hidden'>
      {/* Header */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12'>
        <div className='text-center'>
          <h2 className='text-[32px] md:text-[40px] font-semibold text-[#303030]'>
            Solutions of Domo
          </h2>
        </div>
      </div>

      {/* Scroll Container */}
      <div className='relative w-full'>
        <div
          ref={scrollContainerRef}
          className='flex gap-6 overflow-x-hidden pb-8 no-scrollbar'
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ whiteSpace: 'nowrap' }}
        >
          {marqueeSolutions.map((card, index) => {
            // Unique key for duplicated items
            const key = `${card.title}-${index}`;
            const imgSrc = card.image;

            return (
              <div
                key={key}
                className='flex-shrink-0 w-[300px] md:w-[380px] inline-block align-top whitespace-normal'
              >
                <div className='bg-white rounded-3xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 h-full border border-gray-100 group'>
                  {/* Card Image */}
                  <div className='relative w-full h-[220px] overflow-hidden p-4'>
                    <div className='relative w-full h-full rounded-2xl overflow-hidden'>
                      <div className='absolute inset-0 bg-gray-100 animate-pulse'></div>
                      <Image
                        src={imgSrc}
                        alt={card.title}
                        fill
                        className='object-cover transition-transform duration-500 group-hover:scale-110'
                        onError={e => {
                          e.currentTarget.src = '/images/placeholder.png';
                        }}
                      />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className='px-6 pb-8 pt-2'>
                    <h4 className='text-[#303030] font-bold text-[18px] mb-3 leading-tight'>
                      {card.title}
                    </h4>
                    <p className='text-[#606060] text-[14px] leading-relaxed mb-6 line-clamp-3'>
                      {card.description}
                    </p>

                    <Link
                      href={card.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 text-[#8B3DA8] font-semibold text-[15px] hover:gap-3 transition-all'
                    >
                      Learn more
                      <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Navigation Buttons */}
        <div className='flex justify-center items-center gap-4 mt-8'>
          <button
            onClick={handlePrev}
            className='w-12 h-12 rounded-full border border-gray-200 hover:bg-gray-50 flex items-center justify-center text-gray-600 transition-colors shadow-sm'
            aria-label='Previous'
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className='w-12 h-12 rounded-full bg-[#8B3DA8] border border-[#8B3DA8] flex items-center justify-center text-white hover:bg-[#8B3DA8] transition-colors shadow-lg shadow-purple-200'
            aria-label='Next'
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

'use client';
import { domoData } from '@/data/partners/domo';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function DomoDashboard() {
  const dashboards = domoData.dashboardData;
  const marqueeDashboards = [...dashboards, ...dashboards, ...dashboards, ...dashboards];

  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Card settings matching Solutions.jsx
  const cardWidth = 380;
  const gap = 24;

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId;

    const scroll = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += 1;
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
    <section className='py-20  overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Header Row */}
        <div className='flex items-center justify-between gap-4 mb-16 w-full'>
          {/* Sparkle Icon */}
          <div className='w-12 h-12 bg-white border border-purple-100 rounded-xl shadow-sm flex items-center justify-center p-2 shrink-0'>
            <Image
              src='/images/partners/domo/sparkss.svg'
              alt='Sparkle'
              width={24}
              height={24}
              className='w-6 h-6'
            />
          </div>

          {/* Dotted Line */}
          <div className='flex-1 h-[2px] bg-[linear-gradient(to_right,#A0A0A0_50%,rgba(0,0,0,0)_0%)] bg-[length:10px_2px] bg-repeat-x opacity-30'></div>

          {/* CTA Button */}
          <Link
            href='/contact'
            className='group inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#9156AA] text-[#6F2B8B] font-medium hover:bg-purple-50 transition-colors duration-300 shrink-0'
          >
            Talk to Our Experts
            <FiArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
          </Link>
        </div>

        {/* Title Section */}
        <div className='flex flex-col lg:flex-row justify-between items-start gap-12 mb-20'>
          <h2 className='text-[32px] md:text-[40px] font-medium text-[#404040]'>
            Powerful Domo Dashboards
          </h2>
          <p className='text-[#404040] text-[16px] leading-[24px] max-w-xl lg:text-right'>
            Explore our collection of interactive dashboards designed to transform your data into
            actionable insights. From business intelligence to operational analytics, Domo delivers
            powerful visualization tools.
          </p>
        </div>
      </div>

      {/* Marquee Scroll Container - Full Width */}
      <div className='relative w-full'>
        <div
          ref={scrollContainerRef}
          className='flex gap-6 overflow-x-hidden pb-8 no-scrollbar'
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ whiteSpace: 'nowrap' }}
        >
          {marqueeDashboards.map((dashboard, index) => (
            <div
              key={`${dashboard.title}-${index}`}
              className='flex-shrink-0 w-[300px] md:w-[380px] inline-block align-top whitespace-normal'
            >
              <div className='bg-white rounded-3xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 h-full border border-gray-100 group'>
                {/* Card Image */}
                <div className='relative w-full h-[220px] overflow-hidden p-4'>
                  <div className='relative w-full h-full rounded-2xl overflow-hidden'>
                    <div className='absolute inset-0 bg-gray-100 animate-pulse'></div>
                    <Image
                      src={dashboard.src}
                      alt={dashboard.title}
                      fill
                      className='object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className='px-6 pb-8 pt-2'>
                  <h4 className='text-[#303030] font-bold text-[18px] mb-3 leading-tight'>
                    {dashboard.title}
                  </h4>
                  <p className='text-[#606060] text-[14px] leading-relaxed mb-6 line-clamp-3'>
                    {dashboard.description}
                  </p>

                  <Link
                    href='#'
                    className='inline-flex items-center gap-2 text-[#8B3DA8] font-semibold text-[15px] hover:gap-3 transition-all'
                  >
                    Learn more
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons Row - Constrained back to max-w-7xl */}
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex justify-center items-center gap-4 mt-8'>
            <button
              onClick={handlePrev}
              className='w-12 h-12 rounded-full border border-gray-200 hover:bg-gray-50 flex items-center justify-center text-gray-600 transition-colors shadow-sm bg-white'
              aria-label='Previous'
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className='w-12 h-12 rounded-full bg-[#8B3DA8] border border-[#8B3DA8] flex items-center justify-center text-white hover:bg-[#7A35C2] transition-colors shadow-lg shadow-purple-200'
              aria-label='Next'
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

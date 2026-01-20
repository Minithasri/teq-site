'use client';

import { domoData } from '@/data/partners/domo';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function DomoFeatures() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const timelineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const features = domoData.featureList;

  /* ---------- GSAP TIMELINE ---------- */
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top-=100px',
          end: `+=${features.length * 60}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: self => {
            const index = Math.min(
              features.length - 1,
              Math.floor(self.progress * features.length)
            );
            setActiveIndex(index);
          },
        },
      });

      tl.to({}, { duration: 0.5 }); // Lock first card

      cardRefs.current.forEach((card, i) => {
        gsap.set(card, {
          opacity: i === 0 ? 1 : 0,
          scale: i === 0 ? 1 : 0.96,
          y: i === 0 ? 0 : 120,
          pointerEvents: i === 0 ? 'auto' : 'none',
        });

        if (i > 0) {
          tl.to(cardRefs.current[i - 1], {
            opacity: 0,
            scale: 0.96,
            y: -20,
            pointerEvents: 'none',
            duration: 1,
            ease: 'power2.out',
          });

          tl.to(
            card,
            {
              opacity: 1,
              scale: 1,
              y: 0,
              pointerEvents: 'auto',
              duration: 1,
              ease: 'power3.out',
            },
            '<'
          );
        }
      });

      timelineRef.current = tl;
    }, sectionRef);

    return () => ctx.revert();
  }, [features.length]);

  /* ---------- TAB CLICK ---------- */
  const onTabClick = index => {
    if (!timelineRef.current) return;
    const tl = timelineRef.current;

    // Calculate progress to scroll to
    // We map index 0..n to progress 0..1
    const progress = index / (features.length - 1 || 1);

    // Calculate standard scroll distance
    const totalScroll = tl.scrollTrigger.end - tl.scrollTrigger.start;
    const targetScroll = tl.scrollTrigger.start + progress * totalScroll;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  };

  return (
    <section ref={sectionRef} className='relative min-h-screen bg-white py-2 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col'>
        {/* Header - Sparkle & CTA */}
        <div className='flex items-center justify-between gap-4  mb-8 w-full'>
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
        <div className='flex flex-col lg:flex-row justify-between items-start gap-12 mb-8'>
          <h2 className='text-[32px] md:text-[40px] font-bold text-[#1F1F1F]'>Features of Domo</h2>
          <p className='text-gray-500 text-[15px] leading-relaxed max-w-xl lg:text-right'>
            With over 1,000 pre built connectors, Domo enables fast data integration without complex
            engineering, empowering teams to analyze data and make smarter decisions with ease.
          </p>
        </div>

        {/* Tabs - Centered flex pills to match reference image 6-2 split */}
        <div className='hidden lg:block max-w-7xl mx-auto px-4 md:px-6 lg:px-12 xl:px-16 mb-4'>
          <div className='flex flex-wrap justify-center gap-3'>
            {features.map((feature, i) => (
              <button
                key={i}
                onClick={() => onTabClick(i)}
                className={`flex items-center justify-center px-4 py-4 rounded-full border text-xs font-semibold transition text-center leading-tight min-h-[60px]
                  ${
                    i === activeIndex
                      ? 'bg-[#FBF4FE] border-[#9156AA] text-[#6F2B8B]'
                      : 'bg-white border-gray-300 text-gray-500 hover:border-purple-300'
                  }`}
              >
                {feature.title}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Container */}
        <div className='relative w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-12 xl:px-24 h-[650px] md:h-[480px] lg:h-[440px] mb-8'>
          {features.map((feature, i) => (
            <div key={i} ref={el => (cardRefs.current[i] = el)} className='absolute inset-0 w-full'>
              <div className='bg-white rounded-3xl border-2 border-[#E9D5FF] shadow-xl p-6 md:p-10 h-full overflow-hidden'>
                <div className='flex flex-col lg:flex-row items-center gap-6 lg:gap-12 h-full'>
                  {/* Left Content */}
                  <div className='w-full lg:w-1/2 space-y-4 lg:space-y-8'>
                    {/* Badge */}
                    <div className='inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#E9D5FF]'>
                      <Image
                        src='/images/partners/domo/sparkss.svg'
                        alt='icon'
                        width={20}
                        height={20}
                      />
                      <span className='text-[#6F2B8B] font-bold text-[18px]'>{feature.title}</span>
                    </div>

                    <h3 className='text-[20px] md:text-[24px] font-bold text-[#1F1F1F] leading-tight'>
                      {feature.title}
                    </h3>

                    <ul className='space-y-4'>
                      {/* Splitting description into sentences to mimic bullets if only string is available */}
                      {feature.description
                        .split('. ')
                        .filter(Boolean)
                        .map((sent, idx) => (
                          <li key={idx} className='flex items-start gap-3'>
                            <span className='mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0' />
                            <span className='text-gray-600 text-[16px] leading-relaxed'>
                              {sent.endsWith('.') ? sent : `${sent}.`}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Right Image */}
                  <div className='w-full lg:w-1/2 relative h-[200px] sm:h-[250px] lg:h-full rounded-2xl overflow-hidden border-2 border-gray-100 flex-shrink-0'>
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className='object-cover object-center'
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

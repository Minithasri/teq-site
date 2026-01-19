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
          start: 'top top-=80', // Start pinning when top of section is 80px from top of viewport
          end: `+=${features.length * 60}%`, // Scroll duration
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: self => {
            // Sync active tab with scroll progress
            const index = Math.min(
              features.length - 1,
              Math.floor(self.progress * features.length)
            );
            setActiveIndex(index);
          },
        },
      });

      tl.to({}, { duration: 0.1 }); // Tiny delay to stabilize

      cardRefs.current.forEach((card, i) => {
        // Initial state
        gsap.set(card, {
          opacity: i === 0 ? 1 : 0,
          scale: i === 0 ? 1 : 0.95,
          y: i === 0 ? 0 : 50,
          pointerEvents: i === 0 ? 'auto' : 'none',
          zIndex: features.length - i,
        });

        if (i > 0) {
          // Animate previous card out
          tl.to(cardRefs.current[i - 1], {
            opacity: 0,
            scale: 0.95,
            y: -20,
            pointerEvents: 'none',
            duration: 1,
            ease: 'power2.out',
          });

          // Animate current card in
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
            '<' // Start at same time as previous animation
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
        <div className='flex items-center justify-between gap-4 mb-8 w-full'>
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

        {/* Tabs - Centered Pills */}
        <div className='hidden lg:flex flex-wrap justify-center gap-4 mb-4 max-w-6xl mx-auto'>
          {features.map((feature, i) => (
            <button
              key={i}
              onClick={() => onTabClick(i)}
              className={`px-6 py-3 rounded-full text-xs font-semibold border transition-all duration-300 ${
                i === activeIndex
                  ? 'border-[#9156AA] text-[#6F2B8B] bg-[#FBF4FE] shadow-sm'
                  : 'border-gray-200 text-gray-500 hover:border-purple-200 bg-white'
              }`}
            >
              {feature.title}
            </button>
          ))}
        </div>

        {/* Cards Container */}
        <div className='relative w-full max-w-6xl mx-auto min-h-[450px]'>
          {features.map((feature, i) => (
            <div key={i} ref={el => (cardRefs.current[i] = el)} className='absolute inset-0 w-full'>
              <div className='bg-white rounded-[16px] border border-[#E5E5E5] shadow-[0px_4px_24px_#D2D0E111] p-6 md:p-12 h-full'>
                <div className='flex flex-col lg:flex-row items-center gap-12 h-full'>
                  {/* Left Content */}
                  <div className='w-full lg:w-1/2 space-y-8'>
                    {/* Badge */}
                    <div className='inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#E9D5FF] bg-[#FBF4FE]'>
                      <Image
                        src='/images/partners/domo/sparkss.svg'
                        alt='icon'
                        width={16}
                        height={16}
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
                  <div className='w-full lg:w-1/2 relative h-[250px] lg:h-[350px] rounded-2xl overflow-hidden'>
                    <Image src={feature.image} alt={feature.title} fill className='object-cover' />
                    {/* Optional Overlay Gradient from image */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
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

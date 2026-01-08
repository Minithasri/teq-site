'use client';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger, Flip);

const AIMatters = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);
  const gradientRef = useRef(null);
  const progressBarRef = useRef(null);

  const features = [
    {
      title: 'Complete Agent Lifecycle Hub',
      desc: 'A flexible, modular platform that lets you design, run, monitor, and manage agents end-to-end, all in one place, without dealing with complex integrations or scattered tools.',
      image: '/images/HomePage/home11.png',
    },
    {
      title: 'Ready-Made Blueprints for Rapid Builds',
      desc: 'Unlock a private collection of pre-built agent blueprints to speed up development dramatically. Cut your initial build effort by nearly 70% and move from idea to launch in just weeks.',
      image: '/images/HomePage/home2.png',
    },
    {
      title: 'Total Control of Your Data & IP',
      desc: 'Built on an open, transparent, and secure foundation. Your data is never used for training, and every agent you create remains completely and exclusively your own intellectual property.',
      image: '/images/HomePage/home3.png',
    },
    {
      title: 'Designed for Enterprise Scale & Security',
      desc: 'Deploy in your preferred environment cloud or on-prem with full model flexibility. Comes equipped with enterprise safeguards like SSO, RBAC, auditing, and built-in Human in the Loop controls.',
      image: '/images/HomePage/home4.png',
    },
  ];

  /*
     GSAP Logic for DESKTOP Scroll
     We wrap this in matchMedia so it only runs on desktop (min-width: 1024px)
  */
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      // ScrollTrigger for activeIndex
      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top -8%',
        end: `+=${features.length * 40}%`,
        pin: true,
        scrub: 0.5,
        onUpdate: self => {
          const progress = self.progress;
          const newIdx = Math.min(Math.floor(progress * features.length), features.length - 1);
          setActiveIndex(newIdx);
        },
      });
      return () => st.kill();
    });

    return () => mm.revert();
  }, [features.length]);

  // FLIP Effect (Desktop Only)
  useEffect(() => {
    // Only run if elements exist (meaning we are on desktop logic)
    if (!progressBarRef.current || !gradientRef.current || !itemRefs.current[activeIndex]) return;

    const state = Flip.getState(gradientRef.current);
    const targetEl = itemRefs.current[activeIndex];
    const barRect = progressBarRef.current.getBoundingClientRect();
    const rect = targetEl.getBoundingClientRect();

    // Calculate new position
    const newHeight = rect.height;
    const newY = rect.top - barRect.top;

    // Apply new position immediately before flip
    gradientRef.current.style.height = `${newHeight}px`;
    gradientRef.current.style.transform = `translateY(${newY}px)`;

    // Animate
    Flip.from(state, {
      duration: 0.45,
      ease: 'power2.out',
    });
  }, [activeIndex]);

  return (
    <div
      ref={sectionRef}
      className='flex items-center justify-center relative w-full mt-[-100px] lg:mt-[-200px] px-0 lg:px-10'
    >
      <div className='bg-gradient-to-br from-[#7030B1] to-[#A545CC] relative overflow-hidden w-full min-h-[500px] lg:min-h-[450px] rounded-none lg:rounded-[25px]'>
        <div className="absolute inset-0 bg-[url('/images/AIMatters.jpg')] bg-cover bg-center opacity-40" />

        <div className='relative z-20 mx-auto h-full w-full p-6 sm:p-10 lg:p-[100px]'>
          {/* HEADER */}
          <div className='flex flex-col gap-10'>
            {/* Top Row: Icon ... Button */}
            <header className='hidden md:flex md:flex-row items-center justify-between w-full gap-2 md:gap-2 lg:gap-2'>
              {/* Icon */}
              <div className='bg-white rounded-xl w-14 h-14 flex items-center justify-center shadow-lg p-3 shrink-0'>
                <Image src='/images/Spark.svg' alt='Spark' width={40} height={40} />
              </div>

              {/* Connector (White Dotted Line) */}
              {/* Connector */}
              <div
                aria-hidden
                className='flex-1 h-[2px] bg-[linear-gradient(to_right,#FFFFFF_30%,rgba(0,0,0,0)_0%)] bg-[length:6px_2px] bg-repeat-x'
              />

              {/* Button */}
              <Link
                href='/contact'
                className='border-2 border-white/85 rounded-full bg-transparent text-white font-medium cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 px-8 py-3 shrink-0 hover:bg-white hover:text-[#7030B1] whitespace-nowrap'
              >
                Talk to our expert <FiArrowRight size={18} />
              </Link>
            </header>

            {/* Title Text */}
            <div className='flex flex-col lg:flex-row items-center text-center lg:items-start lg:text-left gap-6 lg:gap-8'>
              <h2 className='text-white font-semibold text-2xl lg:text-4xl flex-1 lg:leading-[52px]'>
                Why GWC? Your
                <br className='hidden lg:block' /> enterprise AI advantage.
              </h2>
              <p className='text-white opacity-95 text-sm lg:text-base flex-1 max-w-[580px]'>
                Agentic AI is the next evolution of automation intelligent agents that observe,
                reason, and act with minimal human input.
              </p>
            </div>
          </div>

          {/* =======================
                DESKTOP CONTENT (Tabs/Grid)
               ======================= */}
          <div className='hidden lg:flex flex-row gap-8 mt-12'>
            {/* List */}
            <div className='flex flex-row gap-6 flex-1'>
              {/* Progress Bar Track */}
              <div
                ref={progressBarRef}
                className='relative w-[6px] bg-white rounded-full overflow-hidden z-[40]'
              >
                {/* Moving Gradient */}
                <div
                  ref={gradientRef}
                  className='absolute left-0 w-full rounded-full z-[50] bg-gradient-to-b from-[#7030B1] to-[#B56DD3]'
                  style={{ height: '60px' }}
                />
              </div>
              {/* Items */}
              <div className='flex-1'>
                {features.map((item, index) => (
                  <div
                    key={index}
                    ref={el => (itemRefs.current[index] = el)}
                    className={`cursor-pointer py-5 transition-all duration-300 ${index < features.length - 1 ? 'border-b border-white/15' : ''}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <h3
                      className={`text-white text-lg transition-all ${activeIndex === index ? 'font-bold opacity-100' : 'font-medium opacity-90'}`}
                    >
                      {item.title}
                    </h3>
                    {activeIndex === index && (
                      <p className='text-white/90 mt-4 leading-relaxed animate-fadeIn'>
                        {item.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Right Image */}
            {/* Right Image */}
            <div className='flex-[1.2] flex justify-end items-start'>
              <div className='relative z-[10] w-[580px] h-[350px] rounded-[16px] overflow-hidden bg-white/5'>
                <Image
                  src={features[activeIndex].image}
                  alt={features[activeIndex].title}
                  fill
                  className='object-cover'
                  priority
                />
              </div>
            </div>
          </div>

          {/* =======================
                MOBILE CONTENT (Stack)
               ======================= */}
          <div className='lg:hidden flex flex-col gap-6 mt-12'>
            {features.map((item, index) => (
              <div
                key={index}
                className='bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors'
              >
                <div className='relative h-[180px] w-full mb-6'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className='object-contain object-center'
                  />
                </div>
                <h3 className='text-xl font-bold text-white mb-3 leading-tight'>{item.title}</h3>
                <p className='text-white/90 text-sm leading-relaxed'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.45s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AIMatters;

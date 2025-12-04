'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(ScrollTrigger, Flip);

const AIMatters = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const scrollTriggerRef = useRef(null);
  const itemRefs = useRef([]);
  const gradientRef = useRef(null);
  const progressBarRef = useRef(null);

  const features = [
    {
      title: 'Complete Agent Lifecycle Hub',
      desc: 'A flexible, modular platform that lets you design, run, monitor, and manage agents end-to-end — all in one place, without dealing with complex integrations or scattered tools.',
      image: '/images/LifecycleHub.svg',
    },
    {
      title: 'Ready-Made Blueprints for Rapid Builds',
      desc: 'Unlock a private collection of pre-built agent blueprints to speed up development dramatically. Cut your initial build effort by nearly 70% and move from idea to launch in just weeks.',
      image: '/images/RapidBuilds.svg',
    },
    {
      title: 'Total Control of Your Data & IP',
      desc: 'Built on an open, transparent, and secure foundation. Your data is never used for training, and every agent you create remains completely and exclusively your own intellectual property.',
      image: '/images/DataAndIP.svg',
    },
    {
      title: 'Designed for Enterprise Scale & Security',
      desc: 'Deploy in your preferred environment — cloud or on-prem — with full model flexibility. Comes equipped with enterprise safeguards like SSO, RBAC, auditing, and built-in Human-in-the-Loop controls.',
      image: '/images/ScaleAndSecurity.svg',
    },
  ];

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll trigger driving activeIndex
  useEffect(() => {
    if (!sectionRef.current || isMobile) return;

    if (scrollTriggerRef.current) scrollTriggerRef.current.kill();

    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 10%',
      end: `+=${features.length * 100}%`,
      pin: true,
      scrub: 1,
      onUpdate: self => {
        const newIdx = Math.min(Math.floor(self.progress * features.length), features.length - 1);
        setActiveIndex(newIdx);
      },
    });

    return () => scrollTriggerRef.current && scrollTriggerRef.current.kill();
  }, [features.length, isMobile]);

  // GSAP FLIP animation controlling gradient height + sliding movement
  useEffect(() => {
    if (!itemRefs.current[activeIndex] || !gradientRef.current) return;

    const state = Flip.getState(gradientRef.current);

    const targetEl = itemRefs.current[activeIndex];
    const barRect = progressBarRef.current.getBoundingClientRect();
    const rect = targetEl.getBoundingClientRect();

    const newHeight = rect.height;
    const newY = rect.top - barRect.top;

    gradientRef.current.style.height = `${newHeight}px`;
    gradientRef.current.style.transform = `translateY(${newY}px)`;

    Flip.from(state, {
      duration: 0.45,
      ease: 'power2.out',
    });
  }, [activeIndex]);

  return (
    <div
      ref={sectionRef}
      className='flex items-center justify-center relative w-full'
      style={{
        marginTop: isMobile ? '-100px' : '-200px',
        paddingLeft: isMobile ? '0px' : '40px',
        paddingRight: isMobile ? '0px' : '40px',
      }}
    >
      <div
        className={`bg-gradient-to-br from-[#7030B1] to-[#A545CC] relative overflow-hidden w-full ${
          isMobile ? 'min-h-[500px] rounded-none' : 'min-h-[450px] rounded-[25px]'
        }`}
      >
        <div className="absolute inset-0 bg-[url('/images/AIMatters.jpg')] bg-cover bg-center opacity-40" />

        <div className='relative z-20 mx-auto h-full w-full'>
          <div className={`${isMobile ? 'p-4' : 'p-[100px]'}`}>
            {/* header + summary unchanged */}
            <div className='flex flex-col gap-10'>
              <div
                className={`flex ${
                  isMobile ? 'flex-col items-center gap-5' : 'flex-row items-center justify-between'
                } w-full relative`}
              >
                <div
                  className={`bg-white rounded-xl ${
                    isMobile ? 'w-10 h-10' : 'w-14 h-14'
                  } flex items-center justify-center shadow-lg p-2`}
                >
                  <Image src='/images/Spark.svg' alt='Spark' width={40} height={40} />
                </div>

                {!isMobile && (
                  <div className='flex-1 border-t-2 border-dashed border-white/60 absolute left-[calc(3.5rem+15px)] right-[calc(16rem+15px)] top-1/2 -translate-y-1/2' />
                )}

                <button className='border-2 border-white/85 rounded-3xl bg-transparent text-white font-medium cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 px-6 h-12 text-base w-64 hover:bg-white hover:text-[#7030B1]'>
                  Talk to our expert <FiArrowRight size={18} />
                </button>
              </div>

              <div
                className={`flex ${
                  isMobile
                    ? 'flex-col items-center text-center gap-4'
                    : 'flex-row items-start gap-8'
                } w-full`}
              >
                <h2
                  className={`text-white font-semibold ${isMobile ? 'text-xl' : 'text-4xl'} flex-1 leading-tight`}
                >
                  Why GWC? Your
                  <br />
                  enterprise AI advantage.
                </h2>
                <p
                  className={`text-white opacity-95 ${isMobile ? 'text-sm' : 'text-base'} flex-1 max-w-[580px]`}
                >
                  Agentic AI is the next evolution of automation — intelligent agents that observe,
                  reason, and act with minimal human input.
                </p>
              </div>
            </div>

            {/* ===== Feature list + GSAP progress bar ===== */}
            <div className={`flex ${isMobile ? 'flex-col gap-6 mt-6' : 'flex-row gap-8 mt-6'}`}>
              <div className='flex flex-row gap-6 flex-1'>
                {/* Vertical bar track (z-index fix added) */}
                <div
                  ref={progressBarRef}
                  className='relative w-[6px] bg-white rounded-full overflow-hidden z-[40]'
                >
                  {/* Moving gradient block (z-index fix added) */}
                  <div
                    ref={gradientRef}
                    className='absolute left-0 w-full rounded-full z-[50]'
                    style={{
                      background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                      height: '60px',
                    }}
                  />
                </div>

                {/* Feature list */}
                <div className='flex-1'>
                  {features.map((item, index) => (
                    <div
                      key={index}
                      ref={el => (itemRefs.current[index] = el)}
                      className={`cursor-pointer py-5 transition-all duration-300 ${
                        index < features.length - 1 ? 'border-b border-white/15' : ''
                      }`}
                      onClick={() => setActiveIndex(index)}
                    >
                      <h3
                        className={`text-white text-lg transition-all ${
                          activeIndex === index
                            ? 'font-semibold opacity-100'
                            : 'font-medium opacity-90'
                        }`}
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

              {/* right image */}
              <div className={`${isMobile ? 'w-full' : 'flex-[1.2]'} flex justify-end items-start`}>
                <div
                  className={`relative z-[10] ${isMobile ? 'w-full h-[250px]' : 'w-full h-[350px]'}`}
                >
                  <Image
                    src={features[activeIndex].image}
                    alt={features[activeIndex].title}
                    fill
                    className='object-contain object-right rounded-2xl'
                  />
                </div>
              </div>
            </div>
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

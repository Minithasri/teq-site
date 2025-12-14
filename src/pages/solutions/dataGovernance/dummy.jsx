import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Dummy = () => {
  const wrapperRef = useRef(null);
  const accordionsRef = useRef(null);
  const accordionRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: accordionsRef.current,
          pin: true,
          start: 'top-=100 top', // 👈 matches 50px padding
          end: 'bottom top',
          scrub: 1,
        },
      });

      tl.to('.accordion-text', {
        height: 0,
        paddingBottom: 0,
        opacity: 0,
        stagger: 0.5,
      });

      tl.to(
        '.accordion-item',
        {
          marginBottom: -15,
          stagger: 0.5,
        },
        '<'
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const accordions = [
    {
      title: 'All-screen design.',
      text: 'Lets you immerse yourself in whatever you',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Beauty all around.',
      text: 'The breakthrough M1 chip is now in Air. An 8-core CPU delivers up to 60 percent faster performance than the previous generation.',
      gradient: 'from-red-400 to-pink-600',
    },
    {
      title: 'Take Center Stage.',
      text: 'The 12MP Ultra Wide front camera enables Center Stage, making video calls more natural and content creation more fun.',
      gradient: 'from-green-400 to-blue-600',
    },
    {
      title: 'Pretty everywhere.',
      text: 'Join superfast 5G wireless networks when you',
      gradient: 'from-purple-600 to-purple-800',
    },
  ];

  return (
    <div ref={wrapperRef} className='pt-[100px] overflow-x-hidden'>
      <div ref={accordionsRef} className='flex flex-col items-center pb-32'>
        {accordions.map((accordion, index) => (
          <div
            key={index}
            ref={el => (accordionRefs.current[index] = el)}
            className={`accordion-item w-11/12 max-w-2xl min-w-[280px] p-6 sm:p-8 rounded-2xl mb-10 shadow-2xl bg-gradient-to-br ${accordion.gradient}`}
            style={{
              boxShadow: '0 30px 30px -10px rgba(0, 0, 0, 0.3)',
            }}
          >
            <h2 className='text-2xl sm:text-3xl lg:text-4xl leading-tight pb-2 text-white'>
              {accordion.title}
            </h2>
            <p className='accordion-text text-base sm:text-lg leading-relaxed pb-5 text-white/70 overflow-hidden'>
              {accordion.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dummy;

'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const timelineData = [
  {
    label: '2026',
    title: 'GWC Data.AI joins the Anthropic Claude Partner Network.',
    description:
      'Formal partnership announced, with over 160 team members completing Claude Certified Architect (Foundations) certification.',
  },
  {
    label: 'Now',
    title: 'First Claude native builds underway',
    description:
      'Our team is extending its existing agentic AI portfolio into Claude-native projects across early client engagements.',
  },
  {
    label: 'Ongoing',
    title: 'Certification bench growing',
    description:
      "More of our engineering and advisory team are completing Anthropic's Partner Academy certifications each month.",
  },
];

export default function ClaudeTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);

  // Wheel scroll hijack
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = e => {
      const rect = section.getBoundingClientRect();
      const visible =
        rect.top <= window.innerHeight * 0.1 && rect.bottom >= window.innerHeight * 0.9;
      if (!visible) return;
      if (e.deltaY > 0 && activeIndex >= timelineData.length - 1) return;
      if (e.deltaY < 0 && activeIndex <= 0) return;

      e.preventDefault();
      if (isAnimating) return;
      if (Math.abs(e.deltaY) < 4) return;

      setIsAnimating(true);
      if (e.deltaY > 0) setActiveIndex(p => Math.min(p + 1, timelineData.length - 1));
      else setActiveIndex(p => Math.max(p - 1, 0));
      setTimeout(() => setIsAnimating(false), 800);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeIndex, isAnimating]);

  // Touch scroll
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let startY = 0;

    const onStart = e => {
      startY = e.touches[0].clientY;
    };
    const onMove = e => {
      const rect = section.getBoundingClientRect();
      const visible =
        rect.top <= window.innerHeight * 0.1 && rect.bottom >= window.innerHeight * 0.9;
      if (!visible) return;
      const dy = startY - e.touches[0].clientY;
      if (dy > 0 && activeIndex >= timelineData.length - 1) return;
      if (dy < 0 && activeIndex <= 0) return;
      e.preventDefault();
      if (isAnimating) return;
      if (Math.abs(dy) > 50) {
        setIsAnimating(true);
        if (dy > 0) setActiveIndex(p => Math.min(p + 1, timelineData.length - 1));
        else setActiveIndex(p => Math.max(p - 1, 0));
        startY = e.touches[0].clientY;
        setTimeout(() => setIsAnimating(false), 800);
      }
    };

    section.addEventListener('touchstart', onStart, { passive: true });
    section.addEventListener('touchmove', onMove, { passive: false });
    return () => {
      section.removeEventListener('touchstart', onStart);
      section.removeEventListener('touchmove', onMove);
    };
  }, [activeIndex, isAnimating]);

  // Combine placeholder past-years with real timeline labels into one ordered list
  const fullLabelList = ['2024', '2025', ...timelineData.map(t => t.label)];

  // Fixed visual slots (position/size/opacity never change — only the label shown in each does)
  const labelSlots = [
    { top: '30%', left: '18%', fontSize: '32px', className: 'text-white/10 font-normal' },
    { top: '40%', left: '13%', fontSize: '36px', className: 'text-white/20 font-normal' },
    { top: '51%', left: '10%', fontSize: '40px', className: 'text-white font-semibold' },
    { top: '60%', left: '13%', fontSize: '36px', className: 'text-white/45 font-normal' },
    { top: '70%', left: '16%', fontSize: '32px', className: 'text-white/30 font-normal' },
  ];

  // Mobile layout visual slots (arranged as a curved arch bulging upwards)
  const mobileLabelSlots = [
    { bottom: '210px', left: '10%', className: 'text-white/10 font-normal text-xs' },
    { bottom: '160px', left: '25%', className: 'text-white/20 font-normal text-sm' },
    { bottom: '110px', left: '50%', className: 'text-white font-semibold text-lg' },
    { bottom: '160px', left: '75%', className: 'text-white/45 font-normal text-sm' },
    { bottom: '210px', left: '90%', className: 'text-white/30 font-normal text-xs' },
  ];

  return (
    <section
      ref={sectionRef}
      className='relative overflow-hidden bg-[#FBF1EE] min-h-screen flex items-center justify-center'
    >
      {/* ── Background arc (large orange circle outline) ── */}
      <div className='hidden xl:block absolute pointer-events-none rounded-full border border-[#D97757] top-1/2 -translate-y-1/2 w-[1150px] h-[1150px] right-[-180px]' />

      {/* ═══════ DESKTOP LAYOUT (xl+) ═══════ */}
      <div className='hidden xl:flex relative z-10 w-full max-w-9xl mx-auto px-6 flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:px-[60px] lg:gap-0'>
        {/* ═══════ LEFT SIDE ═══════ */}
        <div className='relative z-20 w-full shrink-0 lg:w-[45%]'>
          {/* Heading — "Where the Claude Practice stands today." */}
          <h2
            className='text-[32px] mt-10 font-light leading-[125%] text-[#3b3b3b] md:text-[42px]'
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Where the{' '}
            <span className='inline-block font-bold italic bg-gradient-to-r from-[#6F2B8B] to-[#ED7200] bg-clip-text text-transparent pr-2'>
              Claude
            </span>
            <span className='block font-bold italic bg-gradient-to-r from-[#6F2B8B] to-[#ED7200] bg-clip-text text-transparent pr-2'>
              Practice stands today.
            </span>
          </h2>

          {/* Card — tighter spacing */}
          <div className='relative mt-4 max-w-[375px] md:mt-6 md:max-w-[415px] h-[300px] md:h-[260px]'>
            {timelineData.map((item, idx) => {
              const isActive = idx === activeIndex;
              const isPast = idx < activeIndex;

              return (
                <motion.div
                  key={idx}
                  initial={false}
                  animate={{
                    y: isActive ? 0 : isPast ? -80 : 100,
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 0.96,
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1], // easeOutExpo
                  }}
                  className='absolute inset-0 w-full h-full'
                >
                  <div className='relative w-full overflow-visible'>
                    {/* Orange connector dot */}
                    {isActive && (
                      <div className='absolute right-[-22px] top-1/2 -z-10 hidden xl:block'>
                        {/* Dot */}
                        <div className='relative h-12 w-12 rounded-full bg-[#E17B45]'>
                          {/* Line */}
                          <div
                            className='absolute left-full top-1/2 h-[2px] bg-gradient-to-r from-[#ED7200] via-[#F57C00] to-[#6F2B8B]'
                            style={{ width: '322px' }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Outer Gradient Card */}
                    <div
                      className='relative z-10 overflow-hidden rounded-[20px] shadow-[0_16px_40px_rgba(0,0,0,0.08)]'
                      style={{
                        background: 'linear-gradient(90deg,#7C2BA8 0%,#C94D55 55%,#F57C00 100%)',
                      }}
                    >
                      {/* Header */}
                      <div className='flex h-[52px] items-center justify-center'>
                        <h2 className='text-[24px] font-bold text-white md:text-[28px]'>
                          {item.label}
                        </h2>
                      </div>

                      {/* White Body */}
                      <div className='mx-[2px] mb-[2px] rounded-[18px] bg-white px-3 py-6'>
                        <h3 className='text-lg md:text-xl font-bold leading-[1.45] bg-gradient-to-r from-[#6F2B8B] to-[#ED7200] bg-clip-text text-transparent'>
                          {item.title}
                        </h3>

                        <p className='mt-3 text-sm md:text-base leading-6 text-[#6D6D6D]'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button ── */}
          <div className='mt-4 md:mt-6'>
            <button className='group inline-flex items-center gap-2.5 py-3 px-[26px] text-sm font-semibold text-white bg-gradient-to-b from-[#7030B1] to-[#B56DD3] rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97] md:py-3.5 md:px-8 md:text-[15px]'>
              <span>Talk to Our Experts</span>
              <span className='text-base transition-transform duration-[250ms] group-hover:translate-x-1'>
                <ArrowRight className='w-4 h-4' />
              </span>
            </button>
          </div>
        </div>

        {/* ═══════ CENTER – floating icons with connector lines ═══════ */}
        <div
          className='hidden xl:flex relative z-20 shrink-0 items-center justify-center'
          style={{ transform: 'translate(-80px, 40px)' }}
        >
          <div className='inline-flex flex-col items-center rounded-full bg-white overflow-hidden'>
            <div className='w-[90px] h-[90px] rounded-full overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.15)] relative z-10'>
              <img
                src='/images/partners/claude/gwc-circle.png'
                alt=''
                className='w-full h-full object-none'
              />
            </div>

            <div className='w-[90px] h-[90px] rounded-full overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.15)] relative z-10'>
              <img
                src='/images/partners/claude/claude-circle.png'
                alt=''
                className='w-full h-full object-none'
              />
            </div>
          </div>
        </div>

        {/* ═══════ RIGHT SIDE – purple half-circle ═══════ */}
        <div className='hidden xl:flex relative z-20 w-full h-[350px] items-center justify-end overflow-visible lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full'>
          <div className='relative w-[350px] h-[350px] rounded-full overflow-hidden ml-auto mr-[-60px] md:absolute md:right-[-380px] md:top-1/2 md:-translate-y-1/2 md:w-[1100px] md:h-[1100px] md:m-0'>
            {/* Purple fill */}
            <div className='absolute inset-0 rounded-full bg-[#3C1C5D]' />

            {/* Ellipse background overlay */}
            <img
              src='/images/partners/claude/Ellipse.png'
              alt=''
              className='absolute inset-0 w-full h-full object-cover rounded-full pointer-events-none right-[-60%]'
            />

            {/* Inner decorative ring */}
            <div className='absolute pointer-events-none rounded-full border border-[#D97757] top-1/2 -translate-y-1/2 w-[1150px] h-[1150px] right-[-340px]' />

            {/* Large background watermark image */}
            <img
              src='/images/partners/claude/anthropic-alf.png'
              alt=''
              className='absolute pointer-events-none object-contain opacity-40 right-[34%] top-[30%]'
            />

            {/* Timeline Labels */}
            <div className='absolute inset-0'>
              {labelSlots.map((slot, slotIndex) => {
                const labelIndex = slotIndex + activeIndex;
                const label = fullLabelList[labelIndex];
                if (!label) return null; // nothing to show past the last item

                return (
                  <span
                    key={`${slotIndex}-${labelIndex}`} // remount on change → triggers fade-in animation
                    className={`absolute whitespace-nowrap tracking-[0.4px] transition-all duration-700 ease-out ${slot.className}`}
                    style={{
                      top: slot.top,
                      left: slot.left,
                      fontSize: slot.fontSize,
                      animation: 'ctCardIn 0.7s cubic-bezier(0.4,0,0.2,1)',
                    }}
                  >
                    {label}
                  </span>
                );
              })}

              {/* Active Star — stays fixed at the "current" slot position (slot index 2) */}
              <div className='absolute' style={{ top: '53%', left: '3%' }}>
                <img
                  src='/images/partners/claude/antropic.svg'
                  alt='Starburst'
                  className='w-[38px] h-[38px] object-contain'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ MOBILE & MEDIUM SCREEN LAYOUT (< xl) ═══════ */}
      <div className='xl:hidden relative z-10 w-full flex flex-col items-center gap-6'>
        <div className='w-full bg-white text-center'>
          {/* Mobile Heading */}
          <div className='xl:hidden w-full bg-white mb-10'>
            <h2
              className='text-[24px] font-light leading-[125%] text-[#3B3B3B]'
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Where the{' '}
              <span className='inline-block font-bold italic bg-gradient-to-r from-[#6F2B8B] to-[#ED7200] bg-clip-text text-transparent pr-2'>
                Claude Practice
              </span>
              <span className='block font-bold italic bg-gradient-to-r from-[#6F2B8B] to-[#ED7200] bg-clip-text text-transparent pr-2'>
                stands today.
              </span>
            </h2>
          </div>
        </div>

        {/* Purple Header Wrapper */}
        <div className='w-full overflow-hidden flex justify-center -mt-6'>
          <div className=' relative overflow-hidden rounded-b-[65%] md:rounded-b-[50%] bg-[#3C1C5D] shadow-lg flex items-center justify-center -mt-[90px] w-[220vw] h-[620px] sm:w-[190vw] sm:h-[650px] md:w-[170vw] md:h-[700px] lg:w-[1500px] lg:h-[610px]'>
            <img
              src='/images/partners/claude/Ellipse.png'
              alt=''
              className='absolute inset-0 w-full h-full object-cover rotate-[-90deg] -left-[10%] top-[-10%] md:-left-[20%]'
            />
            {/* Watermark */}
            <img
              src='/images/partners/claude/anthropic-alf.png'
              alt=''
              className='absolute pointer-events-none object-contain top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90'
            />

            {/* Downward-curving arc */}
            <div className=' absolute rounded-full border-b border-[#D97757] w-[600px] h-[600px] md:w-[900px] md:h-[900px] lg:w-[1024px] lg:h-[1024px] left-1/2 -translate-x-1/2 top-[-210px] md:top-[-460px] lg:top-[-630px]' />

            {/* Timeline Labels */}
            <div className='absolute inset-0'>
              {mobileLabelSlots.map((slot, slotIndex) => {
                const labelIndex = slotIndex + activeIndex;
                const label = fullLabelList[labelIndex];

                if (!label) return null;

                return (
                  <span
                    key={`mobile-${slotIndex}-${labelIndex}`}
                    className={`absolute whitespace-nowrap tracking-[0.4px] transition-all duration-700 ease-out ${slot.className}`}
                    style={{
                      bottom: slot.bottom,
                      left: slot.left,
                      transform: 'translate(-50%, -50%)',
                      animation: 'ctCardIn 0.7s cubic-bezier(0.4,0,0.2,1)',
                    }}
                  >
                    {label}
                  </span>
                );
              })}

              {/* Active Icon */}
              <div className='absolute left-1/2 -translate-x-1/2' style={{ bottom: '40px' }}>
                <img src='/images/partners/claude/antropic.svg' alt='' className='w-10 h-10' />
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Line */}
        <div className='relative flex items-center justify-center w-full h-[280px] -mt-6 -mb-6'>
          {/* Vertical Line */}
          <div className='absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1.5px] bg-gradient-to-b from-[#401D5C] via-[#7B3DB6] to-[#ED7200]' />

          {/* Outer Logo Container */}
          <div className='shrink-0 flex items-center justify-center'>
            <div className='inline-flex items-center rounded-full bg-white p-[4px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.15)]'>
              {/* GWC */}
              <div className='w-[90px] h-[90px] rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.15)] overflow-hidden relative z-10'>
                <img
                  src='/images/partners/claude/gwc-circle.png'
                  alt=''
                  className='w-full h-full object-none'
                />
              </div>

              {/* Claude */}
              <div className='w-[90px] h-[90px] rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.15)] overflow-hidden relative z-10'>
                <img
                  src='/images/partners/claude/claude-circle.png'
                  alt=''
                  className='w-full h-full object-none'
                />
              </div>
            </div>
          </div>
        </div>

        {/* NEW — Full-bleed arc, CSS only (no SVG) */}
        {/* <div
          className="relative w-screen left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ transform: 'translate(-50%, -80px)' }}
        >
          <div
            className="
      absolute
      left-1/2
      -translate-x-1/2
      rounded-full
      border-b
      border-[#D97757]
      w-[2000px]
      h-[2000px]
    "
            style={{ top: '-1950px' }}
          />
        </div> */}

        {/* Cards */}
        <div className='relative w-full max-w-[375px] h-[260px]'>
          {/* Half Circle */}
          <div className='absolute left-1/2 -top-3 -translate-x-1/2 w-16 h-6 rounded-t-full bg-[#ED7200] z-0' />

          {timelineData.map((item, idx) => {
            const isActive = idx === activeIndex;
            const isPast = idx < activeIndex;

            return (
              <motion.div
                key={idx}
                initial={false}
                animate={{
                  y: isActive ? 0 : isPast ? -60 : 80,
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 0.98,
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className='absolute inset-0'
              >
                <div
                  className='relative overflow-hidden rounded-[20px] shadow-[0_16px_40px_rgba(0,0,0,0.08)]'
                  style={{
                    background: 'linear-gradient(90deg,#7C2BA8 0%,#C94D55 55%,#F57C00 100%)',
                  }}
                >
                  <div className='flex h-[44px] items-center justify-center'>
                    <h2 className='text-[20px] font-bold text-white'>{item.label}</h2>
                  </div>

                  <div className='mx-[2px] mb-[2px] rounded-[18px] bg-white px-4 py-5'>
                    <h3 className='text-base font-bold bg-gradient-to-r from-[#6F2B8B] to-[#ED7200] bg-clip-text text-transparent'>
                      {item.title}
                    </h3>

                    <p className='mt-2 text-xs leading-relaxed text-[#6D6D6D]'>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Button */}
        <div className='py-6'>
          <button className='group inline-flex items-center gap-2 py-3 px-7 text-xs font-semibold text-white bg-gradient-to-b from-[#7030B1] to-[#B56DD3] rounded-full'>
            <span>Talk to Our Experts</span>
            <ArrowRight className='w-3.5 h-3.5' />
          </button>
        </div>
      </div>

      {/* ── Animations ── */}
      <style>{`
        @keyframes ctCardIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ctBobUp {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-7px); }
        }
        @keyframes ctBobDown {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(7px); }
        }
      `}</style>
    </section>
  );
}

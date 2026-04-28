'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
// import { Link } from 'lucide-react';

const AIVideologo = '/images/AIVideologo.png';

const slides = [
  {
    tag: 'Agent Hub',
    title: 'Agent hub',
    subtitle: 'See how intelligent agents collaborate to solve complex problems.',
    videoUrl:
      'https://storage.googleapis.com/agentic_ai_motion_graphics/Agentic%20AI%20-%20Motion%20Graphics/Agent_hub.mp4',
    thumbnail:
      'https://res.cloudinary.com/dpoj17ejw/image/upload/v1773894118/Domo_Agent_Hub_ltdvbm.jpg',
    duration: '0:53',
  },
  {
    tag: 'Ecosystem',
    title: 'Agents ecosystem',
    subtitle: 'Exploring the interconnected landscape of autonomous AI agents.',
    videoUrl:
      'https://storage.googleapis.com/agentic_ai_motion_graphics/Agentic%20AI%20-%20Motion%20Graphics/Agents%20ecosystenm.mp4',
    thumbnail: '/images/homePage/agenteco.png',
    duration: '1:45',
  },
  {
    tag: 'Management',
    title: 'Amendment Agent',
    subtitle: 'Automating change requests and document amendments with precision.',
    videoUrl:
      'https://storage.googleapis.com/agentic_ai_motion_graphics/Agentic%20AI%20-%20Motion%20Graphics/Amendment%20Agent.mp4',
    thumbnail:
      'https://res.cloudinary.com/dpoj17ejw/image/upload/v1773835174/hapag_lyyoda_bnwddr.jpg',
    duration: '1:12',
  },
  {
    tag: 'Supply Chain',
    title: 'Inventory Replenishment',
    subtitle: 'Optimizing stock levels through intelligent predictive replenishment.',
    videoUrl:
      'https://storage.googleapis.com/agentic_ai_motion_graphics/Agentic%20AI%20-%20Motion%20Graphics/Inventory%20Replenishment.mp4',
    thumbnail: '/images/homePage/invent.png',
    duration: '0:48',
  },
  {
    tag: 'Optimization',
    title: 'Network Optimization Agent',
    subtitle: 'Maximizing network efficiency and resource allocation dynamically.',
    videoUrl:
      'https://storage.googleapis.com/agentic_ai_motion_graphics/Agentic%20AI%20-%20Motion%20Graphics/Network%20Optimization%20Agent.mp4',
    thumbnail: '/images/homePage/network.png',
    duration: '2:04',
  },
  {
    tag: 'Operations',
    title: 'Procurement Agent',
    subtitle: 'Streamlining procurement processes from sourcing to settlement.',
    videoUrl:
      'https://storage.googleapis.com/agentic_ai_motion_graphics/Agentic%20AI%20-%20Motion%20Graphics/Procurement_Agent.mp4',
    thumbnail: '/images/homePage/pro.png',
    duration: '1:30',
  },
  {
    tag: 'Retail',
    title: 'Store Performance',
    subtitle: 'Analyzing and improving retail performance with real-time insights.',
    videoUrl:
      'https://storage.googleapis.com/agentic_ai_motion_graphics/Agentic%20AI%20-%20Motion%20Graphics/Store%20Performance.mp4',
    thumbnail: '/images/homePage/ai_video_thumbnail.png',
    duration: '1:15',
  },
  {
    tag: 'Marketing',
    title: 'marketing Intelligence agent',
    subtitle: 'Driving growth through data-driven marketing decisions and automation.',
    videoUrl:
      'https://storage.googleapis.com/agentic_ai_motion_graphics/Agentic%20AI%20-%20Motion%20Graphics/marketing%20Intelligence%20agent.mp4',
    thumbnail: '/images/homePage/mark.png',
    duration: '2:30',
  },
];

const AIVideos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => setMounted(true), []);

  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent(c => (c + 1) % slides.length);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  if (!mounted) return null;

  const slide = slides[current];

  return (
    <section className='relative bg-[#FAFAFA] py-6 px-6 lg:px-20 overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        {/* ── Header ── */}
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 -mb-6'>
          <h2 className='text-3xl lg:text-5xl font-bold text-[#1a1a2e]'>
            <span className='bg-gradient-to-b from-[#7030B1] to-[#B56DD3] bg-clip-text text-transparent font-semibold'>
              Watch
            </span>{' '}
            AI in Action
          </h2>
          <button
            onClick={() => {
              const element = document.getElementById('agentic-blocks');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className='flex items-center gap-2 px-8 py-3 rounded-full text-white text-sm lg:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl'
            style={{
              background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
              boxShadow: 'inset 0px 0px 12px 0px #FFFFFF, 0px 0px 2px 0px rgba(0, 0, 0, 0.1)',
              borderRadius: '30px',
            }}
          >
            Explore All Agents
            <ArrowRight className='w-4 h-4' />
          </button>
        </div>

        {/* ── Main Display Area (Split Layout) ── */}
        <div className='relative max-w-[1300px] mx-auto h-[400px] sm:h-[500px] lg:h-[550px] flex items-center justify-center'>
          {/* Video Slider Area (Right side) */}
          <div className='absolute right-0 w-full lg:w-[75%] h-full flex items-center justify-center lg:justify-end pr-0 lg:pr-5'>
            {slides.map((s, idx) => {
              const diff = idx - current;
              const isActive = idx === current;

              let translateX = 0;
              let opacity = 0;
              let zIndex = 1;

              if (diff === 0) {
                translateX = 0;
                opacity = 1;
                zIndex = 10;
              } else {
                translateX = diff > 0 ? 100 : -100;
                opacity = 0;
                zIndex = 0;
              }

              return (
                <motion.div
                  key={idx}
                  animate={{ x: translateX, opacity: opacity, zIndex: zIndex }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className='absolute w-[95%] lg:w-full max-w-[720px] aspect-video cursor-pointer'
                  onClick={() => (!isActive ? setCurrent(idx) : openModal())}
                >
                  <div
                    className='relative w-full h-full overflow-hidden shadow-2xl transition-all duration-300'
                    style={{
                      border: isActive ? '4px solid #C8ABDA' : 'none',
                      borderRadius: '32px',
                    }}
                  >
                    <Image src={s.thumbnail} alt='Video' fill className='object-cover' />
                    <div className='absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors' />
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-white flex items-center justify-center shadow-2xl'>
                        <div className='w-0 h-0 border-t-[8px] lg:border-t-[12px] border-t-transparent border-l-[14px] lg:border-l-[20px] border-l-[#1a1a2e] border-b-[8px] lg:border-b-[12px] border-b-transparent ml-2' />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Info Card Area (Left side, Overlapping) */}
          <AnimatePresence mode='wait'>
            <motion.div
              key={current + '-info'}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className='absolute left-4 lg:left-0 top-1/2 -translate-y-1/2 z-[20] flex flex-row items-center w-[95%] sm:w-[480px] lg:w-[580px] p-6 lg:p-[35px] pr-8 lg:pr-10'
              style={{
                background: 'linear-gradient(270deg, #5A2A8A 0%, #242424 100%)',
                borderRadius: '40px',
              }}
            >
              {/* Illustration */}
              <div className='absolute -left-[140px] top-1/2 -translate-y-1/2 w-[320px] hidden lg:block pointer-events-none'>
                <Image
                  src={AIVideologo}
                  alt='AI Robot'
                  width={320}
                  height={320}
                  className='object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]'
                />
              </div>

              {/* Content Area */}
              <div className='flex-1 text-left flex flex-col items-start lg:ml-[130px]'>
                <h3 className='text-xl lg:text-[32px] font-bold text-white mb-3 leading-tight'>
                  {slide.title}
                </h3>
                <p className='text-white/80 text-sm lg:text-[17px] leading-relaxed mb-8'>
                  {slide.subtitle}
                </p>

                <button
                  onClick={openModal}
                  className='inline-flex items-center gap-4 bg-white hover:bg-violet-50 text-[#1a1a2e] font-bold text-base lg:text-[18px] px-8 py-1.5 rounded-full transition-all duration-300 group/btn shadow-xl'
                >
                  Watch now
                  <span
                    className='w-7 h-7 lg:w-9 lg:h-9 flex items-center justify-center rounded-full text-white transition-transform group-hover/btn:translate-x-1'
                    style={{ background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)' }}
                  >
                    <ArrowRight className='w-3.5 h-3.5 lg:w-4.5 lg:h-4.5 -rotate-45' />
                  </span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Navigation Arrows (Squircle Design) ── */}
        <div className='flex gap-5 justify-center mt-8 sm:mt-12'>
          <button
            onClick={prev}
            className='w-12 h-12 sm:w-14 sm:h-14 rounded-[18px] bg-white text-gray-400 flex items-center justify-center hover:text-[#7030B1] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)]'
          >
            <ChevronLeft className='w-6 h-6 stroke-[1.5px]' />
          </button>
          <button
            onClick={next}
            className='w-12 h-12 sm:w-14 sm:h-14 rounded-[18px] bg-white text-gray-900 flex items-center justify-center hover:text-[#7030B1] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)]'
          >
            <ChevronRight className='w-6 h-6 stroke-[1.5px]' />
          </button>
        </div>
      </div>

      {/* ── Video Modal ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl'
            onClick={e => e.target === e.currentTarget && closeModal()}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className='relative w-full max-w-4xl max-h-[80vh] aspect-video bg-black rounded-[32px] overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.3)] border border-white/10'
            >
              <button
                onClick={closeModal}
                className='absolute top-6 right-6 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white'
              >
                <X className='w-6 h-6' />
              </button>

              <div className='w-full h-full'>
                <video
                  ref={videoRef}
                  src={slide.videoUrl}
                  className='w-full h-full object-contain'
                  controls
                  autoPlay
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AIVideos;

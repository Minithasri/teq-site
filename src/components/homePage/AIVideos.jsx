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
    thumbnail: '/images/homePage/ai_video_thumbnail_2.png',
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
    thumbnail: '/images/homePage/ai_video_thumbnail.png',
    duration: '0:48',
  },
  {
    tag: 'Optimization',
    title: 'Network Optimization Agent',
    subtitle: 'Maximizing network efficiency and resource allocation dynamically.',
    videoUrl:
      'https://storage.googleapis.com/agentic_ai_motion_graphics/Agentic%20AI%20-%20Motion%20Graphics/Network%20Optimization%20Agent.mp4',
    thumbnail: '/images/homePage/ai_video_thumbnail_2.png',
    duration: '2:04',
  },
  {
    tag: 'Operations',
    title: 'Procurement Agent',
    subtitle: 'Streamlining procurement processes from sourcing to settlement.',
    videoUrl:
      'https://storage.googleapis.com/agentic_ai_motion_graphics/Agentic%20AI%20-%20Motion%20Graphics/Procurement_Agent.mp4',
    thumbnail: '/images/homePage/ai_video_thumbnail_3.png',
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
    thumbnail: '/images/homePage/ai_video_thumbnail_2.png',
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
    videoRef.current?.pause();
  };

  if (!mounted) return null;

  const slide = slides[current];

  return (
    <section className='relative bg-[#F8F9FE] py-12 px-6 lg:px-20 overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        {/* ── Header ── */}
        <div className='flex items-center justify-between mb-10'>
          <h2 className='text-4xl lg:text-5xl font-bold text-[#1a1a2e]'>
            <span className='bg-gradient-to-b from-[#7030B1] to-[#B56DD3] bg-clip-text text-transparent font-semibold'>
              Watch
            </span>{' '}
            AI in Action
          </h2>
          <button className='flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-medium bg-gradient-to-b from-[#7030B1] to-[#B56DD3] shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300'>
            Explore All Agents
            <ArrowRight className='w-4 h-4' />
          </button>
        </div>

        {/* ── Overlapping Slider Container ── */}
        <div className='relative max-w-7xl mx-auto' style={{ minHeight: '439px' }}>
          {/* ─── Video Card (Background — right-aligned, full height) ─── */}
          <motion.div
            key={current + '-video'}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className='absolute right-0 top-0 overflow-hidden shadow-2xl cursor-pointer group'
            onClick={openModal}
            style={{
              border: '6px solid #C8ABDA',
              width: '768px',
              height: '439px',
              borderRadius: '24px',
              gap: '10px',
            }}
          >
            <Image
              src={slide.thumbnail}
              alt='Video Thumbnail'
              fill
              className='object-cover transition-transform duration-700 '
            />
            <div className='absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors' />

            {/* Play Button */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110'>
                <div className='w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-[#7C3AED] border-b-[8px] border-b-transparent ml-1' />
              </div>
            </div>

            {/* Duration Badge */}
            <div className='absolute bottom-5 right-6 bg-black/70 text-white text-sm font-bold px-4 py-1.5 rounded-lg backdrop-blur-md'>
              {slide.duration}
            </div>
          </motion.div>

          {/* ─── Info Card (Foreground — bottom-left, overlapping video) ─── */}
          <motion.div
            key={current + '-info'}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='relative lg:absolute left-0 bottom-0 lg:bottom-[-20px] z-20 shadow-2xl flex flex-row items-center'
            style={{
              background: 'linear-gradient(270deg, #5A2A8A 0%, #242424 100%)',
              width: '698px',
              height: '303px',
              borderRadius: '40px',
              padding: '40px',
              gap: '33px',
            }}
          >
            {/* Robot Illustration — sticking out left & top */}
            <div className='w-[40%] flex-shrink-0 -mt-44 -ml-[140px] hidden lg:block'>
              <Image
                src={AIVideologo}
                alt='AI Robot'
                width={344}
                height={352}
                className='object-contain drop-shadow-2xl max-w-none'
                style={{ opacity: 1, width: '344px', height: '352px' }}
              />
            </div>

            {/* Content */}
            <div className='flex-1 text-right lg:text-right flex flex-col items-end'>
              <h3 className='text-xl lg:text-2xl font-extrabold text-white mb-3 leading-tight capitalize'>
                {slide.title}
              </h3>
              <p className='text-white/70 text-sm leading-relaxed mb-6'>{slide.subtitle}</p>

              <button
                onClick={openModal}
                className='inline-flex items-center gap-3 bg-white hover:bg-violet-50 text-[#2E2452] font-bold text-[18px] px-6 py-3 rounded-full transition-all duration-300 shadow-xl group/btn'
              >
                Watch now
                <span className='w-7 h-7 flex items-center justify-center rounded-full bg-gradient-to-b from-[#7030B1] to-[#B56DD3] transition-transform group-hover/btn:translate-x-1'>
                  <ArrowRight className='w-3.5 h-3.5 text-white -rotate-45' />
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* ── Navigation Arrows ── */}
        <div className='flex gap-4 justify-center mt-10'>
          <button
            onClick={prev}
            className='w-12 h-12 rounded-full border-2 border-gray-200 bg-white text-gray-400 flex items-center justify-center hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-all duration-300 shadow-sm'
          >
            <ChevronLeft className='w-5 h-5' />
          </button>
          <button
            onClick={next}
            className='w-12 h-12 rounded-full border-2 border-gray-200 bg-white text-gray-400 flex items-center justify-center hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-all duration-300 shadow-sm'
          >
            <ChevronRight className='w-5 h-5' />
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

              <video
                ref={videoRef}
                src={slide.videoUrl}
                className='w-full h-full object-contain'
                controls
                autoPlay
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AIVideos;

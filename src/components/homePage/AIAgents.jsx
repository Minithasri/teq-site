'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  'ALL',
  'FINANCE',
  'OPERATIONS',
  'RETAIL',
  'CUSTOMER EXPERIENCE',
  'INFRASTRUCTURE',
];

const slides = [
  {
    id: 1,
    category: 'Finance',
    statNumber: '85',
    statSymbol: '%',
    statLabel: 'Improved efficiency',
    title: 'Credit optimization agent (App)',
    description:
      'Gain complete visibility into credit usage across dashboards, dataflows, and connectors to optimize costs and improve efficiency.',
    tags: ['Lineage Tracking', 'Cost Visibility', 'Usage Optimization'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    details: {
      audience: 'Finance Teams, Operations Managers, IT Leadership',
      howItWorks: [
        'Monitors real-time credit consumption across platforms',
        'Identifies unused resources and suggests optimizations',
        'Provides detailed lineage tracking for cost attribution',
      ],
      potentialImpact: [
        'Lower cloud infrastructure costs',
        'Enhanced budget predictability',
        'Reduced waste in data operations',
      ],
    },
  },
  {
    id: 2,
    category: 'Operations',
    statNumber: '40',
    statSymbol: '%',
    statLabel: 'Reduced downtime',
    title: 'Supply chain autonomous agent',
    description:
      'Predict disruptions before they happen and automate procurement workflows for seamless operational continuity.',
    tags: ['Predictive Alerts', 'Automated Sourcing', 'Inventory Sync'],
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
    details: {
      audience: 'Logistics Teams, Procurement Officers, Supply Chain Managers',
      howItWorks: [
        'Predicts potential supply disruptions using historical data',
        'Automates re-ordering processes based on inventory levels',
        'Synchronizes data across global distribution centers',
      ],
      potentialImpact: [
        'Minimized inventory stockouts',
        'Faster response to market shifts',
        'Reduced manual procurement effort',
      ],
    },
  },
  {
    id: 3,
    category: 'Retail',
    statNumber: '3x',
    statSymbol: '',
    statLabel: 'Higher conversion rate',
    title: 'Customer Retention & Churn Risk Agent',
    description:
      'Deliver hyper-personalized recommendations to users in real-time, boosting sales and customer satisfaction.',
    tags: ['Recommendation Engine', 'User Profiling', 'Cart Optimization'],
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000',
    details: {
      audience: 'CRM Teams, Loyalty Teams, Marketing & Retail Leadership',
      howItWorks: [
        'Monitors purchase frequency and engagement trends',
        'Qualifies churn risk at customer or segment level',
        'Guides retention actions for approval',
      ],
      potentialImpact: [
        'Higher repeat purchase rates',
        'Improved customer lifetime value',
        'More effective loyalty programs',
      ],
    },
  },
];

const AgentDetailModal = ({ isOpen, onClose, slide }) => {
  if (!slide) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className='fixed inset-0 z-[9999] flex items-center justify-center p-4'>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className='absolute inset-0 bg-black/40 backdrop-blur-sm'
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className='relative bg-white rounded-[28px] w-full max-w-[900px] max-h-[95vh] overflow-y-auto shadow-2xl custom-scrollbar'
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className='absolute top-6 right-6 z-20 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center transition-colors'
            >
              <X className='w-6 h-6 text-white' />
            </button>

            {/* Header Image */}
            <div className='relative w-full h-[320px]'>
              <Image src={slide.image} alt={slide.title} fill className='object-cover' />
            </div>

            <div className='p-8 sm:p-10'>
              <h3 className='text-2xl lg:text-[28px] font-bold text-[#A855F7] mb-8'>
                {slide.title}
              </h3>

              {/* Audience & Category Section */}
              <div className='bg-[#F9FAFB] rounded-xl p-6 mb-8 flex flex-col md:flex-row gap-8'>
                <div className='flex-1'>
                  <h4 className='text-sm font-bold text-[#1A1A1A] mb-3'>Audience</h4>
                  <p className='text-[#666666] text-[15px] leading-relaxed'>
                    {slide.details.audience}
                  </p>
                </div>
                <div className='w-full md:w-32'>
                  <h4 className='text-sm font-bold text-[#1A1A1A] mb-3'>Category</h4>
                  <span className='inline-block px-4 py-1.5 rounded-full bg-[#F3E8FF] text-[#A855F7] text-xs font-bold uppercase'>
                    {slide.category}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className='border-t border-dashed border-gray-200 mb-8' />

              {/* How it works */}
              <div className='mb-8'>
                <h4 className='text-sm font-bold text-[#1A1A1A] mb-4'>How it works</h4>
                <ul className='space-y-3'>
                  {slide.details.howItWorks.map((item, idx) => (
                    <li key={idx} className='flex items-start gap-3 text-[#666666] text-[15px]'>
                      <span className='mt-1.5 w-1.5 h-1.5 rounded-full bg-[#9CA3AF] flex-shrink-0' />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className='border-t border-dashed border-gray-200 mb-8' />

              {/* Potential Impact */}
              <div className='mb-8'>
                <h4 className='text-sm font-bold text-[#1A1A1A] mb-4'>Potential Impact</h4>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                  {slide.details.potentialImpact.map((impact, idx) => (
                    <div
                      key={idx}
                      className='bg-[#FDF4FF] p-5 rounded-lg border border-[#F3E8FF] flex items-center justify-center text-center h-full'
                    >
                      <p className='text-[#1A1A1A] text-sm font-medium leading-snug'>{impact}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Link */}
              <button className='inline-flex items-center gap-2 text-[#A855F7] font-semibold text-[15px] hover:gap-3 transition-all group'>
                Request Custom Implementation
                <ArrowRight className='w-4 h-4' />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const AIAgents = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(null);

  const filteredSlides =
    activeCategory === 'ALL'
      ? slides
      : slides.filter(slide => slide.category.toUpperCase() === activeCategory);

  const activeSlides = filteredSlides.length > 0 ? filteredSlides : slides;

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % activeSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + activeSlides.length) % activeSlides.length);
  };

  const slide = activeSlides[currentSlide];

  const handleExplore = () => {
    setSelectedSlide(slide);
    setIsModalOpen(true);
  };

  return (
    <section className='py-12 bg-[#fafafa]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-12 lg:px-20 relative'>
        {/* ── Title ── */}
        <h2 className='text-3xl md:text-[30px] font-semibold text-center text-[#1A1A1A] leading-[1.3] mx-auto mb-8'>
          A Powerful Ecosystem of AI Agents Driving Efficiency and{' '}
          <br className='hidden md:block' /> Growth Across Industries
        </h2>

        {/* ── Categories ── */}
        <div className='flex flex-wrap justify-center gap-3 mb-10'>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentSlide(0);
              }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-[#222222] text-white border-[#222222]'
                  : 'bg-white text-[#666666] border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Carousel Container ── */}
        <div className='relative max-w-[1000px] mx-auto flex items-center justify-center'>
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className='absolute -left-16 z-10 w-14 h-14 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] hidden md:flex items-center justify-center hover:scale-105 transition-transform'
            aria-label='Previous slide'
          >
            <ChevronLeft className='w-6 h-6 text-[#1A1A1A]' strokeWidth={2} />
          </button>

          {/* Card */}
          <div className='bg-white rounded-[32px] p-3 shadow-[0_8px_40px_rgba(0,0,0,0.04)] w-full flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-10 relative overflow-hidden'>
            {/* Image Side */}
            <div className='relative w-full lg:w-[45%] h-[240px] sm:h-[300px] lg:h-auto lg:min-h-[340px] rounded-[24px] overflow-hidden'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={slide.id + '-image'}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className='absolute inset-0'
                >
                  <Image src={slide.image} alt={slide.title} fill className='object-cover' />
                  {/* Subtle dark overlay for better text contrast if needed */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60'></div>
                </motion.div>
              </AnimatePresence>

              {/* Category Tag on Image */}
              <div className='absolute top-6 left-6 px-6 py-2.5 rounded-[14px] bg-[#222222]/60 backdrop-blur-md border border-white/10 text-white font-medium text-sm tracking-wide'>
                {slide.category}
              </div>
            </div>

            {/* Content Side */}
            <div className='w-full lg:w-[55%] flex flex-col justify-center py-2 pr-4 sm:pr-6 lg:pr-8'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={slide.id + '-content'}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className='text-[#666666] font-semibold text-base lg:text-lg mb-2'>
                    {slide.category}
                  </p>

                  <div className='flex items-baseline gap-2 mb-4'>
                    <span className='text-4xl lg:text-[42px] font-bold bg-gradient-to-r from-[#6B2BAB] to-[#EF6706] bg-clip-text text-transparent leading-none tracking-tight'>
                      {slide.statNumber}
                    </span>
                    {slide.statSymbol && (
                      <span className='text-4xl lg:text-[42px] font-bold text-[#EA580C] leading-none tracking-tight'>
                        {slide.statSymbol}
                      </span>
                    )}
                    <span className='text-[#666666] font-medium text-sm lg:text-[15px] ml-2'>
                      {slide.statLabel}
                    </span>
                  </div>

                  <h3 className='text-2xl lg:text-[26px] font-bold text-[#1A1A1A] mb-3 leading-snug'>
                    {slide.title}
                  </h3>

                  <p className='text-[#666666] text-sm lg:text-[15px] leading-relaxed mb-5 max-w-[420px]'>
                    {slide.description}
                  </p>

                  <div className='flex flex-wrap gap-2 mb-6'>
                    {slide.tags.map((tag, index) => (
                      <span
                        key={index}
                        className='px-4 py-2 rounded-full bg-[#F5F5F5] text-[#333333] text-xs font-semibold tracking-wide'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div>
                    <button
                      onClick={handleExplore}
                      className='inline-flex items-center gap-2 bg-gradient-to-r from-[#7030B1] to-[#B56DD3] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 hover:shadow-[0_8px_20px_rgba(139,92,246,0.3)] group'
                    >
                      Explore{' '}
                      <ArrowRight className='w-4 h-4 ml-1 transition-transform group-hover:translate-x-1' />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className='absolute -right-16 z-10 w-14 h-14 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] hidden md:flex items-center justify-center hover:scale-105 transition-transform'
            aria-label='Next slide'
          >
            <ChevronRight className='w-6 h-6 text-[#1A1A1A]' strokeWidth={2} />
          </button>
        </div>

        {/* ── Pagination Dots ── */}
        <div className='flex justify-center items-center gap-2 mt-8'>
          {activeSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'w-4 h-4 bg-[#8B5CF6] shadow-sm'
                  : 'w-3 h-3 bg-[#E5E7EB] hover:bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <AgentDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        slide={selectedSlide}
      />
    </section>
  );
};

export default AIAgents;

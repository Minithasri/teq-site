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
  // FINANCE
  {
    id: 1,
    category: 'Finance',
    statNumber: '85',
    statSymbol: '%',
    statLabel: 'Improved efficiency',
    title: 'Credit Optimization Agent (App)',
    description:
      'Gain complete visibility into credit usage across dashboards, dataflows, and connectors to optimize costs and improve efficiency.',
    tags: ['Lineage Tracking', 'Cost Visibility', 'Usage Optimization'],
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000',
    details: {
      audience: 'Finance Teams, IT Leadership, Cloud Administrators',
      howItWorks: [
        'Tracks credit consumption in real-time across all Domo instances',
        'Links costs directly to specific dataflows and dashboards',
        'Suggests automated scaling rules to prevent overages',
      ],
      potentialImpact: [
        'Significantly lower cloud spend',
        'Transparent cost attribution',
        'Elimination of surprise billing',
      ],
    },
  },
  {
    id: 2,
    category: 'Finance',
    statNumber: '70',
    statSymbol: '%',
    statLabel: 'Reduction in monitoring time',
    title: 'Domo Agent Hub',
    description:
      'Monitor workflows and track agent credit consumption through a chat-based interface with real-time insights and prioritization.',
    tags: ['Credit Tracking', 'Workflow Monitoring', 'Chat Access'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    details: {
      audience: 'Data Ops, Platform Owners, Finance Analysts',
      howItWorks: [
        'Centralizes all AI agent activity into a single command center',
        'Uses NLP to allow querying agent status via chat',
        'Proactively alerts users to workflow bottlenecks',
      ],
      potentialImpact: [
        'Instant visibility into ROI',
        'Faster resolution of failed tasks',
        'Scalable management of hundreds of agents',
      ],
    },
  },

  // OPERATIONS
  {
    id: 3,
    category: 'Operations',
    statNumber: '60',
    statSymbol: '%',
    statLabel: 'Faster procurement evaluation',
    title: 'Procurement Agent',
    description:
      'Intelligent vendor evaluation using policy, contracts, and budget data to support faster, compliant procurement decisions.',
    tags: ['Vendor Ranking', 'Policy Compliance', 'Risk Assessment'],
    image:
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000',
    details: {
      audience: 'Procurement Officers, Supply Chain Leads, Compliance Teams',
      howItWorks: [
        'Parses vendor contracts using OCR and LLMs',
        'Compares bids against company policy and historical benchmarks',
        'Flags potential risks in vendor financial stability',
      ],
      potentialImpact: [
        'Shortened procurement cycles',
        'Higher compliance rates',
        'Better vendor selection based on data',
      ],
    },
  },
  {
    id: 4,
    category: 'Operations',
    statNumber: '80',
    statSymbol: '%',
    statLabel: 'Reduction in planning time',
    title: 'Predictive Maintenance Agent',
    description:
      'Automate production planning and proactively monitor machine health using real-time data to prevent failures and optimize allocation.',
    tags: ['Failure Prediction', 'Machine Health', 'Resource Optimization'],
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
    details: {
      audience: 'Plant Managers, Maintenance Engineers, Operations VPs',
      howItWorks: [
        'Ingests sensor data to detect early signs of mechanical wear',
        'Automates work order generation for preventive tasks',
        'Optimizes machine schedules based on health status',
      ],
      potentialImpact: [
        'Zero unplanned downtime',
        'Extended machinery lifespan',
        'Lower maintenance costs',
      ],
    },
  },
  {
    id: 5,
    category: 'Operations',
    statNumber: '90',
    statSymbol: '%',
    statLabel: 'Less manual reporting effort',
    title: 'Automated PPT Generator',
    description:
      'Auto-generate professional presentations from dashboards using card snapshots, filters, and AI-driven summarization via Domo APIs.',
    tags: ['Slide Generation', 'AI Insights', 'Dashboard Export'],
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000',
    details: {
      audience: 'Business Analysts, Executives, Sales Teams',
      howItWorks: [
        'Pulls live data snapshots directly from Domo cards',
        'Synthesizes bullet points using context-aware LLMs',
        'Exports into brand-compliant PowerPoint templates',
      ],
      potentialImpact: [
        'Hours saved per week on reporting',
        'Data-driven storytelling consistency',
        'Faster executive decision making',
      ],
    },
  },
  {
    id: 6,
    category: 'Operations',
    statNumber: '40',
    statSymbol: '%',
    statLabel: 'Improved staff utilization',
    title: 'Magic Rostering',
    description:
      'Automate staff scheduling using past attendance, leave, and performance data to eliminate conflicts and optimize workforce planning.',
    tags: ['Auto Scheduling', 'Leave Management', 'Predictive Roster'],
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
    details: {
      audience: 'HR Managers, Shift Leads, Retail Operations',
      howItWorks: [
        'Forecasts labor demand using historical foot traffic data',
        'Cross-references staff skills and availability to build rosters',
        'Automatically handles swap requests and leave approvals',
      ],
      potentialImpact: [
        'Reduced overtime costs',
        'Improved employee work-life balance',
        'Optimal floor coverage at all times',
      ],
    },
  },

  // RETAIL
  {
    id: 7,
    category: 'Retail',
    statNumber: 'Real-time',
    statSymbol: '',
    statLabel: 'Floor decision speed',
    title: 'Fashion Retail – Store Manager',
    description:
      'Deliver instant AI-generated floor decisions (Replenish / Pull-Back / Hold) to store managers by analyzing sell-through, ROS, and lifecycle data at point of scan.',
    tags: ['Scan & Decide', 'Inventory Action', 'Sell-Through Optimization'],
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000',
    details: {
      audience: 'Store Managers, Visual Merchandisers, Inventory Planners',
      howItWorks: [
        'Integrates with mobile scanning devices at the store level',
        'Processes SKU-level performance metrics in milliseconds',
        'Provides actionable instructions based on global inventory levels',
      ],
      potentialImpact: [
        'Minimized out-of-stock items',
        'Reduced manual inventory audits',
        'Maximized full-price sell-through',
      ],
    },
  },

  // CUSTOMER EXPERIENCE
  {
    id: 8,
    category: 'Customer Experience',
    statNumber: '75',
    statSymbol: '%',
    statLabel: 'Reduction in manual effort',
    title: 'Hapag Lloyd – Booking Amendment Agent',
    description:
      'Automate end-to-end booking amendment detection from customer emails — validating requests and generating responses in seconds.',
    tags: ['Email Parsing', 'Amendment Detection', 'Auto Response'],
    image:
      'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=1000',
    details: {
      audience: 'Logistics Coordinators, Customer Support, Shipping Lines',
      howItWorks: [
        'Uses NLP to extract data from unstructured customer emails',
        'Verifies amendment requests against live shipment data',
        'Drafts and sends confirmation or rejection responses',
      ],
      potentialImpact: [
        'Instant response to customers',
        'Elimination of data entry errors',
        'Highly scalable support operations',
      ],
    },
  },
  {
    id: 9,
    category: 'Customer Experience',
    statNumber: 'Centralized',
    statSymbol: '',
    statLabel: 'Support analytics view',
    title: 'Sierra – Customer Support (C Certify)',
    description:
      'Monitor and analyze customer support data in one place — tracking tickets, resolution time, agent performance, and satisfaction scores.',
    tags: ['Ticket Analytics', 'Agent Performance', 'CSAT Insights'],
    image:
      'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=1000',
    details: {
      audience: 'CX Directors, Team Leads, Quality Assurance',
      howItWorks: [
        'Aggregates data from Zendesk, Salesforce, and live chat',
        'Calculates sentiment scores across all interactions',
        'Identifies high-performing support strategies automatically',
      ],
      potentialImpact: [
        'Consistent service quality',
        'Data-backed agent coaching',
        'Real-time visibility into customer sentiment',
      ],
    },
  },

  // INFRASTRUCTURE
  {
    id: 10,
    category: 'Infrastructure',
    statNumber: '$1M+',
    statSymbol: '',
    statLabel: 'Potential annual savings',
    title: 'Network Optimization',
    description:
      "Simulate cost and capacity scenarios for BISSELL's warehouse and shipping network to drive smarter, faster logistics decisions.",
    tags: ['Scenario Planning', 'Capacity Forecasting', 'Lane Optimization'],
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
    details: {
      audience: 'Logistics Planners, Network Engineers, CFOs',
      howItWorks: [
        'Digital twins of global shipping and warehouse nodes',
        'Runs Monte Carlo simulations for varying demand profiles',
        'Recommends optimal routing lanes to minimize costs',
      ],
      potentialImpact: [
        'Substantial logistics cost reduction',
        'Improved shipping lead times',
        'Resilient infrastructure planning',
      ],
    },
  },
  {
    id: 11,
    category: 'Infrastructure',
    statNumber: 'Instant',
    statSymbol: '',
    statLabel: 'Use case response via email',
    title: 'Agent Horoscope + Developer Dashboard',
    description:
      'Collect AI use cases from clients or users, provide instant email solutions, and share details with the dev team via a tracking dashboard.',
    tags: ['Use Case Intake', 'Auto Email', 'Dev Tracking'],
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
    details: {
      audience: 'Sales Teams, Product Managers, Developers',
      howItWorks: [
        'Captures user requirements through a structured interface',
        'Automatically maps needs to existing AI modules',
        'Bridges the gap between sales intake and dev execution',
      ],
      potentialImpact: [
        'Faster sales-to-development handoff',
        'Standardized AI solutioning',
        'Improved client engagement speed',
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
        <h2 className='text-[16px] sm:text-[30px] font-semibold text-center text-[#1A1A1A] leading-[1.3] mx-auto mb-8'>
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
                  transition={{ duration: 0.2 }}
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
            <div className='w-full lg:w-[55%] flex flex-col justify-center py-2 px-3 sm:px-6 lg:pl-0 lg:pr-8'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={slide.id + '-content'}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
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
                      className='inline-flex items-center gap-3 text-white px-8 py-3 rounded-full font-bold text-[15px] transition-all duration-300 hover:scale-105 hover:shadow-xl group'
                      style={{
                        background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                        boxShadow:
                          'inset 0px 0px 12px 0px #FFFFFF, 0px 0px 2px 0px rgba(0, 0, 0, 0.1)',
                        borderRadius: '30px',
                      }}
                    >
                      Explore
                      <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
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

'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const HowWeDeliver = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);

  const steps = [
    {
      num: '01',
      title: 'Discover',
      tabTitle: 'Identify the highest impact opportunities',
      desc: 'We begin by understanding your business goals, operational challenges, and existing processes. Through collaborative workshops and workflow analysis, we uncover where AI can create the greatest value and define a roadmap aligned with your objectives.',
      points: [
        'Analyze current workflows and pain points',
        'Identify automation and intelligence opportunities',
        'Evaluate data readiness and system landscape',
        'Select the right AI models and architecture',
      ],
      bottomText:
        'A clear AI strategy focused on measurable business impact and rapid time to value.',
    },
    {
      num: '02',
      title: 'Design',
      tabTitle: 'Architect intelligent agents for real world use',
      desc: 'Every successful AI solution starts with a strong foundation. We design agent workflows, decision frameworks, memory systems, integrations, and governance controls to ensure reliability, security, and scalability from day one.',
      points: [
        'Define agent behaviors and responsibilities',
        'Design tool integrations and knowledge access',
        'Implement memory and context management',
        'Establish guardrails, compliance, and governance',
      ],
      bottomText:
        'A production ready blueprint designed for performance, trust, and enterprise adoption.',
    },
    {
      num: '03',
      title: 'Build',
      tabTitle: 'Transform concepts into working solutions',
      desc: 'Our engineering team develops, tests, and validates your AI solution using real business scenarios and enterprise grade development practices. Every component is optimized for accuracy, usability, and operational reliability.',
      points: [
        'Build and configure intelligent agents',
        'Integrate with enterprise systems and data sources',
        'Test using real world workflows and datasets',
        'Optimize performance, accuracy, and user experience',
      ],
      bottomText: 'A fully functional AI solution validated for production environments.',
    },
    {
      num: '04',
      title: 'Scale',
      tabTitle: 'Optimize, monitor, and grow with confidence',
      desc: 'AI is not a one time deployment. We continuously monitor performance, improve efficiency, and expand capabilities as your business evolves. Our focus is ensuring long term value and sustainable growth.',
      points: [
        'Monitor agent performance and usage',
        'Optimize costs and operational efficiency',
        'Expand capabilities and use cases',
        'Support governance, security, and compliance',
      ],
      bottomText:
        'An AI ecosystem that scales securely, delivers ongoing value, and evolves with your organization.',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) return;

      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = scrolled / totalScrollable;
      const clamped = Math.max(0, Math.min(1, progress));

      let step = Math.floor(clamped * 4);
      if (step > 3) step = 3;

      setActiveStep(step);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = idx => {
    setActiveStep(idx);

    if (window.innerWidth >= 1024 && containerRef.current) {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const containerTop = rect.top + scrollTop;
      const totalScrollable = rect.height - window.innerHeight;

      const targetScroll = containerTop + (idx / 3) * totalScrollable;

      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  const activeData = steps[activeStep];

  return (
    <section className='relative w-full py-20 px-4 sm:px-6 md:px-8 bg-[#FFFFFF] overflow-visible'>
      <div className='max-w-6xl mx-auto'>
        {/* Top Header Line with Sparks and Button */}
        <div className='w-full flex items-center justify-between gap-4 mb-12'>
          {/* Left Icon (decorative) */}
          <div className='w-14 h-14 rounded-xl bg-white shadow flex items-center justify-center shrink-0 border border-[#0000001C]'>
            <Image src='/images/Spark.svg' alt='' aria-hidden width={30} height={30} />
          </div>

          {/* Connector */}
          <div
            aria-hidden
            className='flex-1 h-[2px] bg-[linear-gradient(to_right,#1F1F1F_30%,rgba(0,0,0,0)_0%)] bg-[length:6px_2px] bg-repeat-x'
          />

          {/* CTA */}
          <Link
            href='/contact'
            className='px-8 py-3 rounded-full border font-medium hover:bg-purple-50 transition shrink-0 flex items-center gap-2'
            style={{ borderColor: '#6F2B8B', color: '#6F2B8B' }}
          >
            Talk to Our Experts
            <FiArrowRight className='w-4 h-4' aria-hidden />
          </Link>
        </div>

        {/* Headings Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-12 items-start'>
          <div>
            <h2
              className='text-3xl sm:text-4xl md:text-[32px] font-medium tracking-tight leading-tight pb-1'
              style={{
                backgroundImage: 'linear-gradient(90deg, #6F2B8B 0%, #ED7200 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              <span className='block mb-2'>From idea to production</span>
              <span className='block text-[#6F2B8B]' style={{ WebkitTextFillColor: '#6F2B8B' }}>
                in four steps
              </span>
            </h2>
          </div>
          <div className='md:pt-2'>
            <p className='text-[#525252] text-sm sm:text-base md:text-[16px] font-medium leading-relaxed max-w-xl'>
              Transforming ideas into production ready AI systems through discovery, design,
              implementation, and continuous scaling.
            </p>
          </div>
        </div>

        {/* Interactive Steps Grid Layout - Sticky Scroll track applies ONLY here */}
        <div ref={containerRef} className='relative w-full lg:h-[200vh] mt-12 overflow-visible'>
          <div className='lg:sticky lg:top-[120px] lg:h-[calc(100vh-160px)] flex items-start w-full'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start'>
              {/* Left Column: Sticky Tabs */}
              <div className='lg:col-span-5 flex flex-col gap-4 py-2 w-full'>
                {steps.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleTabClick(idx)}
                      className={`w-full text-left p-6 rounded-2xl relative overflow-hidden transition-all duration-300 border border-[#ECEAE6]/60 flex items-center gap-4 ${
                        isActive
                          ? 'shadow-sm text-gray-800 font-semibold'
                          : 'bg-transparent hover:bg-gray-50/50 text-gray-500 font-medium'
                      }`}
                      style={{
                        background: isActive
                          ? 'linear-gradient(0deg, rgba(245, 240, 250, 0.38), rgba(245, 240, 250, 0.38)), linear-gradient(258.87deg, rgba(229, 170, 102, 0.126) -3.67%, rgba(255, 165, 129, 0.126) -3.67%, rgba(221, 161, 108, 0.126) 22.35%, rgba(230, 242, 246, 0.126) 51.33%, rgba(202, 185, 246, 0.126) 82.6%, rgba(112, 48, 177, 0.126) 105.33%)'
                          : 'transparent',
                      }}
                    >
                      {/* Linear Gradient Left Border Line for Active Tab */}
                      {isActive && (
                        <div
                          className='absolute left-0 top-0 bottom-0 w-[4px]'
                          style={{
                            background: 'linear-gradient(180deg, #6F2B8B 0%, #ED7200 100%)',
                          }}
                        />
                      )}

                      <span className={`text-sm sm:text-base leading-relaxed max-w-[90%]`}>
                        {step.tabTitle}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Single Dynamic Card */}
              <div className='lg:col-span-7 w-full'>
                <div
                  className='rounded-[32px] p-8 sm:p-10 shadow-sm border border-[#EBE8E0]/40 flex flex-col justify-between transition-all duration-300 min-h-[480px]'
                  style={{
                    background: 'linear-gradient(180deg, #F5F0FE 0%, #FFFFFF 100%)',
                  }}
                >
                  <div>
                    {/* Card Title */}
                    <h3 className='text-2xl sm:text-3xl font-bold tracking-tight mb-2 flex items-center gap-2.5'>
                      <span className='text-[#404040]'>{activeData.num}</span>
                      <span
                        style={{
                          backgroundImage: 'linear-gradient(90deg, #6F2B8B 0%, #ED7200 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {activeData.title}
                      </span>
                    </h3>

                    {/* Subtitle / Tab title */}
                    <h4 className='text-md sm:text-lg font-bold text-gray-800 mb-4'>
                      {activeData.tabTitle}
                    </h4>

                    {/* Description */}
                    <p className='text-[#737373] text-sm sm:text-[14px] leading-relaxed mb-6 font-medium font-sans'>
                      {activeData.desc}
                    </p>

                    {/* Line above points */}
                    <div className='h-[1.5px] w-full bg-[#F9EAE1] mb-6' />

                    {/* Points with unique SVGs (svg1 to svg4) */}
                    <div className='flex flex-col gap-4 mb-6'>
                      {activeData.points.map((point, pIdx) => (
                        <div key={pIdx} className='flex items-start gap-4'>
                          <div className='w-6 h-6 flex-shrink-0 relative mt-0.5'>
                            <img
                              src={`/images/partners/claude/svg${pIdx + 1}.svg`}
                              alt=''
                              className='w-full h-full object-contain'
                            />
                          </div>
                          <span className='text-sm sm:text-base text-gray-700 font-medium leading-normal'>
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Card Area */}
                  <div className='mt-4 p-5 rounded-2xl bg-[#F7F2F9] border border-[#ECEAE6]/30'>
                    <p className='text-xs sm:text-sm text-gray-600 font-medium font-sans leading-relaxed'>
                      {activeData.bottomText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliver;

'use client';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

const AgenticAI = () => {
  const cards = [
    {
      icon: '/images/HomePage/eye.svg',
      title: 'Observe',
      subtitle:
        'Real time data monitoring and ingestion from multiple sources for continuous insights and faster responses.',
    },
    {
      icon: '/images/HomePage/reason.svg',
      title: 'Reason',
      subtitle:
        'Advanced AI reasoning using LLMs and custom logic engines to understand context and drive smarter decisions.',
    },
    {
      icon: '/images/HomePage/plan.svg',
      title: 'Plan & Collaborate',
      subtitle:
        'Multi agent coordination and collaborative task execution to plan actions and manage complex workflows efficiently.',
    },
    {
      icon: '/images/HomePage/execute.svg',
      title: 'Execute',
      subtitle:
        'Direct system integration with automated task completion to minimize manual effort and accelerate operations.',
    },
  ];

  return (
    <section className='relative w-full py-16 md:py-24 overflow-hidden bg-white'>
      {/* Background Circle - Left Side */}
      <div className='absolute left-0 top-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] -translate-x-1/3 pointer-events-none opacity-100'>
        <Image src='/images/HomePage/circle_big.png' alt='' fill className='object-contain' />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header with Spark Icon and CTA Button */}
        <div className='flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 lg:mb-20'>
          {/* Spark Icon */}
          <div className='flex-shrink-0'>
            <div className='w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center'>
              <Image src='/images/Spark.svg' alt='' aria-hidden width={32} height={32} />
            </div>
          </div>

          {/* Dashed Line */}
          <div className='hidden sm:block flex-1 -mx-2 h-[2px] bg-[linear-gradient(to_right,#D4D4D4_50%,rgba(0,0,0,0)_0%)] bg-[length:12px_2px] bg-repeat-x' />

          {/* CTA Button */}
          <button
            className='px-6 py-3 rounded-full border-2 font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 bg-white'
            style={{ borderColor: '#6F2B8B', color: '#6F2B8B' }}
          >
            Talk to Our Experts
            <FiArrowRight className='w-5 h-5' />
          </button>
        </div>

        {/* Title + Description Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 lg:mb-20'>
          {/* Left: Title */}
          <div>
            <h2 className='text-[40px] font-medium text-[#404040] leading-tight text-center lg:text-left'>
              What does
              <br className='hidden lg:block' /> GWC actually solve?
            </h2>
          </div>

          {/* Right: Description */}
          <div className='flex items-center'>
            <p className='text-[#525252] text-[15px] leading-relaxed text-center lg:text-left'>
              GWC streamlines and automates complex data management, ensuring transparency,
              compliance, and smarter, faster decision making across the organization.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
          {cards.map((card, index) => (
            <div
              key={index}
              className='rounded-3xl p-[2px] hover:shadow-xl transition-shadow duration-300 w-full min-h-[350px] flex'
              style={{
                background:
                  index % 2 === 0
                    ? 'linear-gradient(135deg, #FAE0FA 0%, #FFF7EB 100%)'
                    : 'linear-gradient(135deg, #FFF7EB 0%, #FAE0FA 100%)',
              }}
            >
              <div className='bg-white rounded-[22px] h-full w-full p-6 lg:p-8 flex flex-col items-start text-left'>
                {/* Icon Container */}
                <div className='w-16 h-16 rounded-full flex items-center justify-center mb-8 border border-gray-100 shadow-xl'>
                  <Image
                    src={card.icon}
                    alt=''
                    aria-hidden
                    width={32}
                    height={32}
                    className='object-contain'
                    style={{
                      filter:
                        'brightness(0) saturate(100%) invert(18%) sepia(51%) saturate(2878%) hue-rotate(266deg) brightness(91%) contrast(95%)',
                    }}
                  />
                </div>

                {/* Content */}
                <div className='flex-1 flex flex-col'>
                  <h3 className='text-xl font-semibold text-[#404040] mb-4'>{card.title}</h3>
                  <p
                    className='mt-auto w-full text-[15px] text-[#525252] leading-relaxed text-justify'
                    style={{ textAlignLast: 'left' }}
                  >
                    {card.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgenticAI;

'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const BuiltAIAgents = () => {
  const cards = [
    {
      icon: '/images/Search.svg',
      title: 'Discovery & Assessment',
      subtitle:
        'We begin by understanding your business goals and data landscape, identifying the highest-value opportunities for intelligent automation.',
    },
    {
      icon: '/images/Reason.svg',
      title: 'Design & Development',
      subtitle:
        'We select the ideal logic, models, and workflows to shape agent behavior, conversation flows, and trigger mechanisms tailored to your use case.',
    },
    {
      icon: '/images/deploy.svg',
      title: 'Deployment & Integration',
      subtitle:
        'We integrate the agent directly into your environment, whether it’s a dashboard, dataset, workflow, or API-driven system, ensuring a seamless experience.',
    },
    {
      icon: '/images/Refresh.svg',
      title: 'Optimization & Evolution',
      subtitle:
        'After deployment, we monitor performance, collect feedback, and continually refine the solution so it grows with your business.',
    },
  ];

  return (
    <section
      className='w-full px-4 py-16 md:py-20 lg:py-24'
      style={{
        backgroundColor: '#f3edff',
      }}
    >
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Spark + Button Row - Hidden on mobile */}
        <div className='hidden md:flex relative items-center justify-between gap-6 mb-12 lg:mb-16'>
          <div className='z-10'>
            <div
              className='flex items-center justify-center rounded-2xl shadow-md'
              style={{ backgroundColor: '#ffffff', width: '52px', height: '52px' }}
            >
              <Image src='/images/Spark.svg' alt='Spark' width={28} height={28} />
            </div>
          </div>

          <div className='hidden sm:flex border-t-2 border-dashed border-[#1F1F1F] absolute left-[60px] right-[260px] top-1/2 transform -translate-y-1/2 opacity-20' />

          <div className='z-10'>
            {/* Enhanced hover for button only */}
            <Link
              href='/contact'
              className='group flex items-center gap-3 font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg justify-center border-2 border-[#8c49bf] rounded-[30px] hover:bg-[#8c49bf] hover:text-white'
              style={{
                color: '#8c49bf',
                backgroundColor: 'transparent',
                width: '250px',
                height: '48px',
                fontSize: '16px',
              }}
            >
              Talk to our experts
              <FiArrowRight className='text-xl transition-transform duration-300 group-hover:translate-x-1' />
            </Link>
          </div>
        </div>

        {/* Title + Description – unchanged */}
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 mb-16 lg:mb-20'>
          <div className='text-center lg:text-left'>
            <h1 className='leading-tight text-2xl md:text-3xl lg:text-[32px] font-medium text-[#1f1f1f]'>
              How We Develop <br className='hidden md:block' />
              Purpose-Built AI Agents
            </h1>
          </div>

          <div className='flex justify-center lg:justify-end'>
            <p
              className='max-w-xl text-center lg:text-left font-medium leading-relaxed'
              style={{
                color: '#737373',
                fontSize: '14px',
                lineHeight: '1.6',
                fontWeight: '500',
              }}
            >
              We follow a streamlined, value-driven process to build agents that solve real business
              problems with precision and scalability.
            </p>
          </div>
        </div>

        {/* Cards – only hover effects added, layout 100% identical */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full px-0 md:px-6 lg:px-10'>
          {cards.map((card, index) => (
            <div
              key={index}
              className='group text-center shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-3 flex flex-col items-center justify-center w-full p-6 md:p-9 rounded-3xl min-h-auto md:min-h-[275px] border-2 border-transparent bg-origin-border bg-clip-border'
              style={{
                backgroundImage: `
                  linear-gradient(#ffffff, #ffffff),
                  linear-gradient(135deg, #C4A3E5 0%, #E5E5E5 100%)
                `,
                backgroundClip: 'padding-box, border-box',
                backgroundPosition: '0 0, 100% 100%',
                transition:
                  'background-position 0.5s ease, transform 0.4s ease, box-shadow 0.4s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundPosition = '0 0, 0 0';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundPosition = '0 0, 100% 100%';
              }}
            >
              {/* Subtle inner glow */}
              <div className='absolute inset-0 bg-gradient-to-br from-[#8c49bf12] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl' />

              <div
                className='mb-4 flex items-center justify-center shadow-md rounded-full transition-transform duration-300 group-hover:scale-110 w-[72px] h-[72px]'
                style={{
                  background: 'linear-gradient(135deg, #7030B1 0%, #B56DD3 100%)',
                }}
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={36}
                  height={36}
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>

              <h3 className='font-semibold mb-4 mt-5 leading-tight transition-colors duration-300 group-hover:text-[#8c49bf] text-[#404040] text-lg font-semibold'>
                {card.title}
              </h3>

              <p className='leading-relaxed text-center transition-colors duration-300 group-hover:text-[#333333] text-[#525252] text-sm font-normal px-2 md:px-6'>
                {card.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuiltAIAgents;

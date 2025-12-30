'use client';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

const PlatformFeatures = () => {
  const cards = [
    {
      icon: '/images/Code.svg',
      title: 'Low-code interface for agent creation',
      subtitle: 'Build advanced AI agents without coding using our intuitive visual builder.',
    },
    {
      icon: '/images/Database.svg',
      title: 'Seamless integration with DOMO datasets',
      subtitle:
        'Connect directly to your existing data infrastructure with zero configuration hassle',
    },
    {
      icon: '/images/Execution.svg',
      title: 'Trigger-based execution system',
      subtitle: 'Launch agents based on events, schedules, API calls, or real-time data changes',
    },
    {
      icon: '/images/Decision.svg',
      title: 'Conditional logic & decision trees',
      subtitle: 'Create complex workflows with branching logic and multi-step decision processes',
    },
    {
      icon: '/images/Security.svg',
      title: 'Approval workflows & audit trails',
      subtitle: 'Maintain control with human oversight, governance, and complete traceability',
    },
    {
      icon: '/images/Monitor.svg',
      title: 'Real-time monitoring dashboard',
      subtitle: 'Track performance, monitor health, and ensure compliance across all your agents',
    },
  ];

  return (
    <section
      className='w-full mt-[-150px] sm:mt-[-250px] lg:mt-[-300px]'
      style={{
        background:
          'linear-gradient(135deg, #7030B14D 0%, #CAB9F64D 25%, #E6F2F64D 50%, #DDA16C4D 65%, #FFA5814D 80%, #E5AA664D 100%), #F9EAE1',
        padding: '300px 20px 100px 20px',
      }}
    >
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header with Spark & CTA */}
        <div className='relative flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 lg:mb-16'>
          <div className='z-10'>
            <div
              className='flex items-center justify-center rounded-2xl shadow-md'
              style={{ backgroundColor: '#ffffff', width: '66px', height: '66px' }}
            >
              <Image src='/images/Spark.svg' alt='Spark' width={36} height={36} />
            </div>
          </div>

          <div className='hidden sm:flex border-t-2 border-dashed border-[#1F1F1F] absolute left-[100px] right-[300px] top-1/2 transform -translate-y-1/2 opacity-20' />

          <div className='z-10'>
            <button
              className='group flex items-center gap-3 font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg justify-center border-2 border-[#8c49bf] rounded-full px-8 py-3 text-[#8c49bf] hover:bg-[#8c49bf] hover:text-white'
              style={{ width: '250px', height: '48px', fontSize: '16px' }}
            >
              Talk to our experts
              <FiArrowRight className='text-xl transition-transform duration-300 group-hover:translate-x-1' />
            </button>
          </div>
        </div>

        {/* Title & Description */}
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 mb-16 lg:mb-20 items-start'>
          <div className='text-center lg:text-left'>
            <h1
              className='leading-tight'
              style={{
                fontSize: '40px',
                fontWeight: 500,
                color: '#1f1f1f',
              }}
            >
              Core Platform Features
            </h1>
          </div>

          <div className='flex justify-center lg:justify-end'>
            <p
              className='max-w-xl text-center lg:text-right font-medium leading-relaxed'
              style={{
                color: '#737373',
                fontSize: '14px',
                lineHeight: '1.6',
                fontWeight: 500,
              }}
            >
              Everything you need to build, deploy, and scale AI agents.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full justify-items-center'>
          {cards.map((card, index) => (
            <div
              key={index}
              className='group relative text-center bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-3 flex flex-col items-center justify-start overflow-hidden w-full max-w-[375px] min-h-[274px]'
              style={{
                padding: '36px 24px',
              }}
            >
              {/* Subtle background glow on hover */}
              <div className='absolute inset-0 bg-gradient-to-br from-[#8c49bf22] to-[#FFA58122] opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

              <div
                className='relative mb-4 flex items-center justify-center shadow-md bg-[#fafafa] rounded-xl transition-transform duration-300 group-hover:scale-110'
                style={{
                  width: '72px',
                  height: '72px',
                  padding: '13.41px 12.8px 12.79px 12.8px',
                }}
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={36}
                  height={36}
                  style={{
                    filter:
                      'invert(48%) sepia(85%) saturate(1234%) hue-rotate(350deg) brightness(90%) contrast(90%)',
                  }}
                />
              </div>

              <h3
                className='relative font-semibold mb-2 mt-4 leading-tight transition-colors duration-300 group-hover:text-[#8c49bf]'
                style={{
                  color: '#D97706',
                  fontSize: '16px',
                  fontWeight: 600,
                  paddingLeft: '50px',
                  paddingRight: '50px',
                }}
              >
                {card.title}
              </h3>

              <p
                className='relative leading-relaxed text-center transition-colors duration-300 group-hover:text-[#333333]'
                style={{
                  color: '#525252',
                  fontSize: '14px',
                  fontWeight: 400,
                }}
              >
                {card.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;

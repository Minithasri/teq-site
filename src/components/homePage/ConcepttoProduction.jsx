import React from 'react';

const ConcepttoProduction = () => {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Strategy',
      text: 'We analyze your workflows, data landscape, and business goals to identify where AI agents will deliver the highest ROI',
      img: 'image1.png',
    },
    {
      num: '02',
      title: 'Architecture & Design',
      text: "Our team designs the agent's cognitive architecture—selecting the right models, tools, memory systems, and safety guardrails",
      img: 'image2.png',
    },
    {
      num: '03',
      title: 'Build & Deploy',
      text: 'We develop, test, and deploy your agent into production with robust monitoring, fallbacks, and scalable infrastructure',
      img: 'image3.png',
    },
    {
      num: '04',
      title: 'Optimize & Scale',
      text: 'Continuous improvement through performance analytics, user feedback loops, and iterative fine-tuning to maximize impact.',
      img: 'image4.png',
    },
  ];

  return (
    <section className='py-10 md:py-16 px-4 sm:px-6 lg:px-8 w-full'>
      <div className='max-w-[1400px] mx-auto'>
        <div className='bg-white rounded-[32px] py-12 md:py-16 px-6 md:px-10 shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_60px_rgba(0,0,0,0.12)] transition-shadow duration-500 border border-gray-100 relative overflow-hidden'>
          {/* Header */}
          <div className='text-center mb-14 relative z-10'>
            <h2 className='text-3xl md:text-[40px] font-bold text-gray-900 mb-4 tracking-tight'>
              From Concept to{' '}
              <span className='bg-gradient-to-b from-[#7030B1] to-[#B56DD3] bg-clip-text text-transparent inline-block'>
                Production
              </span>
            </h2>
            <p className='text-base md:text-[18px] text-gray-500 max-w-4xl mx-auto font-medium'>
              Our proven four-phase process ensures your AI agents are built right and deployed
              fast.
            </p>
          </div>

          {/* Timeline Section */}
          <div className='relative w-full max-w-6xl mx-auto mt-8'>
            {/* Connecting Line (Desktop Only) */}
            <div className='hidden md:block absolute top-[45px] left-[12%] right-[12%] h-[1px] bg-gray-200 z-0'></div>

            {/* Steps Grid */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10'>
              {steps.map((step, index) => (
                <div key={index} className='flex flex-col items-center'>
                  {/* Icon Box */}
                  <div className='relative w-[90px] h-[90px] mb-6 bg-white rounded-[24px] border border-gray-50 shadow-[0_12px_40px_rgba(0,0,0,0.08)] flex items-center justify-center transition-transform hover:-translate-y-2 duration-300'>
                    <img
                      src={`/images/${step.img}`}
                      alt={step.title}
                      className='w-[40px] h-[40px] object-contain'
                    />

                    {/* Number Badge */}
                    <div className='absolute -top-2 -right-2 w-[30px] h-[30px] rounded-full bg-gradient-to-b from-[#7030B1] to-[#B56DD3] text-white flex items-center justify-center text-xs font-bold shadow-[0_4px_12px_rgba(139,92,246,0.4)] ring-[3px] ring-white'>
                      {step.num}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className='text-center px-2'>
                    <h3 className='text-[18px] font-bold text-gray-900 mb-2'>{step.title}</h3>
                    <p className='text-[14px] text-gray-500 leading-relaxed font-medium'>
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConcepttoProduction;

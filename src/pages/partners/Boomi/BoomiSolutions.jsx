'use client';

import Image from 'next/image';
import { useState } from 'react';

const solutions = [
  {
    id: 1,
    title: 'Healthcare and Life Sciences',
    description:
      "Unite your diverse ecosystem of applications and systems with Boomi's intuitive integration capabilities. Design and deploy integrations effortlessly with Boomi's drag and drop interface.",
    image: '/images/partners/boomi/section_img_1.png',
  },
  {
    id: 2,
    title: 'Manufacturing',
    description:
      'Streamline production lines and supply chains by integrating OT and IT systems. Boomi ensures real-time data flow for better decision-making and efficiency.',
    image: '/images/partners/boomi/section_img_2.png',
  },
  {
    id: 3,
    title: 'Financial Services',
    description:
      'Securely connect legacy banking systems with modern fintech applications. Boomi enables secure data exchange and compliance with financial regulations.',
    image: '/images/partners/boomi/section_img_3.png',
  },
  {
    id: 4,
    title: 'Retail',
    description:
      'Deliver seamless omnichannel experiences by connecting e-commerce platforms, POS systems, and inventory management for real-time visibility.',
    image: '/images/partners/boomi/section2_img2.png',
  },
  {
    id: 5,
    title: 'Public Sector',
    description:
      'Modernize government services by integrating disparate agencies and systems, improving citizen engagement and operational transparency.',
    image: '/images/partners/boomi/section2_img3.png',
  },
  {
    id: 6,
    title: 'Education',
    description:
      'Enhance the student experience by integrating SIS, LMS, and other campus systems, creating a unified digital campus environment.',
    image: '/images/partners/boomi/section2_img4.png',
  },
];

const BoomiSolutions = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      className='w-full py-20'
      style={{
        background: 'linear-gradient(180deg, #EBD8F3 0%, rgba(255, 255, 255, 0) 100%)',
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Title */}
        <h2 className='text-center font-bold text-[#2D1C3C] mb-12 text-[32px] md:text-[40px]'>
          Boomi Solutions with GWC
        </h2>

        {/* Tabs */}
        <div className='flex flex-wrap justify-center gap-4 mb-16'>
          {solutions.map((solution, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 border ${
                  isActive
                    ? 'text-white border-transparent shadow-md'
                    : 'border-[#EBD4F4] hover:bg-purple-50'
                }`}
                style={{
                  background: isActive
                    ? 'linear-gradient(270deg, #7030B1 0%, #B56DD3 100%)'
                    : 'white',
                }}
              >
                <span
                  style={
                    !isActive
                      ? {
                          background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }
                      : {}
                  }
                >
                  {solution.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Card */}
        <div className='bg-white rounded-[32px] p-4 shadow-xl max-w-6xl mx-auto'>
          <div className='flex flex-col lg:flex-row gap-8 items-center bg-white rounded-[32px] overflow-hidden'>
            {/* Left Image */}
            <div className='w-full lg:w-1/2'>
              <div className='relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden'>
                <Image
                  src={solutions[activeTab].image}
                  alt={solutions[activeTab].title}
                  fill
                  className='object-cover'
                />
              </div>
            </div>

            {/* Right Content */}
            <div className='w-full lg:w-1/2 p-4 lg:p-8 flex flex-col justify-center items-start'>
              {/* Heading Badge */}
              <div className='inline-flex items-center px-4 py-2 rounded-xl border border-[#9156AA] bg-white mb-6 shadow-sm'>
                <span
                  className='text-[24px] font-bold'
                  style={{
                    background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {solutions[activeTab].id}. {solutions[activeTab].title}
                </span>
              </div>

              {/* Description */}
              <p className='text-[#515151] text-[16px] leading-relaxed'>
                {solutions[activeTab].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoomiSolutions;

'use client';

import Image from 'next/image';
import { useState } from 'react';

const platforms = [
  {
    title: 'Integration',
    icon: '/images/partners/boomi/icon_1_orange.svg',
    image: '/images/partners/boomi/section3_img1.png',
    description:
      "Unite your diverse ecosystem of applications and systems with Boomi's intuitive integration capabilities. Design and deploy integrations effortlessly with Boomi's drag and drop interface.",
  },
  {
    title: 'API Management',
    icon: '/images/partners/boomi/icon_2.svg',
    image: '/images/partners/boomi/section3_img2.png',
    description:
      'Create, manage, and secure APIs to unlock data and application functionality. Boomi’s API Management facilitates seamless connectivity between internal and external systems.',
  },
  {
    title: 'Master Data Hub',
    icon: '/images/partners/boomi/icon_3.svg',
    image: '/images/partners/boomi/section3_img3.png',
    description:
      'Ensure data consistency and accuracy across your organization with Master Data Hub. Boomi synchronizes and cleanses data to provide a single source of truth.',
  },
  {
    title: 'B2B/EDI Management',
    icon: '/images/partners/boomi/icon_4.svg',
    image: '/images/partners/boomi/section3_img4.png',
    description:
      'Simplify partnership interactions with robust B2B and EDI management capabilities. Automate partner workflows and ensure compliance with trading standards.',
  },
];

const Platforms = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      className='w-full py-20 lg:py-24 px-4 overflow-hidden'
      style={{
        background:
          'linear-gradient(259deg, rgba(229, 170, 102, 0.30) -13.56%, rgba(255, 165, 129, 0.30) -13.56%, rgba(221, 161, 108, 0.30) 18.23%, rgba(230, 242, 246, 0.30) 53.64%, rgba(202, 185, 246, 0.30) 91.85%, rgba(112, 48, 177, 0.30) 119.62%), #F9EAE1',
      }}
    >
      <div className='max-w-7xl mx-auto'>
        {/* Header Title */}
        <h2 className='text-3xl md:text-4xl font-bold text-center  mb-12'>
          The GWC Platform Services Advantage
        </h2>

        {/* Tabs Container */}
        <div className='flex justify-center mb-16'>
          <div className='inline-flex flex-wrap md:flex-nowrap items-center bg-[#E5CFBE]/40 rounded-full p-1.5 gap-2 backdrop-blur-sm'>
            {platforms.map((platform, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive ? 'text-white shadow-lg' : 'text-[#BF540A] hover:bg-white/30'
                  }`}
                  style={{
                    background: isActive
                      ? 'linear-gradient(180deg, #F97316 0%, #43145E 100%)'
                      : 'transparent',
                  }}
                >
                  <Image
                    src={platform.icon}
                    alt=''
                    width={20}
                    height={20}
                    className={`w-5 h-5 ${isActive ? 'brightness-0 invert' : ''}`}
                  />
                  {platform.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Card */}
        <div className='w-full max-w-[1160px] mx-auto bg-white rounded-[32px] p-4 lg:p-6 shadow-xl flex flex-col lg:flex-row gap-8 items-center lg:h-[420px]'>
          {/* Left Content */}
          <div className='w-full lg:w-[48%] h-full flex flex-col items-start justify-center rounded-2xl p-8 lg:p-10 bg-[#FCFCFC] border border-gray-50 shadow-[0px_4px_20px_rgba(0,0,0,0.02)]'>
            {/* Icon Box */}
            <div className='w-14 h-14 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-6'>
              <Image
                src={platforms[activeTab].icon}
                alt={platforms[activeTab].title}
                width={28}
                height={28}
              />
            </div>

            {/* Title Tag */}
            <div className='bg-white border border-gray-100 rounded-lg py-2 px-6 mb-6 shadow-sm w-full rounded-xl '>
              <span className='text-[#F97316] font-bold text-base'>
                {platforms[activeTab].title}
              </span>
            </div>

            {/* Description */}
            <p className='text-[#70707B] leading-relaxed text-[16px]'>
              {platforms[activeTab].description}
            </p>
          </div>

          {/* Right Image */}
          <div className='w-full lg:w-[52%] h-full flex justify-center items-center p-4'>
            <div className='relative w-full h-full'>
              <Image
                key={activeTab} // Fade animation on change
                src={platforms[activeTab].image}
                alt={platforms[activeTab].title}
                fill
                className='object-contain animate-in fade-in duration-500 p-2'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
